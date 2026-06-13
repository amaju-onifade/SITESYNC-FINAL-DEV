'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { 
  Calendar, 
  ChevronRight, 
  Info, 
  Plus, 
  MapPin,
  CheckCircle2,
  Clock
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { PageSkeleton } from '@/components/ui/Skeleton'
import styles from './styles.module.css'

interface Milestone {
  id: string
  title: string
  description: string | null
  dueDate: string | null
  status: string
  order: number
}

export default function MilestonesPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const router = useRouter()
  const { data: session } = useSession()
  const [milestones, setMilestones] = useState<Milestone[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/projects/${projectId}/milestones`)
      .then((res) => res.json())
      .then((data) => {
        const ms = data.milestones || []
        ms.sort((a: Milestone, b: Milestone) => a.order - b.order)
        setMilestones(ms)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [projectId])

  if (loading) return <PageSkeleton />

  const isOwner = session?.user?.role === 'OWNER'

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Project Milestones</h1>
          <p style={{ color: 'var(--color-on-surface-variant)', marginTop: 4 }}>
            Manage and track construction progress across all phases
          </p>
        </div>
        {isOwner && (
          <Button onClick={() => router.push(`/projects/${projectId}/milestones/new`)}>
            <Plus size={18} />
            Add Milestone
          </Button>
        )}
      </header>

      {milestones.length === 0 ? (
        <Card padding="lg">
          <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: 16 }}>
              <Calendar size={48} style={{ color: 'var(--color-outline)', margin: '0 auto' }} />
            </div>
            <h3 style={{ fontSize: 'var(--typography-title-medium-font-size)', fontWeight: 700 }}>
              No milestones yet
            </h3>
            <p style={{ color: 'var(--color-on-surface-variant)', marginTop: 8, marginBottom: 24 }}>
              Start by adding standard construction milestones to your project.
            </p>
            {isOwner && (
              <Button onClick={() => router.push(`/projects/${projectId}/milestones/new`)}>
                Create First Milestone
              </Button>
            )}
          </div>
        </Card>
      ) : (
        <div className={styles.milestoneList}>
          {milestones.map((ms, index) => {
            const isCompleted = ms.status === 'APPROVED' || ms.status === 'PAID'
            const isInProgress = ms.status === 'IN_PROGRESS' || ms.status === 'PENDING'
            
            return (
              <Card
                key={ms.id}
                variant="outlined"
                className={`${styles.milestoneCard} ${isInProgress ? styles.activeCard : ''}`}
                onClick={() => router.push(`/projects/${projectId}/milestones/${ms.id}`)}
              >
                <div className={`${styles.orderBubble} ${isCompleted ? styles.completedBubble : ''}`}>
                  {isCompleted ? <CheckCircle2 size={16} /> : index + 1}
                </div>
                
                <div className={styles.content}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3 className={styles.mTitle}>{ms.title}</h3>
                    <StatusBadge status={ms.status} />
                  </div>
                  
                  {ms.description && (
                    <p className={styles.mDesc}>{ms.description}</p>
                  )}
                  
                  <div className={styles.meta}>
                    {ms.dueDate && (
                      <div className={styles.dueDate}>
                        <Calendar size={14} />
                        Due: {new Date(ms.dueDate).toLocaleDateString()}
                      </div>
                    )}
                    <div className={styles.dueDate}>
                      <Clock size={14} />
                      {isInProgress ? 'Active Phase' : isCompleted ? 'Completed' : 'Upcoming'}
                    </div>
                  </div>
                </div>
                
                <div className={styles.actions}>
                  <ChevronRight className={styles.arrow} size={20} />
                </div>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
