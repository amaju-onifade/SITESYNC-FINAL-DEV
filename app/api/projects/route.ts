import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'

export async function GET() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const projects = await prisma.project.findMany({
    where: {
      OR: [
        { ownerId: session.user.id },
        { supervisorId: session.user.id },
      ],
    },
    include: {
      owner: { select: { name: true, email: true } },
      supervisor: { select: { name: true, email: true } },
      milestones: {
        orderBy: { order: 'asc' },
        select: { id: true, title: true, status: true, updatedAt: true, order: true, progressUpdates: { take: 1, select: { createdAt: true } } },
      },
      paymentRecords: { select: { paidAmountNgN: true, paidAt: true } },
      _count: { select: { progressUpdates: true } },
    },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json({ projects })
}

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { name, address, geofence, supervisorEmail, milestones } = await req.json()

    const supervisor = supervisorEmail
      ? await prisma.user.findUnique({ where: { email: supervisorEmail }, select: { id: true, role: true } })
      : null

    if (supervisor && supervisor.role !== 'SUPERVISOR') {
      return NextResponse.json(
        { error: 'That user is registered as an Owner, not a Supervisor. They need a Supervisor account.' },
        { status: 400 }
      )
    }

    // Verify owner exists (handles stale sessions after DB reset)
    const owner = await prisma.user.findUnique({
      where: { id: session.user.id }
    })

    if (!owner) {
      return NextResponse.json({ error: 'Session invalid. Please login again.' }, { status: 401 })
    }

    const project = await prisma.project.create({
      data: {
        name,
        address,
        geofence: geofence || null,
        ownerId: owner.id,
        supervisorId: supervisor?.id || null,
        milestones: {
          create: (milestones || []).map((m: any) => ({
            title: m.title,
            order: m.order,
          })),
        },
      },
    })

    return NextResponse.json({ project }, { status: 201 })
  } catch (error) {
    console.error('Project creation error:', error)
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 })
  }
}
