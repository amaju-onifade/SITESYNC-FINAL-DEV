'use client'

import { Card } from '@/components/ui/Card'
import { StatusBadge } from '@/components/ui/StatusBadge'
import styles from './styles.module.css'

type ProofBundleProps = {
  summary?: string | null
  elements?: Array<{ type: string; status: string; confidence: number }>
  inconsistencies?: string[]
  completionEstimate?: number | null
  processingStatus: string
  failureReason?: string | null
  mediaUrls: string[]
}

export function ProofBundle({
  summary,
  elements,
  inconsistencies,
  completionEstimate,
  processingStatus,
  failureReason,
  mediaUrls,
}: ProofBundleProps) {
  if (processingStatus === 'FAILED') {
    return (
      <Card variant="outlined" padding="lg">
        <div className={styles.failed}>
          <p className={styles.failedTitle}>AI Report Unavailable</p>
          <p className={styles.failedDesc}>
            {failureReason || 'The AI could not process this capture.'}
          </p>
          <p className={styles.failedHint}>Manual review required to proceed.</p>
        </div>
      </Card>
    )
  }

  if (processingStatus === 'PENDING' || processingStatus === 'PROCESSING') {
    return (
      <Card variant="outlined" padding="lg">
        <div className={styles.loading}>
          <div className={styles.spinner} />
          <p>AI is analyzing your capture...</p>
        </div>
      </Card>
    )
  }

  return (
    <div className={styles.bundle}>
      <Card variant="elevated" padding="lg">
        <div className={styles.header}>
          <h3 className={styles.title}>AI Analysis Report</h3>
          {completionEstimate !== null && completionEstimate !== undefined && (
            <div className={styles.estimate}>
              <div
                className={styles.estimateBar}
                style={{ width: `${completionEstimate}%` }}
              />
              <span className={styles.estimateLabel}>{completionEstimate}% complete</span>
            </div>
          )}
        </div>

        {summary && (
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Summary</h4>
            <p className={styles.summary}>{summary}</p>
          </div>
        )}

        {elements && elements.length > 0 && (
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Elements Detected</h4>
            <div className={styles.elements}>
              {elements.map((el, i) => (
                <div key={i} className={styles.element}>
                  <span className={styles.elementType}>{el.type}</span>
                  <StatusBadge status={el.status.toUpperCase()} />
                  <span className={styles.confidence}>
                    {Math.round(el.confidence * 100)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {inconsistencies && inconsistencies.length > 0 && (
          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>Inconsistencies</h4>
            <ul className={styles.inconsistencies}>
              {inconsistencies.map((item, i) => (
                <li key={i} className={styles.inconsistencyItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card>

      <Card variant="outlined" padding="md">
        <h4 className={styles.sectionTitle}>Captured Media</h4>
        <div className={styles.mediaGrid}>
          {mediaUrls.map((url, i) => (
            <img key={i} src={url} alt={`Capture ${i + 1}`} className={styles.media} />
          ))}
        </div>
      </Card>
    </div>
  )
}
