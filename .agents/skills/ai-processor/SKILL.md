# SKILL: AI Processor (Gemini)

## Purpose
Handle all AI-related processing:
- Image analysis
- Structured output generation
- Narrative report creation

---

## Responsibilities

1. Accept media URLs array + project context
2. Call Gemini Flash with structured prompt
3. Update ProgressUpdate DB record:
   - Set processingStatus = PROCESSING before call
   - Set processingStatus = COMPLETED or FAILED after
   - Store failureReason + increment retryCount on failure
4. Return:
   - Structured JSON (preferred)
   - Plain-English summary (fallback)

---

## Prompt Rules

System role:
"You are a construction auditor analyzing building progress."

Must extract:
- structural elements (foundation, framing, roofing, etc.)
- completion signals
- inconsistencies

---

## Output Format (Preferred)

```json
{
  "summary": "Narrative text",
  "elements": [
    { "type": "foundation|framing|roofing|etc", "status": "complete|partial|missing", "confidence": 0.95 }
  ],
  "inconsistencies": ["Description of issue"],
  "completionEstimate": 65
}
```

---

## Fallback Behavior

| Scenario | Action |
|---|---|
| JSON parse fails | Store text only, set processingStatus = COMPLETED (graceful degradation) |
| Gemini unreachable / timeout (>20s) | Set processingStatus = FAILED, store failureReason, allow manual retry |
| Partial text received before timeout | Store partial text as summary, set COMPLETED |
| Never block user flow due to AI failure | |

---

## Constraints

- Max execution: 60s (Gemini timeout: 20s)
- Optimize for cost: downscale images to 1080p before sending, limit prompt tokens
- All calls via `/lib/ai/processMedia.ts`

---

## Location

`/lib/ai/processMedia.ts`
