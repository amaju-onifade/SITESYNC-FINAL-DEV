import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'

const FLUTTERWAVE_CONFIGURED =
  process.env.FLUTTERWAVE_SECRET_KEY &&
  process.env.FLUTTERWAVE_SECRET_KEY !== 'your-flutterwave-secret-key'

export async function POST(
  _req: Request,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { projectId } = await params

  const project = await prisma.project.findUnique({ where: { id: projectId } })
  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 })
  }

  if (project.status !== 'CREATED') {
    return NextResponse.json({ error: 'Project already active' }, { status: 400 })
  }

  if (!FLUTTERWAVE_CONFIGURED) {
    await prisma.project.update({
      where: { id: projectId },
      data: { status: 'ACTIVE' },
    })
    return NextResponse.json({ activated: true })
  }

  const user = await prisma.user.findUnique({ where: { id: session.user.id } })
  if (!user?.email) {
    return NextResponse.json({ error: 'User email not found' }, { status: 400 })
  }

  const { createPaymentLink } = require('@/lib/flutterwave')

  try {
    const paymentLink = await createPaymentLink({
      amount: 50000,
      email: user.email,
      txRef: `activate_${projectId}_${Date.now()}`,
      redirectUrl: `${process.env.NEXTAUTH_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')}/projects/${projectId}?payment=true`,
    })

    return NextResponse.json({ paymentLink })
  } catch (error) {
    console.error('Payment link error:', error)
    return NextResponse.json({ error: 'Failed to create payment link' }, { status: 500 })
  }
}
