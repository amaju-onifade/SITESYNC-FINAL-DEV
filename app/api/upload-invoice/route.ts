import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { uploadInvoice } from '@/lib/upload'

export async function POST(req: Request) {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const formData = await req.formData()
    const projectId = formData.get('projectId') as string
    const file = formData.get('invoice') as File

    if (!projectId || !file) {
      return NextResponse.json({ error: 'projectId and invoice file required' }, { status: 400 })
    }

    const buffer = Buffer.from(await file.arrayBuffer())
    const url = await uploadInvoice(buffer, projectId, file.name)

    return NextResponse.json({ url }, { status: 201 })
  } catch (error) {
    console.error('Invoice upload error:', error)
    return NextResponse.json({ error: 'Failed to upload invoice' }, { status: 500 })
  }
}
