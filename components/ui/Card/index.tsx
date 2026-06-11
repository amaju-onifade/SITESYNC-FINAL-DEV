import styles from './styles.module.css'

type CardProps = {
  children: React.ReactNode
  variant?: 'default' | 'elevated' | 'outlined'
  padding?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
}

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  onClick,
  className = '',
}: CardProps) {
  return (
    <div
      className={`${styles.card} ${styles[variant]} ${styles[padding]} ${onClick ? styles.clickable : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  )
}
