import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { projectId } = await params

  const milestones = await prisma.milestone.findMany({
    where: { projectId },
    orderBy: { order: 'asc' },
    include: {
      progressUpdates: {
        orderBy: { createdAt: 'desc' },
        take: 1,
        select: {
          id: true,
          processingStatus: true,
          reviewStatus: true,
          aiCompletionEstimate: true,
          createdAt: true,
        },
      },
    },
  })

  return NextResponse.json({ milestones })
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { projectId } = await params
  const { title, description, order, budgetNgN, invoiceUrl, dueDate } = await req.json()

  const project = await prisma.project.findUnique({
    where: { id: projectId },
    select: { ownerId: true },
  })

  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 })
  }

  if (project.ownerId !== session.user.id) {
    return NextResponse.json({ error: 'Only the project owner can add milestones' }, { status: 403 })
  }

  const lastMilestone = await prisma.milestone.findFirst({
    where: { projectId },
    orderBy: { order: 'desc' },
    select: { order: true },
  })

  const nextOrder = typeof order === 'number' ? order : (lastMilestone?.order ?? -1) + 1

  try {
    const milestone = await prisma.milestone.create({
      data: { 
        projectId, 
        title, 
        description, 
        order: nextOrder,
        budgetNgN: budgetNgN !== null && budgetNgN !== undefined && budgetNgN !== '' 
          ? parseInt(String(budgetNgN), 10) 
          : null,
        invoiceUrl: invoiceUrl || null,
        dueDate: dueDate ? new Date(dueDate) : null
      },
    })
    return NextResponse.json({ milestone }, { status: 201 })
  } catch (error: any) {
    console.error('API Milestone Creation Error:', {
      message: error.message,
      stack: error.stack,
      data: { projectId, title, budgetNgN, invoiceUrl }
    })
    return NextResponse.json(
      { error: 'Failed to create milestone: ' + error.message },
      { status: 500 }
    )
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { projectId } = await params

  const project = await prisma.project.findUnique({
    where: { id: projectId },
    select: { ownerId: true },
  })

  if (!project || project.ownerId !== session.user.id) {
    return NextResponse.json({ error: 'Only the project owner can reorder milestones' }, { status: 403 })
  }

  const { milestoneIds } = await req.json()

  if (!Array.isArray(milestoneIds)) {
    return NextResponse.json({ error: 'milestoneIds array required' }, { status: 400 })
  }

  const updates = milestoneIds.map((id: string, index: number) =>
    prisma.milestone.update({ where: { id }, data: { order: index } })
  )

  await prisma.$transaction(updates)

  return NextResponse.json({ ok: true })
}
