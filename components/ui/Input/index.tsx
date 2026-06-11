'use client'

import { forwardRef } from 'react'
import styles from './styles.module.css'

type InputProps = {
  label?: string
  error?: string
  helpText?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ label, error, helpText, className = '', id, ...props }, ref) {
    const inputId = id ?? props.name ?? (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined)

    return (
      <div className={`${styles.field} ${className}`}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`${styles.input} ${error ? styles.inputError : ''}`}
          {...props}
        />
        {error && <p className={styles.error}>{error}</p>}
        {helpText && !error && <p className={styles.help}>{helpText}</p>}
      </div>
    )
  }
)
