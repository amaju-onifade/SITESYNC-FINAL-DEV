'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Card } from '@/components/ui/Card'
import styles from './styles.module.css'

export default function PaymentsPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const [records, setRecords] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/projects/${projectId}`)
      .then((res) => res.json())
      .then((data) => {
        setRecords(data.project?.paymentRecords || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [projectId])

  if (loading) return <p>Loading...</p>

  const totalPaid = records.reduce((acc, r) => acc + r.paidAmountNgN, 0)

  return (
    <>
      <h1 className={styles.title}>Payments</h1>
      {records.length > 0 && (
        <Card variant="outlined" padding="md" className={styles.totalCard}>
          <span className={styles.totalLabel}>Total Paid</span>
          <span className={styles.totalValue}>₦{totalPaid.toLocaleString()}</span>
        </Card>
      )}
      {records.length === 0 ? (
        <Card padding="md">
          <p className={styles.emptyText}>No payment records yet.</p>
        </Card>
      ) : (
        <div className={styles.list}>
          {records.map((pr) => (
            <Card key={pr.id} variant="outlined" padding="sm">
              <div className={styles.paymentRow}>
                <div>
                  <p className={styles.paymentMilestone}>
                    {pr.paymentRequest?.milestone?.title || 'Milestone'}
                  </p>
                  <p className={styles.date}>{new Date(pr.paidAt).toLocaleDateString()}</p>
                </div>
                <p className={styles.paymentAmount}>₦{pr.paidAmountNgN.toLocaleString()}</p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  )
}
