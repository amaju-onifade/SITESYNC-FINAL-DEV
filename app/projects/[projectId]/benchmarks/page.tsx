'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { NavBar } from '@/components/NavBar'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { BenchmarkUpload } from '@/components/BenchmarkUpload'
import styles from './styles.module.css'

type Benchmark = {
  id: string
  title: string
  mediaUrl: string
  createdAt: string
}

export default function BenchmarksPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const router = useRouter()
  const [benchmarks, setBenchmarks] = useState<Benchmark[]>([])
  const [loading, setLoading] = useState(true)

  const fetchBenchmarks = async () => {
    const res = await fetch(`/api/projects/${projectId}/benchmarks`)
    const data = await res.json()
    setBenchmarks(data.benchmarks || [])
    setLoading(false)
  }

  useEffect(() => {
    fetchBenchmarks()
  }, [projectId])

  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/projects/${projectId}/benchmarks?id=${id}`, {
      method: 'DELETE',
    })
    if (res.ok) {
      fetchBenchmarks()
    }
  }

  const handleUpload = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('title', file.name)

    const res = await fetch(`/api/projects/${projectId}/benchmarks`, {
      method: 'POST',
      body: formData,
    })

    if (!res.ok) {
      const data = await res.json().catch(() => ({}))
      throw new Error(data.error || 'Upload failed')
    }

    fetchBenchmarks()
  }

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Benchmark References</h1>
        <p className={styles.subtitle}>
          Upload architectural drawings or reference images for AI comparison.
        </p>

        <BenchmarkUpload onUpload={handleUpload} existingUrls={benchmarks.map((b) => b.mediaUrl)} />

        {benchmarks.length > 0 && (
          <div className={styles.list}>
            <h2 className={styles.listTitle}>
              Uploaded Benchmarks ({benchmarks.length})
            </h2>
            {benchmarks.map((b) => (
              <Card key={b.id} variant="outlined" padding="sm">
                <div className={styles.item}>
                  <img src={b.mediaUrl} alt={b.title} className={styles.thumb} />
                  <div className={styles.itemInfo}>
                    <p className={styles.itemTitle}>{b.title}</p>
                    <p className={styles.date}>
                      {new Date(b.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => handleDelete(b.id)}>
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}

        <div style={{ textAlign: 'center' }}>
          <Button onClick={() => router.push(`/projects/${projectId}`)}>
            Back to Project
          </Button>
        </div>
      </main>
    </div>
  )
}
