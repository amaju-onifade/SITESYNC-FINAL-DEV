'use client'

import { useState, useEffect, useRef } from 'react'
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
  Info,
  MapPin,
  Calendar,
  ChevronRight,
  ClipboardList,
  Search,
  Map,
  Navigation,
  Loader2
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'
import styles from './styles.module.css'

type Step = 1 | 2 | 3 | 4 | 5 | 6

interface Milestone {
  id: string
  title: string
  description?: string
}

export default function OnboardingPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [step, setStep] = useState<Step>(1)
  const [loading, setLoading] = useState(false)

  // Form State
  const [role, setRole] = useState<'OWNER' | 'PROXY' | null>(null)
  const [projectName, setProjectName] = useState('')
  const [location, setLocation] = useState('')
  const [projectType, setProjectType] = useState('New Build')
  const [completionDate, setCompletionDate] = useState('')
  const [milestones, setMilestones] = useState<Milestone[]>([
    { id: '1', title: 'Site Prep & Excavation', description: 'Clearing land and digging trenches for the foundation.' },
    { id: '2', title: 'Foundation', description: 'Casting the footings and ground beams.' },
    { id: '3', title: 'Oversite Concrete (German Floor)', description: 'The solid concrete floor slab cast over original ground.' },
    { id: '4', title: 'Blockwork to Lintel Level', description: 'Raising walls up to the height of window/door beams.' },
    { id: '5', title: 'First Floor Decking', description: 'Concrete slab for the first floor level.' },
    { id: '6', title: 'Blockwork to Roof Level', description: 'Completing the walls up to the top.' },
    { id: '7', title: 'Roofing', description: 'Installing trusses and roof covering sheets.' },
    { id: '8', title: 'Plastering & Rendering', description: 'Applying cement finish to internal and external walls.' },
    { id: '9', title: 'Finishing & Fittings', description: 'Tiling, plumbing, electrical, and final painting.' }
  ])
  const [newMilestone, setNewMilestone] = useState('')
  const [startMilestoneId, setStartMilestoneId] = useState<string>('1')
  const [proxyName, setProxyName] = useState('')
  const [proxyPhone, setProxyPhone] = useState('')
  const [proxyEmail, setProxyEmail] = useState('')
  const [proxyRole, setProxyRole] = useState('Proxy / Inspector')

  // Location Details
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('')
  const [locationMethod, setLocationMethod] = useState<'address' | 'coords'>('address')
  const [skipLocation, setSkipLocation] = useState(false)
  const [isGeocoding, setIsGeocoding] = useState(false)
  const [benchmarkFiles, setBenchmarkFiles] = useState<File[]>([])
  const [expandedInfoId, setExpandedInfoId] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  const handleGeocode = async () => {
    if (!location.trim()) return
    setIsGeocoding(true)
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`)
      const data = await res.json()
      if (data && data[0]) {
        setLat(parseFloat(data[0].lat).toFixed(6))
        setLng(parseFloat(data[0].lon).toFixed(6))
        setLocationMethod('coords')
      } else {
        alert('Could not find those coordinates. Please enter them manually.')
      }
    } catch (error) {
      console.error('Geocoding failed:', error)
      alert('Error fetching coordinates. Check your connection.')
    } finally {
      setIsGeocoding(false)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setBenchmarkFiles(prev => [...prev, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setBenchmarkFiles(prev => prev.filter((_, i) => i !== index))
  }

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

      // 0. Update User Role (Owner)
      await fetch('/api/user/role', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: 'OWNER' }),
      })

      // 1. Create Project
      const projectRes = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: projectName,
          address: location,
          geofence: !skipLocation && lat && lng ? {
            type: 'Point',
            coordinates: [parseFloat(lng), parseFloat(lat)],
            radius: 100 // default 100m geofence
          } : null,
          supervisorEmail: proxyEmail,
          milestones: filteredMilestones.map((m, i) => ({ title: m.title, order: i })),
        }),
      })

      if (!projectRes.ok) throw new Error('Failed to create project')
      const { project } = await projectRes.json()

      // 2. Upload Benchmarks
      if (benchmarkFiles.length > 0) {
        for (const file of benchmarkFiles) {
          const formData = new FormData()
          formData.append('file', file)
          formData.append('title', file.name)
          
          await fetch(`/api/projects/${project.id}/benchmarks`, {
            method: 'POST',
            body: formData,
          })
        }
      }
      
      router.push('/dashboard')
    } catch (error) {
      console.error('Onboarding failed:', error)
      alert('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleRoleContinue = async () => {
    if (role === 'PROXY') {
      setLoading(true)
      try {
        const res = await fetch('/api/user/role', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ role: 'SUPERVISOR' }),
        })
        if (!res.ok) throw new Error('Failed to update role')
        router.push('/dashboard')
      } catch (error) {
        console.error('Proxy setup failed:', error)
        alert('Failed to save your role. Please try again.')
      } finally {
        setLoading(false)
      }
    } else {
      nextStep()
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
              </div>
              <Button 
                fullWidth 
                size="lg" 
                onClick={handleRoleContinue} 
                disabled={!role} 
                loading={loading && role === 'PROXY'}
              >
                Continue
              </Button>
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
                
                <div className={styles.locationSection}>
                  <div className={styles.locationTabs}>
                    <button 
                      className={`${styles.locationTab} ${locationMethod === 'address' ? styles.locationTabActive : ''}`}
                      onClick={() => setLocationMethod('address')}
                    >
                      <Search size={14} /> Address Search
                    </button>
                    <button 
                      className={`${styles.locationTab} ${locationMethod === 'coords' ? styles.locationTabActive : ''}`}
                      onClick={() => setLocationMethod('coords')}
                    >
                      <Map size={14} /> GPS Coordinates
                    </button>
                  </div>

                  {locationMethod === 'address' ? (
                    <div className={styles.inputWithAction}>
                      <Input 
                        label="Location / Address" 
                        placeholder="e.g. Lagos, Nigeria" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        disabled={skipLocation}
                      />
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className={styles.actionBtn}
                        onClick={handleGeocode}
                        disabled={!location || skipLocation || isGeocoding}
                        loading={isGeocoding}
                      >
                        {isGeocoding ? <Loader2 className={styles.spin} /> : 'Get GPS'}
                      </Button>
                    </div>
                  ) : (
                    <div className={styles.coordGrid}>
                      <Input 
                        label="Latitude" 
                        placeholder="e.g. 6.5244" 
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                        disabled={skipLocation}
                      />
                      <Input 
                        label="Longitude" 
                        placeholder="e.g. 3.3792" 
                        value={lng}
                        onChange={(e) => setLng(e.target.value)}
                        disabled={skipLocation}
                      />
                    </div>
                  )}

                  <div className={styles.skipOption}>
                    <label className={styles.checkboxLabel}>
                      <input 
                        type="checkbox" 
                        checked={skipLocation} 
                        onChange={(e) => setSkipLocation(e.target.checked)} 
                      />
                      <span>Set location later (Verification required on-site)</span>
                    </label>
                  </div>
                </div>

                <Input 
                  label="Target Completion" 
                  type="date"
                  value={completionDate}
                  onChange={(e) => setCompletionDate(e.target.value)}
                />
              </div>
              <div className={styles.actions}>
                <Button variant="outline" className={styles.backBtn} onClick={prevStep}>Back</Button>
                <Button 
                  className={styles.continueBtn} 
                  onClick={nextStep} 
                  disabled={!projectName || (!location && !skipLocation && (!lat || !lng))}
                >
                  Continue
                </Button>
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
                      <div className={styles.milestoneMain}>
                        <div className={styles.milestoneInfo}>
                          <span className={styles.milestoneTitle}>
                            {i + 1}. {m.title} {isSelected && <span className={styles.startBadge}>Start Here</span>}
                          </span>
                          {m.description && (
                            <button 
                              className={styles.infoWrapper} 
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedInfoId(expandedInfoId === m.id ? null : m.id);
                              }}
                            >
                              <Info size={14} className={styles.infoIcon} />
                            </button>
                          )}
                        </div>
                        {expandedInfoId === m.id && m.description && (
                          <div className={styles.milestoneDescription}>
                            {m.description}
                          </div>
                        )}
                      </div>
                      <button 
                        className={styles.removeBtn}
                        onClick={(e) => { e.stopPropagation(); removeMilestone(m.id) }}
                      >
                        <Trash2 size={16} />
                      </button>
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
              
              <input 
                type="file" 
                multiple 
                hidden 
                ref={fileInputRef} 
                onChange={handleFileSelect}
                accept="image/*,.pdf,.dwg"
              />

              <div 
                className={styles.uploadZone}
                onClick={() => fileInputRef.current?.click()}
              >
                <div className={styles.uploadIcon}><Upload size={40} /></div>
                <div className={styles.uploadText}>Click to upload benchmarks</div>
                <p className={styles.uploadHint}>JPG, PNG, PDF, DWG (Max 20MB)</p>
              </div>

              {benchmarkFiles.length > 0 && (
                <div className={styles.fileList}>
                  {benchmarkFiles.map((file, i) => (
                    <div key={i} className={styles.fileItem}>
                      <span className={styles.fileName}>{file.name}</span>
                      <button 
                        className={styles.fileRemove} 
                        onClick={() => removeFile(i)}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}

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
                <Input 
                  label="Email Address" 
                  type="email"
                  placeholder="supervisor@example.com" 
                  value={proxyEmail}
                  onChange={(e) => setProxyEmail(e.target.value)}
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
                Go to Dashboard
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
