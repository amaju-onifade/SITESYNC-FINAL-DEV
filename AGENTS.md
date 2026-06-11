# AGENTS.md — SiteSync (Antigravity Build Context)

## 1. Mission
Build **SiteSync**, an AI-powered construction verification platform that replaces informal progress reporting with structured, geofenced media + AI-generated audit reports.

Core outcome:
> Convert on-site media into **verifiable proof** that enables remote decision-making and payment confirmation.

---

## 2. Core Product Loop (Non-Negotiable)
All features must support this loop:

1. Project created
2. Project activated (payment required)
3. Supervisor captures media (guided + geofenced)
4. Media uploaded (offline-first)
5. AI processes media
6. Owner reviews Proof Bundle
7. Owner approves / requests revision
8. Owner uploads payment receipt
9. Milestone closed

If a feature does not strengthen this loop → **do not build it**.

---

## 3. System Principles

### 3.1 Simplicity First
- No job queues
- No microservices
- No premature optimization
- Use **single API route per core action**

### 3.2 Reliability Over Sophistication
- Prefer "works always" over "works perfectly"
- Always implement fallback states
- Assume poor network conditions

### 3.3 Offline-First Design
- All capture must work without internet
- Use IndexedDB for queueing
- Auto-sync when connection returns

### 3.4 Immutable Evidence
- Raw media cannot be edited or replaced
- Always store:
  - GPS coordinates (lat/lng)
  - Server timestamp (createdAt)
  - Device timestamp as secondary reference

---

## 4. Technical Stack (Strict)

Frontend:
- Next.js (App Router)
- PWA (Service Worker + manifest)

Backend:
- Next.js API routes (no separate backend)

Database:
- PostgreSQL (Neon)

ORM:
- Prisma

AI:
- Gemini Flash (vision + text)

Storage:
- Cloudinary or S3

Payments:
- Paystack (activation only)

Deployment:
- Google Cloud Run

DO NOT introduce:
- BullMQ / Inngest (no queues)
- Firebase (unless explicitly required)
- WebSockets (not needed at MVP)

---

## 5. Key Entities

### Project
Represents a construction project tied to a geofenced site.

Must include:
- status (CREATED | ACTIVE)
- geofence boundary coordinates
- createdAt
- updatedAt

### ProgressUpdate
Represents a single capture submission.

Must include:
- rawMediaUrls[]
- aiDescription
- aiMarkupData (JSON or null)
- processingStatus (PENDING | PROCESSING | COMPLETED | FAILED)
- reviewStatus (PENDING_REVIEW | APPROVED | REVISION_REQUESTED)
- failureReason (nullable — stores AI or upload error detail)
- retryCount (default 0)
- gpsLat / gpsLng
- createdAt (server timestamp)
- updatedAt

### PaymentRecord
Represents proof of external payment.

Must include:
- paidAmountNgN
- receiptUrl
- paidAt
- createdAt

---

## 6. Core APIs (Required)

### /api/upload-media
- Accepts media
- Stores files at convention: `projects/{projectId}/updates/{uuid}/{timestamp}_{filename}`
- Returns URLs

### /api/process-media
- Input: media URLs array + project context
- Calls Gemini with structured prompt (see Section 7)
- Outputs JSON:

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

- Falls back to text-only if JSON parse fails
- Updates ProgressUpdate.processingStatus
- On failure: sets failureReason + increments retryCount

### /api/approve-update
- Sets status = APPROVED / REVISION_REQUESTED

### /api/upload-receipt
- Stores receipt
- Creates PaymentRecord
- Marks milestone CLOSED

### /api/webhooks/paystack
- Verifies signature
- Activates project

---

## 7. AI Behavior Rules

Prompt must:
- Act as "construction auditor"
- Extract:
  - structural elements
  - completion signals
  - inconsistencies
- Output:
  - JSON (preferred) — see Section 6 for schema
  - Plain English summary

Fallback:
- If JSON fails → store text only, set processingStatus = COMPLETED (graceful degradation)
- If Gemini is unreachable → set processingStatus = FAILED, store failureReason, allow manual retry
- Never block user flow due to AI failure

---

## 8. Error Recovery & Fallback Behaviors

Every fallback must deliver a clear UI message. Never silently fail.

| Scenario | Behavior |
|---|---|
| GPS unavailable | Allow manual lat/lng entry. Flag as "manual coordinates" in DB. |
| Camera permission denied | Show OS-level permission instructions. Block capture until granted. |
| AI processing fails | Set processingStatus = FAILED + failureReason. Owner sees "AI report unavailable — manual review required" instead of blocking. |
| Upload fails (no network) | Queue in IndexedDB. Show "Saved offline — will upload when connected". |
| Upload fails (server error) | Retry up to 3 times with exponential backoff. After 3 failures, mark as FAILED. |
| Gemini timeout (>20s) | Return partial text if any, else FAILED. Never leave processingStatus = PROCESSING indefinitely. |
| Image too large | Downscale client-side to max 1080p before upload. |

---

## 9. UI Rules (Critical)

Supervisor UI:
- Camera-first (no gallery upload)
- Clear step-by-step capture guidance
- Minimal text
- Works on low-end Android

Owner UI:
- Focus on:
  - Proof Bundle
  - Decision buttons
  - Payment confirmation

No feature should:
- Add cognitive load
- Require training to understand

---

## 10. Constraints

- Network: Must work on 2G/3G
- Media: Max 1080p
- API timeout: ≤ 60s
- Processing: Target < 20s

---

## 11. What NOT to Build (MVP Scope Guard)

Do NOT implement:
- Photogrammetry / 3D reconstruction
- AR overlays
- In-app wallet / escrow
- Multi-project dashboards
- Complex analytics
- Real-time collaboration

These are **post-MVP only**

---

## 12. Success Criteria (Build-Level)

A build is successful if:
- A supervisor can submit a capture in poor network conditions
- AI generates a usable report
- Owner can make a decision
- Owner can upload receipt
- System records a completed milestone

If any of these fail → prioritize fixing over adding features

---

## 13. Build Strategy

- Build vertically (end-to-end flow) before horizontally (features)
- Ship smallest working loop first:
  1. Capture → Upload → Store
  2. Add AI processing
  3. Add approval flow
  4. Add payment confirmation

- Avoid parallel complexity

---

## 14. Testing & Seed Data

- Maintain a `prisma/seed.ts` with realistic project, update, and payment records
- Seed data should include edge cases: failed AI, offline-queued items, GPS-flagged coordinates
- This enables UI iteration without real capture every time

---

## 15. Guiding Principle

> Ship fast. Validate trust. Add complexity later.

Every decision should reduce:
- Build time
- Failure points
- User confusion

---

**End of AGENTS.md**
