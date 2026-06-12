# SKILL: Flutterwave Integration

## Purpose
Handle all payment-related logic using Flutterwave:
- Project activation payment
- Webhook verification
- Transaction validation

---

## Location

`/lib/payments/flutterwave.ts`

---

## Environment Variables

| Variable | Purpose |
|---|---|
| `FLW_SECRET_KEY` | API auth for transaction verification |
| `FLW_PUBLIC_KEY` | Frontend payment initialization |
| `FLW_WEBHOOK_SECRET` | HMAC secret for webhook signature verification |

---

## Webhook Signature Verification

Flutterwave sends a `verif-hash` header. Compute HMAC SHA256 of the raw request body and compare.

```ts
import { NextRequest, NextResponse } from "next/server"
import crypto from "crypto"

export async function verifyWebhookSignature(
  req: NextRequest,
  body: string
): Promise<boolean> {
  const signature = req.headers.get("verif-hash")
  if (!signature) return false

  const expected = crypto
    .createHmac("sha256", process.env.FLW_WEBHOOK_SECRET!)
    .update(body)
    .digest("hex")

  return signature === expected
}
```

---

## Transaction Verification

After receiving a webhook, verify the transaction status with Flutterwave's API.

```ts
interface FlwTransaction {
  id: number
  tx_ref: string
  status: "successful" | "failed" | "pending"
  amount: number
  currency: string
  customer: { email: string }
}

export async function verifyTransaction(
  transactionId: number
): Promise<FlwTransaction | null> {
  const res = await fetch(
    `https://api.flutterwave.com/v3/transactions/${transactionId}/verify`,
    {
      headers: {
        Authorization: `Bearer ${process.env.FLW_SECRET_KEY}`,
      },
    }
  )
  if (!res.ok) return null

  const data = await res.json()
  return data.data as FlwTransaction
}
```

---

## Payment Initiation (Frontend)

Generate a unique `tx_ref` for idempotency. The frontend calls Flutterwave's inline checkout with:

```
FLW_PUBLIC_KEY
tx_ref: `project_${projectId}_${Date.now()}`
amount: <activation fee>
currency: "NGN"
customer: { email, name }
redirect_url: "/dashboard"
```

The `tx_ref` must be stored in the DB to prevent duplicate processing.

---

## Webhook Handler Pattern

```ts
// /app/api/webhooks/flutterwave/route.ts
import { prisma } from "@/lib/db/prisma"

export async function POST(req: NextRequest) {
  const body = await req.text()

  // 1. Verify signature
  const isValid = await verifyWebhookSignature(req, body)
  if (!isValid) {
    return NextResponse.json({ message: "Invalid signature" }, { status: 401 })
  }

  // 2. Parse event
  const event = JSON.parse(body)

  // 3. Only process successful charges
  if (event.event !== "charge.completed") {
    return NextResponse.json({ message: "Ignored" })
  }

  const tx = event.data

  // 4. Verify with Flutterwave API
  const verified = await verifyTransaction(tx.id)
  if (!verified || verified.status !== "successful") {
    return NextResponse.json({ message: "Verification failed" }, { status: 400 })
  }

  // 5. Idempotency check — skip if tx_ref already processed
  const existing = await prisma.paymentRecord.findUnique({
    where: { txRef: verified.tx_ref },
  })
  if (existing) {
    return NextResponse.json({ message: "Already processed" })
  }

  // 6. Extract projectId from tx_ref
  const projectId = verified.tx_ref.split("_")[1]

  // 7. Activate project + store payment record
  await prisma.$transaction([
    prisma.project.update({
      where: { id: projectId },
      data: { status: "ACTIVE" },
    }),
    prisma.paymentRecord.create({
      data: {
        projectId,
        txRef: verified.tx_ref,
        amountNgN: verified.amount,
        paidAt: new Date(),
      },
    }),
  ])

  return NextResponse.json({ message: "Project activated" })
}
```

---

## Idempotency

- `tx_ref` is the unique key — store it in `PaymentRecord.txRef` with a unique constraint
- Always check if `tx_ref` already exists before processing
- Race condition protection: use `prisma.$transaction` for activation + record creation

---

## Rules

- NEVER trust client-side payment success — always verify via webhook + API
- Always verify webhook signature before processing
- Always verify transaction status with Flutterwave API (don't trust webhook body alone)
- Use `prisma.$transaction` to keep project activation + payment record atomic
- Log all webhook events (event type, tx_ref, status) for debugging — never log secrets
