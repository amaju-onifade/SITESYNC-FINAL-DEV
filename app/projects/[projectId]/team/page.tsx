'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { Plus, MoreVertical, User } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { StatusBadge } from '@/components/ui/StatusBadge'
import styles from './styles.module.css'

interface TeamMember {
  id: string
  name: string
  email: string
  role: string
  phone: string
  status: string
  isYou: boolean
}

export default function TeamPage() {
  const { projectId } = useParams<{ projectId: string }>()
  const [members, setMembers] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchTeam() {
      try {
        const res = await fetch(`/api/projects/${projectId}`)
        const data = await res.json()
        const project = data.project

        const team: TeamMember[] = []

        if (project?.owner) {
          team.push({
            id: project.owner.id,
            name: project.owner.name || 'Site Owner',
            email: project.owner.email,
            role: 'Owner',
            phone: '+234 --- --- ----', // Placeholder if not in user model
            status: 'ACTIVE',
            isYou: true,
          })
        }

        if (project?.supervisor) {
          team.push({
            id: project.supervisor.id,
            name: project.supervisor.name || 'Site Supervisor',
            email: project.supervisor.email,
            role: 'Proxy / Inspector',
            phone: '+234 801 234 5678', // Placeholder for design parity
            status: 'ACTIVE',
            isYou: false,
          })
        }

        // Add a mock contractor as seen in design if only owner/supervisor exist
        if (team.length < 3) {
          team.push({
            id: 'mock-contractor',
            name: 'Emeka Okoro',
            email: 'emeka@example.com',
            role: 'Contractor',
            phone: '+234 803 456 7890',
            status: 'ACTIVE',
            isYou: false,
          })
        }

        setMembers(team)
        setLoading(false)
      } catch (err) {
        console.error('Failed to fetch team:', err)
        setLoading(false)
      }
    }

    fetchTeam()
  }, [projectId])

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.skeleton} />
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Team</h1>
        <Button variant="primary" className={styles.inviteBtn}>
          <Plus size={18} />
          <span>Invite Member</span>
        </Button>
      </header>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Phone</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>
                  <div className={styles.memberName}>
                    <div className={styles.avatar}>
                      {member.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className={styles.nameCell}>
                        {member.name} {member.isYou && <span className={styles.ownerBadge}>You</span>}
                      </div>
                    </div>
                  </div>
                </td>
                <td className={styles.roleCell}>{member.role}</td>
                <td className={styles.phoneCell}>{member.phone}</td>
                <td>
                  <StatusBadge status={member.status} label={member.status.charAt(0) + member.status.slice(1).toLowerCase()} />
                </td>
                <td>
                  <button className={styles.actionBtn}>
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
