import styles from './styles.module.css'

type SkeletonProps = {
  variant?: 'text' | 'rect' | 'circle'
  width?: string | number
  height?: string | number
}

export function Skeleton({ variant = 'text', width, height }: SkeletonProps) {
  return (
    <div
      className={`${styles.skeleton} ${styles[variant]}`}
      style={{ width, height }}
      aria-hidden="true"
    />
  )
}

export function CardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Skeleton variant="text" width="60%" height={20} />
        <Skeleton variant="text" width={80} height={24} />
      </div>
      <Skeleton variant="text" width="40%" height={14} />
      <div className={styles.cardMeta}>
        <Skeleton variant="text" width={100} height={12} />
        <Skeleton variant="text" width={80} height={12} />
      </div>
    </div>
  )
}

export function PageSkeleton() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <Skeleton variant="text" width="50%" height={32} />
        <Skeleton variant="rect" width={120} height={40} />
      </div>
      <div className={styles.pageBody}>
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </div>
  )
}

export function MilestoneDetailSkeleton() {
  return (
    <div className={styles.page}>
      <div className={styles.pageHeader}>
        <div>
          <Skeleton variant="text" width="60%" height={32} />
          <Skeleton variant="text" width="40%" height={16} />
        </div>
        <Skeleton variant="rect" width={100} height={28} />
      </div>
      <Skeleton variant="rect" width="100%" height={200} />
      <div className={styles.pageHeader}>
        <Skeleton variant="text" width="40%" height={24} />
      </div>
      <Skeleton variant="rect" width="100%" height={120} />
    </div>
  )
}
