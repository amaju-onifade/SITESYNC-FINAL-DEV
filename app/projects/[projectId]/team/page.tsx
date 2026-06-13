'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Card } from '@/components/ui/Card'

export default function TeamPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const { data: session } = useSession()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data.project)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [projectId])

  if (loading) return <p>Loading...</p>

  return (
    <>
      <h1 style={{ fontSize: 'var(--typography-headline-small-font-size)', fontWeight: 700, marginBottom: 20 }}>
        Team
      </h1>
      <Card variant="outlined" padding="md">
        <p style={{ fontWeight: 500, marginBottom: 4 }}>Project Owner</p>
        <p style={{ fontSize: 'var(--typography-body-medium-font-size)', color: 'var(--color-on-surface-variant)' }}>
          {project?.owner?.name || project?.owner?.email}
        </p>
      </Card>
      {project?.supervisor && (
        <Card variant="outlined" padding="md">
          <p style={{ fontWeight: 500, marginBottom: 4 }}>Site Supervisor</p>
          <p style={{ fontSize: 'var(--typography-body-medium-font-size)', color: 'var(--color-on-surface-variant)' }}>
            {project.supervisor.name || project.supervisor.email}
          </p>
        </Card>
      )}
    </>
  )
}
