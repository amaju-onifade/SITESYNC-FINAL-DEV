'use client'

import { useRef, useEffect } from 'react'
import { getQueuedCaptures, removeQueuedCapture, updateQueuedCapture } from '@/lib/indexedDb'

export function OnlineSync() {
  const syncingRef = useRef(false)

  useEffect(() => {
    const syncQueued = async () => {
      if (!navigator.onLine || syncingRef.current) return
      syncingRef.current = true

      try {
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
            if (item.metadata?.note) formData.append('note', item.metadata.note)

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
            } else if (res.status === 401) {
              // Authentication required - stop retrying for this item for now
              // We could mark it as 'REQUIRES_AUTH' but for now let's just break the loop
              // so we don't spam the server
              console.warn('Sync failed: Unauthorized. Waiting for login.')
              break
            }
          } catch (err) {
            console.error('Sync error for item:', item.id, err)
          }
        }
      } finally {
        syncingRef.current = false
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
