import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { verifyWebhookSignature, verifyTransaction } from '@/lib/flutterwave'

export async function POST(req: Request) {
  try {
    const signature = req.headers.get('verif-hash') || ''
    const secretHash = process.env.FLUTTERWAVE_WEBHOOK_SECRET || ''

    if (!verifyWebhookSignature(signature, secretHash)) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    const body = await req.json()

    if (body.event === 'charge.completed' && body.data.status === 'successful') {
      const txRef = body.data.tx_ref

      if (txRef?.startsWith('activate_')) {
        const projectId = txRef.replace('activate_', '').split('_')[0]

        const project = await prisma.project.findUnique({ where: { id: projectId } })
        if (project && project.status === 'CREATED') {
          await prisma.project.update({
            where: { id: projectId },
            data: { status: 'ACTIVE' },
          })
        }
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 })
  }
}
