'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import { Card } from '@/components/ui/Card'
import { PaymentReceipt } from '@/components/PaymentReceipt'
import { Button } from '@/components/ui/Button'
import styles from './styles.module.css'

export default function ReviewPage() {
  const { projectId, milestoneId } = useParams<{ projectId: string; milestoneId: string }>()
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [milestoneTitle, setMilestoneTitle] = useState<string | null>(null)
  const [paymentRequestId, setPaymentRequestId] = useState<string | null>(null)

  // paymentRequestId can come from query param (passed from milestone detail page)
  useEffect(() => {
    const qpId = searchParams.get('paymentRequestId')
    if (qpId) {
      setPaymentRequestId(qpId)
    }

    // Fetch milestone title for context
    fetch(`/api/projects/${projectId}/milestones/${milestoneId}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.milestone?.title) setMilestoneTitle(data.milestone.title)
        // If no paymentRequestId in URL, pick first payment request from milestone
        if (!qpId && data.milestone?.paymentRequests?.[0]?.id) {
          setPaymentRequestId(data.milestone.paymentRequests[0].id)
        }
      })
      .catch(() => {})
  }, [projectId, milestoneId, searchParams])

  const handleReceiptSubmit = async (data: { amount: number; receipt: File }) => {
    setLoading(true)

    const formData = new FormData()
    formData.append('projectId', projectId)
    formData.append('milestoneId', milestoneId)
    formData.append('amount', data.amount.toString())
    formData.append('receipt', data.receipt)
    if (paymentRequestId) {
      formData.append('paymentRequestId', paymentRequestId)
    }

    try {
      const res = await fetch('/api/upload-receipt', {
        method: 'POST',
        body: formData,
      })

      if (res.ok) {
        router.push(`/projects/${projectId}/milestones/${milestoneId}`)
      } else {
        const errorData = await res.json()
        alert(errorData.error || 'Failed to upload receipt')
      }
    } catch {
      alert('Failed to upload receipt. Please try again.')
    }

    setLoading(false)
  }

  return (
    <>
        <h1 className={styles.title}>Payment & Closure</h1>
        {milestoneTitle && (
          <p className={styles.subtitle}>
            Milestone: <strong>{milestoneTitle}</strong>
          </p>
        )}
        <p className={styles.subtitle}>
          Upload proof of payment to close this milestone.
        </p>

        <Card padding="lg">
          <PaymentReceipt onSubmit={handleReceiptSubmit} loading={loading} />
        </Card>

        <div className={styles.backRow}>
          <Button variant="ghost" onClick={() => router.back()}>
            Back to Milestone
          </Button>
          <Button variant="ghost" onClick={() => router.push(`/projects/${projectId}`)}>
            Back to Project
          </Button>
        </div>
    </>
  )
}
