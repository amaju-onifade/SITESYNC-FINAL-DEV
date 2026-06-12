'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { NavBar } from '@/components/NavBar'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import styles from './styles.module.css'

const MapPicker = dynamic(() => import('@/components/MapPicker').then((m) => m.MapPicker), {
  ssr: false,
})

export default function NewProjectPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [supervisorEmail, setSupervisorEmail] = useState('')
  const [gpsLat, setGpsLat] = useState('')
  const [gpsLng, setGpsLng] = useState('')
  const [gpsRadius, setGpsRadius] = useState('')
  const [loading, setLoading] = useState(false)
  const [geocoding, setGeocoding] = useState(false)
  const [error, setError] = useState('')

  const geocodeAddress = async () => {
    if (!address.trim()) return
    setGeocoding(true)
    setError('')
    try {
      const res = await fetch(`/api/geocode?q=${encodeURIComponent(address)}`)
      const data = await res.json()
      if (!res.ok || data.error) {
        throw new Error(data.error || 'Geocoding failed')
      }
      if (data?.[0]) {
        setGpsLat(data[0].lat)
        setGpsLng(data[0].lon)
      } else {
        setError('Could not find coordinates for that address')
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Could not look up coordinates')
    }
    setGeocoding(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    let geofence = null
    if (gpsLat && gpsLng && gpsRadius) {
      const lat = parseFloat(gpsLat)
      const lng = parseFloat(gpsLng)
      const radiusM = parseFloat(gpsRadius)

      const boundary = Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * 2 * Math.PI
        const dLat = (radiusM / 111320) * Math.cos(angle)
        const dLng = (radiusM / (111320 * Math.cos((lat * Math.PI) / 180))) * Math.sin(angle)
        return { lat: lat + dLat, lng: lng + dLng }
      })

      geofence = { center: { lat, lng }, radiusM, boundary }
    }

    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, address, supervisorEmail: supervisorEmail || undefined, geofence }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Failed to create project')
        setLoading(false)
        return
      }

      router.push(`/projects/${data.project.id}`)
    } catch {
      setError('Failed to create project')
      setLoading(false)
    }
  }

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>New Project</h1>

        <Card padding="lg">
          <form onSubmit={handleSubmit} className={styles.form}>
            <Input
              label="Project Name"
              placeholder="e.g. Main Building Construction"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autoFocus
            />
            <Input
              label="Site Address"
              placeholder="Full site address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <Button
              variant="ghost"
              size="sm"
              loading={geocoding}
              disabled={!address.trim()}
              onClick={geocodeAddress}
            >
              Look up coordinates from address
            </Button>
            <Input
              label="Supervisor Email (Optional)"
              type="email"
              placeholder="supervisor@example.com"
              value={supervisorEmail}
              onChange={(e) => setSupervisorEmail(e.target.value)}
              helpText="Invite a supervisor to capture progress updates"
            />

            <fieldset className={styles.geofenceFieldset}>
              <legend className={styles.geofenceLegend}>Site Location (Optional)</legend>
              <MapPicker
                lat={gpsLat}
                lng={gpsLng}
                onLatChange={setGpsLat}
                onLngChange={setGpsLng}
              />
              <div className={styles.geofenceRow}>
                <Input
                  label="Latitude"
                  type="number"
                  step="any"
                  placeholder="e.g. 6.5244"
                  value={gpsLat}
                  onChange={(e) => setGpsLat(e.target.value)}
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
              <Input
                label="Radius (meters)"
                type="number"
                step="1"
                placeholder="e.g. 200"
                value={gpsRadius}
                onChange={(e) => setGpsRadius(e.target.value)}
                helpText="Sets a geofence — supervisors must be within this area to capture"
              />
            </fieldset>

            {error && <p className={styles.error}>{error}</p>}

            <Button type="submit" fullWidth loading={loading}>
              Create Project
            </Button>
          </form>
        </Card>
      </main>
    </div>
  )
}
