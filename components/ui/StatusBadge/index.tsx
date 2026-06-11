import styles from './styles.module.css'

type BadgeVariant = 'pending' | 'active' | 'approved' | 'revision' | 'failed' | 'paid' | 'processing'

const variantMap: Record<string, BadgeVariant> = {
  CREATED: 'pending',
  ACTIVE: 'active',
  PENDING: 'pending',
  IN_PROGRESS: 'processing',
  AWAITING_REVIEW: 'processing',
  APPROVED: 'approved',
  REVISION_REQUESTED: 'revision',
  COMPLETED: 'approved',
  FAILED: 'failed',
  PAID: 'paid',
  PENDING_REVIEW: 'processing',
  QUEUED: 'processing',
}

type StatusBadgeProps = {
  status: string
  label?: string
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const variant = variantMap[status] || 'pending'
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {label || status.replace(/_/g, ' ')}
    </span>
  )
}
