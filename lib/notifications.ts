import { prisma } from '@/lib/prisma'

export async function createNotification(params: {
  userId: string
  type: string
  title: string
  message: string
  link?: string
}) {
  return prisma.notification.create({ data: params })
}

export async function notifyProjectParticipants(projectId: string, notification: {
  type: string
  title: string
  message: string
  link?: string
}) {
  const project = await prisma.project.findUnique({
    where: { id: projectId },
    select: { ownerId: true, supervisorId: true },
  })
  if (!project) return

  const userIds = [project.ownerId, project.supervisorId].filter(Boolean) as string[]
  for (const userId of userIds) {
    await createNotification({ ...notification, userId })
  }
}
