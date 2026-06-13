'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  ListChecks,
  FileText,
  Image,
  CreditCard,
  Users,
  Settings,
} from 'lucide-react'
import styles from './ProjectSidebar.module.css'

const tabs = [
  { href: '', label: 'Overview', icon: LayoutDashboard },
  { href: '/milestones', label: 'Milestones', icon: ListChecks },
  { href: '/reports', label: 'AI Reports', icon: FileText },
  { href: '/evidence', label: 'Evidence', icon: Image },
  { href: '/payments', label: 'Payments', icon: CreditCard },
  { href: '/team', label: 'Team', icon: Users },
  { href: '/settings', label: 'Settings', icon: Settings },
]

export function ProjectSidebar() {
  const { projectId } = useParams<{ projectId: string }>()
  const pathname = usePathname()
  const [projectName, setProjectName] = useState('')
  const [location, setLocation] = useState('')

  useEffect(() => {
    fetch(`/api/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.project?.name) setProjectName(data.project.name)
        if (data.project?.address) setLocation(data.project.address)
      })
      .catch(() => {})
  }, [projectId])

  return (
    <aside className={styles.sidebar}>
      {(projectName || location) && (
        <div className={styles.projectHeader}>
          <div className={styles.projectName}>{projectName}</div>
          <div className={styles.projectLocation}>{location}</div>
        </div>
      )}
      <nav className={styles.nav}>
        {tabs.map((tab) => {
          const href = `/projects/${projectId}${tab.href}`
          const isActive = tab.href === ''
            ? pathname === `/projects/${projectId}`
            : pathname.startsWith(href)
          const Icon = tab.icon
          return (
            <Link
              key={tab.href}
              href={href}
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
