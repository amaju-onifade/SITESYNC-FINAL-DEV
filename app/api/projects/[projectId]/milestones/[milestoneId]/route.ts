import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ projectId: string; milestoneId: string }> }
) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { projectId, milestoneId } = await params

  const milestone = await prisma.milestone.findFirst({
    where: { id: milestoneId, projectId },
    include: {
      progressUpdates: {
        orderBy: { createdAt: 'desc' },
        include: { supervisor: { select: { name: true } } },
      },
      paymentRequests: {
        include: { paymentRecords: true },
      },
      project: {
        select: {
          benchmarks: { where: { milestoneId } },
        },
      },
    },
  })

  if (!milestone) {
    return NextResponse.json({ error: 'Milestone not found' }, { status: 404 })
  }

  return NextResponse.json({ milestone })
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ projectId: string; milestoneId: string }> }
) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { projectId, milestoneId } = await params

  const project = await prisma.project.findUnique({
    where: { id: projectId },
    select: { ownerId: true },
  })

  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 })
  }

  if (project.ownerId !== session.user.id) {
    return NextResponse.json({ error: 'Only the project owner can delete milestones' }, { status: 403 })
  }

  const milestone = await prisma.milestone.findFirst({
    where: { id: milestoneId, projectId },
  })

  if (!milestone) {
    return NextResponse.json({ error: 'Milestone not found' }, { status: 404 })
  }

  try {
    await prisma.milestone.delete({ where: { id: milestoneId } })
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error('Milestone delete error:', error)
    return NextResponse.json({ error: 'Failed to delete milestone' }, { status: 500 })
  }
}
