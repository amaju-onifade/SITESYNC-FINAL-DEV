'use client'

import { useState, useEffect, useRef } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Bell, User } from 'lucide-react'
import styles from './styles.module.css'

type Notification = {
  id: string
  type: string
  title: string
  message: string
  link: string | null
  read: boolean
  createdAt: string
}

export function NavBar() {
  const { data: session } = useSession()
  const router = useRouter()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [notifOpen, setNotifOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!session?.user) return

    const fetchNotifications = async () => {
      try {
        const res = await fetch('/api/notifications')
        const data = await res.json()
        setNotifications(data.notifications || [])
        setUnreadCount(data.unreadCount || 0)
      } catch {}
    }

    fetchNotifications()
    const interval = setInterval(fetchNotifications, 15_000)
    return () => clearInterval(interval)
  }, [session])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setNotifOpen(false)
        setUserOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const handleMarkAllRead = async () => {
    await fetch('/api/notifications', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: 'all' }),
    })
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })))
    setUnreadCount(0)
  }

  const handleNotificationClick = async (n: Notification) => {
    if (!n.read) {
      await fetch('/api/notifications', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: n.id }),
      })
      setNotifications((prev) => prev.map((p) => p.id === n.id ? { ...p, read: true } : p))
      setUnreadCount((c) => Math.max(0, c - 1))
    }
    setNotifOpen(false)
    if (n.link) router.push(n.link)
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href="/dashboard" className={styles.logo}>
          SiteSync
        </Link>

        <div className={styles.links}>
          {session?.user ? (
            <>
              <Link href="/dashboard" className={styles.link}>
                Dashboard
              </Link>

              <div className={styles.notifWrapper} ref={dropdownRef}>
                <button className={styles.notifBtn} onClick={() => { setNotifOpen(!notifOpen); setUserOpen(false) }}>
                  <Bell size={20} />
                  {unreadCount > 0 && <span className={styles.badge}>{unreadCount}</span>}
                </button>

                {notifOpen && (
                  <div className={styles.dropdown}>
                    <div className={styles.dropdownHeader}>
                      <span className={styles.dropdownTitle}>Notifications</span>
                      {unreadCount > 0 && (
                        <button className={styles.markAllBtn} onClick={handleMarkAllRead}>
                          Mark all read
                        </button>
                      )}
                    </div>
                    <div className={styles.dropdownList}>
                      {notifications.length === 0 ? (
                        <p className={styles.empty}>No notifications</p>
                      ) : (
                        notifications.map((n) => (
                          <button
                            key={n.id}
                            className={`${styles.notifItem} ${!n.read ? styles.unread : ''}`}
                            onClick={() => handleNotificationClick(n)}
                          >
                            <p className={styles.notifTitle}>{n.title}</p>
                            <p className={styles.notifMsg}>{n.message}</p>
                          </button>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.notifWrapper} ref={dropdownRef}>
                <button className={styles.userBtn} onClick={() => { setUserOpen(!userOpen); setNotifOpen(false) }}>
                  <User size={20} />
                </button>
                {userOpen && (
                  <div className={styles.dropdown}>
                    <div className={styles.dropdownList}>
                      <button className={styles.notifItem} onClick={() => signOut({ callbackUrl: '/login' })}>
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link href="/login" className={styles.link}>
                Sign In
              </Link>
              <Link href="/register" className={styles.link}>
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
