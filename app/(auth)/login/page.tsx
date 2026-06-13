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
  const [nameDone, setNameDone] = useState(false)
  const [email, setEmail] = useState('')
  const [emailDone, setEmailDone] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordDone, setPasswordDone] = useState(false)
  const [role, setRole] = useState<'OWNER' | 'SUPERVISOR'>('OWNER')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [loading, setLoading] = useState(false)

  const switchToRegister = () => { 
    setMode('register')
    setStep(1)
    setErrors({})
    setNameDone(false)
    setEmailDone(false)
    setPasswordDone(false)
  }
  const switchToLogin = () => { 
    setMode('login')
    setStep(1)
    setErrors({})
    setNameDone(false)
    setEmailDone(false)
    setPasswordDone(false)
  }

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { [key: string]: string } = {}
    if (!name.trim()) {
      newErrors.name = 'This field cannot be empty'
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    if (!email.trim()) newErrors.email = 'This field cannot be empty'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setErrors({})
    setStep(2)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: { [key: string]: string } = {}
    if (!email.trim()) newErrors.email = 'This field cannot be empty'
    if (!password.trim()) newErrors.password = 'This field cannot be empty'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    setErrors({})

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      setErrors({ form: 'Invalid email or password' })
      setLoading(false)
    } else {
      router.push('/dashboard')
    }
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!password.trim()) {
      setErrors({ password: 'This field cannot be empty' })
      return
    }

    setLoading(true)
    setErrors({})

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role }),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrors({ form: data.error || 'Registration failed' })
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
      setErrors({ form: 'Registration failed. Please try again.' })
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
            <form onSubmit={handleLogin} className={styles.form} noValidate>
                <Input
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    const val = e.target.value
                    setEmail(val)
                    if (val.trim() && (!val.includes('@') || !val.includes('.'))) {
                      setErrors((prev) => ({ ...prev, email: 'Enter A Valid Email Address' }))
                      setEmailDone(false)
                    } else if (val.trim().includes('@') && val.trim().includes('.')) {
                      setErrors((prev) => {
                        const { email, ...rest } = prev
                        return rest
                      })
                      setEmailDone(true)
                    } else {
                      setErrors((prev) => {
                        const { email, ...rest } = prev
                        return rest
                      })
                    }
                  }}
                  onBlur={() => {
                    if (!email.trim()) {
                      setErrors((prev) => ({ ...prev, email: 'This field cannot be empty' }))
                      setEmailDone(false)
                    } else if (email.trim().includes('@') && email.trim().includes('.')) {
                      setEmailDone(true)
                    }
                  }}
                  style={emailDone ? { backgroundColor: 'var(--color-inverse-on-surface)' } : {}}
                  error={errors.email}
                  required
                  autoFocus
                />
              <Input
                label="Enter Password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  const val = e.target.value
                  setPassword(val)
                  if (val.trim().length >= 8) {
                    setPasswordDone(true)
                  } else {
                    setPasswordDone(false)
                  }
                }}
                onBlur={() => {
                  if (!password.trim()) {
                    setErrors((prev) => ({ ...prev, password: 'This field cannot be empty' }))
                    setPasswordDone(false)
                  } else if (password.trim().length >= 8) {
                    setPasswordDone(true)
                  }
                }}
                style={passwordDone ? { backgroundColor: 'var(--color-inverse-on-surface)' } : {}}
                error={errors.password}
                required
              />
              {errors.form && <p className={styles.error}>{errors.form}</p>}
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
              <form onSubmit={handleContinue} className={styles.form} noValidate>
                <Input
                  label="Enter Full Name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => {
                    const val = e.target.value
                    setName(val)
                    if (val.trim() && val.trim().length < 2) {
                      setErrors((prev) => ({ ...prev, name: 'Name must be at least 2 characters' }))
                      setNameDone(false)
                    } else {
                      setErrors((prev) => {
                        const { name, ...rest } = prev
                        return rest
                      })
                      if (val.trim().length >= 2) setNameDone(true)
                    }
                  }}
                  onBlur={() => {
                    if (!name.trim()) {
                      setErrors((prev) => ({ ...prev, name: 'This field cannot be empty' }))
                      setNameDone(false)
                    } else if (name.trim().length >= 2) {
                      setNameDone(true)
                    }
                  }}
                  style={nameDone ? { backgroundColor: 'var(--color-inverse-on-surface)' } : {}}
                  error={errors.name}
                  required
                  autoFocus
                />
                <Input
                  label="Enter Email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    const val = e.target.value
                    setEmail(val)
                    if (val.trim() && (!val.includes('@') || !val.includes('.'))) {
                      setErrors((prev) => ({ ...prev, email: 'Enter A Valid Email Address' }))
                      setEmailDone(false)
                    } else if (val.trim().includes('@') && val.trim().includes('.')) {
                      setErrors((prev) => {
                        const { email, ...rest } = prev
                        return rest
                      })
                      setEmailDone(true)
                    } else {
                      setErrors((prev) => {
                        const { email, ...rest } = prev
                        return rest
                      })
                    }
                  }}
                  onBlur={() => {
                    if (!email.trim()) {
                      setErrors((prev) => ({ ...prev, email: 'This field cannot be empty' }))
                      setEmailDone(false)
                    } else if (email.trim().includes('@') && email.trim().includes('.')) {
                      setEmailDone(true)
                    }
                  }}
                  style={emailDone ? { backgroundColor: 'var(--color-inverse-on-surface)' } : {}}
                  error={errors.email}
                  required
                />
                {errors.form && <p className={styles.error}>{errors.form}</p>}
                <Button type="submit" fullWidth>
                  Continue <ArrowRight size={16} style={{ marginLeft: '6px', verticalAlign: 'middle' }} />
                </Button>
              </form>
            ) : (
              <form onSubmit={handleRegister} className={styles.form} noValidate>
                <Input
                  label="Choose Password"
                  type="password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => {
                    const val = e.target.value
                    setPassword(val)
                    if (val.trim().length >= 8) {
                      setPasswordDone(true)
                    } else {
                      setPasswordDone(false)
                    }
                  }}
                  onBlur={() => {
                    if (!password.trim()) {
                      setErrors((prev) => ({ ...prev, password: 'This field cannot be empty' }))
                      setPasswordDone(false)
                    } else if (password.trim().length >= 8) {
                      setPasswordDone(true)
                    }
                  }}
                  style={passwordDone ? { backgroundColor: 'var(--color-inverse-on-surface)' } : {}}
                  required
                  minLength={8}
                  autoFocus
                  error={errors.password}
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
                {errors.form && <p className={styles.error}>{errors.form}</p>}
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
                onClick={() => { setStep(1); setErrors({}) }}
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
