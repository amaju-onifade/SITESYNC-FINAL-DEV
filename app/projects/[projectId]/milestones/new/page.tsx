'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { NavBar } from '@/components/NavBar'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import styles from './styles.module.css'

const PRESETS = [
  { title: 'Site Clearing & Excavation', description: 'Clearing of construction site, bush clearing, and excavation to required depth' },
  { title: 'Foundation / Concrete Works', description: 'Foundation concrete casting and block work to DPC level' },
  { title: 'Ground Floor — DPC to Lintel', description: 'Block work from DPC to lintel level, including columns' },
  { title: 'Lintel Casting & Decking', description: 'Lintel casting, decking/fencing, and roofing preparation' },
  { title: 'Roofing', description: 'Roof trusses, roofing sheets, gutters, and downpipes' },
  { title: 'Plastering & Tiling', description: 'Internal and external plastering, floor and wall tiling' },
  { title: 'Doors, Windows & Fixtures', description: 'Door frames, windows, kitchen and bathroom fixtures' },
  { title: 'Electrical & Plumbing', description: 'Electrical wiring, conduit, plumbing pipes, and fittings' },
  { title: 'Painting & Finishing', description: 'Interior and exterior painting, POP ceiling, and final finishes' },
  { title: 'Handover / Final Inspection', description: 'Final cleaning, inspection, and project handover' },
]

export default function NewMilestonePage() {
  const { projectId } = useParams<{ projectId: string }>()
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handlePresetSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const preset = PRESETS.find((p) => p.title === e.target.value)
    if (preset) {
      setTitle(preset.title)
      setDescription(preset.description)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch(`/api/projects/${projectId}/milestones`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Failed to create milestone')
        setLoading(false)
        return
      }

      router.push(`/projects/${projectId}`)
    } catch {
      setError('Failed to create milestone')
      setLoading(false)
    }
  }

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>New Milestone</h1>

        <Card padding="lg">
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>Quick Select (Optional)</label>
              <select className={styles.select} onChange={handlePresetSelect} defaultValue="">
                <option value="">-- Choose a preset milestone --</option>
                {PRESETS.map((p) => (
                  <option key={p.title} value={p.title}>{p.title}</option>
                ))}
              </select>
            </div>

            <Input
              label="Milestone Title"
              placeholder="e.g. Foundation"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Input
              label="Description (Optional)"
              placeholder="Describe what this milestone covers"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            {error && <p className={styles.error}>{error}</p>}

            <Button type="submit" fullWidth loading={loading}>
              Create Milestone
            </Button>
          </form>
        </Card>

        <div style={{ textAlign: 'center' }}>
          <Button variant="outline" onClick={() => router.push(`/projects/${projectId}`)}>
            Back to Project
          </Button>
        </div>
      </main>
    </div>
  )
}
