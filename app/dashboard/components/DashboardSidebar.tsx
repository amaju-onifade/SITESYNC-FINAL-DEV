'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, FolderOpen, FileText, CreditCard, MessageSquare, Settings } from 'lucide-react'
import styles from './DashboardSidebar.module.css'

const tabs = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/projects', label: 'Projects', icon: FolderOpen },
  { href: '/dashboard/reports', label: 'Reports', icon: FileText },
  { href: '/dashboard/payments', label: 'Payments', icon: CreditCard },
  { href: '/dashboard/messages', label: 'Messages', icon: MessageSquare },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {tabs.map((tab) => {
          const isActive = tab.href === '/dashboard'
            ? pathname === '/dashboard'
            : pathname.startsWith(tab.href)
          const Icon = tab.icon
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`${styles.link} ${isActive ? styles.active : ''}`}
            >
              <Icon size={18} />
              <span>{tab.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
