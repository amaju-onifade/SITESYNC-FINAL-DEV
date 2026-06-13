'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { 
  Calendar, 
  FileCheck, 
  FileUp, 
  LayoutDashboard, 
  ChevronRight,
  TrendingUp,
  Clock,
  ArrowRight
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { PageSkeleton } from '@/components/ui/Skeleton'
import styles from './styles.module.css'

interface Supervisor {
  id: string
  name: string | null
  email: string
}

interface ProjectDetail {
  id: string
  name: string
  address: string
  status: string
  geofence: unknown
  owner: { id: string; name: string | null; email: string }
  supervisor: Supervisor | null
  milestones: Array<{
    id: string
    title: string
    description: string | null
    dueDate: string | null
    status: string
    order: number
    progressUpdates: Array<{
      createdAt: string
      aiCompletionEstimate: number | null
      reviewStatus: string | null
    }>
  }>
  benchmarks: Array<{ id: string; title: string; mediaUrl: string }>
  progressUpdates: unknown[]
  paymentRecords: Array<{ id: string; paidAmountNgN: number; paidAt: string }>
}

export default function ProjectDetailPage() {
  const router = useRouter()
  const { projectId } = useParams<{ projectId: string }>()
  const { data: session } = useSession()
  const [project, setProject] = useState<ProjectDetail | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data.project)
      })
      .finally(() => setLoading(false))
  }, [projectId])

  if (loading) return <PageSkeleton />
  if (!project) return <p>Project not found</p>

  const totalMilestones = project.milestones.length
  const completedMilestones = project.milestones.filter(m => m.status === 'APPROVED' || m.status === 'PAID').length
  const overallProgress = totalMilestones > 0 ? Math.round((completedMilestones / totalMilestones) * 100) : 0
  
  const currentMilestone = project.milestones.find(m => m.status === 'IN_PROGRESS' || m.status === 'PENDING') || project.milestones[0]

  // Get real completion estimate from the latest AI analysis, fall back to 0 if none yet
  const milestoneProgress = currentMilestone?.progressUpdates[0]?.aiCompletionEstimate ?? 0
  const milestoneProgressDisplay = Math.round(milestoneProgress)

  // Mock data for table as per PNG
  const reports = [
    { date: 'Jul 28, 2026', milestone: 'Foundation', submittedBy: 'Tunde (Proxy)', progress: 72, status: 'PENDING_REVIEW' },
    { date: 'Jul 12, 2026', milestone: 'Foundation', submittedBy: 'Tunde (Proxy)', progress: 45, status: 'APPROVED' },
    { date: 'Jun 30, 2026', milestone: 'Foundation', submittedBy: 'Tunde (Proxy)', progress: 30, status: 'APPROVED' },
  ]

  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboardHeader}>
        <h1 className={styles.pageTitle}>Overview</h1>
      </div>

      <div className={styles.topGrid}>
        {/* Overall Progress Donut */}
        <Link href={`/projects/${projectId}/reports`} className={styles.cardLink}>
          <Card className={`${styles.statCard} ${styles.interactive}`}>
            <div className={styles.cardHeader}>Overall Progress</div>
            <div className={styles.donutContainer}>
              <svg viewBox="0 0 100 100" className={styles.donut}>
                <circle cx="50" cy="50" r="40" className={styles.donutBg} />
                <circle 
                  cx="50" cy="50" r="40" 
                  className={styles.donutVal} 
                  style={{ 
                    strokeDasharray: `${overallProgress * 2.51}, 251.2`,
                    transform: 'rotate(-90deg)',
                    transformOrigin: '50px 50px'
                  }}
                />
                <text x="50" y="48" dominantBaseline="middle" textAnchor="middle" className={styles.donutText}>{overallProgress}%</text>
                <text x="50" y="62" dominantBaseline="middle" textAnchor="middle" className={styles.donutSub}>Complete</text>
              </svg>
            </div>
            <div className={styles.cardFooter}>
              <span>View details</span>
              <ArrowRight size={14} />
            </div>
          </Card>
        </Link>

        {/* Current Milestone */}
        <Link href={currentMilestone ? `/projects/${projectId}/milestones/${currentMilestone.id}` : '#'} className={styles.cardLink}>
          <Card className={`${styles.statCard} ${styles.interactive}`}>
            <div className={styles.cardHeader}>Current Milestone</div>
            <div className={styles.milestoneBox}>
              <div className={styles.mName}>{currentMilestone?.title || 'None'}</div>
              <div className={styles.mDue}>
                {currentMilestone?.dueDate
                  ? `Due: ${new Date(currentMilestone.dueDate).toLocaleDateString()}`
                  : 'No due date set'}
              </div>
              <div className={styles.progWrap}>
                <div className={styles.progBg}>
                  <div className={styles.progFill} style={{ width: `${milestoneProgressDisplay}%` }}></div>
                </div>
                <span className={styles.progLabel}>
                  {milestoneProgressDisplay > 0 ? `${milestoneProgressDisplay}%` : 'No data yet'}
                </span>
              </div>
            </div>
            <div className={styles.cardFooter}>
              <span>Go to milestone</span>
              <ArrowRight size={14} />
            </div>
          </Card>
        </Link>

        {/* Next Site Visit */}
        <Card className={styles.statCard}>
          <div className={styles.cardHeader}>
            <Calendar size={14} className={styles.headerIcon} />
            Next Site Visit
          </div>
          <div className={styles.visitBox}>
            <div className={styles.visitStatus}>
              <Clock size={20} className={styles.visitIcon} />
              <span>Not scheduled</span>
            </div>
            <Button variant="outline" size="sm" className={styles.requestBtn}>Request Update</Button>
          </div>
        </Card>
      </div>

      <div className={styles.mainGrid}>
        <div className={styles.leftCol}>
          <Card className={styles.tableCard}>
            <div className={styles.tableHeader}>
              <h2 className={styles.tableTitle}>Recent Reports</h2>
              <Link href={`/projects/${projectId}/reports`} className={styles.viewAll}>
                View all reports <ChevronRight size={14} />
              </Link>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Milestone</th>
                    <th>Submitted By</th>
                    <th>Progress</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((r, i) => (
                    <tr 
                      key={i} 
                      className={styles.clickableRow} 
                      onClick={() => router.push(`/projects/${projectId}/reports`)}
                    >
                      <td>{r.date}</td>
                      <td>{r.milestone}</td>
                      <td>{r.submittedBy}</td>
                      <td>{r.progress}%</td>
                      <td><StatusBadge status={r.status} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <div className={styles.rightCol}>
          <Card className={styles.actionsCard}>
            <h2 className={styles.actionsTitle}>Pending Actions</h2>
            <div className={styles.actionList}>
              <Link href={`/projects/${projectId}/reports`} className={styles.actionLink}>
                <div className={styles.actionItem}>
                  <div className={styles.actionNum}>1</div>
                  <div className={styles.actionText}>Report awaiting review</div>
                </div>
              </Link>
              <Link href={`/projects/${projectId}/payments`} className={styles.actionLink}>
                <div className={styles.actionItem}>
                  <div className={styles.actionIcon}><FileCheck size={18} /></div>
                  <div className={styles.actionText}>Upload payment proof</div>
                </div>
              </Link>
              <Link href={`/projects/${projectId}/team`} className={styles.actionLink}>
                <div className={styles.actionItem}>
                  <div className={styles.actionIcon}><Calendar size={18} /></div>
                  <div className={styles.actionText}>Schedule next visit</div>
                </div>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
