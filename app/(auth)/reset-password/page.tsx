'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import styles from './styles.module.css'

function ResetForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token') || ''

  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!password || password.length < 8) {
      setError('Password must be at least 8 characters')
      return
    }
    if (password !== confirm) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      })
      const data = await res.json()
      if (res.ok) {
        setDone(true)
      } else {
        setError(data.error || 'Something went wrong')
      }
    } catch {
      setError('Something went wrong')
    }
    setLoading(false)
  }

  if (!token) {
    return (
      <div className={styles.page}>
        <Card padding="lg">
          <p className={styles.error}>Invalid reset link. No token provided.</p>
          <p className={styles.footer}><Link href="/login" className={styles.link}>Back to Sign In</Link></p>
        </Card>
      </div>
    )
  }

  if (done) {
    return (
      <div className={styles.page}>
        <Card padding="lg">
          <h1 className={styles.title}>Password Reset</h1>
          <p className={styles.success}>Your password has been reset successfully.</p>
          <p className={styles.footer}><Link href="/login" className={styles.link}>Sign In</Link></p>
        </Card>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.logo}>SiteSync</div>
      <Card padding="lg">
        <h1 className={styles.title}>Reset Password</h1>
        <p className={styles.subtitle}>Enter your new password.</p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="password"
            placeholder="New password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Confirm new password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          {error && <p className={styles.error}>{error}</p>}
          <Button type="submit" fullWidth loading={loading}>
            Reset Password
          </Button>
        </form>
        <p className={styles.footer}>
          <Link href="/login" className={styles.link}>Back to Sign In</Link>
        </p>
      </Card>
    </div>
  )
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className={styles.page}><p>Loading...</p></div>}>
      <ResetForm />
    </Suspense>
  )
}
