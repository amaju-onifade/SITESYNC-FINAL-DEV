'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter, useParams } from 'next/navigation'
import { Bell, CheckCircle2, AlertCircle, Clock, Trash2, ArrowLeft } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { PageSkeleton } from '@/components/ui/Skeleton'
import styles from './styles.module.css'

interface Notification {
  id: string
  type: string
  title: string
  message: string
  link: string | null
  read: boolean
  createdAt: string
}

export default function NotificationsPage() {
  const { data: session } = useSession()
  const router = useRouter()
  const params = useParams()
  const projectId = params?.projectId as string
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)

  const fetchNotifications = async () => {
    try {
      const res = await fetch('/api/notifications')
      const data = await res.json()
      setNotifications(data.notifications || [])
    } catch (err) {
      console.error('Failed to fetch notifications', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNotifications()
  }, [])

  const markAsRead = async (id: string) => {
    await fetch('/api/notifications', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n))
  }

  const markAllAsRead = async () => {
    await fetch('/api/notifications', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: 'all' }),
    })
    setNotifications(prev => prev.map(n => ({ ...n, read: true })))
  }

  const deleteNotification = async (id: string) => {
    await fetch(`/api/notifications?id=${id}`, { method: 'DELETE' })
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  if (loading) return <PageSkeleton />

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          {projectId && (
            <button onClick={() => router.back()} className={styles.backBtn}>
              <ArrowLeft size={20} />
            </button>
          )}
          <div>
            <h1 className={styles.title}>Notifications</h1>
            <p className={styles.subtitle}>Stay updated on project milestones and audit reports.</p>
          </div>
        </div>
        {notifications.some(n => !n.read) && (
          <Button variant="outline" onClick={markAllAsRead}>
            Mark all as read
          </Button>
        )}
      </header>

      <div className={styles.list}>
        {notifications.length === 0 ? (
          <Card padding="lg" style={{ textAlign: 'center' }}>
            <div className={styles.emptyIcon}>
              <Bell size={48} />
            </div>
            <h3>All caught up!</h3>
            <p>You don't have any notifications at the moment.</p>
          </Card>
        ) : (
          notifications.map((n) => (
            <Card
              key={n.id}
              variant="outlined"
              className={`${styles.notifCard} ${!n.read ? styles.unread : ''}`}
              onClick={() => {
                if (!n.read) markAsRead(n.id)
                if (n.link) router.push(n.link)
              }}
            >
              <div className={styles.notifIcon}>
                {n.type === 'SUCCESS' ? <CheckCircle2 className={styles.successIcon} /> :
                 n.type === 'ALERT' ? <AlertCircle className={styles.alertIcon} /> :
                 <Bell className={styles.infoIcon} />}
              </div>
              
              <div className={styles.notifContent}>
                <div className={styles.notifHeader}>
                  <h3 className={styles.notifTitle}>{n.title}</h3>
                  <span className={styles.notifTime}>
                    <Clock size={12} />
                    {new Date(n.createdAt).toLocaleString()}
                  </span>
                </div>
                <p className={styles.notifMessage}>{n.message}</p>
              </div>

              <button
                className={styles.deleteBtn}
                onClick={(e) => {
                  e.stopPropagation()
                  deleteNotification(n.id)
                }}
              >
                <Trash2 size={18} />
              </button>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
