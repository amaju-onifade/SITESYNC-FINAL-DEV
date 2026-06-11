'use client'

import { useRef, useState, useCallback } from 'react'
import styles from './styles.module.css'

type CameraProps = {
  onCapture: (blob: Blob) => void
  benchmarkUrl?: string
}

export function Camera({ onCapture, benchmarkUrl }: CameraProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [streaming, setStreaming] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const startCamera = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1080 }, height: { ideal: 1920 } },
        audio: false,
      })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        videoRef.current.play()
        setStreaming(true)
        setError(null)
      }
    } catch (err) {
      if (err instanceof DOMException && err.name === 'NotAllowedError') {
        setError('Camera permission denied. Please allow camera access in your browser settings.')
      } else {
        setError('Could not access camera. Please check your device.')
      }
    }
  }, [])

  const stopCamera = useCallback(() => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      stream.getTracks().forEach((track) => track.stop())
      videoRef.current.srcObject = null
      setStreaming(false)
    }
  }, [])

  const capture = useCallback(() => {
    const video = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas) return

    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.drawImage(video, 0, 0)

    canvas.toBlob(
      (blob) => {
        if (blob) onCapture(blob)
      },
      'image/jpeg',
      0.85
    )
  }, [onCapture])

  return (
    <div className={styles.container}>
      {error && (
        <div className={styles.error}>
          <p>{error}</p>
          <p className={styles.errorHint}>On Android: Go to Settings &gt; Apps &gt; Browser &gt; Permissions &gt; Camera</p>
        </div>
      )}

      <div className={styles.viewfinder}>
        <video ref={videoRef} className={styles.video} playsInline />

        {benchmarkUrl && (
          <img
            src={benchmarkUrl}
            alt="Benchmark overlay"
            className={styles.overlay}
            style={{ opacity: 0.3 }}
          />
        )}

        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>

      <div className={styles.controls}>
        {!streaming ? (
          <button className={styles.startBtn} onClick={startCamera}>
            Start Camera
          </button>
        ) : (
          <>
            <button className={styles.captureBtn} onClick={capture}>
              <span className={styles.captureCircle} />
            </button>
            <button className={styles.stopBtn} onClick={stopCamera}>
              Stop
            </button>
          </>
        )}
      </div>
    </div>
  )
}
