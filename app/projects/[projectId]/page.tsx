'use client'

import { useEffect, useState, useCallback } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { DragDropContext, Droppable, Draggable, type DropResult } from '@hello-pangea/dnd'
import { GripVertical, MapPin, AlertTriangle } from 'lucide-react'
import { NavBar } from '@/components/NavBar'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { PageSkeleton } from '@/components/ui/Skeleton'
import styles from './styles.module.css'

interface Supervisor {
  id: string
  name: string | null
  email: string
}

interface ProjectDetail {
  id: string
  name: string
  address: string
  status: string
  geofence: unknown
  owner: { id: string; name: string | null; email: string }
  supervisor: Supervisor | null
  milestones: Array<{
    id: string
    title: string
    description: string | null
    status: string
    order: number
    progressUpdates: Array<{ createdAt: string }>
  }>
  benchmarks: Array<{ id: string; title: string; mediaUrl: string }>
  progressUpdates: unknown[]
  paymentRecords: Array<{ id: string; paidAmountNgN: number; paidAt: string }>
}

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const { data: session } = useSession()
  const router = useRouter()
  const [project, setProject] = useState<ProjectDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [activating, setActivating] = useState(false)

  const [supervisorEmail, setSupervisorEmail] = useState('')
  const [assignLoading, setAssignLoading] = useState(false)
  const [assignError, setAssignError] = useState('')
  const [assignSuccess, setAssignSuccess] = useState('')

  const [geofenceLat, setGeofenceLat] = useState('')
  const [geofenceLng, setGeofenceLng] = useState('')
  const [geofenceRadius, setGeofenceRadius] = useState('')
  const [milestones, setMilestones] = useState<ProjectDetail['milestones']>([])
  const [geofenceLoading, setGeofenceLoading] = useState(false)
  const [geofenceMsg, setGeofenceMsg] = useState('')


  const fetchProject = () => {
    fetch(`/api/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data.project)
        const ms = (data.project.milestones || []).slice()
        ms.sort((a: any, b: any) => a.order - b.order)
        setMilestones(ms)
      })
      .finally(() => setLoading(false))
  }

  const onDragEnd = useCallback(async (result: DropResult) => {
    if (!result.destination) return
    const items = Array.from(milestones)
    const [reordered] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reordered)
    setMilestones(items)

    await fetch(`/api/projects/${projectId}/milestones`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ milestoneIds: items.map((m) => m.id) }),
    })
  }, [milestones, projectId])

  useEffect(() => {
    fetchProject()
  }, [projectId])

  const handleActivate = async () => {
    setActivating(true)
    try {
      const res = await fetch(`/api/projects/${projectId}/activate`, { method: 'POST' })
      const data = await res.json()
      if (data.paymentLink) {
        window.location.href = data.paymentLink
        return
      }
      if (data.activated) {
        fetchProject()
        return
      }
      alert(data.error || 'Activation failed')
    } catch {
      alert('Failed to initiate payment')
    }
    setActivating(false)
  }

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
    const data = await res.json()

    if (!res.ok) {
      setAssignError(data.error || 'Failed to assign supervisor')
    } else {
      setAssignSuccess(`Supervisor assigned: ${data.project.supervisor?.name || supervisorEmail}`)
      setSupervisorEmail('')
      fetchProject()
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
      setAssignError(data.error || 'Failed to remove supervisor')
    }
    setAssignLoading(false)
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

    if (res.ok) {
      setGeofenceMsg('Geofence saved. Supervisors must be within this area to capture.')
      fetchProject()
    } else {
      setGeofenceMsg('Failed to save geofence.')
    }
    setGeofenceLoading(false)
  }

  if (loading) {
    return (
      <div className={styles.page}>
        <NavBar />
        <main className={styles.main}>
          <PageSkeleton />
        </main>
      </div>
    )
  }

  if (!project) {
    return (
      <div className={styles.page}>
        <NavBar />
        <main className={styles.main}>
          <p>Project not found</p>
        </main>
      </div>
    )
  }

  const isOwner = session?.user?.id === project.owner.id
  const geofenceSet = project.geofence !== null
  const totalMilestones = project.milestones.length
  const completedMilestones = project.milestones.filter(m => m.status === 'APPROVED' || m.status === 'PAID').length
  const progressPercent = totalMilestones > 0 ? Math.round((completedMilestones / totalMilestones) * 100) : 0
  const totalPaid = project.paymentRecords.reduce((acc, pr) => acc + pr.paidAmountNgN, 0)

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>{project.name}</h1>
            <p className={styles.address}>{project.address}</p>
          </div>
          <StatusBadge status={project.status} />
        </div>

        {/* Project Summary Card */}
        <div className={styles.summaryCard}>
          <div className={styles.summaryHeader}>
            <div className={styles.summaryTitle}>Overall Progress</div>
            <div className={styles.summaryProgress}>{progressPercent}%</div>
          </div>
          <div className={styles.summaryStats}>
            <div className={styles.statItem}>
              <div className={styles.statLabel}>Milestones</div>
              <div className={styles.statValue}>{completedMilestones}/{totalMilestones}</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statLabel}>Total Paid</div>
              <div className={styles.statValue}>₦{totalPaid.toLocaleString()}</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statLabel}>Status</div>
              <div className={styles.statValue} style={{ fontSize: '14px', textTransform: 'capitalize' }}>
                {project.status.toLowerCase().replace('_', ' ')}
              </div>
            </div>
          </div>
        </div>

        {project.status === 'CREATED' && isOwner && (
          <Card variant="outlined" padding="md" className={styles.activateCard}>
            <p className={styles.activateText}>
              Activate this project with a one-time payment to enable milestone tracking.
            </p>
            <Button fullWidth loading={activating} onClick={handleActivate}>
              Activate Project (₦50,000)
            </Button>
          </Card>
        )}

        {/* Milestones */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Milestones</h2>
            {isOwner && (
              <Button
                size="sm"
                onClick={() => router.push(`/projects/${projectId}/milestones/new`)}
              >
                Add Milestone
              </Button>
            )}
          </div>

          {project.milestones.length === 0 ? (
            <Card padding="md">
              <p className={styles.emptyText}>
                No milestones defined yet.
                {isOwner && ' Add milestones to track construction phases.'}
              </p>
            </Card>
          ) : (
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="milestones" isDropDisabled={!isOwner}>
                {(provided) => (
                  <div className={styles.milestoneList} ref={provided.innerRef} {...provided.droppableProps}>
                    {milestones.map((ms, i) => (
                      <Draggable key={ms.id} draggableId={ms.id} index={i} isDragDisabled={!isOwner}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            style={{
                              ...provided.draggableProps.style,
                              opacity: snapshot.isDragging ? 0.85 : 1,
                            }}
                          >
                            <Card
                              variant="outlined"
                              padding="md"
                              onClick={() =>
                                router.push(`/projects/${projectId}/milestones/${ms.id}`)
                              }
                            >
                              <div className={styles.milestoneItem}>
                                {isOwner && (
                                  <span className={styles.dragHandle} {...provided.dragHandleProps}>
                                    <GripVertical size={18} />
                                  </span>
                                )}
                                <div className={styles.milestoneInfo}>
                                  <h3 className={styles.milestoneName}>{ms.title}</h3>
                                  {ms.description && (
                                    <p className={styles.milestoneDesc}>{ms.description}</p>
                                  )}
                                  <p className={styles.daysSince}>
                                    {ms.progressUpdates[0]
                                      ? `${Math.floor((Date.now() - new Date(ms.progressUpdates[0].createdAt).getTime()) / (1000 * 60 * 60 * 24))}d since last update`
                                      : 'No updates yet'}
                                  </p>
                                </div>
                                <StatusBadge status={ms.status} />
                              </div>
                            </Card>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          )}
        </div>

        {/* Benchmarks */}
        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Benchmarks</h2>
            {isOwner && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push(`/projects/${projectId}/benchmarks`)}
              >
                Manage
              </Button>
            )}
          </div>

          {project.benchmarks.length > 0 ? (
            <div className={styles.benchmarkGrid}>
              {project.benchmarks.map((b) => (
                <img key={b.id} src={b.mediaUrl} alt={b.title} className={styles.benchmarkThumb} />
              ))}
            </div>
          ) : (
            <Card padding="md">
              <p className={styles.emptyText}>
                No benchmark references yet.
                {isOwner && ' Upload architectural drawings or reference photos.'}
              </p>
            </Card>
          )}
        </div>

        {/* Recent Activity */}
        {project.progressUpdates && (project.progressUpdates as any[]).length > 0 && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Recent Activity</h2>
            <div className={styles.activityList}>
              {(project.progressUpdates as any[]).map((update) => (
                <Card 
                  key={update.id} 
                  variant="outlined" 
                  padding="sm" 
                  className={styles.activityCard}
                  onClick={() => router.push(`/projects/${projectId}/milestones/${update.milestoneId}`)}
                >
                  <div className={styles.activityHeader}>
                    <span className={styles.activityMilestone}>
                      {update.milestone?.title || 'Update'}
                    </span>
                    <span className={styles.activityDate}>
                      {new Date(update.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className={styles.activityMedia}>
                    {update.rawMediaUrls?.slice(0, 4).map((url: string, i: number) => (
                      <img key={i} src={url} alt="Capture" className={styles.activityThumb} />
                    ))}
                    {update.rawMediaUrls?.length > 4 && (
                      <div className={styles.moreMedia}>+{update.rawMediaUrls.length - 4}</div>
                    )}
                  </div>
                  {update.aiDescription && (
                    <p className={styles.activitySummary}>{update.aiDescription}</p>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}
        {isOwner && (
          <>
            {/* Supervisor Assignment */}
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
                    <Button
                      variant="ghost"
                      size="sm"
                      loading={assignLoading}
                      onClick={handleRemoveSupervisor}
                    >
                      Remove
                    </Button>
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
                        onChange={(e) => {
                          setSupervisorEmail(e.target.value)
                          setAssignError('')
                          setAssignSuccess('')
                        }}
                        autoFocus
                      />
                      <Button
                        size="sm"
                        loading={assignLoading}
                        disabled={!supervisorEmail.trim()}
                        onClick={handleAssignSupervisor}
                      >
                        Assign
                      </Button>
                    </div>
                  </>
                )}
                {assignError && <p className={styles.errorMsg}>{assignError}</p>}
                {assignSuccess && <p className={styles.successMsg}>{assignSuccess}</p>}
              </Card>
            </div>

            {/* Geofence Setup */}
            <div className={`${styles.section} ${styles.geofenceSection}`}>
              <h2 className={styles.sectionTitle}>Site Geofence</h2>
              <Card variant="outlined" padding="md">
                {geofenceSet ? (
                  <>
                    <div className={styles.geofenceStatus}>
                      <span className={styles.geofenceActive}><MapPin size={14} /> Active</span>
                      <span className={styles.emptyText}>
                        Supervisors must capture within the defined boundary.
                      </span>
                    </div>
                    <p className={styles.geofenceHint}>
                      To update: enter new coordinates and radius below.
                    </p>
                  </>
                ) : (
                  <p className={styles.geofenceWarning}>
                    <AlertTriangle size={16} /> No geofence set — location is not enforced. Set one to ensure captures happen on-site.
                  </p>
                )}

                <div className={styles.geofenceForm}>
                  <div className={styles.geofenceRow}>
                    <input
                      className={styles.geoInput}
                      type="number"
                      step="any"
                      placeholder="Center latitude (e.g. 6.5244)"
                      value={geofenceLat}
                      onChange={(e) => setGeofenceLat(e.target.value)}
                      autoFocus
                    />
                    <input
                      className={styles.geoInput}
                      type="number"
                      step="any"
                      placeholder="Center longitude (e.g. 3.3792)"
                      value={geofenceLng}
                      onChange={(e) => setGeofenceLng(e.target.value)}
                    />
                  </div>
                  <input
                    className={styles.geoInput}
                    type="number"
                    step="1"
                    placeholder="Radius in meters (e.g. 200)"
                    value={geofenceRadius}
                    onChange={(e) => setGeofenceRadius(e.target.value)}
                  />
                  <Button
                    fullWidth
                    variant="outline"
                    size="sm"
                    loading={geofenceLoading}
                    disabled={!geofenceLat || !geofenceLng || !geofenceRadius}
                    onClick={handleSaveGeofence}
                  >
                    {geofenceSet ? 'Update Geofence' : 'Save Geofence'}
                  </Button>
                  {geofenceMsg && <p className={styles.successMsg}>{geofenceMsg}</p>}
                </div>
              </Card>
            </div>
          </>
        )}

        {/* Payment Records */}
        {project.paymentRecords.length > 0 && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Payment Records</h2>
            {project.paymentRecords.map((pr) => (
              <Card key={pr.id} variant="outlined" padding="sm">
                <p>Paid: ₦{pr.paidAmountNgN.toLocaleString()}</p>
                <p className={styles.date}>{new Date(pr.paidAt).toLocaleDateString()}</p>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
