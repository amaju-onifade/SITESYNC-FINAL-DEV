'use client'

import { useState, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import styles from './styles.module.css'

type PaymentReceiptProps = {
  onSubmit: (data: { amount: number; receipt: File }) => Promise<void>
  loading?: boolean
}

export function PaymentReceipt({ onSubmit, loading }: PaymentReceiptProps) {
  const [amount, setAmount] = useState('')
  const [receiptFile, setReceiptFile] = useState<File | null>(null)
  const [preview, setPreview] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setReceiptFile(file)
    if (file.type.startsWith('image/')) {
      setPreview(URL.createObjectURL(file))
    } else {
      setPreview(null)
    }
  }

  const handleSubmit = async () => {
    if (!amount || !receiptFile) return
    await onSubmit({ amount: parseFloat(amount), receipt: receiptFile })
  }

  return (
    <div className={styles.container}>
      <Input
        label="Amount Paid (NGN)"
        type="number"
        placeholder="e.g. 500000"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        autoFocus
      />

      <div className={styles.uploadArea}>
        <input
          ref={inputRef}
          type="file"
          accept="image/*,application/pdf"
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />

        {preview ? (
          <img src={preview} alt="Receipt preview" className={styles.preview} />
        ) : receiptFile ? (
          <p className={styles.fileName}>{receiptFile.name}</p>
        ) : (
          <div className={styles.dropzone} onClick={() => inputRef.current?.click()}>
            <p>Upload payment receipt</p>
            <p className={styles.hint}>Image or PDF</p>
          </div>
        )}

        {receiptFile && (
          <Button variant="ghost" onClick={() => inputRef.current?.click()}>
            Change File
          </Button>
        )}
      </div>

      <Button
        fullWidth
        loading={loading}
        disabled={!amount || !receiptFile}
        onClick={handleSubmit}
      >
        Submit Payment Proof
      </Button>
    </div>
  )
}
