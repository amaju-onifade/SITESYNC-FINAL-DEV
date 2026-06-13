'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Card } from '@/components/ui/Card'

export default function ProjectReportsPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const router = useRouter()
  const [updates, setUpdates] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        setUpdates(data.project?.progressUpdates || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [projectId])

  if (loading) return <p>Loading...</p>

  return (
    <>
      <h1 style={{ fontSize: 'var(--typography-headline-small-font-size)', fontWeight: 700, marginBottom: 20 }}>
        AI Reports
      </h1>
      {updates.length === 0 ? (
        <Card padding="md">
          <p style={{ textAlign: 'center', color: 'var(--color-on-surface-variant)' }}>
            No AI reports yet. Submit captures to generate reports.
          </p>
        </Card>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {updates.map((update: any) => (
            <Card
              key={update.id}
              variant="outlined"
              padding="sm"
              onClick={() => router.push(`/projects/${projectId}/milestones/${update.milestoneId}`)}
            >
              <p style={{ fontWeight: 500 }}>
                {update.milestone?.title || 'Report'} — {new Date(update.createdAt).toLocaleDateString()}
              </p>
              {update.aiDescription && (
                <p style={{ fontSize: 'var(--typography-body-small-font-size)', color: 'var(--color-on-surface-variant)', marginTop: 4 }}>
                  {update.aiDescription.slice(0, 150)}...
                </p>
              )}
            </Card>
          ))}
        </div>
      )}
    </>
  )
}
