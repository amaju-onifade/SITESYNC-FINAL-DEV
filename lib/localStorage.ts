import { v4 as uuidv4 } from 'uuid'
import fs from 'fs/promises'
import path from 'path'

const UPLOAD_DIR = path.join(process.cwd(), 'public', 'uploads')

export async function uploadLocal(
  file: Buffer,
  subfolder: string
): Promise<string> {
  const dir = path.join(UPLOAD_DIR, subfolder)
  await fs.mkdir(dir, { recursive: true })

  const filename = `${uuidv4()}.jpg`
  const filepath = path.join(dir, filename)
  await fs.writeFile(filepath, file)

  return `/uploads/${subfolder}/${filename}`
}
