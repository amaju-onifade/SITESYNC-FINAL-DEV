import { Card } from '@/components/ui/Card'
import styles from './styles.module.css'
import { LayoutGrid, Clock, History, CreditCard } from 'lucide-react'

interface DashboardOverviewProps {
  projects: any[]
  isSupervisor: boolean
}

export function DashboardOverview({ projects, isSupervisor }: DashboardOverviewProps) {
  const totalProjects = projects.length
  const totalMilestones = projects.reduce((acc, p) => acc + (p.milestones?.length || 0), 0)
  const completedMilestones = projects.reduce((acc, p) => {
    const milestones = p.milestones || []
    return acc + milestones.filter((m: any) => m.status === 'APPROVED' || m.status === 'PAID').length
  }, 0)

  const pendingApprovals = projects.reduce((acc, p) => {
    const milestones = p.milestones || []
    return acc + milestones.reduce((mAcc, m) => mAcc + (m.progressUpdates?.length || 0), 0)
  }, 0)

  const totalPaid = projects.reduce((acc, p) => {
    const records = p.paymentRecords || []
    return acc + records.reduce((rAcc, r) => rAcc + (r.paidAmountNgN || 0), 0)
  }, 0)

  return (
    <Card variant="elevated" padding="lg" className={styles.overviewCard}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <div className={`${styles.iconWrapper} ${styles.primary}`}>
              <LayoutGrid size={20} />
            </div>
            <div className={styles.statContent}>
              <span className={styles.statLabel}>Total Projects</span>
              <span className={styles.statValue}>{totalProjects}</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <div className={`${styles.iconWrapper} ${styles.quaternary}`}>
              <CreditCard size={20} />
            </div>
            <div className={styles.statContent}>
              <span className={styles.statLabel}>Total Amount Paid</span>
              <span className={styles.statValue}>₦{totalPaid.toLocaleString()}</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <div className={`${styles.iconWrapper} ${styles.secondary}`}>
              <Clock size={20} />
            </div>
            <div className={styles.statContent}>
              <span className={styles.statLabel}>Pending Approvals</span>
              <span className={styles.statValue}>{pendingApprovals}</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <div className={`${styles.iconWrapper} ${styles.tertiary}`}>
              <History size={20} />
            </div>
            <div className={styles.statContent}>
              <span className={styles.statLabel}>Milestones Completed</span>
              <span className={styles.statValue}>{completedMilestones}/{totalMilestones}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
