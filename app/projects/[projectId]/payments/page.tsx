'use client'

import { useEffect, useState, useMemo } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Plus, CreditCard, Receipt, TrendingUp, Clock, AlertCircle, Calendar } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/StatusBadge'
import styles from './styles.module.css'

interface PaymentRecord {
  id: string
  paidAmountNgN: number
  receiptUrl: string
  paidAt: string
  project: {
    name: string
  }
  paymentRequest?: {
    status: string
    milestone?: {
      title: string
    }
  }
}

export default function PaymentsPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const router = useRouter()
  const [records, setRecords] = useState<PaymentRecord[]>([])
  const [milestones, setMilestones] = useState<any[]>([])
  const [totalBudget, setTotalBudget] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const [projectRes, milestoneRes] = await Promise.all([
          fetch(`/api/projects/${projectId}`),
          fetch(`/api/projects/${projectId}/milestones`)
        ])
        
        const projectData = await projectRes.json()
        const milestoneData = await milestoneRes.json()

        setRecords(projectData.project?.paymentRecords || [])
        setMilestones(milestoneData.milestones || [])
        
        // Sum up milestone budgets if total budget isn't explicitly set on project
        const budget = milestoneData.milestones?.reduce((acc: number, m: any) => acc + (m.budgetNgN || 0), 0) || 0
        setTotalBudget(budget)
        
        setLoading(false)
      } catch (err) {
        console.error('Failed to fetch payments:', err)
        setLoading(false)
      }
    }

    fetchData()
  }, [projectId])

  const stats = useMemo(() => {
    const totalPaid = records.reduce((acc, r) => acc + r.paidAmountNgN, 0)
    
    const now = new Date()
    const thisMonthPaid = records
      .filter(r => {
        const paidDate = new Date(r.paidAt)
        return paidDate.getMonth() === now.getMonth() && paidDate.getFullYear() === now.getFullYear()
      })
      .reduce((acc, r) => acc + r.paidAmountNgN, 0)

    const pendingApproval = records
      .filter(r => r.paymentRequest?.status === 'PENDING')
      .reduce((acc, r) => acc + r.paidAmountNgN, 0)

    const remainingBudget = Math.max(0, totalBudget - totalPaid)

    return { totalPaid, thisMonthPaid, pendingApproval, remainingBudget }
  }, [records, totalBudget])

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.skeletonStats} />
        <div className={styles.skeletonTable} />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Payments</h1>
          <p className={styles.subtitle}>Track disbursements and milestone funding</p>
        </div>
        <Button 
          variant="primary" 
          onClick={() => router.push(`/api/upload-receipt`)} 
          className={styles.uploadBtn}
        >
          <Receipt size={18} />
          <span>Upload Payment Proof</span>
        </Button>
      </header>

      <div className={styles.statsGrid}>
        <Card className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statLabel}>Total Paid</span>
            <TrendingUp size={16} className={styles.statIcon} />
          </div>
          <div className={styles.statValue}>₦{stats.totalPaid.toLocaleString()}</div>
        </Card>

        <Card className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statLabel}>This Month</span>
            <Calendar size={16} className={styles.statIcon} />
          </div>
          <div className={styles.statValue}>₦{stats.thisMonthPaid.toLocaleString()}</div>
        </Card>

        <Card className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statLabel}>Pending Approval</span>
            <Clock size={16} className={styles.statIcon} style={{ color: 'var(--color-tertiary)' }} />
          </div>
          <div className={styles.statValue}>₦{stats.pendingApproval.toLocaleString()}</div>
        </Card>

        <Card className={styles.statCard}>
          <div className={styles.statHeader}>
            <span className={styles.statLabel}>Remaining Budget</span>
            <AlertCircle size={16} className={styles.statIcon} />
          </div>
          <div className={styles.statValue}>₦{stats.remainingBudget.toLocaleString()}</div>
        </Card>
      </div>

      <div className={styles.historySection}>
        <h2 className={styles.sectionTitle}>Payment History</h2>
        
        {records.length === 0 ? (
          <div className={styles.emptyState}>
            <CreditCard size={48} className={styles.emptyIcon} />
            <h3>No payments recorded</h3>
            <p>Once you upload payment receipts for milestones, they will appear here.</p>
          </div>
        ) : (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Milestone</th>
                  <th>Amount</th>
                  <th>Method</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.id}>
                    <td>
                      {new Date(record.paidAt).toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric'
                      })}
                    </td>
                    <td>{record.paymentRequest?.milestone?.title || 'General Disbursement'}</td>
                    <td className={styles.amountCell}>₦{record.paidAmountNgN.toLocaleString()}</td>
                    <td>Bank Transfer</td>
                    <td>
                      <StatusBadge 
                        status={record.paymentRequest?.status || 'APPROVED'} 
                        label={record.paymentRequest?.status || 'Approved'} 
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
