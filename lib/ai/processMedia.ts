import { GoogleGenAI } from '@google/genai'
import type { AIAnalysisResult } from '@/types'
import fs from 'fs/promises'
import path from 'path'

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' })

const AI_TIMEOUT_MS = 20_000

const PROMPT = `You are a construction auditor. Analyze the provided construction site images against the project context and output a structured JSON report.

Output format (JSON only):
{
  "summary": "Narrative description of what was observed, including the GPS location",
  "elements": [
    { "type": "foundation|framing|roofing|etc", "status": "complete|partial|missing", "confidence": 0.95 }
  ],
  "inconsistencies": ["Description of any issues found, including any GPS location concerns"],
  "completionEstimate": 65
}

If you cannot parse the media, return a plain English summary instead of JSON.`

function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  const timeout = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error(`AI_TIMEOUT: ${label} exceeded ${ms}ms`)), ms)
  )
  return Promise.race([promise, timeout])
}

function resolveMediaPath(url: string): string | null {
  if (url.startsWith('/uploads/')) {
    return path.join(process.cwd(), 'public', url)
  }
  return null
}

async function loadMediaAsBase64(url: string): Promise<{ data: string; mimeType: string } | null> {
  try {
    const localPath = resolveMediaPath(url)
    if (localPath) {
      const buffer = await fs.readFile(localPath)
      const ext = path.extname(url).toLowerCase()
      const mimeMap: Record<string, string> = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' }
      return { data: buffer.toString('base64'), mimeType: mimeMap[ext] || 'image/jpeg' }
    }
    const response = await withTimeout(fetch(url), 10_000, `fetch ${url}`)
    const buffer = await response.arrayBuffer()
    return { data: Buffer.from(buffer).toString('base64'), mimeType: response.headers.get('content-type') || 'image/jpeg' }
  } catch {
    return null
  }
}

export async function processMedia(
  mediaUrls: string[],
  projectContext?: { milestoneTitle?: string; benchmarkUrls?: string[]; gpsCoordinates?: string; geofenceInfo?: string }
): Promise<AIAnalysisResult> {
  const contextText = [
    PROMPT,
    `Project context:`,
    `Milestone: ${projectContext?.milestoneTitle || 'N/A'}`,
    `GPS coordinates: ${projectContext?.gpsCoordinates || 'Not provided'}`,
    projectContext?.geofenceInfo || '',
    `Benchmark references: ${(projectContext?.benchmarkUrls || []).join(', ') || 'None'}`,
  ].filter(Boolean).join('\n')

  const contents: Array<string | { inlineData: { data: string; mimeType: string } }> = [contextText]

  for (const url of mediaUrls) {
    const media = await loadMediaAsBase64(url)
    if (media) {
      contents.push({ inlineData: media })
    } else {
      contents.push(`[Media URL: ${url} - could not be loaded]`)
    }
  }

  try {
    const generatePromise = ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents,
    })

    const result = await withTimeout(generatePromise, AI_TIMEOUT_MS, 'Gemini generateContent')
    const text = result.text || ''

    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      return JSON.parse(jsonMatch[0]) as AIAnalysisResult
    }

    return {
      summary: text,
      elements: [],
      inconsistencies: [],
      completionEstimate: 0,
    }
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown AI error'
    throw new Error(message)
  }
}
