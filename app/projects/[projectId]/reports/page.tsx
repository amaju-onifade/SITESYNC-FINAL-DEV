'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import {
  ArrowLeft,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Clock,
  TrendingUp,
} from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/StatusBadge'
import { PageSkeleton } from '@/components/ui/Skeleton'
import styles from './styles.module.css'

interface AiElement {
  type: string
  status: string
  confidence: number
}

interface ProgressUpdate {
  id: string
  createdAt: string
  aiDescription: string | null
  aiMarkupData: {
    elements?: AiElement[]
    inconsistencies?: string[]
  } | null
  aiCompletionEstimate: number | null
  processingStatus: string
  reviewStatus: string
  rawMediaUrls: string[]
  supervisor?: { name: string | null } | null
  milestoneId: string
  milestone?: { title: string } | null
}

interface MilestoneSummary {
  id: string
  title: string
  status: string
  progressUpdates: ProgressUpdate[]
}

export default function ProjectReportsPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const router = useRouter()
  const [milestones, setMilestones] = useState<MilestoneSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<ProgressUpdate | null>(null)
  const [selectedMilestone, setSelectedMilestone] = useState<string>('')

  useEffect(() => {
    fetch(`/api/projects/${projectId}/milestones`)
      .then(res => res.json())
      .then(data => {
        const ms: MilestoneSummary[] = data.milestones || []
        setMilestones(ms)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [projectId])

  if (loading) return <PageSkeleton />

  // Flatten all progress updates across milestones, attach milestone title
  const allReports: (ProgressUpdate & { milestoneTitle: string })[] = milestones.flatMap(ms =>
    ms.progressUpdates.map(u => ({ ...u, milestoneTitle: ms.title }))
  ).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  // ── DETAIL VIEW ──
  if (selected) {
    const ai = selected.aiCompletionEstimate ?? 0
    const progress = Math.round(ai)
    const elements: AiElement[] = selected.aiMarkupData?.elements ?? []
    const inconsistencies: string[] = selected.aiMarkupData?.inconsistencies ?? []
    const doneWell = elements.filter(e => e.status === 'complete')
    const confidence = elements.length > 0
      ? Math.round(elements.reduce((sum, e) => sum + e.confidence * 100, 0) / elements.length)
      : null
    const circumference = 2 * Math.PI * 40 // r=40

    return (
      <div className={styles.detailContainer}>
        <button className={styles.backBtn} onClick={() => setSelected(null)}>
          <ArrowLeft size={18} /> Back to Reports
        </button>

        <div className={styles.detailHeader}>
          <div>
            <h1 className={styles.detailTitle}>Report — {selectedMilestone}</h1>
            <p className={styles.detailMeta}>
              Submitted {new Date(selected.createdAt).toLocaleString()}
              {selected.supervisor?.name && ` by ${selected.supervisor.name}`}
            </p>
          </div>
          <StatusBadge status={selected.reviewStatus} />
        </div>

        <div className={styles.detailGrid}>
          {/* Overall Progress donut */}
          <Card className={styles.progressCard}>
            <div className={styles.progressCardTitle}>Overall Progress</div>
            <div className={styles.donutWrap}>
              <svg viewBox="0 0 100 100" className={styles.donut}>
                <circle cx="50" cy="50" r="40" className={styles.donutBg} />
                <circle
                  cx="50" cy="50" r="40"
                  className={styles.donutVal}
                  style={{
                    strokeDasharray: `${progress * circumference / 100}, ${circumference}`,
                    transform: 'rotate(-90deg)',
                    transformOrigin: '50px 50px',
                  }}
                />
                <text x="50" y="47" dominantBaseline="middle" textAnchor="middle" className={styles.donutText}>
                  {progress}%
                </text>
                <text x="50" y="60" dominantBaseline="middle" textAnchor="middle" className={styles.donutSub}>
                  Complete
                </text>
              </svg>
              <div>
                <div className={styles.progressLabel}>
                  This milestone is {progress}% complete
                </div>
                {confidence !== null && (
                  <div className={styles.confidenceLabel}>
                    AI Confidence: {confidence}%
                  </div>
                )}
              </div>
            </div>
          </Card>

          {/* What's Done Well */}
          <Card className={styles.findingsCard}>
            <div className={styles.findingsTitle}>
              <CheckCircle2 size={16} className={styles.checkIcon} />
              What's Done Well
            </div>
            {doneWell.length > 0 ? (
              <div className={styles.findingsList}>
                {doneWell.map((e, i) => (
                  <div key={i} className={styles.findingItem}>
                    <CheckCircle2 size={14} className={styles.checkIcon} />
                    <span style={{ textTransform: 'capitalize' }}>{e.type.replace(/_/g, ' ')} — {e.status}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--color-on-surface-variant)', fontSize: 'var(--typography-body-medium-font-size)' }}>
                No completed elements detected yet.
              </p>
            )}
          </Card>

          {/* Needs Attention */}
          {inconsistencies.length > 0 && (
            <div style={{ gridColumn: '1 / -1' }}>
              <Card className={styles.findingsCard}>
                <div className={styles.findingsTitle}>
                  <AlertTriangle size={16} className={styles.warnIcon} />
                  Needs Attention
                </div>
                <div className={styles.findingsList}>
                  {inconsistencies.map((item, i) => (
                    <div key={i} className={styles.findingItem}>
                      <AlertTriangle size={14} className={styles.warnIcon} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* Summary */}
          {selected.aiDescription && (
            <Card className={styles.summaryCard}>
              <div className={styles.summaryTitle}>Summary</div>
              <p className={styles.summaryText}>{selected.aiDescription}</p>
            </Card>
          )}

          {/* Stats strip */}
          <div className={styles.statsStrip}>
            <Card className={styles.statBox}>
              <div className={styles.statNum}>{doneWell.length}</div>
              <div className={styles.statLabel}>What's Done Well</div>
            </Card>
            <Card className={styles.statBox}>
              <div className={styles.statNum}>{inconsistencies.length}</div>
              <div className={styles.statLabel}>Needs Attention</div>
            </Card>
            <Card className={styles.statBox}>
              <div className={styles.statNum}>
                {elements.filter(e => e.status === 'missing').length}
              </div>
              <div className={styles.statLabel}>Missing / Not Found</div>
            </Card>
          </div>

          {/* Structural elements table */}
          {elements.length > 0 && (
            <Card className={styles.elementsCard}>
              <div className={styles.summaryTitle}>Structural Elements</div>
              <div className={styles.elementsGrid}>
                {elements.map((el, i) => (
                  <div key={i} className={styles.elementItem}>
                    <div className={styles.elementType}>{el.type.replace(/_/g, ' ')}</div>
                    <div className={styles.elementStatus}>{el.status}</div>
                    <div className={styles.elementConf}>{Math.round(el.confidence * 100)}% confidence</div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Media thumbnails */}
          {selected.rawMediaUrls?.length > 0 && (
            <Card className={styles.mediaCard}>
              <div className={styles.summaryTitle}>Site Photos</div>
              <div className={styles.mediaGrid}>
                {selected.rawMediaUrls.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt={`Site photo ${i + 1}`}
                    className={styles.mediaThumbnail}
                  />
                ))}
              </div>
            </Card>
          )}

          {/* Pending AI */}
          {selected.processingStatus === 'PENDING' || selected.processingStatus === 'PROCESSING' ? (
            <div className={styles.pendingBanner}>
              <Clock size={18} />
              AI analysis is in progress. Check back shortly.
            </div>
          ) : null}

          {/* Back to milestone */}
          <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 12 }}>
            <Button
              variant="outline"
              onClick={() => router.push(`/projects/${projectId}/milestones/${selected.milestoneId}`)}
            >
              View Full Milestone
            </Button>
          </div>
        </div>
      </div>
    )
  }

  // ── LIST VIEW ──
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>AI Reports</h1>
          <p className={styles.subtitle}>AI-generated audit reports from site captures.</p>
        </div>
      </header>

      {allReports.length === 0 ? (
        <div className={styles.emptyState}>
          <FileText size={48} className={styles.emptyIcon} />
          <h3 style={{ fontWeight: 700, color: 'var(--color-on-surface)' }}>No reports yet</h3>
          <p>Submit captures on a milestone to generate AI audit reports.</p>
        </div>
      ) : (
        <div className={styles.reportList}>
          {allReports.map(report => {
            const progress = Math.round(report.aiCompletionEstimate ?? 0)
            return (
              <Card
                key={report.id}
                variant="outlined"
                className={styles.reportCard}
                onClick={() => {
                  setSelected(report)
                  setSelectedMilestone(report.milestoneTitle)
                }}
              >
                <div className={styles.reportStatus}>
                  <StatusBadge status={report.reviewStatus} />
                </div>

                <div className={styles.reportContent}>
                  <div className={styles.reportMeta}>
                    <h3 className={styles.reportTitle}>
                      Report — {report.milestoneTitle}
                    </h3>
                    <span className={styles.reportTime}>
                      {new Date(report.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className={styles.reportBy}>
                    {report.supervisor?.name ? `Submitted by ${report.supervisor.name}` : 'Submitted'}
                  </div>
                  <div className={styles.reportStats}>
                    {report.processingStatus === 'COMPLETED' ? (
                      <>
                        <div className={styles.stat}>
                          <TrendingUp size={14} />
                          <span>{progress}% complete</span>
                        </div>
                        <div className={styles.progressBar}>
                          <div className={styles.progressFill} style={{ width: `${progress}%` }} />
                        </div>
                      </>
                    ) : (
                      <div className={styles.stat}>
                        <Clock size={14} />
                        <span>
                          {report.processingStatus === 'PENDING' || report.processingStatus === 'PROCESSING'
                            ? 'AI analysis in progress…'
                            : 'AI analysis failed'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <ChevronRight size={20} className={styles.reportArrow} />
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
