'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import styles from './styles.module.css'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [emailDone, setEmailDone] = useState(false)
  const [errors, setErrors] = useState<{ email?: string; form?: string }>({})
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [devResetLink, setDevResetLink] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    if (!email.trim()) {
      setErrors({ email: 'This field cannot be empty' })
      return
    }
    if (!email.includes('@') || !email.includes('.')) {
      setErrors({ email: 'Enter A Valid Email Address' })
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      const data = await res.json()
      if (res.ok) {
        setSent(true)
        if (data.resetLink) setDevResetLink(data.resetLink)
      } else {
        setErrors({ form: data.message || 'Something went wrong' })
      }
    } catch {
      setErrors({ form: 'Something went wrong' })
    }
    setLoading(false)
  }

  return (
    <div className={styles.page}>
      <div className={styles.logo}>SiteSync</div>
      <Card padding="lg">
        {!sent ? (
          <>
            <h1 className={styles.title}>Forgot Password</h1>
            <p className={styles.subtitle}>Enter your email to receive a password reset link.</p>
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => {
                  const val = e.target.value
                  setEmail(val)
                  if (val.trim() && (!val.includes('@') || !val.includes('.'))) {
                    setErrors((prev) => ({ ...prev, email: 'Enter A Valid Email Address' }))
                    setEmailDone(false)
                  } else if (val.trim().includes('@') && val.trim().includes('.')) {
                    setErrors((prev) => { const { email, ...rest } = prev; return rest })
                    setEmailDone(true)
                  } else {
                    setErrors((prev) => { const { email, ...rest } = prev; return rest })
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
              {errors.form && <p className={styles.error}>{errors.form}</p>}
              <Button type="submit" fullWidth loading={loading}>
                Send Reset Link
              </Button>
            </form>
          </>
        ) : (
          <div className={styles.sentBox}>
            <div className={styles.successIcon}>✓</div>
            <h1 className={styles.title}>Check Your Email</h1>
            <p className={styles.subtitle}>
              If an account with <strong>{email}</strong> exists, a reset link has been sent.
            </p>
            {devResetLink && (
              <div className={styles.devBox}>
                <p className={styles.devLabel}>⚙ Dev Mode — Reset Link</p>
                <a href={devResetLink} className={styles.devLink} target="_blank" rel="noopener noreferrer">
                  Click here to reset password
                </a>
              </div>
            )}
            <p className={styles.hint}>Didn&apos;t receive it? Check your spam or try again.</p>
            <Button variant="outline" fullWidth onClick={() => { setSent(false); setEmail(''); setDevResetLink('') }}>
              Try Again
            </Button>
          </div>
        )}
        <p className={styles.footer}>
          <Link href="/login" className={styles.link}>Back to Sign In</Link>
        </p>
      </Card>
    </div>
  )
}
