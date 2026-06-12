import { NextResponse } from 'next/server'
import { uploadMedia } from '@/lib/upload'
import { processMedia } from '@/lib/ai/processMedia'
import { auth } from '@/lib/auth'

export async function POST(req: Request) {
  // Optional: Check auth if needed, but for testing we can allow it if it's local dev
  const session = await auth()
  if (!session?.user?.id && process.env.NODE_ENV !== 'development') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const formData = await req.formData()
    const file = formData.get('image') as File
    const milestoneTitle = formData.get('milestoneTitle') as string || 'Test Milestone'
    
    if (!file) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 })
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer())
    
    // Upload image using existing logic
    // Using a dummy 'test' projectId
    const url = await uploadMedia(buffer, 'test-project', file.name)
    
    // Process media with AI
    const result = await processMedia([url], {
      milestoneTitle: milestoneTitle,
    })

    return NextResponse.json({
      success: true,
      url,
      result
    })
  } catch (error) {
    console.error('AI Test Error:', error)
    return NextResponse.json({ 
      error: error instanceof Error ? error.message : 'Unknown error during AI processing' 
    }, { status: 500 })
  }
}
