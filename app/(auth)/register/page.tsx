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
  const [nameDone, setNameDone] = useState(false)
  const [email, setEmail] = useState('')
  const [emailDone, setEmailDone] = useState(false)
  const [password, setPassword] = useState('')
  const [passwordDone, setPasswordDone] = useState(false)
  const [role, setRole] = useState<'OWNER' | 'SUPERVISOR'>('OWNER')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [loading, setLoading] = useState(false)

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

  const validatePassword = (pw: string) => {
    if (!pw) return 'This field cannot be empty'
    if (pw.length < 8) return 'Minimum 8 characters'
    if (!/[A-Z]/.test(pw)) return 'Must contain an uppercase letter'
    if (!/[a-z]/.test(pw)) return 'Must contain a lowercase letter'
    if (!/[0-9]/.test(pw)) return 'Must contain a number'
    if (!/[^A-Za-z0-9]/.test(pw)) return 'Must contain a special character'
    return ''
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const pwError = validatePassword(password.trim())
    if (pwError) {
      setErrors({ password: pwError })
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
            <form onSubmit={handleContinue} className={styles.form} noValidate>
              <Input
                label="Name"
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
              />
              {errors.form && <p className={styles.error}>{errors.form}</p>}
              <Button type="submit" fullWidth>
                Continue <ArrowRight size={24} style={{ marginLeft: '6px', verticalAlign: 'middle' }} />
              </Button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.passwordField}>
                <label className={styles.passwordLabel}>Choose Password</label>
                <input
                  className={`${styles.passwordInput} ${errors.password ? styles.passwordInputError : ''}`}
                  type="password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    setPasswordDone(false)
                  }}
                  onBlur={() => {
                    const err = validatePassword(password.trim())
                    if (err) {
                      setErrors((prev) => ({ ...prev, password: err }))
                      setPasswordDone(false)
                    } else {
                      setPasswordDone(true)
                    }
                  }}
                  style={passwordDone ? { backgroundColor: 'var(--color-inverse-on-surface)' } : {}}
                  required
                  autoFocus
                />
                {errors.password && <p className={styles.errorMsg}>{errors.password}</p>}
                {password.length > 0 && (
                  <div className={styles.requirements}>
                    {!/[A-Z]/.test(password) && <span className={styles.req}>○ At least one uppercase letter</span>}
                    {/[A-Z]/.test(password) && !/[a-z]/.test(password) && <span className={styles.req}>○ At least one lowercase letter</span>}
                    {/[A-Z]/.test(password) && /[a-z]/.test(password) && !/[0-9]/.test(password) && <span className={styles.req}>○ At least one number</span>}
                    {/[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && !/[^A-Za-z0-9]/.test(password) && <span className={styles.req}>○ At least one special character</span>}
                    {/[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password) && /[^A-Za-z0-9]/.test(password) && password.length < 8 && <span className={styles.req}>○ At least 8 characters</span>}
                  </div>
                )}
              </div>

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

              {errors.form && <p className={styles.error}>{errors.form}</p>}

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
              onClick={() => { setStep(1); setErrors({}) }}
            >
              Back
            </button>
          )}
        </Card>
      </div>
    </div>
  )
}
