'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Card } from '@/components/ui/Card'
import { StatusBadge } from '@/components/ui/StatusBadge'

export default function MilestonesPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const router = useRouter()
  const { data: session } = useSession()
  const [milestones, setMilestones] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/projects/${projectId}/milestones`)
      .then((res) => res.json())
      .then((data) => {
        setMilestones(data.milestones || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [projectId])

  if (loading) return <p>Loading...</p>

  return (
    <>
      <h1 style={{ fontSize: 'var(--typography-headline-small-font-size)', fontWeight: 700, marginBottom: 20 }}>
        Milestones
      </h1>
      {milestones.length === 0 ? (
        <Card padding="md">
          <p style={{ textAlign: 'center', color: 'var(--color-on-surface-variant)' }}>No milestones defined yet.</p>
        </Card>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {milestones.map((ms) => (
            <Card
              key={ms.id}
              variant="outlined"
              padding="md"
              onClick={() => router.push(`/projects/${projectId}/milestones/${ms.id}`)}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <p style={{ fontWeight: 500 }}>{ms.title}</p>
                  {ms.description && (
                    <p style={{ fontSize: 'var(--typography-body-small-font-size)', color: 'var(--color-on-surface-variant)' }}>
                      {ms.description}
                    </p>
                  )}
                </div>
                <StatusBadge status={ms.status} />
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  )
}
