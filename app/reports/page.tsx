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
  milestones?: any[]
  ownerId?: string
}

export default function ReportsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [projects, setProjects] = useState<Project[]>([])
  const [activeTab, setActiveTab] = useState<'all' | 'byProject' | 'byMilestone'>('all')
  const [projectFilter, setProjectFilter] = useState('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (status === 'unauthenticated') router.push('/login')
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/projects')
        .then((res) => res.json())
        .then((data) => setProjects(data.projects || []))
    }
  }, [status])

  const rows = useMemo(() => {
    const allRows = projects.flatMap((project) => {
      const milestones = project.milestones || [{ title: 'General progress', status: 'PENDING' }]
      return milestones.map((milestone: any, index: number) => ({
        id: `${project.id}-${index}`,
        projectName: project.name,
        milestoneName: milestone.title || 'Milestone',
        submittedBy: session?.user?.name || 'System',
        submittedOn: milestone.updatedAt ? new Date(milestone.updatedAt).toLocaleDateString() : '—',
        status: milestone.status === 'APPROVED' ? 'Approved' : milestone.status === 'PAID' ? 'Paid' : 'Pending Review',
        projectId: project.id,
      }))
    })

    return allRows.filter((row) => {
      const matchesSearch = search
        ? row.projectName.toLowerCase().includes(search.toLowerCase()) ||
          row.milestoneName.toLowerCase().includes(search.toLowerCase())
        : true
      const matchesProject = projectFilter === 'all' || row.projectId === projectFilter
      if (!matchesSearch || !matchesProject) return false

      if (activeTab === 'byProject') return true
      if (activeTab === 'byMilestone') return row.milestoneName !== 'General progress'
      return true
    })
  }, [projects, projectFilter, search, activeTab, session?.user?.name])

  if (status === 'loading') return <PageSkeleton />

  const dateRange = 'Jun 1, 2026 - Jul 31, 2026'

  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Reports</h1>
            <p className={styles.subtitle}>Review the latest progress reports for every project.</p>
          </div>
          <div className={styles.headerActions}>
            <span className={styles.datePill}>{dateRange}</span>
            <Button variant="outline">Filters</Button>
          </div>
        </div>

        <div className={styles.topBar}>
          <div className={styles.tabs}>
            <button className={`${styles.tabButton} ${activeTab === 'all' ? styles.tabActive : ''}`} onClick={() => setActiveTab('all')}>
              All Reports
            </button>
            <button className={`${styles.tabButton} ${activeTab === 'byProject' ? styles.tabActive : ''}`} onClick={() => setActiveTab('byProject')}>
              By Project
            </button>
            <button className={`${styles.tabButton} ${activeTab === 'byMilestone' ? styles.tabActive : ''}`} onClick={() => setActiveTab('byMilestone')}>
              By Milestone
            </button>
          </div>
          <div className={styles.controls}>
            <input
              className={styles.input}
              type="search"
              placeholder="Search reports..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select className={styles.select} value={projectFilter} onChange={(e) => setProjectFilter(e.target.value)}>
              <option value="all">All projects</option>
              {projects.map((project) => (
                <option key={project.id} value={project.id}>{project.name}</option>
              ))}
            </select>
          </div>
        </div>

        {rows.length === 0 ? (
          <Card padding="lg">
            <p style={{ textAlign: 'center', color: 'var(--color-on-surface-variant)' }}>
              No report entries available yet.
            </p>
          </Card>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>Report</th>
                  <th className={styles.th}>Project</th>
                  <th className={styles.th}>Milestone</th>
                  <th className={styles.th}>Submitted by</th>
                  <th className={styles.th}>Submitted on</th>
                  <th className={styles.th}>Status</th>
                  <th className={styles.th} />
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id}>
                    <td className={styles.td}>{row.id}</td>
                    <td className={styles.td}>{row.projectName}</td>
                    <td className={styles.td}>{row.milestoneName}</td>
                    <td className={styles.td}>{row.submittedBy}</td>
                    <td className={styles.td}>{row.submittedOn}</td>
                    <td className={styles.td}>
                      <span className={`${styles.statusChip} ${row.status === 'Approved' ? styles.statusApproved : row.status === 'Pending Review' ? styles.statusPending : styles.statusReview}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className={styles.td}>
                      <button className={styles.rowButton} onClick={() => router.push(`/projects/${row.projectId}/reports`)}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  )
}
