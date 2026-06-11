import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { auth } from '@/lib/auth'
import { uploadBenchmark } from '@/lib/upload'
import fs from 'fs/promises'
import path from 'path'

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { projectId } = await params

  const benchmarks = await prisma.benchmark.findMany({
    where: { projectId },
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json({ benchmarks })
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

  try {
    const formData = await req.formData()
    const file = formData.get('file') as File
    const title = formData.get('title') as string || 'Benchmark'
    const milestoneId = formData.get('milestoneId') as string || null

    if (!file) {
      return NextResponse.json({ error: 'File required' }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const mediaUrl = await uploadBenchmark(buffer, projectId, file.name)

    const benchmark = await prisma.benchmark.create({
      data: {
        projectId,
        milestoneId,
        title,
        mediaUrl,
        mediaType: file.type.startsWith('image/') ? 'image' : 'pdf',
      },
    })

    return NextResponse.json({ benchmark }, { status: 201 })
  } catch (error) {
    console.error('Benchmark upload error:', error)
    return NextResponse.json({ error: 'Failed to upload benchmark' }, { status: 500 })
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ projectId: string }> }
) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { projectId } = await params
  const { searchParams } = new URL(_req.url)
  const benchmarkId = searchParams.get('id')

  if (!benchmarkId) {
    return NextResponse.json({ error: 'Benchmark ID required' }, { status: 400 })
  }

  const project = await prisma.project.findUnique({
    where: { id: projectId },
    select: { ownerId: true },
  })

  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 })
  }

  if (project.ownerId !== session.user.id) {
    return NextResponse.json({ error: 'Only the project owner can delete benchmarks' }, { status: 403 })
  }

  const benchmark = await prisma.benchmark.findUnique({
    where: { id: benchmarkId },
  })

  if (!benchmark || benchmark.projectId !== projectId) {
    return NextResponse.json({ error: 'Benchmark not found' }, { status: 404 })
  }

  try {
    const localPath = path.join(process.cwd(), 'public', benchmark.mediaUrl)
    await fs.unlink(localPath).catch(() => {})
  } catch {}

  await prisma.benchmark.delete({ where: { id: benchmarkId } })

  return NextResponse.json({ deleted: true })
}
