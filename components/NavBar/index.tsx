'use client'

import { useState, useEffect, useRef } from 'react'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Bell, User, Search, LayoutDashboard, FolderOpen, FileText, CreditCard, Users, Settings } from 'lucide-react'
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

const topLinks = [
  { href: '/projects', label: 'Projects', icon: FolderOpen },
  { href: '/reports', label: 'Reports', icon: FileText },
  { href: '/payments', label: 'Payments', icon: CreditCard },
  { href: '/notifications', label: 'Notifications', icon: Bell },
]

export function NavBar() {
  const { data: session } = useSession()
  const router = useRouter()
  const pathname = usePathname()
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [notifOpen, setNotifOpen] = useState(false)
  const [userOpen, setUserOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const notifRef = useRef<HTMLDivElement>(null)
  const userRef = useRef<HTMLDivElement>(null)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!session?.user?.id) return

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
  }, [session?.user?.id])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        notifRef.current && !notifRef.current.contains(target) &&
        userRef.current && !userRef.current.contains(target) &&
        searchRef.current && !searchRef.current.contains(target)
      ) {
        setNotifOpen(false)
        setUserOpen(false)
        setSearchOpen(false)
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchOpen(false)
      setSearchQuery('')
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <Link href="/dashboard" className={styles.logo}>
            SiteSync
          </Link>
          {session?.user && (
            <div className={styles.navLinks}>
              {topLinks.map((link) => {
                const Icon = link.icon
                const projectMatch = pathname.match(/^\/projects\/([^\/]+)/)
                const projectId = projectMatch?.[1]
                const isPortfolioLink = link.href === '/dashboard' || link.href === '/team' || link.href === '/projects'
                const href = projectId && !isPortfolioLink
                  ? `/projects/${projectId}${link.href}`
                  : link.href
                const isActive = projectId && !isPortfolioLink
                  ? pathname === href || pathname.startsWith(href + '/')
                  : pathname === link.href || pathname.startsWith(link.href + '/')
                return (
                  <Link
                    key={link.href}
                    href={href}
                    className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                  >
                    <Icon size={18} />
                    <span>{link.label}</span>
                  </Link>
                )
              })}
            </div>
          )}
        </div>

        <div className={styles.right}>
          {session?.user ? (
            <>
              <div className={styles.searchWrapper} ref={searchRef}>
                <button className={styles.iconBtn} onClick={() => setSearchOpen(!searchOpen)}>
                  <Search size={20} />
                </button>
                {searchOpen && (
                  <div className={styles.searchDropdown}>
                    <form onSubmit={handleSearch} className={styles.searchForm}>
                      <input
                        className={styles.searchInput}
                        type="text"
                        placeholder="Search projects, reports..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                      />
                    </form>
                  </div>
                )}
              </div>

              <div className={styles.notifWrapper} ref={notifRef}>
                <button className={styles.iconBtn} onClick={() => { setNotifOpen(!notifOpen); setUserOpen(false); setSearchOpen(false) }}>
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

              <div className={styles.notifWrapper} ref={userRef}>
                <button className={styles.iconBtn} onClick={() => { setUserOpen(!userOpen); setNotifOpen(false); setSearchOpen(false) }}>
                  <User size={20} />
                </button>
                {userOpen && (
                  <div className={styles.dropdown}>
                    <div className={styles.dropdownList}>
                      <Link href="/settings" className={styles.notifItem} onClick={() => setUserOpen(false)}>
                        Account Settings
                      </Link>
                      <button className={styles.notifItem} onClick={() => signOut({ callbackUrl: '/login' })}>
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className={styles.authLinks}>
              <Link href="/login" className={styles.navLink}>
                Sign In
              </Link>
              <Link href="/register" className={styles.navLink}>
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
