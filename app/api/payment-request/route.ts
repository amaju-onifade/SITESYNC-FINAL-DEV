import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { createNotification } from '@/lib/notifications'

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { milestoneId, amountNgN } = await req.json()

    const milestone = await prisma.milestone.findUnique({
      where: { id: milestoneId },
      include: { project: true },
    })

    if (!milestone) {
      return NextResponse.json({ error: 'Milestone not found' }, { status: 404 })
    }

    if (milestone.status !== 'APPROVED') {
      return NextResponse.json({ error: 'Milestone must be approved before payment request' }, { status: 400 })
    }

    const paymentRequest = await prisma.paymentRequest.create({
      data: { milestoneId, amountNgN },
    })

    createNotification({
      userId: milestone.project.ownerId,
      type: 'payment_requested',
      title: 'Payment Requested',
      message: `Supervisor requested payment for "${milestone.title}"`,
      link: `/projects/${milestone.projectId}/milestones/${milestoneId}`,
    }).catch(() => {})

    return NextResponse.json({ paymentRequest }, { status: 201 })
  } catch (error) {
    console.error('Payment request error:', error)
    return NextResponse.json({ error: 'Failed to create payment request' }, { status: 500 })
  }
}
