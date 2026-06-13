'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import styles from './styles.module.css'

type BenchmarkUploadProps = {
  onUpload: (file: File, category: string, notes?: string) => Promise<void>
  existingUrls?: string[]
}

export function BenchmarkUpload({ onUpload, existingUrls = [] }: BenchmarkUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [category, setCategory] = useState('reference_photo')
  const [notes, setNotes] = useState('')
  const [preview, setPreview] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setSelectedFile(file)
    setUploadError('')

    if (file.type.startsWith('image/')) {
      setPreview(URL.createObjectURL(file))
    } else {
      setPreview(null)
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) return
    setUploading(true)
    setUploadError('')
    try {
      await onUpload(selectedFile, category, notes || undefined)
      setSelectedFile(null)
      setPreview(null)
      setNotes('')
    } catch (e) {
      setUploadError(e instanceof Error ? e.message : 'Upload failed')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        type="file"
        accept="image/*,application/pdf"
        onChange={handleFileSelect}
        style={{ display: 'none' }}
      />

      {!selectedFile && (
        <div className={styles.categoryRow}>
          <button
            type="button"
            className={`${styles.categoryBtn} ${category === 'reference_photo' ? styles.categoryActive : ''}`}
            onClick={() => setCategory('reference_photo')}
          >
            Reference Photo
          </button>
          <button
            type="button"
            className={`${styles.categoryBtn} ${category === 'project_drawing' ? styles.categoryActive : ''}`}
            onClick={() => setCategory('project_drawing')}
          >
            Project Drawing
          </button>
        </div>
      )}

      {!selectedFile && (
        <textarea
          className={styles.notesInput}
          placeholder="Notes (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={2}
        />
      )}

      <div className={styles.dropzone} onClick={() => !selectedFile && inputRef.current?.click()}>
        {preview ? (
          <img src={preview} alt="Preview" className={styles.preview} />
        ) : existingUrls.length > 0 && !selectedFile ? (
          <div className={styles.grid}>
            {existingUrls.map((url, i) => (
              <img key={i} src={url} alt={`Benchmark ${i + 1}`} className={styles.thumb} />
            ))}
          </div>
        ) : (
          <div className={styles.placeholder}>
            <p>{selectedFile ? selectedFile.name : 'Upload benchmark reference'}</p>
            <p className={styles.hint}>Image or PDF (max 10MB)</p>
          </div>
        )}
      </div>

      {uploadError && <p className={styles.error}>{uploadError}</p>}

      {selectedFile ? (
        <div className={styles.actions}>
          <Button variant="ghost" onClick={() => { setSelectedFile(null); setPreview(null); setUploadError('') }}>
            Cancel
          </Button>
          <Button loading={uploading} onClick={handleUpload}>
            Upload
          </Button>
        </div>
      ) : (
        <Button variant="outline" fullWidth onClick={() => inputRef.current?.click()}>
          {existingUrls.length > 0 ? 'Add Another' : 'Select File'}
        </Button>
      )}
    </div>
  )
}
