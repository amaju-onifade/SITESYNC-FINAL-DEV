'use client'

import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import styles from './home.module.css'

export default function HomePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'authenticated') {
      router.push('/dashboard')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner} />
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <h1 className={styles.title}>SiteSync</h1>
        <p className={styles.subtitle}>
          What happens on site, proven to the people who pay for it.
        </p>
        <p className={styles.description}>
          Document site progess. Review anywhere. Instantly.
        </p>
        <div className={styles.actions}>
          <Button onClick={() => router.push('/login')} size="lg">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}
