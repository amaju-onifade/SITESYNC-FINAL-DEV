'use client'

import { ReactNode } from 'react'
import { NavBar } from '@/components/NavBar'
import styles from './layout.module.css'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.content}>{children}</main>
    </div>
  )
}
