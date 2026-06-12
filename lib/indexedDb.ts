const DB_NAME = 'SiteSyncOffline'
const DB_VERSION = 1
const STORE_NAME = 'captureQueue'

export function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION)

    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        const store = db.createObjectStore(STORE_NAME, {
          keyPath: 'id',
          autoIncrement: true,
        })
        store.createIndex('status', 'status', { unique: false })
        store.createIndex('createdAt', 'createdAt', { unique: false })
      }
    }

    request.onsuccess = (event) => resolve((event.target as IDBOpenDBRequest).result)
    request.onerror = (event) => reject((event.target as IDBOpenDBRequest).error)
  })
}

export async function queueCapture(data: {
  projectId: string
  milestoneId: string
  mediaBlob: Blob
  metadata: {
    gpsLat: number | null
    gpsLng: number | null
    gpsManual: boolean
    deviceTimestamp: string
    note?: string | null
  }
}): Promise<void> {
  const db = await openDB()
  const tx = db.transaction(STORE_NAME, 'readwrite')
  const store = tx.objectStore(STORE_NAME)

  store.add({
    ...data,
    status: 'QUEUED',
    retryCount: 0,
    createdAt: new Date().toISOString(),
  })

  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

export async function getQueuedCaptures(): Promise<any[]> {
  const db = await openDB()
  const tx = db.transaction(STORE_NAME, 'readonly')
  const store = tx.objectStore(STORE_NAME)
  const index = store.index('status')

  return new Promise((resolve, reject) => {
    const request = index.getAll('QUEUED')
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

export async function removeQueuedCapture(id: number): Promise<void> {
  const db = await openDB()
  const tx = db.transaction(STORE_NAME, 'readwrite')
  const store = tx.objectStore(STORE_NAME)
  store.delete(id)

  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}

export async function updateQueuedCapture(id: number, updates: Record<string, any>): Promise<void> {
  const db = await openDB()
  const tx = db.transaction(STORE_NAME, 'readwrite')
  const store = tx.objectStore(STORE_NAME)
  const request = store.get(id)

  request.onsuccess = () => {
    const data = request.result
    if (data) {
      Object.assign(data, updates)
      store.put(data)
    }
  }

  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve()
    tx.onerror = () => reject(tx.error)
  })
}
