'use client'

import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import styles from './styles.module.css'

type MapPickerProps = {
  lat: string
  lng: string
  onLatChange: (val: string) => void
  onLngChange: (val: string) => void
}

export function MapPicker({ lat, lng, onLatChange, onLngChange }: MapPickerProps) {
  const mapRef = useRef<L.Map | null>(null)
  const markerRef = useRef<L.Marker | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && !mapRef.current) {
      const defaultLat = lat ? parseFloat(lat) : 6.5244
      const defaultLng = lng ? parseFloat(lng) : 3.3792

      const map = L.map(containerRef.current).setView([defaultLat, defaultLng], 13)

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map)

      const marker = L.marker([defaultLat, defaultLng], { draggable: true }).addTo(map)

      marker.on('dragend', () => {
        const pos = marker.getLatLng()
        onLatChange(pos.lat.toFixed(6))
        onLngChange(pos.lng.toFixed(6))
      })

      map.on('click', (e: L.LeafletMouseEvent) => {
        marker.setLatLng(e.latlng)
        onLatChange(e.latlng.lat.toFixed(6))
        onLngChange(e.latlng.lng.toFixed(6))
      })

      mapRef.current = map
      markerRef.current = marker
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  useEffect(() => {
    const mlat = parseFloat(lat)
    const mlng = parseFloat(lng)
    if (markerRef.current && mapRef.current && !isNaN(mlat) && !isNaN(mlng)) {
      markerRef.current.setLatLng([mlat, mlng])
      mapRef.current.setView([mlat, mlng], mapRef.current.getZoom())
    }
  }, [lat, lng])

  return <div ref={containerRef} className={styles.map} />
}
