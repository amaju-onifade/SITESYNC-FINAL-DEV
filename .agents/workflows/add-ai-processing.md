---
description: End-to-end implementation of AI processing for captured media. Chains media upload → Gemini analysis → structured output → DB persistence.
---

# Workflow: Add AI Processing

## Prerequisites
- Media uploaded via `/api/upload-media` → URLs returned
- ProgressUpdate record exists in DB with `processingStatus: PENDING`
- Gemini Flash API key configured (`GEMINI_API_KEY`)
- AI processor skill available at `/lib/ai/processMedia.ts`

---

## Step 1: Create ProgressUpdate Record

When media is uploaded, create a ProgressUpdate linked to the project.

```ts
const update = await prisma.progressUpdate.create({
  data: {
    projectId,
    rawMediaUrls: urls,
    gpsLat,
    gpsLng,
    processingStatus: "PENDING",
    reviewStatus: "PENDING_REVIEW",
    retryCount: 0,
  },
})
```

Return the `update.id` to the client so it can poll for status.

---

## Step 2: Implement /api/process-media

File: `/app/api/process-media/route.ts`

```ts
import { NextRequest, NextResponse } from "next/server"
import { requireAuth, requireRole } from "@/lib/auth/guard"
import { prisma } from "@/lib/db/prisma"
import { processMedia } from "@/lib/ai/processMedia"

export async function POST(req: NextRequest) {
  const { session, error } = await requireAuth()
  if (error) return error

  const roleError = requireRole(session, ["SUPERVISOR"])
  if (roleError) return roleError

  const { updateId } = await req.json()

  // 1. Fetch the update
  const update = await prisma.progressUpdate.findUnique({
    where: { id: updateId },
  })
  if (!update) {
    return NextResponse.json({ success: false, message: "Not found" }, { status: 404 })
  }

  // 2. Set PROCESSING status
  await prisma.progressUpdate.update({
    where: { id: updateId },
    data: { processingStatus: "PROCESSING" },
  })

  // 3. Call Gemini
  try {
    const result = await processMedia(update.rawMediaUrls, {
      projectId: update.projectId,
    })

    // 4. Save output
    await prisma.progressUpdate.update({
      where: { id: updateId },
      data: {
        aiDescription: result.summary,
        aiMarkupData: result.elements ? JSON.parse(JSON.stringify(result)) : null,
        processingStatus: "COMPLETED",
      },
    })

    return NextResponse.json({ success: true, data: result })
  } catch (err) {
    // 5. Handle failure
    const failureReason = (err as Error).message
    await prisma.progressUpdate.update({
      where: { id: updateId },
      data: {
        processingStatus: "FAILED",
        failureReason,
        retryCount: { increment: 1 },
      },
    })

    return NextResponse.json({ success: false, message: failureReason }, { status: 500 })
  }
}
```

---

## Step 3: Implement /lib/ai/processMedia.ts

File: `/lib/ai/processMedia.ts`

```ts
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

interface ProcessResult {
  summary: string
  elements: { type: string; status: string; confidence: number }[] | null
  inconsistencies: string[]
  completionEstimate: number
}

export async function processMedia(
  mediaUrls: string[],
  context: { projectId: string }
): Promise<ProcessResult> {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

  const prompt = `You are a construction auditor analyzing building progress.
Extract the following from the provided media:
- structural elements (foundation, framing, roofing, etc.) with completion status (complete|partial|missing) and confidence score
- any inconsistencies or issues
- overall completion estimate (0-100)

Respond ONLY with JSON in this format:
{
  "summary": "narrative description",
  "elements": [
    { "type": "foundation", "status": "complete", "confidence": 0.95 }
  ],
  "inconsistencies": ["description of any issues"],
  "completionEstimate": 65
}`

  // Fetch images and prepare content parts
  const imageParts = await Promise.all(
    mediaUrls.map(async (url) => {
      const res = await fetch(url)
      const buffer = await res.arrayBuffer()
      return {
        inlineData: {
          data: Buffer.from(buffer).toString("base64"),
          mimeType: "image/jpeg",
        },
      }
    })
  )

  const result = await model.generateContent([prompt, ...imageParts])
  const text = result.response.text()

  // Try to parse JSON
  try {
    const json = JSON.parse(text.replace(/```json|```/g, "").trim())
    return {
      summary: json.summary || text,
      elements: json.elements || null,
      inconsistencies: json.inconsistencies || [],
      completionEstimate: json.completionEstimate || 0,
    }
  } catch {
    // Graceful degradation: return text only
    return {
      summary: text,
      elements: null,
      inconsistencies: [],
      completionEstimate: 0,
    }
  }
}
```

---

## Step 4: Handle Timeout & Partial Response

Wrap the Gemini call with a timeout:

```ts
const timeoutPromise = new Promise((_, reject) =>
  setTimeout(() => reject(new Error("Gemini timeout after 20s")), 20000)
)

const result = await Promise.race([
  model.generateContent([prompt, ...imageParts]),
  timeoutPromise,
])
```

If timeout fires:
- Set `processingStatus = FAILED`
- Set `failureReason = "Gemini timeout after 20s"`
- Allow manual retry

If Gemini returns before timeout but JSON parsing fails:
- Store the raw text as `aiDescription`
- Set `processingStatus = COMPLETED` (graceful degradation)
- Set `aiMarkupData = null`

---

## Step 5: Client Polling

After calling `/api/process-media`, poll for status:

```ts
async function pollForResult(updateId: string) {
  while (true) {
    const res = await fetch(`/api/updates/${updateId}`)
    const data = await res.json()
    if (data.processingStatus === "COMPLETED" || data.processingStatus === "FAILED") {
      return data
    }
    await new Promise(r => setTimeout(r, 2000)) // poll every 2s
  }
}
```

---

## State Transitions

```
PENDING → PROCESSING → COMPLETED (json parsed OK)
                      → COMPLETED (json failed — text fallback)
                      → FAILED (timeout or unreachable)
```

On `FAILED`:
- Owner sees "AI report unavailable — manual review required"
- Supervisor can retry via `/api/process-media`
- Each retry increments `retryCount`

---

## Files Created in This Workflow

| File | Purpose |
|---|---|
| `/app/api/process-media/route.ts` | API route to trigger AI processing |
| `/lib/ai/processMedia.ts` | Gemini integration + parsing |
| Prisma: ProgressUpdate record | Created by upload flow, updated here |
