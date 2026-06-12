'use client'

import { useState, useCallback, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { NavBar } from '@/components/NavBar'
import { Camera } from '@/components/Camera'
import { GhostOverlay } from '@/components/GhostOverlay'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'
import { queueCapture } from '@/lib/indexedDb'
import styles from './styles.module.css'

const MAX_DIMENSION = 1080

async function downscaleImage(blob: Blob): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    const url = URL.createObjectURL(blob)
    img.onload = () => {
      URL.revokeObjectURL(url)
      const { width, height } = img
      const longest = Math.max(width, height)
      if (longest <= MAX_DIMENSION) {
        resolve(blob)
        return
      }
      const scale = MAX_DIMENSION / longest
      const canvas = document.createElement('canvas')
      canvas.width = Math.round(width * scale)
      canvas.height = Math.round(height * scale)
      const ctx = canvas.getContext('2d')
      if (!ctx) { resolve(blob); return }
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
      canvas.toBlob(
        (result) => result ? resolve(result) : reject(new Error('Canvas toBlob failed')),
        'image/jpeg',
        0.85
      )
    }
    img.onerror = () => { URL.revokeObjectURL(url); resolve(blob) }
    img.src = url
  })
}

type Benchmark = { id: string; title: string; mediaUrl: string }

export default function CapturePage() {
  const { projectId, milestoneId } = useParams<{ projectId: string; milestoneId: string }>()
  const router = useRouter()
  const [capturedBlobs, setCapturedBlobs] = useState<Blob[]>([])
  const [capturedUrls, setCapturedUrls] = useState<string[]>([])
  const [uploading, setUploading] = useState(false)
  const [gpsLat, setGpsLat] = useState<string>('')
  const [gpsLng, setGpsLng] = useState<string>('')
  const [gpsManual, setGpsManual] = useState(false)
  const [status, setStatus] = useState<string | null>(null)
  const [benchmarks, setBenchmarks] = useState<Benchmark[]>([])
  const [selectedBenchmark, setSelectedBenchmark] = useState<string | null>(null)
  const [supervisorNote, setSupervisorNote] = useState('')

  useEffect(() => {
    fetch(`/api/projects/${projectId}/benchmarks`)
      .then((res) => res.json())
      .then((data) => setBenchmarks(data.benchmarks || []))
      .catch(() => {})
  }, [projectId])

  const handleCapture = useCallback((blob: Blob) => {
    const url = URL.createObjectURL(blob)
    setCapturedBlobs((prev) => [...prev, blob])
    setCapturedUrls((prev) => [...prev, url])
  }, [])

  const captureGps = useCallback(() => {
    if (!navigator.geolocation) {
      setGpsManual(true)
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGpsLat(pos.coords.latitude.toString())
        setGpsLng(pos.coords.longitude.toString())
        setGpsManual(false)
      },
      () => {
        setGpsManual(true)
        setStatus('GPS unavailable. You can enter coordinates manually.')
      },
      { enableHighAccuracy: true, timeout: 10000 }
    )
  }, [])

  const handleSubmit = async () => {
    if (capturedBlobs.length === 0) return
    setUploading(true)
    setStatus('Preparing photos...')

    const metadata = {
      gpsLat: gpsLat ? parseFloat(gpsLat) : null,
      gpsLng: gpsLng ? parseFloat(gpsLng) : null,
      gpsManual,
      deviceTimestamp: new Date().toISOString(),
      note: supervisorNote.trim() || null,
    }

    // Downscale all images to max 1080p before upload
    const scaledBlobs = await Promise.all(capturedBlobs.map(downscaleImage))

    setStatus('Uploading...')
    const formData = new FormData()
    scaledBlobs.forEach((blob, i) => {
      formData.append('media', blob, `capture_${Date.now()}_${i}.jpg`)
    })
    if (metadata.gpsLat) formData.append('gpsLat', metadata.gpsLat.toString())
    if (metadata.gpsLng) formData.append('gpsLng', metadata.gpsLng.toString())
    formData.append('gpsManual', String(metadata.gpsManual))
    formData.append('deviceTimestamp', metadata.deviceTimestamp)
    if (metadata.note) formData.append('note', metadata.note)

    try {
      const res = await fetch(`/api/projects/${projectId}/milestones/${milestoneId}/capture`, {
        method: 'POST',
        body: formData,
      })

      if (!res.ok) {
        if (!navigator.onLine) {
          await queueCapture({
            projectId,
            milestoneId,
            mediaBlob: capturedBlobs[0],
            metadata,
          })
          setStatus('Saved offline. Will upload when connected.')
          setTimeout(() => router.push(`/projects/${projectId}/milestones/${milestoneId}`), 2000)
          return
        }
        throw new Error('Upload failed')
      }

      const data = await res.json()

      fetch('/api/process-media', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ progressUpdateId: data.progressUpdate.id }),
      }).catch(() => {})

      setStatus('Capture uploaded! AI processing started.')
      setTimeout(() => router.push(`/projects/${projectId}/milestones/${milestoneId}`), 1500)
    } catch {
      await queueCapture({
        projectId,
        milestoneId,
        mediaBlob: capturedBlobs[0],
        metadata,
      })
      setStatus('Saved offline. Will upload when connected.')
    }

    setUploading(false)
  }

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>Capture Progress</h1>

        <Camera onCapture={handleCapture} benchmarkUrl={selectedBenchmark || undefined} />

        {capturedBlobs.length > 0 && (
          <>
            <div className={styles.previewList}>
              {capturedBlobs.map((blob, i) => (
                <img
                  key={i}
                  src={capturedUrls[i]}
                  alt={`Capture ${i + 1}`}
                  className={styles.preview}
                />
              ))}
            </div>

            {benchmarks.length > 0 && (
              <Card variant="outlined" padding="md">
                <h3 className={styles.gpsTitle}>Compare with Benchmark</h3>
                <select
                  className={styles.benchmarkSelect}
                  onChange={(e) => setSelectedBenchmark(e.target.value || null)}
                  value={selectedBenchmark || ''}
                >
                  <option value="">No overlay</option>
                  {benchmarks.map((b) => (
                    <option key={b.id} value={b.mediaUrl}>{b.title}</option>
                  ))}
                </select>
                {selectedBenchmark && capturedUrls.length > 0 && (
                  <div className={styles.ghostSection}>
                    <GhostOverlay
                      benchmarkUrl={selectedBenchmark}
                      capturedUrl={capturedUrls[capturedUrls.length - 1]}
                    />
                  </div>
                )}
              </Card>
            )}
          </>
        )}

        <Card variant="outlined" padding="md">
          <h3 className={styles.gpsTitle}>Note (Optional)</h3>
          <textarea
            className={styles.noteInput}
            placeholder="Add a short note about this update..."
            rows={3}
            value={supervisorNote}
            onChange={(e) => setSupervisorNote(e.target.value)}
          />
        </Card>

        <Card variant="outlined" padding="md">
          <h3 className={styles.gpsTitle}>Location</h3>
          <Button variant="ghost" onClick={captureGps}>
            {gpsLat ? 'Re-capture GPS' : 'Capture GPS Coordinates'}
          </Button>

          {gpsManual && (
            <div className={styles.gpsInputs}>
              <Input
                label="Latitude"
                type="number"
                step="any"
                placeholder="e.g. 6.5244"
                value={gpsLat}
                onChange={(e) => setGpsLat(e.target.value)}
                autoFocus
              />
              <Input
                label="Longitude"
                type="number"
                step="any"
                placeholder="e.g. 3.3792"
                value={gpsLng}
                onChange={(e) => setGpsLng(e.target.value)}
              />
            </div>
          )}
        </Card>

        {status && (
          <div className={`${styles.status} ${uploading ? '' : styles.success}`}>
            {status}
          </div>
        )}

        <Button
          fullWidth
          loading={uploading}
          disabled={capturedBlobs.length === 0}
          onClick={handleSubmit}
          size="lg"
        >
          {capturedBlobs.length === 0
            ? 'Capture at least one photo'
            : `Submit ${capturedBlobs.length} Photo${capturedBlobs.length > 1 ? 's' : ''}`}
        </Button>

        <div style={{ textAlign: 'center' }}>
          <Button variant="outline" onClick={() => router.push(`/projects/${projectId}`)}>
            Back to Project
          </Button>
        </div>
      </main>
    </div>
  )
}
