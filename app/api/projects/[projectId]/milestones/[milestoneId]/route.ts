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
