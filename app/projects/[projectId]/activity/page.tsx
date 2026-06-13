'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Card } from '@/components/ui/Card'
import styles from './styles.module.css'

export default function ActivityPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const router = useRouter()
  const { data: session } = useSession()
  const [activity, setActivity] = useState<any[]>([])
  const [notifications, setNotifications] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        setActivity(data.project?.progressUpdates || [])
        setNotifications(data.activityNotifications || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [projectId])

  if (loading) return <p>Loading...</p>

  const allActivity = [
    ...(activity as any[]).map((u: any) => ({ ...u, _type: 'update' })),
    ...notifications.map((n: any) => ({ ...n, _type: 'request' })),
  ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  return (
    <>
      <h1 className={styles.title}>Recent Activity</h1>
      {allActivity.length === 0 && (
        <Card padding="md">
          <p className={styles.emptyText}>No activity yet.</p>
        </Card>
      )}
      <div className={styles.list}>
        {allActivity.map((item: any) =>
          item._type === 'update' ? (
            <Card
              key={item.id}
              variant="outlined"
              padding="sm"
              className={styles.card}
              onClick={() => router.push(`/projects/${projectId}/milestones/${item.milestoneId}`)}
            >
              <div className={styles.activityHeader}>
                <span className={styles.activityMilestone}>{item.milestone?.title || 'Update'}</span>
                <span className={styles.activityDate}>
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </div>
              {item.aiDescription && (
                <p className={styles.activitySummary}>{item.aiDescription}</p>
              )}
            </Card>
          ) : (
            <Card key={item.id} variant="outlined" padding="sm" className={styles.card}>
              <div className={styles.activityHeader}>
                <span className={styles.activityMilestone}>Update Requested</span>
                <span className={styles.activityDate}>
                  {new Date(item.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className={styles.activitySummary}>{item.message}</p>
            </Card>
          )
        )}
      </div>
    </>
  )
}
