'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { PageSkeleton } from '@/components/ui/Skeleton'
import { DashboardOverview } from './components/DashboardOverview'
import styles from './styles.module.css'

interface ProjectSummary {
  id: string
  name: string
  address: string
  status: string
  createdAt: string
  ownerId: string
  supervisorId?: string | null
  _count: { progressUpdates: number }
  milestones?: any[]
  updatedAt?: string
}

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [projects, setProjects] = useState<ProjectSummary[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/projects')
        .then((res) => res.json())
        .then((data) => setProjects(data.projects || []))
        .finally(() => setLoading(false))
    }
  }, [status])

  if (status === 'loading' || loading) {
    return <PageSkeleton />
  }

  const isOwner = session?.user?.role === 'OWNER'
  const isSupervisor = session?.user?.role === 'SUPERVISOR'

  const ownedProjects = projects.filter((p) => p.ownerId === session?.user?.id)
  const supervisedProjects = projects.filter((p) => p.supervisorId === session?.user?.id)
  const displayProjects = isSupervisor ? supervisedProjects : ownedProjects

  const recentActivity = displayProjects.flatMap((project) =>
    (project.milestones || []).slice(0, 3).map((milestone) => ({
      projectName: project.name,
      title: milestone.title || 'Update submitted',
      time: milestone.updatedAt ? new Date(milestone.updatedAt).toLocaleDateString() : 'Today',
    }))
  )

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div>
          <h1 className={styles.title}>Dashboard Overview</h1>
          <p className={styles.subtitle}>Consolidated snapshot of all your construction projects.</p>
        </div>
        {isOwner && (
          <Button onClick={() => router.push('/projects/new')}>Create New Project</Button>
        )}
      </div>

      <div className={styles.dashboardGrid}>
        <section className={styles.mainColumn}>
          <DashboardOverview projects={displayProjects} isSupervisor={isSupervisor} />

          <div className={styles.secondaryGrid}>
            <Card variant="outlined" padding="lg">
              <div className={styles.activityHeader}>
                <h2 className={styles.activityTitle}>My Projects</h2>
              </div>
              {displayProjects.length === 0 ? (
                <div className={styles.emptyCardContent}>
                  {isSupervisor ? (
                    <>
                      <p className={styles.emptyTitle}>Not assigned yet</p>
                      <p className={styles.emptyDesc}>
                        Your project owner needs to assign you to a project. Ask them to enter your registered email in their project settings.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className={styles.emptyTitle}>No projects yet</p>
                      <p className={styles.emptyDesc}>
                        Create your first project to get started with SiteSync.
                      </p>
                      <Button onClick={() => router.push('/projects/new')}>Create Project</Button>
                    </>
                  )}
                </div>
              ) : (
                <div className={styles.grid}>
                  {displayProjects.map((project) => (
                    <Card
                      key={project.id}
                      variant="elevated"
                      padding="md"
                      onClick={() => router.push(`/projects/${project.id}`)}
                    >
                      <div className={styles.projectCard}>
                        <div className={styles.projectHeader}>
                          <h3 className={styles.projectName}>{project.name}</h3>
                          <StatusBadge status={project.status} />
                        </div>
                        <p className={styles.projectAddress}>{project.address}</p>
                        <div className={styles.projectMeta}>
                          {isSupervisor && <span className={styles.roleTag}>Assigned Site</span>}
                          <span>{project._count.progressUpdates} updates</span>
                          <span>{new Date(project.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </Card>

            <Card variant="outlined" padding="lg">
              <div className={styles.activityHeader}>
                <h2 className={styles.activityTitle}>Recent Activity</h2>
              </div>
              <div className={styles.activityList}>
                {recentActivity.length === 0 ? (
                  <p className={styles.emptyDesc}>No recent activity yet. Submit a capture or update a milestone to see activity here.</p>
                ) : (
                  recentActivity.slice(0, 6).map((activity, index) => (
                    <div key={`${activity.projectName}-${index}`} className={styles.activityItem}>
                      <div>
                        <p className={styles.activityTitle}>{activity.title}</p>
                        <p className={styles.activityProject}>{activity.projectName}</p>
                      </div>
                      <span className={styles.activityTime}>{activity.time}</span>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
