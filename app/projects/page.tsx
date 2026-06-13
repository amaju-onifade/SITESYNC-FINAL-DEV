'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { NavBar } from '@/components/NavBar'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { PageSkeleton } from '@/components/ui/Skeleton'
import styles from './styles.module.css'

type Project = {
  id: string
  name: string
  address?: string
  status: string
  progress?: number
  milestones?: any[]
  updatedAt?: string
}

const statusClasses: Record<string, string> = {
  ACTIVE: styles.statusActive,
  CREATED: styles.statusPending,
}

export default function ProjectsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/login')
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/projects')
        .then((res) => res.json())
        .then((data) => {
          setProjects(data.projects || [])
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }
  }, [status])

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesQuery = query
        ? project.name.toLowerCase().includes(query.toLowerCase()) ||
          project.address?.toLowerCase().includes(query.toLowerCase())
        : true
      const matchesFilter = filter === 'all' || project.status === filter
      return matchesQuery && matchesFilter
    })
  }, [projects, query, filter])

  if (status === 'loading' || loading) return <PageSkeleton />

  const isOwner = session?.user?.role === 'OWNER'

  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Projects</h1>
            <p className={styles.subtitle}>Overview of active projects, status, and progress.</p>
          </div>
          {isOwner && (
            <Button onClick={() => router.push('/projects/new')}>New Project</Button>
          )}
        </div>

        <div className={styles.topControls}>
          <div className={styles.searchControls}>
            <div className={styles.inputGroup}>
              <input
                className={styles.input}
                type="search"
                placeholder="Search projects..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <select
                className={styles.select}
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Projects</option>
                <option value="ACTIVE">Active</option>
                <option value="CREATED">Created</option>
              </select>
            </div>
          </div>
          <Button onClick={() => router.push('/projects/new')}>New Project</Button>
        </div>

        {filteredProjects.length === 0 ? (
          <Card padding="lg">
            <p style={{ textAlign: 'center', color: 'var(--color-on-surface-variant)' }}>
              No projects match the current search or filter.
            </p>
          </Card>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>Project</th>
                  <th className={styles.th}>Location</th>
                  <th className={styles.th}>Progress</th>
                  <th className={styles.th}>Milestones</th>
                  <th className={styles.th}>Last update</th>
                  <th className={styles.th}>Status</th>
                  <th className={styles.th} />
                </tr>
              </thead>
              <tbody>
                {filteredProjects.map((project) => {
                  const progress = project.progress ?? Math.min(100, Math.floor((project.milestones?.filter((m) => m.status === 'APPROVED' || m.status === 'PAID').length || 0) * 100 / Math.max(1, project.milestones?.length || 1)))
                  const statusClass = statusClasses[project.status] || styles.statusPending
                  const lastUpdate = project.updatedAt ? new Date(project.updatedAt).toLocaleDateString() : '—'

                  return (
                    <tr 
                      key={project.id} 
                      className={styles.trClickable}
                      onClick={() => router.push(`/projects/${project.id}`)}
                    >
                      <td className={styles.td}>
                        <button className={styles.projectNameLink}>{project.name}</button>
                      </td>
                      <td className={styles.td}>{project.address || 'Unknown'}</td>
                      <td className={styles.td}>
                        <div className={styles.progressBar}>
                          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                        </div>
                      </td>
                      <td className={styles.td}>{project.milestones?.length || 0}</td>
                      <td className={styles.td}>{lastUpdate}</td>
                      <td className={styles.td}>
                        <span className={`${styles.statusTag} ${statusClass}`}>{project.status}</span>
                      </td>
                      <td className={styles.td}>
                        <button
                          className={styles.actionButton}
                          aria-label={`View actions for ${project.name}`}
                          onClick={() => router.push(`/projects/${project.id}`)}
                        >
                          •••
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}
