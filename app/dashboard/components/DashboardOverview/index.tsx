import { Card } from '@/components/ui/Card'
import styles from './styles.module.css'
import { LayoutGrid, CheckCircle2, History } from 'lucide-react'

interface DashboardOverviewProps {
  projects: any[]
  isSupervisor: boolean
}

export function DashboardOverview({ projects, isSupervisor }: DashboardOverviewProps) {
  const totalProjects = projects.length
  const activeProjects = projects.filter(p => p.status === 'ACTIVE').length
  const totalUpdates = projects.reduce((acc, p) => acc + (p._count?.progressUpdates || 0), 0)

  return (
    <Card variant="elevated" padding="lg" className={styles.overviewCard}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Dashboard Overview</h2>
          <p className={styles.subtitle}>
            {isSupervisor 
              ? "Your active site assignments and progress" 
              : "Consolidated snapshot of all your construction projects"}
          </p>
        </div>

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
            <div className={`${styles.iconWrapper} ${styles.secondary}`}>
              <CheckCircle2 size={20} />
            </div>
            <div className={styles.statContent}>
              <span className={styles.statLabel}>Active Sites</span>
              <span className={styles.statValue}>{activeProjects}</span>
            </div>
          </div>

          <div className={styles.statItem}>
            <div className={`${styles.iconWrapper} ${styles.tertiary}`}>
              <History size={20} />
            </div>
            <div className={styles.statContent}>
              <span className={styles.statLabel}>Total Updates</span>
              <span className={styles.statValue}>{totalUpdates}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
