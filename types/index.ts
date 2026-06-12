export interface AIAnalysisResult {
  summary: string
  elements: Array<{
    type: string
    status: string
    confidence: number
  }>
  inconsistencies: string[]
  completionEstimate: number
}
