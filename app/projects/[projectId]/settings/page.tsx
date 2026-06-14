'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { MapPin, AlertTriangle, Calendar, Building2, Trash2, UserPlus, Shield } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import styles from './styles.module.css'

export default function SettingsPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const { data: session } = useSession()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  // Project Info State
  const [projectName, setProjectName] = useState('')
  const [location, setLocation] = useState('')
  const [targetCompletion, setTargetCompletion] = useState('')
  const [infoLoading, setInfoLoading] = useState(false)

  // Supervisor State
  const [supervisorEmail, setSupervisorEmail] = useState('')
  const [assignLoading, setAssignLoading] = useState(false)
  
  // Geofence State
  const [geofenceLat, setGeofenceLat] = useState('')
  const [geofenceLng, setGeofenceLng] = useState('')
  const [geofenceRadius, setGeofenceRadius] = useState('')
  const [geofenceLoading, setGeofenceLoading] = useState(false)

  const fetchProject = async () => {
    try {
      const res = await fetch(`/api/projects/${projectId}`)
      const data = await res.json()
      const p = data.project
      setProject(p)
      setProjectName(p.name || '')
      setLocation(p.address || '')
      setTargetCompletion(p.updatedAt ? new Date(p.updatedAt).toISOString().split('T')[0] : '') // Fallback or add to model
      
      if (p.geofence?.center) {
        setGeofenceLat(p.geofence.center.lat.toString())
        setGeofenceLng(p.geofence.center.lng.toString())
        setGeofenceRadius(p.geofence.radiusM.toString())
      }
      
      setLoading(false)
    } catch (err) {
      console.error(err)
      setLoading(false)
    }
  }

  useEffect(() => { fetchProject() }, [projectId])

  const handleUpdateInfo = async () => {
    setInfoLoading(true)
    await fetch(`/api/projects/${projectId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: projectName, address: location }),
    })
    setInfoLoading(false)
    fetchProject()
  }

  const handleAssignSupervisor = async () => {
    if (!supervisorEmail.trim()) return
    setAssignLoading(true)
    await fetch(`/api/projects/${projectId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ supervisorEmail: supervisorEmail.trim() }),
    })
    setSupervisorEmail('')
    setAssignLoading(false)
    fetchProject()
  }

  const handleSaveGeofence = async () => {
    setGeofenceLoading(true)
    const lat = parseFloat(geofenceLat)
    const lng = parseFloat(geofenceLng)
    const radiusM = parseFloat(geofenceRadius)
    
    // Simple boundary generation
    const boundary = Array.from({ length: 8 }, (_, i) => {
      const angle = (i / 8) * 2 * Math.PI
      const dLat = (radiusM / 111320) * Math.cos(angle)
      const dLng = (radiusM / (111320 * Math.cos((lat * Math.PI) / 180))) * Math.sin(angle)
      return { lat: lat + dLat, lng: lng + dLng }
    })

    await fetch(`/api/projects/${projectId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ geofence: { center: { lat, lng }, radiusM, boundary } }),
    })
    setGeofenceLoading(false)
    fetchProject()
  }

  if (loading) return <div className={styles.container}><div className={styles.skeleton} /></div>
  if (!project) return <div className={styles.container}>Project not found</div>

  const isOwner = session?.user?.id === project.owner.id
  if (!isOwner) return <div className={styles.container}>Access Denied</div>

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Project Settings</h1>
        <p className={styles.subtitle}>Manage site details and verification parameters</p>
      </header>

      <div className={styles.sections}>
        {/* Section 1: Project Info */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <Building2 size={20} />
            <h2 className={styles.sectionTitle}>General Information</h2>
          </div>
          <Card padding="md">
            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label>Project Name</label>
                <input 
                  type="text" 
                  value={projectName} 
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="e.g. Lekki Duplex" 
                />
              </div>
              <div className={styles.field}>
                <label>Location</label>
                <input 
                  type="text" 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Lagos, Nigeria" 
                />
              </div>
              <div className={styles.field}>
                <label>Target Completion</label>
                <div className={styles.inputWithIcon}>
                  <Calendar size={16} />
                  <input 
                    type="date" 
                    value={targetCompletion}
                    onChange={(e) => setTargetCompletion(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className={styles.sectionFooter}>
              <Button size="sm" loading={infoLoading} onClick={handleUpdateInfo}>Save Changes</Button>
            </div>
          </Card>
        </section>

        {/* Section 2: Verification */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <Shield size={20} />
            <h2 className={styles.sectionTitle}>Verification & Geofencing</h2>
          </div>
          <Card padding="md">
            <div className={styles.geofenceStatus}>
              {project.geofence ? (
                <div className={styles.geofenceActive}>
                  <MapPin size={16} />
                  <span>Geofencing is ACTIVE for this site</span>
                </div>
              ) : (
                <div className={styles.geofenceWarning}>
                  <AlertTriangle size={16} />
                  <span>No geofence set — location verification is disabled</span>
                </div>
              )}
            </div>
            <div className={styles.formGrid}>
              <div className={styles.field}>
                <label>Latitude</label>
                <input type="number" step="any" value={geofenceLat} onChange={(e) => setGeofenceLat(e.target.value)} placeholder="0.0000" />
              </div>
              <div className={styles.field}>
                <label>Longitude</label>
                <input type="number" step="any" value={geofenceLng} onChange={(e) => setGeofenceLng(e.target.value)} placeholder="0.0000" />
              </div>
              <div className={styles.field}>
                <label>Radius (meters)</label>
                <input type="number" value={geofenceRadius} onChange={(e) => setGeofenceRadius(e.target.value)} placeholder="100" />
              </div>
            </div>
            <div className={styles.sectionFooter}>
              <Button variant="outline" size="sm" loading={geofenceLoading} onClick={handleSaveGeofence}>
                {project.geofence ? 'Update Boundary' : 'Enable Geofencing'}
              </Button>
            </div>
          </Card>
        </section>

        {/* Section 3: Supervisor */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <UserPlus size={20} />
            <h2 className={styles.sectionTitle}>Site Supervisor</h2>
          </div>
          <Card padding="md">
            {project.supervisor ? (
              <div className={styles.supervisorCard}>
                <div className={styles.supervisorInfo}>
                  <strong>{project.supervisor.name || project.supervisor.email}</strong>
                  <span>{project.supervisor.email}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSupervisorEmail('')}>Change</Button>
              </div>
            ) : (
              <div className={styles.assignRow}>
                <input 
                  type="email" 
                  placeholder="supervisor@email.com" 
                  value={supervisorEmail}
                  onChange={(e) => setSupervisorEmail(e.target.value)} 
                />
                <Button size="sm" loading={assignLoading} onClick={handleAssignSupervisor}>Assign</Button>
              </div>
            )}
          </Card>
        </section>

        {/* Section 4: Danger Zone */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <Trash2 size={20} style={{ color: 'var(--color-error)' }} />
            <h2 className={styles.sectionTitle} style={{ color: 'var(--color-error)' }}>Danger Zone</h2>
          </div>
          <Card padding="md" className={styles.dangerCard}>
            <p>Deleting a project is permanent and will remove all audit logs, evidence, and reports.</p>
            <Button variant="outline" className={styles.deleteBtn}>Delete Project</Button>
          </Card>
        </section>
      </div>
    </div>
  )
}
