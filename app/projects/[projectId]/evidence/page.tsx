'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export default function EvidencePage() {
  const { projectId } = useParams<{ projectId: string }>()
  const router = useRouter()
  const [benchmarks, setBenchmarks] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/projects/${projectId}/benchmarks`)
      .then((res) => res.json())
      .then((data) => {
        setBenchmarks(data.benchmarks || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [projectId])

  if (loading) return <p>Loading...</p>

  const referencePhotos = benchmarks.filter((b) => b.category === 'reference_photo')
  const projectDrawings = benchmarks.filter((b) => b.category === 'project_drawing')

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <h1 style={{ fontSize: 'var(--typography-headline-small-font-size)', fontWeight: 700 }}>Evidence</h1>
        <Button variant="outline" size="sm" onClick={() => router.push(`/projects/${projectId}/benchmarks`)}>
          Upload
        </Button>
      </div>

      {benchmarks.length === 0 ? (
        <Card padding="md">
          <p style={{ textAlign: 'center', color: 'var(--color-on-surface-variant)' }}>
            No evidence uploaded yet. Upload benchmark references or site photos.
          </p>
        </Card>
      ) : (
        <>
          {referencePhotos.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              <h2 style={{ fontSize: 'var(--typography-title-medium-font-size)', fontWeight: 600, marginBottom: 12 }}>
                Reference Photos ({referencePhotos.length})
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 8 }}>
                {referencePhotos.map((b) => (
                  <img key={b.id} src={b.mediaUrl} alt={b.title} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: 8 }} />
                ))}
              </div>
            </div>
          )}
          {projectDrawings.length > 0 && (
            <div>
              <h2 style={{ fontSize: 'var(--typography-title-medium-font-size)', fontWeight: 600, marginBottom: 12 }}>
                Project Drawings ({projectDrawings.length})
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 8 }}>
                {projectDrawings.map((b) => (
                  <img key={b.id} src={b.mediaUrl} alt={b.title} style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: 8 }} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}
