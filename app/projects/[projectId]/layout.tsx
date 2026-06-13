'use client'

import { ReactNode } from 'react'
import { NavBar } from '@/components/NavBar'
import { ProjectSidebar } from './components/ProjectSidebar'
import styles from './layout.module.css'

export default function ProjectLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.page}>
      <NavBar />
      <div className={styles.body}>
        <ProjectSidebar />
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  )
}
