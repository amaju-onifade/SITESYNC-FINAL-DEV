# SKILL: Offline Sync Manager

## Purpose
Ensure media capture and upload work without network connectivity.

---

## Location

`/lib/offline/queue.ts`

---

## IndexedDB Schema

Database name: `sitesync-offline`
Store name: `upload-queue`

Each entry:

```ts
interface QueueItem {
  id: string              // client-generated UUID (deduplication key)
  projectId: string
  mediaBlob: Blob         // already downscaled to 1080p
  gpsLat: number
  gpsLng: number
  gpsSource: "device" | "manual"
  status: "pending" | "uploading" | "synced" | "failed"
  retryCount: number
  createdAt: string       // ISO timestamp
  failureReason?: string
}
```

---

## State Machine

```
pending → uploading → synced (done)
                    → failed → pending (retry, max 3 attempts)
```

- On network error: stay `pending`, retry on next online event
- On server error (5xx): retry with exponential backoff, increment `retryCount`
- After 3 retries: mark `failed` with `failureReason`, surface to user
- On success: mark `synced`, optionally delete from store after 24h

---

## Sync Trigger

```ts
// Called on app mount + network change
async function onOnline() {
  const items = await getPendingItems()  // status = "pending"
  for (const item of items) {
    await syncItem(item)
  }
}

// Register listeners
if (typeof window !== "undefined") {
  window.addEventListener("online", onOnline)
  // Also check on app start
  if (navigator.onLine) onOnline()
}
```

Does NOT use Service Worker interception. Queue is polled on connectivity change.

---

## Queue Operations

```ts
// Add to queue
export async function enqueue(item: Omit<QueueItem, "id" | "status" | "retryCount" | "createdAt">) {
  const db = await openDB()
  const tx = db.transaction("upload-queue", "readwrite")
  await tx.store.add({
    id: crypto.randomUUID(),
    ...item,
    status: "pending",
    retryCount: 0,
    createdAt: new Date().toISOString(),
  })
}

// Get pending items
export async function getPendingItems(): Promise<QueueItem[]> {
  const db = await openDB()
  const tx = db.transaction("upload-queue", "readonly")
  const all = await tx.store.getAll()
  return all.filter(item => item.status === "pending")
}

// Update status
export async function updateStatus(id: string, status: QueueItem["status"], failureReason?: string) {
  const db = await openDB()
  const tx = db.transaction("upload-queue", "readwrite")
  const item = await tx.store.get(id)
  if (item) {
    item.status = status
    if (failureReason) item.failureReason = failureReason
    if (status === "failed") item.retryCount++
    await tx.store.put(item)
  }
}
```

---

## Sync Function

```ts
export async function syncItem(item: QueueItem) {
  await updateStatus(item.id, "uploading")

  const formData = new FormData()
  formData.append("media", item.mediaBlob)
  formData.append("projectId", item.projectId)
  formData.append("gpsLat", String(item.gpsLat))
  formData.append("gpsLng", String(item.gpsLng))
  if (item.gpsSource === "manual") {
    formData.append("gpsSource", "manual")
  }

  try {
    const res = await fetch("/api/upload-media", { method: "POST", body: formData })
    if (!res.ok) throw new Error(`Upload failed: ${res.status}`)
    await updateStatus(item.id, "synced")
  } catch (err) {
    if (item.retryCount >= 3) {
      await updateStatus(item.id, "failed", (err as Error).message)
    } else {
      await updateStatus(item.id, "pending")
      // Exponential backoff: wait 2^retryCount seconds before next attempt
      await new Promise(r => setTimeout(r, Math.pow(2, item.retryCount) * 1000))
    }
  }
}
```

---

## Deduplication

- Each queue item has a client-generated UUID (`id`)
- Before enqueuing, check if an item with the same `id` already exists
- The `id` is also sent as `x-idempotency-key` header on the upload request for server-side dedup

---

## UI Integration

- Show pending count in a sync status banner
- Show individual item status: "Waiting for network", "Uploading...", "Sync failed — tap to retry"
- Never block the user from capturing more media while items are queued
- After all items sync, show brief success toast then dismiss

---

## Cleanup

- `synced` items older than 24h are deleted from IndexedDB on app start
- `failed` items are kept until user manually dismisses or retries
