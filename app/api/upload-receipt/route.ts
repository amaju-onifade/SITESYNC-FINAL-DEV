import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { uploadReceipt } from '@/lib/upload'
import { createNotification } from '@/lib/notifications'

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const formData = await req.formData()
    const projectId = formData.get('projectId') as string
    const milestoneId = formData.get('milestoneId') as string
    const paymentRequestId = formData.get('paymentRequestId') as string | null
    const amount = parseFloat(formData.get('amount') as string)
    const file = formData.get('receipt') as File

    if (!projectId || !amount || !file) {
      return NextResponse.json({ error: 'projectId, amount, and receipt file required' }, { status: 400 })
    }

    const project = await prisma.project.findUnique({ where: { id: projectId } })
    if (!project || project.ownerId !== session.user.id) {
      return NextResponse.json({ error: 'Only the project owner can upload receipts' }, { status: 403 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const receiptUrl = await uploadReceipt(buffer, projectId, file.name)

    const paymentRecord = await prisma.$transaction(async (tx) => {
      const record = await tx.paymentRecord.create({
        data: {
          projectId,
          paidAmountNgN: amount,
          receiptUrl,
          ...(paymentRequestId ? { paymentRequestId } : {}),
        },
      })

      if (paymentRequestId) {
        await tx.paymentRequest.update({
          where: { id: paymentRequestId },
          data: { status: 'COMPLETED' },
        })
      }

      if (milestoneId) {
        await tx.milestone.update({
          where: { id: milestoneId },
          data: { status: 'PAID' },
        })
      }

      return record
    })

    const projectInfo = await prisma.project.findUnique({
      where: { id: projectId },
      select: { supervisorId: true },
    })

    if (projectInfo?.supervisorId && milestoneId) {
      const milestoneTitle = await prisma.milestone.findUnique({
        where: { id: milestoneId },
        select: { title: true },
      })
      createNotification({
        userId: projectInfo.supervisorId,
        type: 'milestone_paid',
        title: 'Milestone Completed & Paid',
        message: `Owner confirmed payment for "${milestoneTitle?.title || 'milestone'}"`,
        link: `/projects/${projectId}/milestones/${milestoneId}`,
      }).catch(() => {})
    }

    return NextResponse.json({ paymentRecord }, { status: 201 })
  } catch (error) {
    console.error('Receipt upload error:', error)
    return NextResponse.json({ error: 'Failed to upload receipt' }, { status: 500 })
  }
}
