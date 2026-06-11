import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { processMedia } from '@/lib/ai/processMedia'

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { progressUpdateId } = await req.json()

    const baseUpdate = await prisma.progressUpdate.findUnique({
      where: { id: progressUpdateId },
      select: { milestoneId: true },
    })

    if (!baseUpdate) {
      return NextResponse.json({ error: 'Progress update not found' }, { status: 404 })
    }

    const update = await prisma.progressUpdate.findUnique({
      where: { id: progressUpdateId },
      include: {
        milestone: true,
        project: {
          select: {
            geofence: true,
            benchmarks: { where: { milestoneId: baseUpdate.milestoneId } },
          },
        },
      },
    })

    if (!update) {
      return NextResponse.json({ error: 'Progress update not found' }, { status: 404 })
    }

    await prisma.progressUpdate.update({
      where: { id: progressUpdateId },
      data: { processingStatus: 'PROCESSING' },
    })

    const benchmarkUrls = update.project.benchmarks.map((b) => b.mediaUrl)

    const geofence = update.project.geofence as { center?: { lat: number; lng: number }; radiusM?: number } | null
    const gpsCoordinates = update.gpsLat && update.gpsLng
      ? `${update.gpsLat}, ${update.gpsLng}${update.gpsManual ? ' (manual entry)' : ''}`
      : null

    const geofenceInfo = geofence?.center
      ? `Expected site center: ${geofence.center.lat}, ${geofence.center.lng} (radius: ${geofence.radiusM || 'N/A'}m)`
      : null

    try {
      const result = await processMedia(update.rawMediaUrls, {
        milestoneTitle: update.milestone.title,
        benchmarkUrls,
        gpsCoordinates: gpsCoordinates || undefined,
        geofenceInfo: geofenceInfo || undefined,
      })

      await prisma.progressUpdate.update({
        where: { id: progressUpdateId },
        data: {
          processingStatus: 'COMPLETED',
          aiDescription: result.summary,
          aiMarkupData: {
            elements: result.elements,
            inconsistencies: result.inconsistencies,
          },
          aiCompletionEstimate: result.completionEstimate,
        },
      })

      return NextResponse.json({ result })
    } catch (aiError) {
      const message = aiError instanceof Error ? aiError.message : 'AI processing failed'

      await prisma.progressUpdate.update({
        where: { id: progressUpdateId },
        data: {
          processingStatus: 'FAILED',
          failureReason: message,
          retryCount: { increment: 1 },
        },
      })

      return NextResponse.json({ error: message }, { status: 500 })
    }
  } catch (error) {
    console.error('Process media error:', error)
    return NextResponse.json({ error: 'Processing failed' }, { status: 500 })
  }
}
