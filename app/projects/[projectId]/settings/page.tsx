'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { MapPin, AlertTriangle } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import styles from './styles.module.css'

export default function SettingsPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const { data: session } = useSession()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const [supervisorEmail, setSupervisorEmail] = useState('')
  const [assignLoading, setAssignLoading] = useState(false)
  const [assignError, setAssignError] = useState('')
  const [assignSuccess, setAssignSuccess] = useState('')

  const [geofenceLat, setGeofenceLat] = useState('')
  const [geofenceLng, setGeofenceLng] = useState('')
  const [geofenceRadius, setGeofenceRadius] = useState('')
  const [geofenceLoading, setGeofenceLoading] = useState(false)
  const [geofenceMsg, setGeofenceMsg] = useState('')
  const [requestLoading, setRequestLoading] = useState(false)
  const [requestMsg, setRequestMsg] = useState('')

  const fetchProject = () => {
    fetch(`/api/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data.project)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  useEffect(() => { fetchProject() }, [projectId])

  const handleAssignSupervisor = async () => {
    if (!supervisorEmail.trim()) return
    setAssignLoading(true)
    setAssignError('')
    setAssignSuccess('')
    const res = await fetch(`/api/projects/${projectId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ supervisorEmail: supervisorEmail.trim() }),
    })
    if (res.ok) {
      setAssignSuccess('Supervisor assigned.')
      setSupervisorEmail('')
      fetchProject()
    } else {
      const data = await res.json()
      setAssignError(data.error || 'Failed to assign')
    }
    setAssignLoading(false)
  }

  const handleRemoveSupervisor = async () => {
    setAssignLoading(true)
    setAssignError('')
    setAssignSuccess('')
    const res = await fetch(`/api/projects/${projectId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ supervisorEmail: '' }),
    })
    if (res.ok) {
      setAssignSuccess('Supervisor removed.')
      fetchProject()
    } else {
      const data = await res.json()
      setAssignError(data.error || 'Failed to remove')
    }
    setAssignLoading(false)
  }

  const handleRequestUpdate = async () => {
    if (!project?.supervisor?.id) return
    setRequestLoading(true)
    setRequestMsg('')
    try {
      const res = await fetch('/api/notifications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: project.supervisor.id,
          type: 'update_request',
          title: 'Update Requested',
          message: `Owner requested a progress update for ${project.name}`,
          link: `/projects/${projectId}`,
        }),
      })
      setRequestMsg(res.ok ? 'Update requested!' : 'Failed to send')
    } catch {
      setRequestMsg('Failed to send')
    }
    setRequestLoading(false)
  }

  const handleSaveGeofence = async () => {
    if (!geofenceLat || !geofenceLng || !geofenceRadius) return
    setGeofenceLoading(true)
    setGeofenceMsg('')
    const lat = parseFloat(geofenceLat)
    const lng = parseFloat(geofenceLng)
    const radiusM = parseFloat(geofenceRadius)
    const boundary = Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * 2 * Math.PI
      const dLat = (radiusM / 111320) * Math.cos(angle)
      const dLng = (radiusM / (111320 * Math.cos((lat * Math.PI) / 180))) * Math.sin(angle)
      return { lat: lat + dLat, lng: lng + dLng }
    })
    const res = await fetch(`/api/projects/${projectId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ geofence: { center: { lat, lng }, radiusM, boundary } }),
    })
    setGeofenceMsg(res.ok ? 'Geofence saved.' : 'Failed to save.')
    setGeofenceLoading(false)
    if (res.ok) fetchProject()
  }

  if (loading) return <p>Loading...</p>
  if (!project) return <p>Project not found</p>

  const isOwner = session?.user?.id === project.owner.id
  const geofenceSet = project.geofence !== null

  return (
    <>
      {isOwner && (
        <>
          <h1 className={styles.title}>Settings</h1>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Site Supervisor</h2>
            <Card variant="outlined" padding="md">
              {project.supervisor ? (
                <div className={styles.supervisorRow}>
                  <div>
                    <p className={styles.supervisorName}>
                      {project.supervisor.name || project.supervisor.email}
                    </p>
                    <p className={styles.supervisorEmail}>{project.supervisor.email}</p>
                  </div>
                  <div className={styles.supervisorActions}>
                    <Button size="sm" loading={requestLoading} onClick={handleRequestUpdate}>
                      Request Update
                    </Button>
                    <Button variant="ghost" size="sm" loading={assignLoading} onClick={handleRemoveSupervisor}>
                      Remove
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <p className={styles.emptyText}>No supervisor assigned yet.</p>
                  <div className={styles.assignForm}>
                    <input
                      className={styles.emailInput}
                      type="email"
                      placeholder="supervisor@email.com"
                      value={supervisorEmail}
                      onChange={(e) => setSupervisorEmail(e.target.value)}
                      autoFocus
                    />
                    <Button size="sm" loading={assignLoading} disabled={!supervisorEmail.trim()} onClick={handleAssignSupervisor}>
                      Assign
                    </Button>
                  </div>
                </>
              )}
              {assignError && <p className={styles.errorMsg}>{assignError}</p>}
              {assignSuccess && <p className={styles.successMsg}>{assignSuccess}</p>}
              {requestMsg && <p className={styles.successMsg}>{requestMsg}</p>}
            </Card>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Site Geofence</h2>
            <Card variant="outlined" padding="md">
              {geofenceSet ? (
                <div className={styles.geofenceStatus}>
                  <span className={styles.geofenceActive}><MapPin size={14} /> Active</span>
                  <span className={styles.emptyText}>Supervisors must capture within the defined boundary.</span>
                </div>
              ) : (
                <p className={styles.geofenceWarning}>
                  <AlertTriangle size={16} /> No geofence set — location is not enforced.
                </p>
              )}
              <div className={styles.geofenceForm}>
                <div className={styles.geofenceRow}>
                  <input className={styles.geoInput} type="number" step="any" placeholder="Center latitude" value={geofenceLat} onChange={(e) => setGeofenceLat(e.target.value)} />
                  <input className={styles.geoInput} type="number" step="any" placeholder="Center longitude" value={geofenceLng} onChange={(e) => setGeofenceLng(e.target.value)} />
                </div>
                <input className={styles.geoInput} type="number" step="1" placeholder="Radius in meters" value={geofenceRadius} onChange={(e) => setGeofenceRadius(e.target.value)} />
                <Button fullWidth variant="outline" size="sm" loading={geofenceLoading} disabled={!geofenceLat || !geofenceLng || !geofenceRadius} onClick={handleSaveGeofence}>
                  {geofenceSet ? 'Update Geofence' : 'Save Geofence'}
                </Button>
                {geofenceMsg && <p className={styles.successMsg}>{geofenceMsg}</p>}
              </div>
            </Card>
          </div>
        </>
      )}
    </>
  )
}
