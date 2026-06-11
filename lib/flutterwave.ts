const FLUTTERWAVE_API = 'https://api.flutterwave.com/v3'

type FlutterwaveConfig = {
  secretKey: string
}

export function getFlutterwaveConfig(): FlutterwaveConfig {
  return {
    secretKey: process.env.FLUTTERWAVE_SECRET_KEY || '',
  }
}

export async function createPaymentLink(params: {
  amount: number
  email: string
  currency?: string
  txRef: string
  redirectUrl: string
}): Promise<string> {
  const { secretKey } = getFlutterwaveConfig()
  const { amount, email, currency = 'NGN', txRef, redirectUrl } = params

  const response = await fetch(`${FLUTTERWAVE_API}/payments`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${secretKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      tx_ref: txRef,
      amount,
      currency,
      redirect_url: redirectUrl,
      customer: { email },
      customizations: {
        title: 'SiteSync - Project Activation',
        description: 'Activate your construction project',
      },
    }),
  })

  const data = await response.json()
  if (!data.status || data.status !== 'success') {
    throw new Error(data.message || 'Failed to create payment link')
  }

  return data.data.link
}

export function verifyWebhookSignature(
  signature: string,
  secretHash: string
): boolean {
  return signature === secretHash
}

export async function verifyTransaction(transactionId: string): Promise<{
  status: string
  amount: number
  currency: string
  customerEmail: string
}> {
  const { secretKey } = getFlutterwaveConfig()

  const response = await fetch(
    `${FLUTTERWAVE_API}/transactions/${transactionId}/verify`,
    {
      headers: { Authorization: `Bearer ${secretKey}` },
    }
  )

  const data = await response.json()
  if (!data.status || data.status !== 'success') {
    throw new Error(data.message || 'Transaction verification failed')
  }

  return {
    status: data.data.status,
    amount: data.data.amount,
    currency: data.data.currency,
    customerEmail: data.data.customer.email,
  }
}
