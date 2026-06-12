import { PrismaClient } from '@prisma/client'
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')
  const passwordHash = await bcrypt.hash('password123', 12)

  const owner = await prisma.user.upsert({
    where: { email: 'chioma.okafor@example.com' },
    update: {},
    create: {
      name: 'Chioma Okafor',
      email: 'chioma.okafor@example.com',
      passwordHash,
      role: 'OWNER',
    },
  })

  const supervisor = await prisma.user.upsert({
    where: { email: 'emeka.nwosu@example.com' },
    update: {},
    create: {
      name: 'Emeka Nwosu',
      email: 'emeka.nwosu@example.com',
      passwordHash,
      role: 'SUPERVISOR',
    },
  })

  const project = await prisma.project.upsert({
    where: { id: 'seed-project-001' },
    update: {},
    create: {
      id: 'seed-project-001',
      name: 'Lekki Phase 1 Residential Development',
      address: 'Plot 42, Admiralty Way, Lekki Phase 1, Lagos',
      status: 'ACTIVE',
      geofence: {
        center: { lat: 6.4435, lng: 3.4351 },
        radiusM: 500,
        boundary: [
          { lat: 6.4460, lng: 3.4320 },
          { lat: 6.4460, lng: 3.4380 },
          { lat: 6.4410, lng: 3.4380 },
          { lat: 6.4410, lng: 3.4320 },
        ],
      },
      ownerId: owner.id,
      supervisorId: supervisor.id,
    },
  })

  const milestones = [
    { id: 'seed-milestone-001', title: 'Foundation Excavation', description: 'Excavate to 1.5m depth across the full footprint', order: 0, status: 'PAID' as const },
    { id: 'seed-milestone-002', title: 'Concrete Foundation', description: 'Pour reinforced concrete foundation', order: 1, status: 'APPROVED' as const },
    { id: 'seed-milestone-003', title: 'Ground Floor Framing', description: 'Erect ground floor columns and beams', order: 2, status: 'IN_PROGRESS' as const },
    { id: 'seed-milestone-004', title: 'Roofing', description: 'Install roof trusses and roofing sheets', order: 3, status: 'PENDING' as const },
  ]

  for (const m of milestones) {
    await prisma.milestone.upsert({
      where: { id: m.id },
      update: {},
      create: {
        id: m.id,
        projectId: project.id,
        title: m.title,
        description: m.description,
        order: m.order,
        status: m.status,
      },
    })
  }

  await prisma.benchmark.createMany({
    skipDuplicates: true,
    data: [
      {
        id: 'seed-benchmark-001',
        projectId: project.id,
        milestoneId: 'seed-milestone-001',
        title: 'Excavation Depth Benchmark',
        mediaUrl: '/uploads/benchmarks/excavation-depth-reference.jpg',
        mediaType: 'image',
      },
      {
        id: 'seed-benchmark-002',
        projectId: project.id,
        milestoneId: 'seed-milestone-002',
        title: 'Rebar Layout Reference',
        mediaUrl: '/uploads/benchmarks/rebar-layout-reference.pdf',
        mediaType: 'pdf',
      },
    ],
  })

  await prisma.progressUpdate.createMany({
    skipDuplicates: true,
    data: [
      {
        id: 'seed-update-success',
        projectId: project.id,
        milestoneId: 'seed-milestone-002',
        supervisorId: supervisor.id,
        rawMediaUrls: ['/uploads/seed/foundation-pour-1.jpg', '/uploads/seed/foundation-pour-2.jpg'],
        aiDescription: 'Foundation concrete pour completed. Forms are in place, concrete appears well-compacted. Curing process initiated.',
        aiMarkupData: {
          elements: [
            { type: 'foundation', status: 'complete', confidence: 0.92 },
            { type: 'framing', status: 'missing', confidence: 0.98 },
          ],
          inconsistencies: ['Minor honeycombing observed on southeast corner — recommend patching before next pour'],
        },
        aiCompletionEstimate: 85,
        processingStatus: 'COMPLETED',
        reviewStatus: 'APPROVED',
        gpsLat: 6.4438,
        gpsLng: 3.4355,
        gpsManual: false,
        deviceTimestamp: new Date('2026-06-01T09:30:00Z'),
      },
      {
        id: 'seed-update-ai-failed',
        projectId: project.id,
        milestoneId: 'seed-milestone-003',
        supervisorId: supervisor.id,
        rawMediaUrls: ['/uploads/seed/framing-progress-1.jpg'],
        aiDescription: null,
        aiMarkupData: null,
        aiCompletionEstimate: null,
        processingStatus: 'FAILED',
        reviewStatus: 'PENDING_REVIEW',
        failureReason: 'Gemini API returned 503 Service Unavailable. Retry limit reached.',
        retryCount: 3,
        gpsLat: 6.4441,
        gpsLng: 3.4358,
        gpsManual: false,
        deviceTimestamp: new Date('2026-06-05T14:00:00Z'),
      },
      {
        id: 'seed-update-offline-queued',
        projectId: project.id,
        milestoneId: 'seed-milestone-003',
        supervisorId: supervisor.id,
        rawMediaUrls: ['/uploads/seed/columns-erected-1.jpg', '/uploads/seed/columns-erected-2.jpg', '/uploads/seed/columns-erected-3.jpg'],
        aiDescription: null,
        aiMarkupData: null,
        aiCompletionEstimate: null,
        processingStatus: 'PENDING',
        reviewStatus: 'PENDING_REVIEW',
        gpsLat: 6.4443,
        gpsLng: 3.4356,
        gpsManual: true,
        deviceTimestamp: new Date('2026-06-06T11:15:00Z'),
      },
      {
        id: 'seed-update-paid',
        projectId: project.id,
        milestoneId: 'seed-milestone-001',
        supervisorId: supervisor.id,
        rawMediaUrls: ['/uploads/seed/excavation-complete-1.jpg'],
        aiDescription: 'Excavation complete. Depth verified at 1.5m across all sections. Soil removal in progress.',
        aiMarkupData: {
          elements: [
            { type: 'foundation', status: 'complete', confidence: 0.97 },
          ],
          inconsistencies: [],
        },
        aiCompletionEstimate: 100,
        processingStatus: 'COMPLETED',
        reviewStatus: 'APPROVED',
        gpsLat: 6.4436,
        gpsLng: 3.4352,
        gpsManual: false,
        deviceTimestamp: new Date('2026-05-28T08:00:00Z'),
      },
    ],
  })

  await prisma.paymentRequest.createMany({
    skipDuplicates: true,
    data: [
      {
        id: 'seed-payment-request-001',
        milestoneId: 'seed-milestone-001',
        amountNgN: 2_500_000,
        status: 'COMPLETED',
      },
      {
        id: 'seed-payment-request-002',
        milestoneId: 'seed-milestone-002',
        amountNgN: 4_000_000,
        status: 'PENDING',
      },
    ],
  })

  await prisma.paymentRecord.createMany({
    skipDuplicates: true,
    data: [
      {
        projectId: project.id,
        paymentRequestId: 'seed-payment-request-001',
        paidAmountNgN: 2_500_000,
        receiptUrl: '/uploads/seed/receipt-payment-1.pdf',
        paidAt: new Date('2026-06-02T16:00:00Z'),
      },
    ],
  })

  const projectData = await prisma.project.findUnique({
    where: { id: project.id },
    include: {
      milestones: { orderBy: { order: 'asc' } },
      benchmarks: true,
      progressUpdates: { orderBy: { createdAt: 'desc' } },
      paymentRecords: true,
    },
  })

  console.log('Seed complete.')
  console.log('Owner:', owner.email)
  console.log('Supervisor:', supervisor.email)
  console.log('Project:', projectData?.name, `(${projectData?.milestones.length} milestones, ${projectData?.progressUpdates.length} updates)`)
}

main()
  .catch((e) => {
    console.error('Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
