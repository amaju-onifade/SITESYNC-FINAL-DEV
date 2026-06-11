'use client'

import { useState } from 'react'
import styles from './styles.module.css'

type GhostOverlayProps = {
  benchmarkUrl: string
  capturedUrl?: string
}

export function GhostOverlay({ benchmarkUrl, capturedUrl }: GhostOverlayProps) {
  const [opacity, setOpacity] = useState(0.3)

  return (
    <div className={styles.container}>
      <div className={styles.viewer}>
        <img src={benchmarkUrl} alt="Benchmark reference" className={styles.benchmark} />

        {capturedUrl && (
          <img
            src={capturedUrl}
            alt="Captured progress"
            className={styles.capture}
            style={{ opacity }}
          />
        )}
      </div>

      <div className={styles.slider}>
        <label className={styles.label}>
          Overlay Opacity: {Math.round(opacity * 100)}%
        </label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={opacity}
          onChange={(e) => setOpacity(parseFloat(e.target.value))}
          className={styles.range}
        />
      </div>
    </div>
  )
}
