import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { uploadMedia } from '@/lib/upload'
import { notifyProjectParticipants } from '@/lib/notifications'

function isPointInPolygon(
  lat: number,
  lng: number,
  polygon: Array<{ lat: number; lng: number }>
): boolean {
  let inside = false
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i].lng, yi = polygon[i].lat
    const xj = polygon[j].lng, yj = polygon[j].lat
    if (yi > lat !== yj > lat && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) {
      inside = !inside
    }
  }
  return inside
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ projectId: string; milestoneId: string }> }
) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { projectId, milestoneId } = await params

  try {
    const formData = await req.formData()
    const files = formData.getAll('media') as File[]
    const gpsLat = formData.get('gpsLat') ? parseFloat(formData.get('gpsLat') as string) : null
    const gpsLng = formData.get('gpsLng') ? parseFloat(formData.get('gpsLng') as string) : null
    const gpsManual = formData.get('gpsManual') === 'true'
    const deviceTimestamp = formData.get('deviceTimestamp') as string || null

    if (files.length === 0) {
      return NextResponse.json({ error: 'At least one media file required' }, { status: 400 })
    }

    const project = await prisma.project.findUnique({
      where: { id: projectId },
      select: { geofence: true },
    })

    if (project?.geofence && gpsLat !== null && gpsLng !== null) {
      const boundary = (project.geofence as any).boundary as Array<{ lat: number; lng: number }>
      if (boundary && boundary.length > 2) {
        if (!isPointInPolygon(gpsLat, gpsLng, boundary)) {
          return NextResponse.json({
            error: 'Capture location is outside the project geofence boundary.',
          }, { status: 403 })
        }
      }
    }

    const mediaUrls: string[] = []

    for (const file of files) {
      const buffer = Buffer.from(await file.arrayBuffer())
      const url = await uploadMedia(buffer, projectId, file.name)
      mediaUrls.push(url)
    }

    const progressUpdate = await prisma.progressUpdate.create({
      data: {
        projectId,
        milestoneId,
        supervisorId: session.user.id,
        rawMediaUrls: mediaUrls,
        processingStatus: 'PENDING',
        reviewStatus: 'PENDING_REVIEW',
        gpsLat,
        gpsLng,
        gpsManual,
        deviceTimestamp: deviceTimestamp ? new Date(deviceTimestamp) : null,
      },
    })

    const updatedMilestone = await prisma.milestone.update({
      where: { id: milestoneId },
      data: { status: 'AWAITING_REVIEW' },
      select: { title: true },
    })

    notifyProjectParticipants(projectId, {
      type: 'capture_submitted',
      title: 'New Progress Update',
      message: `Supervisor submitted a capture for "${updatedMilestone.title}"`,
      link: `/projects/${projectId}/milestones/${milestoneId}`,
    }).catch(() => {})

    return NextResponse.json({ progressUpdate }, { status: 201 })
  } catch (error) {
    console.error('Capture upload error:', error)
    return NextResponse.json({ error: 'Failed to upload capture' }, { status: 500 })
  }
}
