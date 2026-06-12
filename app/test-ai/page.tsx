'use client'

import React, { useState, useRef } from 'react'
import styles from './test-ai.module.css'
import type { AIAnalysisResult } from '@/types'

export default function TestAIPage() {
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AIAnalysisResult | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [milestoneTitle, setMilestoneTitle] = useState('Foundation Work')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0]
    if (selected) {
      setFile(selected)
      const reader = new FileReader()
      reader.onloadend = () => setPreview(reader.result as string)
      reader.readAsDataURL(selected)
      setResult(null)
      setError(null)
    }
  }

  const handleUpload = async () => {
    if (!file) return
    setLoading(true)
    setError(null)
    
    const formData = new FormData()
    formData.append('image', file)
    formData.append('milestoneTitle', milestoneTitle)

    try {
      const response = await fetch('/api/test-ai', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (data.error) {
        setError(data.error)
      } else {
        setResult(data.result)
      }
    } catch (err) {
      setError('Failed to connect to the server')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>AI Engine Test Bench</h1>
        <p className={styles.subtitle}>Test Gemini's vision capabilities on your construction site photos</p>
      </header>

      <div className="form-group" style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Context: Milestone Title</label>
        <input 
          type="text" 
          value={milestoneTitle} 
          onChange={(e) => setMilestoneTitle(e.target.value)}
          placeholder="e.g. Foundation, Roofing, Framing"
          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid var(--color-outline)' }}
        />
      </div>

      <div 
        className={styles.uploadSection} 
        onClick={() => fileInputRef.current?.click()}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          className={styles.input} 
          onChange={handleFileChange} 
          accept="image/*"
        />
        
        {preview ? (
          <img src={preview} alt="Preview" className={styles.preview} />
        ) : (
          <div className={styles.uploadLabel}>
            <span className={styles.uploadIcon}>📸</span>
            <p>Click or drag image to test</p>
          </div>
        )}
      </div>

      <div style={{ marginTop: '24px' }}>
        <button 
          className={styles.button} 
          onClick={handleUpload} 
          disabled={!file || loading}
        >
          {loading ? 'Processing with Gemini...' : 'Analyze Image'}
        </button>
      </div>

      {loading && (
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
          <p>Analyzing construction details...</p>
        </div>
      )}

      {error && (
        <div style={{ marginTop: '24px', padding: '16px', background: '#ffebeb', color: '#d32f2f', borderRadius: '8px' }}>
          <strong>Error:</strong> {error}
        </div>
      )}

      {result && (
        <div className={styles.results}>
          <h2 className={styles.resultTitle}>AI Analysis Results</h2>
          
          <div className={styles.summary}>
            <strong>Narrative Summary:</strong>
            <p style={{ marginTop: '8px' }}>{result.summary}</p>
          </div>

          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardTitle}>Completion Est.</div>
              <div className={styles.cardValue} style={{ color: 'var(--color-primary)' }}>
                {result.completionEstimate}%
              </div>
            </div>
            
            {result.elements.map((el, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardTitle}>{el.type}</div>
                <div className={styles.cardValue} style={{ fontSize: '16px' }}>
                  {el.status} ({Math.round(el.confidence * 100)}%)
                </div>
              </div>
            ))}
          </div>

          {result.inconsistencies.length > 0 && (
            <div style={{ marginBottom: '24px' }}>
              <strong style={{ color: 'var(--color-error)' }}>Potential Issues / Inconsistencies:</strong>
              <ul className={styles.inconsistencies}>
                {result.inconsistencies.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <details>
            <summary style={{ cursor: 'pointer', fontWeight: '500', color: 'var(--color-on-surface-variant)' }}>
              View Raw JSON
            </summary>
            <pre className={styles.json}>
              {JSON.stringify(result, null, 2)}
            </pre>
          </details>
        </div>
      )}
    </div>
  )
}
