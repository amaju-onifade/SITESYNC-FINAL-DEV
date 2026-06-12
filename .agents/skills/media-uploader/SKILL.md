# SKILL: Media Uploader

## Purpose
Handle media uploads in low-bandwidth / offline environments.

---

## Location

`/lib/storage/upload.ts`

---

## Storage Convention

All media stored at:

```
projects/{projectId}/updates/{uuid}/{timestamp}_{filename}
```

The `uuid` is generated server-side per upload batch.

---

## Upload Flow

```
Client capture → downscale to 1080p → online?
  ├─ Yes → POST /api/upload-media → Cloudinary/S3 → return URL
  └─ No  → queue in IndexedDB → auto-sync when online
```

This flow is synchronous via API route — no background workers. Offline queue is handled client-side via IndexedDB (see offline-sync-manager skill).

---

## API Route: /api/upload-media

```ts
import { NextRequest, NextResponse } from "next/server"
import { requireAuth } from "@/lib/auth/guard"
import { uploadToStorage } from "@/lib/storage/upload"

interface UploadResponse {
  success: boolean
  urls?: string[]
  message?: string
}

export async function POST(req: NextRequest): Promise<NextResponse<UploadResponse>> {
  const { session, error } = await requireAuth()
  if (error) return error

  try {
    const formData = await req.formData()
    const files = formData.getAll("media") as File[]
    const projectId = formData.get("projectId") as string
    const gpsLat = formData.get("gpsLat") as string
    const gpsLng = formData.get("gpsLng") as string

    // GPS is required
    if (!gpsLat || !gpsLng) {
      return NextResponse.json(
        { success: false, message: "GPS coordinates required" },
        { status: 400 }
      )
    }

    const urls: string[] = []
    for (const file of files) {
      // Client must downscale to 1080p before sending
      const url = await uploadToStorage(file, projectId)
      urls.push(url)
    }

    return NextResponse.json({ success: true, urls })
  } catch (err) {
    console.error("Upload failed:", err)
    return NextResponse.json(
      { success: false, message: "Upload failed" },
      { status: 500 }
    )
  }
}
```

---

## Storage Upload Function

```ts
import { v2 as cloudinary } from "cloudinary"
import { v4 as uuid } from "uuid"

export async function uploadToStorage(
  file: File,
  projectId: string
): Promise<string> {
  const buffer = Buffer.from(await file.arrayBuffer())
  const timestamp = Date.now()
  const uniqueId = uuid()

  const result = await cloudinary.uploader.upload(
    `data:${file.type};base64,${buffer.toString("base64")}`,
    {
      folder: `projects/${projectId}/updates/${uniqueId}`,
      public_id: `${timestamp}_${file.name}`,
      resource_type: "image",
    }
  )

  return result.secure_url
}
```

The function returns a signed URL. No public bucket access.

---

## Client-Side Requirements

- Downscale images to max 1080p before upload (canvas API)
- Include GPS coordinates (lat/lng) from device GPS
- If GPS unavailable, allow manual entry — flag as `gps_source: "manual"` in the payload
- If offline, store in IndexedDB queue (see offline-sync-manager skill)

---

## Error Handling

| Scenario | Action |
|---|---|
| Upload succeeds | Return URL array |
| Network error | Client queues in IndexedDB for retry |
| Server error (5xx) | Retry up to 3 times with exponential backoff client-side |
| File too large | Reject client-side before upload (max 1080p) |
| GPS missing | Return 400 — require coordinates |

---

## Signed Uploads

- Use Cloudinary's signed upload with `upload_preset` or S3 presigned URLs
- Never expose storage API keys to the client
- Server generates signed upload params when needed
