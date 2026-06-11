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

  const project = await prisma.project.findUnique({
    where: { id: projectId },
    include: {
      milestones: {
        orderBy: { order: 'asc' },
        include: {
          progressUpdates: { orderBy: { createdAt: 'desc' }, take: 1, select: { createdAt: true } },
        },
      },
      benchmarks: true,
      owner: { select: { id: true, name: true, email: true } },
      supervisor: { select: { id: true, name: true, email: true } },
      progressUpdates: {
        orderBy: { createdAt: 'desc' },
        take: 10,
        include: { milestone: { select: { title: true } } },
      },
      paymentRecords: { orderBy: { paidAt: 'desc' } },
    },
  })

  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 })
  }

  // Allow access to owner and assigned supervisor
  const isOwner = project.ownerId === session.user.id
  const isSupervisor = project.supervisorId === session.user.id
  if (!isOwner && !isSupervisor) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  return NextResponse.json({ project })
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

  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 })
  }

  if (project.ownerId !== session.user.id) {
    return NextResponse.json({ error: 'Only the project owner can update this project' }, { status: 403 })
  }

  const body = await req.json()
  const updateData: Record<string, unknown> = {}

  // Supervisor assignment by email
  if ('supervisorEmail' in body) {
    if (body.supervisorEmail === null || body.supervisorEmail === '') {
      updateData.supervisorId = null
    } else {
      const supervisor = await prisma.user.findUnique({
        where: { email: body.supervisorEmail },
        select: { id: true, role: true },
      })

      if (!supervisor) {
        return NextResponse.json(
          { error: 'No user found with that email. Ask your supervisor to register on SiteSync first.' },
          { status: 404 }
        )
      }

      if (supervisor.role !== 'SUPERVISOR') {
        return NextResponse.json(
          { error: 'That user is registered as an Owner, not a Supervisor. They need a Supervisor account.' },
          { status: 400 }
        )
      }

      updateData.supervisorId = supervisor.id
    }
  }

  // Geofence update
  if ('geofence' in body) {
    updateData.geofence = body.geofence
  }

  // Name / address updates
  if (body.name) updateData.name = body.name
  if (body.address) updateData.address = body.address

  if (Object.keys(updateData).length === 0) {
    return NextResponse.json({ error: 'No valid fields to update' }, { status: 400 })
  }

  const updated = await prisma.project.update({
    where: { id: projectId },
    data: updateData,
    include: {
      supervisor: { select: { id: true, name: true, email: true } },
    },
  })

  return NextResponse.json({ project: updated })
}
