'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { NavBar } from '@/components/NavBar'
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
  _count: { progressUpdates: number }
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
    return (
      <div className={styles.page}>
        <NavBar />
        <main className={styles.main}>
          <PageSkeleton />
        </main>
      </div>
    )
  }

  const isOwner = session?.user?.role === 'OWNER'
  const isSupervisor = session?.user?.role === 'SUPERVISOR'

  const ownedProjects = projects.filter((p) => p.ownerId === session?.user?.id)
  const supervisedProjects = projects.filter((p) => p.ownerId !== session?.user?.id)
  const displayProjects = isSupervisor ? supervisedProjects : ownedProjects

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            {isSupervisor ? 'My Site' : 'Projects'}
          </h1>
          {isOwner && (
            <Button onClick={() => router.push('/projects/new')}>
                Create New Project
            </Button>
          )}
        </div>

        {displayProjects.length > 0 && (
          <DashboardOverview 
            projects={displayProjects} 
            isSupervisor={isSupervisor} 
          />
        )}

        {displayProjects.length === 0 ? (
          <Card padding="lg">
            <div className={styles.empty}>
              {isSupervisor ? (
                <>
                  <p className={styles.emptyTitle}>Not assigned yet</p>
                  <p className={styles.emptyDesc}>
                    Your project owner needs to assign you to a project. Ask them to enter your registered email address in their project settings.
                  </p>
                </>
              ) : (
                <>
                  <p className={styles.emptyTitle}>No projects yet</p>
                  <p className={styles.emptyDesc}>
                    Create your first project to get started with SiteSync.
                  </p>
                  <Button onClick={() => router.push('/projects/new')}>
                    Create Project
                  </Button>
                </>
              )}
            </div>
          </Card>
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
                    {isSupervisor && (
                      <span className={styles.roleTag}>Assigned Site</span>
                    )}
                    <span>{project._count.progressUpdates} updates</span>
                    <span>{new Date(project.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}
