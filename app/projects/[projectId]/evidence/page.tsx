'use client'

import { useEffect, useState, useMemo } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Plus, Image as ImageIcon, ChevronLeft, Calendar } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import styles from './styles.module.css'

interface EvidenceItem {
  id: string
  title: string
  mediaUrl: string
  createdAt: string
  milestoneId?: string
  milestoneTitle?: string
}

export default function EvidencePage() {
  const { projectId } = useParams<{ projectId: string }>()
  const router = useRouter()
  const [evidence, setEvidence] = useState<EvidenceItem[]>([])
  const [milestones, setMilestones] = useState<{ id: string; title: string }[]>([])
  const [selectedMilestone, setSelectedMilestone] = useState<string>('all')
  const [loading, setLoading] = useState(true)
  const [selectedPhoto, setSelectedPhoto] = useState<EvidenceItem | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const [projectRes, milestoneRes] = await Promise.all([
          fetch(`/api/projects/${projectId}`),
          fetch(`/api/projects/${projectId}/milestones`)
        ])
        
        const projectData = await projectRes.json()
        const milestoneData = await milestoneRes.json()

        setMilestones(milestoneData.milestones || [])

        // Combine benchmarks and progress updates as evidence
        const benchmarks = (projectData.project?.benchmarks || []).map((b: any) => ({
          id: b.id,
          title: b.title || 'Benchmark',
          mediaUrl: b.mediaUrl,
          createdAt: b.createdAt,
          milestoneId: b.milestoneId,
        }))

        const updates = (projectData.project?.progressUpdates || []).flatMap((u: any) => 
          u.rawMediaUrls.map((url: string, index: number) => ({
            id: `${u.id}-${index}`,
            title: u.milestone?.title || 'Site Update',
            mediaUrl: url,
            createdAt: u.createdAt,
            milestoneId: u.milestoneId,
            milestoneTitle: u.milestone?.title
          }))
        )

        setEvidence([...benchmarks, ...updates].sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        ))
        
        setLoading(false)
      } catch (err) {
        console.error('Failed to fetch evidence:', err)
        setLoading(false)
      }
    }

    fetchData()
  }, [projectId])

  const filteredEvidence = useMemo(() => {
    if (selectedMilestone === 'all') return evidence
    return evidence.filter(item => item.milestoneId === selectedMilestone)
  }, [evidence, selectedMilestone])

  const currentMilestoneTitle = useMemo(() => {
    if (selectedMilestone === 'all') return 'All Photos'
    return milestones.find(m => m.id === selectedMilestone)?.title || 'Milestone'
  }, [selectedMilestone, milestones])

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.headerSkeleton} />
        <div className={styles.grid}>
          {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className={styles.skeletonCard} />)}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Evidence – {currentMilestoneTitle}</h1>
          <p className={styles.subtitle}>Verifiable visual proof of work completed</p>
        </div>
        <Button 
          variant="primary" 
          onClick={() => router.push(`/projects/${projectId}/milestones/new`)}
          className={styles.uploadBtn}
        >
          <Plus size={18} />
          <span>Upload Benchmark</span>
        </Button>
      </header>

      <div className={styles.toolbar}>
        <div className={styles.toolbarGroup}>
          <span className={styles.toolbarLabel}>View by</span>
          <select 
            className={styles.select}
            value={selectedMilestone}
            onChange={(e) => setSelectedMilestone(e.target.value)}
          >
            <option value="all">All Photos</option>
            {milestones.map(m => (
              <option key={m.id} value={m.id}>{m.title}</option>
            ))}
          </select>
        </div>
        
        <div className={styles.toolbarGroup}>
          <span className={styles.toolbarLabel}>Sort by</span>
          <select className={styles.select}>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
        </div>
      </div>

      {filteredEvidence.length === 0 ? (
        <div className={styles.emptyState}>
          <ImageIcon size={48} className={styles.emptyIcon} />
          <h3>No evidence found</h3>
          <p>This milestone doesn't have any benchmark photos or site updates yet.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {filteredEvidence.map((item) => (
            <div 
              key={item.id} 
              className={styles.photoCard}
              onClick={() => setSelectedPhoto(item)}
            >
              <img src={item.mediaUrl} alt={item.title} className={styles.photoImg} />
              <div className={styles.photoMeta}>
                <div className={styles.photoTitle}>{item.title}</div>
                <div className={styles.photoTime}>
                  <Calendar size={12} />
                  {new Date(item.createdAt).toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </div>
              </div>
            </div>
          ))}

          <div 
            className={styles.uploadCard}
            onClick={() => router.push(`/projects/${projectId}/milestones`)}
          >
            <Plus size={24} />
            <span className={styles.uploadLabel}>Upload More</span>
          </div>
        </div>
      )}

      {selectedPhoto && (
        <div className={styles.lightbox} onClick={() => setSelectedPhoto(null)}>
          <button className={styles.lightboxClose}>×</button>
          <img src={selectedPhoto.mediaUrl} alt={selectedPhoto.title} className={styles.lightboxImg} />
          <div className={styles.lightboxCaption}>
            <strong>{selectedPhoto.title}</strong>
            <span>Uploaded on {new Date(selectedPhoto.createdAt).toLocaleString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}
