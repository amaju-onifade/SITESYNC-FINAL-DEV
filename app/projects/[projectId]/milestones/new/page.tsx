'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
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
  const [presetIndex, setPresetIndex] = useState<number | null>(null)
  const [budget, setBudget] = useState('')
  const [dueDate, setDueDate] = useState('')
  const [invoiceFile, setInvoiceFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handlePresetSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const idx = e.target.value ? parseInt(e.target.value, 10) : -1
    if (idx >= 0) {
      const preset = PRESETS[idx]
      setTitle(preset.title)
      setDescription(preset.description)
      setPresetIndex(idx)
    } else {
      setPresetIndex(null)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      let invoiceUrl = ''
      if (invoiceFile) {
        const fData = new FormData()
        fData.append('projectId', projectId)
        fData.append('invoice', invoiceFile)
        const uploadRes = await fetch('/api/upload-invoice', {
          method: 'POST',
          body: fData
        })
        if (!uploadRes.ok) {
          const data = await uploadRes.json()
          setError(data.error || 'Failed to upload invoice')
          setLoading(false)
          return
        }
        const data = await uploadRes.json()
        invoiceUrl = data.url
      }

      const res = await fetch(`/api/projects/${projectId}/milestones`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description,
          budgetNgN: budget || null,
          dueDate: dueDate || null,
          invoiceUrl: invoiceUrl || null,
          ...(presetIndex !== null ? { order: presetIndex } : {}),
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Failed to create milestone')
        setLoading(false)
        return
      }

      router.push(`/projects/${projectId}`)
    } catch (err: any) {
      console.error('Milestone creation error:', err)
      setError(err?.message || 'Failed to create milestone')
      setLoading(false)
    }
  }

  return (
    <>
        <h1 className={styles.title}>New Milestone</h1>

        <Card padding="lg">
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>Quick Select (Optional)</label>
              <select className={styles.select} onChange={handlePresetSelect} defaultValue="-1">
                <option value="-1">-- Choose a preset milestone --</option>
                {PRESETS.map((p, i) => (
                  <option key={p.title} value={i}>{p.title}</option>
                ))}
              </select>
            </div>

            <Input
              label="Milestone Title"
              placeholder="e.g. Foundation"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value)
                if (presetIndex !== null && e.target.value !== PRESETS[presetIndex]?.title) {
                  setPresetIndex(null)
                }
              }}
              required
              autoFocus
            />
            <Input
              label="Description (Optional)"
              placeholder="Describe what this milestone covers"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <div className={styles.row}>
              <Input
                label="Budget (Optional, ₦)"
                type="number"
                placeholder="e.g. 500000"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
              <Input
                label="Due Date (Optional)"
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Invoice / Quote (Optional)</label>
              <input
                type="file"
                className={styles.fileInput}
                onChange={(e) => setInvoiceFile(e.target.files?.[0] || null)}
                accept=".pdf,image/*"
              />
              <p className={styles.hint}>PDF or Image of the official quote/invoice</p>
            </div>

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
    </>
  )
}
