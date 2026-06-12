import { uploadToCloudinary } from '@/lib/cloudinary'
import { uploadLocal } from '@/lib/localStorage'
import { v4 as uuidv4 } from 'uuid'

const CLOUDINARY_CONFIGURED =
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_CLOUD_NAME !== 'your-cloud-name' &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_KEY !== 'your-api-key' &&
  process.env.CLOUDINARY_API_SECRET &&
  process.env.CLOUDINARY_API_SECRET !== 'your-api-secret'

async function uploadFile(file: Buffer, subfolder: string, attempt: number = 0): Promise<string> {
  try {
    if (CLOUDINARY_CONFIGURED) {
      return await uploadToCloudinary(file, subfolder)
    }
    return await uploadLocal(file, subfolder)
  } catch (error) {
    if (attempt < 3) {
      const delay = Math.pow(2, attempt) * 1000
      await new Promise((resolve) => setTimeout(resolve, delay))
      return uploadFile(file, subfolder, attempt + 1)
    }
    throw error
  }
}

export async function uploadMedia(
  file: Buffer,
  projectId: string,
  filename: string
): Promise<string> {
  const timestamp = Date.now()
  const subfolder = `projects/${projectId}/updates/${uuidv4()}`
  const publicId = `${timestamp}_${filename.replace(/\.[^/.]+$/, '')}`
  return uploadFile(file, `${subfolder}/${publicId}`)
}

export async function uploadBenchmark(
  file: Buffer,
  projectId: string,
  filename: string
): Promise<string> {
  const subfolder = `projects/${projectId}/benchmarks`
  return uploadFile(file, subfolder)
}

export async function uploadReceipt(
  file: Buffer,
  projectId: string,
  filename: string
): Promise<string> {
  const subfolder = `projects/${projectId}/receipts`
  return uploadFile(file, subfolder)
}

export async function uploadInvoice(
  file: Buffer,
  projectId: string,
  filename: string
): Promise<string> {
  const subfolder = `projects/${projectId}/invoices`
  return uploadFile(file, subfolder)
}
