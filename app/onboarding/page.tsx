'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { 
  Building2, 
  User, 
  Users, 
  ArrowRight, 
  Plus, 
  Trash2, 
  Upload, 
  CheckCircle2,
  Briefcase,
  MapPin,
  Calendar,
  ChevronRight,
  ClipboardList
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'
import styles from './styles.module.css'

type Step = 1 | 2 | 3 | 4 | 5 | 6

interface Milestone {
  id: string
  title: string
}

export default function OnboardingPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [step, setStep] = useState<Step>(1)
  const [loading, setLoading] = useState(false)

  // Form State
  const [role, setRole] = useState<'OWNER' | 'PROXY' | 'CONTRACTOR'>('OWNER')
  const [projectName, setProjectName] = useState('')
  const [location, setLocation] = useState('')
  const [projectType, setProjectType] = useState('New Build')
  const [completionDate, setCompletionDate] = useState('')
  const [milestones, setMilestones] = useState<Milestone[]>([
    { id: '1', title: 'Foundation' },
    { id: '2', title: 'Blockwork' },
    { id: '3', title: 'Roofing' }
  ])
  const [newMilestone, setNewMilestone] = useState('')
  const [startMilestoneId, setStartMilestoneId] = useState<string>('1')
  const [proxyName, setProxyName] = useState('')
  const [proxyPhone, setProxyPhone] = useState('')
  const [proxyRole, setProxyRole] = useState('Proxy / Inspector')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  const nextStep = () => setStep((s) => Math.min(6, s + 1) as Step)
  const prevStep = () => setStep((s) => Math.max(1, s - 1) as Step)

  const handleAddMilestone = () => {
    if (!newMilestone.trim()) return
    setMilestones([...milestones, { id: Date.now().toString(), title: newMilestone.trim() }])
    setNewMilestone('')
  }

  const removeMilestone = (id: string) => {
    setMilestones(milestones.filter(m => m.id !== id))
  }

  const handleComplete = async () => {
    setLoading(true)
    try {
      const startIndex = milestones.findIndex(m => m.id === startMilestoneId)
      const filteredMilestones = milestones.slice(startIndex >= 0 ? startIndex : 0)

      // 1. Create Project
      const projectRes = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: projectName,
          address: location,
          milestones: filteredMilestones.map((m, i) => ({ title: m.title, order: i })),
        }),
      })

      if (!projectRes.ok) throw new Error('Failed to create project')
      
      router.push('/dashboard')
    } catch (error) {
      console.error('Onboarding failed:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading') return null

  const renderStepIndicator = () => {
    const steps = ['Role', 'Project', 'Milestones', 'Benchmarks', 'Team', 'Ready']
    return (
      <div className={styles.stepIndicator}>
        {steps.map((label, i) => (
          <div key={label} className={styles.step}>
            <div className={`${styles.stepDot} ${step === i + 1 ? styles.stepDotActive : ''} ${step > i + 1 ? styles.stepDotCompleted : ''}`} />
            <span className={`${styles.stepLabel} ${step === i + 1 ? styles.stepLabelActive : ''}`}>{label}</span>
            {i < steps.length - 1 && (
              <div className={`${styles.stepLine} ${step > i + 1 ? styles.stepLineCompleted : ''}`} />
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <header className={styles.onboardingHeader}>
        <div className={styles.logo}>SiteSync</div>
        <Button variant="ghost" size="sm" onClick={() => router.push('/dashboard')}>Skip onboarding</Button>
      </header>

      {renderStepIndicator()}

      <div className={styles.cardContainer}>
        <div className={styles.formCard}>
          {step === 1 && (
            <div className={styles.stepContent}>
              <div className={styles.contentHeader}>
                <h1 className={styles.title}>What best describes you?</h1>
                <p className={styles.subtitle}>This helps us personalize your experience.</p>
              </div>
              <div className={styles.roleGrid}>
                <div 
                  className={`${styles.roleCard} ${role === 'OWNER' ? styles.roleCardActive : ''}`}
                  onClick={() => setRole('OWNER')}
                >
                  <div className={styles.roleIcon}><Users size={24} /></div>
                  <div className={styles.roleTitle}>Diaspora Homeowner</div>
                  <div className={styles.roleDesc}>I own the project and want updates</div>
                </div>
                <div 
                  className={`${styles.roleCard} ${role === 'PROXY' ? styles.roleCardActive : ''}`}
                  onClick={() => setRole('PROXY')}
                >
                  <div className={styles.roleIcon}><User size={24} /></div>
                  <div className={styles.roleTitle}>Proxy / Inspector</div>
                  <div className={styles.roleDesc}>I visit sites and submit updates</div>
                </div>
                <div 
                  className={`${styles.roleCard} ${role === 'CONTRACTOR' ? styles.roleCardActive : ''}`}
                  onClick={() => setRole('CONTRACTOR')}
                >
                  <div className={styles.roleIcon}><Briefcase size={24} /></div>
                  <div className={styles.roleTitle}>Contractor</div>
                  <div className={styles.roleDesc}>I build and manage projects</div>
                </div>
              </div>
              <Button fullWidth size="lg" onClick={nextStep}>Continue</Button>
            </div>
          )}

          {step === 2 && (
            <div className={styles.stepContent}>
              <div className={styles.contentHeader}>
                <h1 className={styles.title}>Let&apos;s create your first project.</h1>
                <p className={styles.subtitle}>Tell us about the site you&apos;re monitoring.</p>
              </div>
              <div className={styles.fieldGroup}>
                <Input 
                  label="Project Name" 
                  placeholder="e.g. Lekki Duplex" 
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                />
                <Input 
                  label="Location" 
                  placeholder="e.g. Lagos, Nigeria" 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <Input 
                  label="Target Completion" 
                  type="date"
                  value={completionDate}
                  onChange={(e) => setCompletionDate(e.target.value)}
                />
              </div>
              <div className={styles.actions}>
                <Button variant="outline" className={styles.backBtn} onClick={prevStep}>Back</Button>
                <Button className={styles.continueBtn} onClick={nextStep} disabled={!projectName || !location}>Continue</Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className={styles.stepContent}>
              <div className={styles.contentHeader}>
                <h1 className={styles.title}>Define your milestones.</h1>
                <p className={styles.subtitle}>Select the milestone you wish to start from.</p>
              </div>
              <div className={styles.milestoneList}>
                {milestones.map((m, i) => {
                  const isSelected = m.id === startMilestoneId
                  const isExcluded = milestones.findIndex(ms => ms.id === startMilestoneId) > i

                  return (
                    <div 
                      key={m.id} 
                      className={`${styles.milestoneItem} ${isSelected ? styles.milestoneItemSelected : ''} ${isExcluded ? styles.milestoneItemExcluded : ''}`}
                      onClick={() => setStartMilestoneId(m.id)}
                    >
                      <span>{i + 1}. {m.title} {isSelected && <span className={styles.startBadge}>Start Here</span>}</span>
                      <button onClick={(e) => { e.stopPropagation(); removeMilestone(m.id) }}><Trash2 size={16} /></button>
                    </div>
                  )
                })}
              </div>
              <div className={styles.fieldGroup}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Input 
                    placeholder="e.g. Plumbing & Electrical" 
                    value={newMilestone}
                    onChange={(e) => setNewMilestone(e.target.value)}
                  />
                  <Button variant="secondary" onClick={handleAddMilestone}><Plus size={20} /></Button>
                </div>
              </div>
              <div className={styles.actions}>
                <Button variant="outline" className={styles.backBtn} onClick={prevStep}>Back</Button>
                <Button className={styles.continueBtn} onClick={nextStep}>Continue</Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className={styles.stepContent}>
              <div className={styles.contentHeader}>
                <h1 className={styles.title}>Upload reference images and plans.</h1>
                <p className={styles.subtitle}>AI will compare site updates with these benchmarks.</p>
              </div>
              <div className={styles.uploadZone}>
                <div className={styles.uploadIcon}><Upload size={40} /></div>
                <div className={styles.uploadText}>Drag & drop files here or click to upload</div>
                <p className={styles.uploadHint}>JPG, PNG, PDF, DWG (Max 20MB)</p>
              </div>
              <div className={styles.actions}>
                <Button variant="outline" className={styles.backBtn} onClick={prevStep}>Back</Button>
                <Button className={styles.continueBtn} onClick={nextStep}>Continue</Button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className={styles.stepContent}>
              <div className={styles.contentHeader}>
                <h1 className={styles.title}>Who will visit the site?</h1>
                <p className={styles.subtitle}>Invite a supervisor to capture progress.</p>
              </div>
              <div className={styles.fieldGroup}>
                <Input 
                  label="Full Name" 
                  placeholder="Enter name" 
                  value={proxyName}
                  onChange={(e) => setProxyName(e.target.value)}
                />
                <Input 
                  label="Phone Number" 
                  placeholder="Enter phone number" 
                  value={proxyPhone}
                  onChange={(e) => setProxyPhone(e.target.value)}
                />
              </div>
              <div className={styles.actions}>
                <Button variant="outline" className={styles.backBtn} onClick={prevStep}>Back</Button>
                <Button className={styles.continueBtn} onClick={nextStep}>Send Invite</Button>
              </div>
              <div style={{ textAlign: 'center', marginTop: '16px' }}>
                <Button variant="ghost" size="sm" onClick={nextStep}>Skip for now</Button>
              </div>
            </div>
          )}

          {step === 6 && (
            <div className={styles.stepContent}>
              <div className={styles.successIcon}><CheckCircle2 size={48} /></div>
              <div className={styles.contentHeader}>
                <h1 className={styles.title}>You&apos;re all set!</h1>
                <p className={styles.subtitle}>Your project is ready and waiting for the first site update.</p>
              </div>
              <div style={{ marginBottom: '32px' }}>
                <Card variant="outlined" padding="md">
                  <div className={styles.summaryList}>
                    <div className={styles.summaryItem}>
                      <Building2 size={16} className={styles.summaryIcon} />
                      <div className={styles.summaryValue}>{projectName}</div>
                    </div>
                    <div className={styles.summaryItem}>
                      <MapPin size={16} className={styles.summaryIcon} />
                      <div className={styles.summaryValue}>{location}</div>
                    </div>
                    <div className={styles.summaryItem}>
                      <ClipboardList size={16} className={styles.summaryIcon} />
                      <div className={styles.summaryValue}>
                        {milestones.length - Math.max(0, milestones.findIndex(m => m.id === startMilestoneId))} Milestones
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              <Button fullWidth size="lg" loading={loading} onClick={handleComplete}>
                Complete Setup
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
