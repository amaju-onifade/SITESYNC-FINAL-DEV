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
  owner?: { name?: string; email: string; phone?: string }
  supervisor?: { name?: string; email: string; phone?: string }
}

type Member = {
  name: string
  email: string
  role: string
  phone?: string
  projects: string[]
}

export default function TeamOverviewPage() {
  const { status } = useSession()
  const router = useRouter()
  const [projects, setProjects] = useState<Project[]>([])

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

  const members = useMemo(() => {
    const map = new Map<string, Member>()

    projects.forEach((project) => {
      if (project.owner) {
        const key = project.owner.email
        if (!map.has(key)) {
          map.set(key, {
            name: project.owner.name || project.owner.email,
            email: project.owner.email,
            role: 'Owner',
            phone: project.owner.phone,
            projects: [],
          })
        }
        map.get(key)!.projects.push(project.name)
      }

      if (project.supervisor) {
        const key = project.supervisor.email
        if (!map.has(key)) {
          map.set(key, {
            name: project.supervisor.name || project.supervisor.email,
            email: project.supervisor.email,
            role: 'Supervisor',
            phone: project.supervisor.phone,
            projects: [],
          })
        }
        map.get(key)!.projects.push(project.name)
      }
    })

    return Array.from(map.values())
  }, [projects])

  if (status === 'loading') return <PageSkeleton />

  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Team</h1>
            <p className={styles.subtitle}>All project members, proxies, and supervisors in one place.</p>
          </div>
          <Button onClick={() => router.push('/dashboard/settings')}>Invite Proxy</Button>
        </div>

        {members.length === 0 ? (
          <Card padding="lg" className={styles.emptyCard}>
            <p className={styles.emptyTitle}>No team members yet</p>
            <p className={styles.emptyText}>Add project supervisors and owner contacts to start tracking your team.</p>
          </Card>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>Name</th>
                  <th className={styles.th}>Role</th>
                  <th className={styles.th}>Contact</th>
                  <th className={styles.th}>Projects</th>
                  <th className={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.email}>
                    <td className={styles.td}>{member.name}</td>
                    <td className={styles.td}>{member.role}</td>
                    <td className={styles.td}>{member.phone || member.email}</td>
                    <td className={styles.td}>{member.projects.join(', ')}</td>
                    <td className={styles.td}>
                      <span className={`${styles.statusChip} ${member.role === 'Owner' ? styles.statusOwner : styles.statusSupervisor}`}>
                        {member.role}
                      </span>
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
