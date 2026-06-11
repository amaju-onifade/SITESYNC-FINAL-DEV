'use client'

import { useEffect } from 'react'
import { getQueuedCaptures, removeQueuedCapture } from '@/lib/indexedDb'

export function OnlineSync() {
  useEffect(() => {
    const syncQueued = async () => {
      if (!navigator.onLine) return

      const queued = await getQueuedCaptures()
      if (queued.length === 0) return

      for (const item of queued) {
        try {
          const formData = new FormData()
          formData.append('media', item.mediaBlob, `offline_capture_${Date.now()}.jpg`)
          if (item.metadata?.gpsLat) formData.append('gpsLat', String(item.metadata.gpsLat))
          if (item.metadata?.gpsLng) formData.append('gpsLng', String(item.metadata.gpsLng))
          formData.append('gpsManual', String(item.metadata?.gpsManual ?? false))
          formData.append('deviceTimestamp', item.metadata?.deviceTimestamp || new Date().toISOString())

          const res = await fetch(`/api/projects/${item.projectId}/milestones/${item.milestoneId}/capture`, {
            method: 'POST',
            body: formData,
          })

          if (res.ok) {
            const data = await res.json()
            fetch('/api/process-media', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ progressUpdateId: data.progressUpdate.id }),
            }).catch(() => {})

            await removeQueuedCapture(item.id)
          }
        } catch {
          // Will retry on next online event
        }
      }
    }

    const handleOnline = () => {
      syncQueued()
    }

    window.addEventListener('online', handleOnline)

    syncQueued()

    return () => window.removeEventListener('online', handleOnline)
  }, [])

  return null
}
