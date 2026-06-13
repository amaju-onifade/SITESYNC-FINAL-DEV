'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { NavBar } from '@/components/NavBar'
import { Card } from '@/components/ui/Card'
import { PageSkeleton } from '@/components/ui/Skeleton'
import styles from './styles.module.css'

type PaymentRecord = {
  id: string
  paidAmountNgN: number
  paidAt?: string
  rowKey?: string
}

type Project = {
  id: string
  name: string
  paymentRecords?: PaymentRecord[]
}

export default function PaymentsPage() {
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

  const paymentRecords = useMemo(
    () => projects.flatMap((project) =>
      (project.paymentRecords || []).map((record) => ({
        ...record,
        projectName: project.name,
        projectId: project.id,
        rowKey: `${project.id}-${record.id}`,
      }))
    ),
    [projects]
  )

  const totalPaid = paymentRecords.reduce((acc, record) => acc + record.paidAmountNgN, 0)
  const pendingApproval = paymentRecords.length
  const thisMonthPaid = paymentRecords.reduce((acc, record) => {
    const paidAt = record.paidAt ? new Date(record.paidAt) : null
    if (!paidAt) return acc
    const now = new Date()
    return paidAt.getFullYear() === now.getFullYear() && paidAt.getMonth() === now.getMonth() ? acc + record.paidAmountNgN : acc
  }, 0)
  const totalBudget = 0 // Project model has no budget field at MVP

  if (status === 'loading') return <PageSkeleton />

  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>Payments</h1>
            <p className={styles.subtitle}>Track paid amounts, pending approvals, and payment history.</p>
          </div>
        </div>

        <div className={styles.summaryGrid}>
          <Card variant="outlined" padding="lg" className={styles.summaryCard}>
            <span className={styles.summaryLabel}>Total paid</span>
            <span className={styles.summaryValue}>₦{totalPaid.toLocaleString()}</span>
          </Card>
          <Card variant="outlined" padding="lg" className={styles.summaryCard}>
            <span className={styles.summaryLabel}>This month</span>
            <span className={styles.summaryValue}>₦{thisMonthPaid.toLocaleString()}</span>
          </Card>
          <Card variant="outlined" padding="lg" className={styles.summaryCard}>
            <span className={styles.summaryLabel}>Total transactions</span>
            <span className={styles.summaryValue}>{pendingApproval}</span>
          </Card>
          <Card variant="outlined" padding="lg" className={styles.summaryCard}>
            <span className={styles.summaryLabel}>Remaining budget</span>
            <span className={styles.summaryValue}>₦{totalBudget.toLocaleString()}</span>
          </Card>
        </div>

        {paymentRecords.length === 0 ? (
          <Card padding="lg">
            <p style={{ textAlign: 'center', color: 'var(--color-on-surface-variant)' }}>
              No payment history available yet.
            </p>
          </Card>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>Project</th>
                  <th className={styles.th}>Amount</th>
                  <th className={styles.th}>Method</th>
                  <th className={styles.th}>Date</th>
                  <th className={styles.th}>Status</th>
                </tr>
              </thead>
              <tbody>
                {paymentRecords.map((record) => (
                  <tr key={record.rowKey}>
                    <td className={styles.td}>{record.projectName}</td>
                    <td className={styles.td}>₦{record.paidAmountNgN.toLocaleString()}</td>
                    <td className={styles.td}>Bank transfer</td>
                    <td className={styles.td}>{record.paidAt ? new Date(record.paidAt).toLocaleDateString() : '—'}</td>
                    <td className={styles.td}>
                      <span className={`${styles.statusChip} ${styles.statusApproved}`}>
                        Completed
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
