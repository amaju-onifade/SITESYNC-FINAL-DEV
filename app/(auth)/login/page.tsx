'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'
import styles from './styles.module.css'

export default function AuthPage() {
  const router = useRouter()
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [step, setStep] = useState<1 | 2>(1)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<'OWNER' | 'SUPERVISOR'>('OWNER')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const switchToRegister = () => { setMode('register'); setStep(1); setError('') }
  const switchToLogin = () => { setMode('login'); setStep(1); setError('') }

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    if (!name.trim()) { setError('Please enter your name'); return }
    if (!email.trim()) { setError('Please enter your email'); return }
    setStep(2)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      setError('Invalid email or password')
      setLoading(false)
    } else {
      router.push('/dashboard')
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
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
      <Card padding="lg">
        {mode === 'login' ? (
          <>
            <h1 className={styles.title}>Sign In</h1>
            <p className={styles.subtitle}>SiteSync Construction Verification</p>
            <form onSubmit={handleLogin} className={styles.form}>
                <Input
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                />
              <Input
                label="Enter Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className={styles.error}>{error}</p>}
              <Button type="submit" fullWidth loading={loading}>
                Sign In
              </Button>
            </form>
            <p className={styles.footer}>
              Don&apos;t have an account?{' '}
              <button className={styles.link} onClick={switchToRegister}>
                Register
              </button>
            </p>
          </>
        ) : (
          <>
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
                  label="Enter Full Name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoFocus
                />
                <Input
                  label="Enter Email"
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
              <form onSubmit={handleRegister} className={styles.form}>
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
                  <label className={styles.roleLabel}>Select your Role</label>
                  <div className={styles.roles}>
                    <label className={`${styles.radioLabel} ${role === 'OWNER' ? styles.radioActive : ''}`}>
                      <input
                        type="radio"
                        name="role"
                        value="OWNER"
                        checked={role === 'OWNER'}
                        onChange={() => setRole('OWNER')}
                        className={styles.radioInput}
                      />
                      Project Owner
                    </label>
                    <label className={`${styles.radioLabel} ${role === 'SUPERVISOR' ? styles.radioActive : ''}`}>
                      <input
                        type="radio"
                        name="role"
                        value="SUPERVISOR"
                        checked={role === 'SUPERVISOR'}
                        onChange={() => setRole('SUPERVISOR')}
                        className={styles.radioInput}
                      />
                      Site Supervisor
                    </label>
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
              <button className={styles.link} onClick={switchToLogin}>
                Sign In
              </button>
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
          </>
        )}
      </Card>
    </div>
  )
}
