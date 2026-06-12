'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { NavBar } from '@/components/NavBar'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { ProofBundle } from '@/components/ProofBundle'
import { MilestoneDetailSkeleton } from '@/components/ui/Skeleton'
import styles from './styles.module.css'

type MilestoneDetail = {
  id: string
  title: string
  description: string | null
  status: string
  order: number
  budgetNgN: number | null
  invoiceUrl: string | null
  progressUpdates: any[]
  paymentRequests: any[]
  project: {
    benchmarks: any[]
  }
}

export default function MilestoneDetailPage() {
  const { projectId, milestoneId } = useParams<{ projectId: string; milestoneId: string }>()
  const { data: session } = useSession()
  const router = useRouter()
  const [milestone, setMilestone] = useState<MilestoneDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [requestUpdateSuccess, setRequestUpdateSuccess] = useState(false)
  const [requestUpdateDate, setRequestUpdateDate] = useState('')

  const fetchMilestone = async () => {
    const res = await fetch(`/api/projects/${projectId}/milestones/${milestoneId}`)
    const data = await res.json()
    setMilestone(data.milestone)
    setLoading(false)
  }

  useEffect(() => {
    fetchMilestone()
  }, [projectId, milestoneId])

  const handlePaymentRequest = async () => {
    const res = await fetch('/api/payment-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ milestoneId, amountNgN: 0 }),
    })
    if (res.ok) {
      fetchMilestone()
    }
  }

  if (loading) {
    return (
      <div className={styles.page}>
        <NavBar />
        <main className={styles.main}>
          <MilestoneDetailSkeleton />
        </main>
      </div>
    )
  }

  if (!milestone) {
    return (
      <div className={styles.page}>
        <NavBar />
        <main className={styles.main}><p>Milestone not found</p></main>
      </div>
    )
  }

  const latestUpdate = milestone.progressUpdates[0]
  const isOwner = session?.user?.role === 'OWNER'
  const isSupervisor = session?.user?.role === 'SUPERVISOR'

  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.main}>
        <div className={styles.header}>
          <div>
            <h1 className={styles.title}>{milestone.title}</h1>
            {milestone.description && (
              <p className={styles.desc}>{milestone.description}</p>
            )}
          </div>
          <StatusBadge status={milestone.status} />
        </div>

        {(milestone.budgetNgN || milestone.invoiceUrl) && (
          <Card variant="outlined" padding="md" className={styles.budgetCard}>
            <div className={styles.budgetGrid}>
              {milestone.budgetNgN && (
                <div className={styles.budgetItem}>
                  <span className={styles.budgetLabel}>Budget</span>
                  <span className={styles.budgetValue}>₦{milestone.budgetNgN.toLocaleString()}</span>
                </div>
              )}
              {milestone.invoiceUrl && (
                <div className={styles.budgetItem}>
                  <span className={styles.budgetLabel}>Document</span>
                  <a href={milestone.invoiceUrl} target="_blank" rel="noopener noreferrer" className={styles.invoiceLink}>
                    View Invoice
                  </a>
                </div>
              )}
            </div>
          </Card>
        )}

        {isSupervisor && (milestone.status === 'PENDING' || milestone.status === 'IN_PROGRESS' || milestone.status === 'REVISION_REQUESTED') && (
          <Button
            fullWidth
            onClick={() => router.push(`/projects/${projectId}/milestones/${milestoneId}/capture`)}
            className={styles.actionBtn}
          >
            {milestone.status === 'REVISION_REQUESTED' ? 'Resubmit Capture' : 'Start Capture'}
          </Button>
        )}

        {milestone.progressUpdates.length > 0 && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Progress Updates ({milestone.progressUpdates.length})</h2>

            {milestone.progressUpdates.map((update: any, idx: number) => (
              <div key={update.id} className={idx > 0 ? styles.olderUpdate : ''}>
                {idx > 0 && <hr className={styles.divider} />}
                <p className={styles.updateMeta}>
                  {new Date(update.createdAt).toLocaleString()}
                  {update.supervisor?.name && ` by ${update.supervisor.name}`}
                </p>

                {idx === 0 ? (
                  <>
                    <ProofBundle
                      summary={update.aiDescription}
                      elements={update.aiMarkupData?.elements}
                      inconsistencies={update.aiMarkupData?.inconsistencies}
                      completionEstimate={update.aiCompletionEstimate}
                      processingStatus={update.processingStatus}
                      failureReason={update.failureReason}
                      mediaUrls={update.rawMediaUrls}
                      supervisorNote={update.supervisorNote}
                    />

                    {update.processingStatus === 'FAILED' && (
                      <Button
                        fullWidth
                        variant="outline"
                        onClick={async () => {
                          await fetch('/api/process-media', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ progressUpdateId: update.id }),
                          })
                          fetchMilestone()
                        }}
                      >
                        Retry AI Analysis
                      </Button>
                    )}

                    {(update.processingStatus === 'COMPLETED' || update.processingStatus === 'FAILED') && update.reviewStatus === 'PENDING_REVIEW' && (
                      <div className={styles.approval}>
                        <Button
                          variant="primary"
                          onClick={async () => {
                            await fetch(`/api/projects/${projectId}/milestones/${milestoneId}/approve`, {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ action: 'APPROVED' }),
                            })
                            fetchMilestone()
                          }}
                        >
                          Approve
                        </Button>
                        <Button
                          variant="danger"
                          onClick={async () => {
                            await fetch(`/api/projects/${projectId}/milestones/${milestoneId}/approve`, {
                              method: 'POST',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ action: 'REVISION_REQUESTED' }),
                            })
                            fetchMilestone()
                          }}
                        >
                          Request Revision
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <Card variant="outlined" padding="sm">
                    <div className={styles.olderMediaList}>
                      {update.rawMediaUrls?.map((url: string, i: number) => (
                        <img key={i} src={url} alt={`Update ${idx + 1} capture ${i + 1}`} className={styles.olderThumb} />
                      ))}
                    </div>
                    {update.aiDescription && (
                      <p className={styles.olderSummary}>{update.aiDescription}</p>
                    )}
                    {update.reviewStatus && (
                      <span className={styles.olderStatus}>{update.reviewStatus.replace(/_/g, ' ')}</span>
                    )}
                  </Card>
                )}
              </div>
            ))}

            {milestone.status === 'PAID' && (
              <Card variant="elevated" padding="md">
                <p className={styles.paidText}>Milestone Completed & Paid</p>
              </Card>
            )}
          </div>
        )}

        {latestUpdate && isSupervisor && (
          <Card padding="md">
            <p className={styles.emptyText}>Your submission has been received and is pending owner review.</p>
          </Card>
        )}

        {milestone.status === 'APPROVED' && (
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Payment</h2>
            <Card variant="outlined" padding="md">
              {milestone.paymentRequests.length > 0 ? (
                <div>
                  <p>Payment requested</p>
                  {isOwner && (
                    <Button
                      fullWidth
                      onClick={() => router.push(`/projects/${projectId}/milestones/${milestoneId}/review`)}
                      className={styles.actionBtn}
                    >
                      Upload Receipt
                    </Button>
                  )}
                </div>
              ) : (
                <div>
                  <p className={styles.emptyText}>
                    {isSupervisor
                      ? 'Request payment for this approved milestone.'
                      : 'Waiting for payment request from supervisor.'}
                  </p>
                  {isSupervisor && (
                    <Button fullWidth onClick={handlePaymentRequest} className={styles.actionBtn}>
                      Request Payment
                    </Button>
                  )}
                </div>
              )}
            </Card>
          </div>
        )}

        {!latestUpdate && (
          <Card padding="md">
            <p className={styles.emptyText}>
              No progress updates yet.
              {isSupervisor ? ' Use the capture button above to submit evidence.' : ''}
            </p>
            {isOwner && !requestUpdateSuccess && (
              <Button
                fullWidth
                onClick={async () => {
                  await fetch(`/api/projects/${projectId}/milestones/${milestoneId}/approve`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ action: 'IN_PROGRESS' }),
                  })
                  setRequestUpdateSuccess(true)
                  setRequestUpdateDate(new Date().toLocaleString())
                }}
                className={styles.actionBtn}
              >
                Request Update from Supervisor
              </Button>
            )}
            {isOwner && requestUpdateSuccess && (
              <Button
                fullWidth
                onClick={() => { setRequestUpdateSuccess(false); setRequestUpdateDate('') }}
              >
                Request Another Update
              </Button>
            )}
          </Card>
        )}

        {requestUpdateSuccess && (
          <p className={styles.successMsg}>Update requested on {requestUpdateDate}. Supervisor has been notified.</p>
        )}

        <div style={{ textAlign: 'center' }}>
          <Button variant="outline" onClick={() => router.push(`/projects/${projectId}`)}>
            Back to Project
          </Button>
        </div>
      </main>
    </div>
  )
}
