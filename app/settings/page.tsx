'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { NavBar } from '@/components/NavBar'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { User, Building2, Bell, Lock, CreditCard } from 'lucide-react'
import { PageSkeleton } from '@/components/ui/Skeleton'
import styles from './styles.module.css'

export default function SettingsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('profile')
  const [fullName, setFullName] = useState(session?.user?.name || 'Chioma Okafor')
  const [email, setEmail] = useState(session?.user?.email || 'chioma.okafor@example.com')
  const [phone, setPhone] = useState('+234 901 234 5678')
  const [timezone, setTimezone] = useState('(GMT+1) West Africa Time (Lagos)')

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return <PageSkeleton />
  }

  const initials = fullName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <>
      <NavBar />
      <div className={styles.page}>
        <div className={styles.header}>
          <h1 className={styles.title}>Settings</h1>
        </div>

        <div className={styles.container}>
          <aside className={styles.sidebar}>
            <nav className={styles.menu}>
              <button
                className={`${styles.menuItem} ${activeTab === 'profile' ? styles.menuItemActive : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <div className={styles.menuIcon}><User size={18} /></div>
                Profile Information
              </button>
              <button
                className={`${styles.menuItem} ${activeTab === 'company' ? styles.menuItemActive : ''}`}
                onClick={() => setActiveTab('company')}
              >
                <div className={styles.menuIcon}><Building2 size={18} /></div>
                Company Details
              </button>
              <button
                className={`${styles.menuItem} ${activeTab === 'notifications' ? styles.menuItemActive : ''}`}
                onClick={() => setActiveTab('notifications')}
              >
                <div className={styles.menuIcon}><Bell size={18} /></div>
                Notifications
              </button>
              <button
                className={`${styles.menuItem} ${activeTab === 'security' ? styles.menuItemActive : ''}`}
                onClick={() => setActiveTab('security')}
              >
                <div className={styles.menuIcon}><Lock size={18} /></div>
                Security & Privacy
              </button>
              <button
                className={`${styles.menuItem} ${activeTab === 'payment' ? styles.menuItemActive : ''}`}
                onClick={() => setActiveTab('payment')}
              >
                <div className={styles.menuIcon}><CreditCard size={18} /></div>
                Billing & Payments
              </button>
            </nav>
          </aside>

          <main className={styles.content}>
            {activeTab === 'profile' && (
              <Card padding="lg">
                <div className={styles.contentHeader}>
                  <div>
                    <h2 className={styles.contentTitle}>Profile Information</h2>
                  </div>
                  <div className={styles.profilePhoto}>
                    <div className={styles.photoPlaceholder}>{initials}</div>
                    <Button size="sm" variant="secondary">Change Photo</Button>
                  </div>
                </div>

                <div className={styles.formGrid}>
                  <div className={styles.formField}>
                    <label className={styles.formLabel}>Full Name</label>
                    <input
                      className={styles.formInput}
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.formLabel}>Email Address</label>
                    <input
                      className={styles.formInput}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.formLabel}>Phone Number</label>
                    <input
                      className={styles.formInput}
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>

                  <div className={styles.formField}>
                    <label className={styles.formLabel}>Timezone</label>
                    <select
                      className={styles.formInput}
                      value={timezone}
                      onChange={(e) => setTimezone(e.target.value)}
                    >
                      <option value="(GMT+1) West Africa Time (Lagos)">(GMT+1) West Africa Time (Lagos)</option>
                      <option value="(GMT+0) GMT">(GMT+0) GMT</option>
                      <option value="(GMT-5) EST">(GMT-5) EST</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formActions}>
                  <Button onClick={() => alert('Changes saved!')}>Save Changes</Button>
                </div>
              </Card>
            )}

            {activeTab === 'company' && (
              <Card padding="lg">
                <h2 className={styles.contentTitle}>Company Information</h2>
                <p className={styles.placeholder}>Company details and organization settings</p>
              </Card>
            )}

            {activeTab === 'notifications' && (
              <Card padding="lg">
                <h2 className={styles.contentTitle}>Notifications</h2>
                <p className={styles.placeholder}>Manage your notification preferences</p>
              </Card>
            )}

            {activeTab === 'security' && (
              <Card padding="lg">
                <h2 className={styles.contentTitle}>Security</h2>
                <p className={styles.placeholder}>Security settings and password management</p>
              </Card>
            )}

            {activeTab === 'payment' && (
              <Card padding="lg">
                <h2 className={styles.contentTitle}>Payment Methods</h2>
                <p className={styles.placeholder}>Manage your payment methods and billing</p>
              </Card>
            )}
          </main>
        </div>
      </div>
    </>
  )
}
