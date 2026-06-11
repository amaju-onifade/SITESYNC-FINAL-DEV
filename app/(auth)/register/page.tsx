'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'
import styles from './styles.module.css'

export default function RegisterPage() {
  const router = useRouter()
  const [step, setStep] = useState<1 | 2>(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'OWNER' | 'SUPERVISOR'>('OWNER')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!name.trim()) {
      setError('Please enter your name')
      return
    }
    if (!email.trim()) {
      setError('Please enter your email')
      return
    }
    setStep(2)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Registration failed')
        setLoading(false)
        return
      }

      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.ok) {
        router.push('/dashboard')
      }
    } catch {
      setError('Registration failed. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.logo}>SiteSync</div>
      <div style={{ width: '100%', maxWidth: '480px' }}>
        <Card padding="lg">
          <h1 className={styles.title}>Create Account</h1>
          <p className={styles.subtitle}>Join SiteSync</p>

          <div className={styles.stepIndicator}>
            <div className={`${styles.stepDot} ${step >= 1 ? styles.stepDotActive : ''}`} />
            <div className={styles.stepLine} />
            <div className={`${styles.stepDot} ${step >= 2 ? styles.stepDotActive : ''}`} />
          </div>

          {step === 1 ? (
            <form onSubmit={handleContinue} className={styles.form}>
              <Input
                label="Name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {error && <p className={styles.error}>{error}</p>}
              <Button type="submit" fullWidth>
                Continue <ArrowRight size={16} style={{ marginLeft: '6px', verticalAlign: 'middle' }} />
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <Input
                label="Choose Password"
                type="password"
                placeholder="At least 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />

              <div className={styles.roleGroup}>
                <label className={styles.roleLabel}>I am a...</label>
                <div className={styles.roles}>
                  <button
                    type="button"
                    className={`${styles.roleBtn} ${role === 'OWNER' ? styles.active : ''}`}
                    onClick={() => setRole('OWNER')}
                  >
                    Project Owner
                  </button>
                  <button
                    type="button"
                    className={`${styles.roleBtn} ${role === 'SUPERVISOR' ? styles.active : ''}`}
                    onClick={() => setRole('SUPERVISOR')}
                  >
                    Site Supervisor
                  </button>
                </div>
              </div>

              {error && <p className={styles.error}>{error}</p>}

              <Button type="submit" fullWidth loading={loading}>
                Create Account
              </Button>
            </form>
          )}

          <p className={styles.footer}>
            Already have an account?{' '}
            <a href="/login" className={styles.link}>Sign In</a>
          </p>

          {step === 2 && (
            <button
              type="button"
              className={styles.backBtn}
              onClick={() => { setStep(1); setError('') }}
            >
              Back
            </button>
          )}
        </Card>
      </div>
    </div>
  )
}
