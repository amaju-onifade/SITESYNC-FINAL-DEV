---
description: End-to-end capture flow. Guides supervisor through camera → geofence check → GPS capture → downscale → online/offline upload → ProgressUpdate creation → AI trigger.
---

# Workflow: Capture Flow

## Prerequisites
- Project exists in DB with `status: ACTIVE` and geofence boundary
- Supervisor is logged in and assigned to the project
- Camera permission granted (or instructions shown)

---

## Step 1: Open Camera

```ts
async function openCamera(): Promise<MediaStream> {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "environment", width: { ideal: 1080 } },
      audio: false,
    })
    return stream
  } catch (err) {
    if ((err as DOMException).name === "NotAllowedError") {
      // Show OS-level permission instructions — block until granted
      showCameraPermissionInstructions()
      throw err
    }
    throw err
  }
}
```

UI: Full-screen camera preview with a single capture button. No gallery upload. Minimal UI overlay showing project name and instructions.

---

## Step 2: Check Geofence

Before showing the camera, verify the user is within the project boundary.

```ts
function isInsideGeofence(
  userLat: number,
  userLng: number,
  boundary: { lat: number; lng: number }[]
): boolean {
  // Ray-casting algorithm to check if point is inside polygon
  // or use a helper library (turf.js)
  return pointInPolygon([userLng, userLat], boundary.map(p => [p.lng, p.lat]))
}
```

If outside geofence:
- Show "You are outside the project site. Move closer to capture."
- Block capture until user is inside
- If GPS unavailable, allow manual lat/lng entry with `gps_source: "manual"` flag

---

## Step 3: Capture Photo

- Single photo capture (no video at MVP — simpler, lower bandwidth)
- Resolution: capture at 1080p max
- Store photo as a `Blob` for processing

```ts
function capturePhoto(stream: MediaStream): Promise<Blob> {
  return new Promise((resolve) => {
    const video = document.createElement("video")
    video.srcObject = stream
    video.play()

    const canvas = document.createElement("canvas")
    canvas.width = 1080
    canvas.height = 1080 * (video.videoHeight / video.videoWidth)

    const ctx = canvas.getContext("2d")!
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)

    canvas.toBlob((blob) => resolve(blob!), "image/jpeg", 0.8)
  })
}
```

After capture, show a preview with "Retake" and "Use Photo" buttons.

---

## Step 4: Get GPS Coordinates

```ts
function getCurrentPosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 10000,
    })
  })
}
```

If GPS unavailable:
- Show manual lat/lng input fields
- Flag as `gps_source: "manual"` in the payload

---

## Step 5: Downscale (Already at 1080p)

Capture is already at 1080p from Step 3. No further downscaling needed.

If the media blob exceeds 2MB, re-compress:
```ts
function compressIfNeeded(blob: Blob, videoStream: MediaStream): Promise<Blob> {
  if (blob.size < 2 * 1024 * 1024) return Promise.resolve(blob)
  return capturePhoto(videoStream) // re-draw at lower quality (0.6)
}
```

---

## Step 6: Upload or Queue

Branch based on connectivity:

```
Online  → POST /api/upload-media → return URLs
Offline → enqueue in IndexedDB → auto-sync later
```

```ts
async function handleUpload(photo: Blob, gps: { lat: number; lng: number }, projectId: string) {
  if (navigator.onLine) {
    const formData = new FormData()
    formData.append("media", photo, "capture.jpg")
    formData.append("projectId", projectId)
    formData.append("gpsLat", String(gps.lat))
    formData.append("gpsLng", String(gps.lng))

    const res = await fetch("/api/upload-media", { method: "POST", body: formData })
    const data = await res.json()
    return data.urls as string[]
  } else {
    await enqueue({ projectId, mediaBlob: photo, gpsLat: gps.lat, gpsLng: gps.lng, gpsSource: "device" })
    return null // queued
  }
}
```

If offline: show "Saved offline — will upload when connected" banner.

---

## Step 7: Create ProgressUpdate (Server-Side)

Inside `/api/upload-media`, after storing the files:

```ts
const update = await prisma.progressUpdate.create({
  data: {
    projectId,
    rawMediaUrls: urls,
    gpsLat: parseFloat(gpsLat),
    gpsLng: parseFloat(gpsLng),
    gpsSource: gpsSource || "device",
    processingStatus: "PENDING",
    reviewStatus: "PENDING_REVIEW",
    retryCount: 0,
  },
})
```

Return `update.id` alongside the URLs.

---

## Step 8: Trigger AI Processing

After upload succeeds, automatically call `/api/process-media`:

```ts
if (navigator.onLine) {
  fetch("/api/process-media", {
    method: "POST",
    body: JSON.stringify({ updateId }),
    headers: { "Content-Type": "application/json" },
  })
  // Fire-and-forget — processing runs server-side
}
```

The client polls for status (see add-ai-processing workflow, Step 5).

If offline: AI processing is triggered automatically when the queued upload syncs.

---

## Capture UI Flow (Mobile-First)

```
Camera preview (full screen)
  → Tap capture
  → Photo preview + "Retake" / "Use Photo"
  → GPS acquired / manual entry
  → Uploading... / Queued for offline
  → "Capture successful" or "Saved offline"
  → Return to camera for next capture
```

- Touch targets: minimum 44px
- Works on 375px viewport
- Zero training required — camera opens immediately on page load

---

## Error Scenarios

| Scenario | UI Behavior |
|---|---|
| Camera permission denied | Show OS permission instructions. Button to retry after granting. |
| Outside geofence | Show "Move closer to site" message. Block capture. |
| GPS unavailable | Show manual lat/lng input. Flag as manual. |
| Upload fails (server error) | Queue in IndexedDB. Show "Saved offline — will retry". |
| Upload fails (network) | Queue in IndexedDB. Show "Saved offline — will upload when connected". |

---

## Files Created in This Workflow

| File | Purpose |
|---|---|
| Capture page: `/app/capture/page.tsx` | Camera preview + capture UI |
| Client hook: `/lib/hooks/useCamera.ts` | Camera + GPS + geofence + upload logic |
| API route: `/app/api/upload-media/route.ts` | Accepts media, stores to cloud, creates ProgressUpdate |
| Offline queue: `/lib/offline/queue.ts` | IndexedDB queue for offline captures |
