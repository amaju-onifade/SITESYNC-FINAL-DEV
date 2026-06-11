import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { createNotification } from '@/lib/notifications'

export async function POST(
  req: Request,
  { params }: { params: Promise<{ projectId: string; milestoneId: string }> }
) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { projectId, milestoneId } = await params
  const { action } = await req.json()

  const validActions = ['APPROVED', 'REVISION_REQUESTED', 'IN_PROGRESS']
  if (!validActions.includes(action)) {
    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  }

  const project = await prisma.project.findUnique({ where: { id: projectId } })
  if (!project || project.ownerId !== session.user.id) {
    return NextResponse.json({ error: 'Only the project owner can perform this action' }, { status: 403 })
  }

  if (action === 'IN_PROGRESS') {
    await prisma.milestone.update({
      where: { id: milestoneId },
      data: { status: 'IN_PROGRESS' },
    })

    if (project.supervisorId) {
      createNotification({
        userId: project.supervisorId,
        type: 'update_requested',
        title: 'Update Requested',
        message: 'Owner requested a progress update for a milestone',
        link: `/projects/${projectId}/milestones/${milestoneId}`,
      }).catch(() => {})
    }

    return NextResponse.json({ ok: true })
  }

  const latestUpdate = await prisma.progressUpdate.findFirst({
    where: { milestoneId },
    orderBy: { createdAt: 'desc' },
  })

  if (!latestUpdate) {
    return NextResponse.json({ error: 'No progress update found for this milestone' }, { status: 400 })
  }

  const [progressUpdate, milestone] = await prisma.$transaction([
    prisma.progressUpdate.update({
      where: { id: latestUpdate.id },
      data: { reviewStatus: action as any },
    }),
    prisma.milestone.update({
      where: { id: milestoneId },
      data: {
        status: action === 'APPROVED' ? 'APPROVED' : 'REVISION_REQUESTED',
      },
    }),
  ])

  if (action === 'APPROVED' && project.supervisorId) {
    createNotification({
      userId: project.supervisorId,
      type: 'milestone_approved',
      title: 'Milestone Approved',
      message: `"${milestone.title}" was approved by the owner`,
      link: `/projects/${projectId}/milestones/${milestoneId}`,
    }).catch(() => {})
  }

  if (action === 'REVISION_REQUESTED' && project.supervisorId) {
    createNotification({
      userId: project.supervisorId,
      type: 'revision_requested',
      title: 'Revision Requested',
      message: `Owner requested revisions for "${milestone.title}"`,
      link: `/projects/${projectId}/milestones/${milestoneId}`,
    }).catch(() => {})
  }

  return NextResponse.json({ progressUpdate, milestone })
}
