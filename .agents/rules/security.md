---
trigger: always_on
---

# Security Rules — SiteSync

## 1. Core Principle

Assume:
- client is untrusted
- network is unreliable
- data must be verifiable

---

## 2. Authentication

- Use NextAuth (Auth.js)
- All API routes must check session

Rules:
- No session → 401
- Not project member → 403

---

## 3. Authorization

Every request must verify:
- user belongs to project
- user role (Owner / Supervisor)

---

## 4. Media Security

- Raw media stored via signed URLs
- No public bucket access
- Files are immutable

---

## 5. Payment Security (Flutterwave)

- Verify webhook signature
- Never trust client payment confirmation

Flow:
1. Receive webhook
2. Validate signature
3. Verify transaction
4. Update DB

---

## 6. Data Integrity

- GPS must be captured at upload
- Timestamp must be server-generated

Never trust:
- client timestamps
- client location overrides

---

## 7. CORS

- Restrict API responses to the app's own origin
- Block all other origins via `Access-Control-Allow-Origin`
- Do NOT use `*` — PWA requests come from the same origin

---

## 8. CSRF Protection

- Use Next.js built-in CSRF protection (SameSite cookies)
- For payment endpoints, additionally verify a nonce or idempotency key
- Never process payment callbacks from client-side alone

---

## 9. API Protection

- Validate all inputs
- Reject malformed payloads

Use:
- schema validation (Zod recommended)

---

## 10. Output Sanitization (XSS Prevention)

- AI-generated summaries and descriptions are rendered in the UI
- Always sanitize before rendering — strip HTML tags, escape special characters
- Never use `dangerouslySetInnerHTML` unless explicitly reviewed
- Treat all AI output as user-generated content

---

## 11. Environment Validation

- Validate all required env vars at app startup
- Fail immediately if any are missing:
  - `DATABASE_URL`
  - `GEMINI_API_KEY`
  - `FLW_SECRET_KEY`
  - `FLW_WEBHOOK_SECRET`
  - `NEXTAUTH_SECRET`
  - `NEXTAUTH_URL`
  - `CLOUDINARY_URL` or `AWS_*` (if using S3)
- Use Zod or a simple startup check — never silently default to a fallback

---

## 12. AI Safety

- Treat AI output as untrusted
- Validate structure before saving

Fallback:
- Store text only if JSON invalid

---

## 13. Rate Limiting (MVP)

- Use in-memory rate limiting (no external cache needed at MVP)
- Limits:
  - `/api/upload-media`: max 10 requests / minute per user
  - `/api/process-media`: max 5 requests / minute per user
  - `/api/upload-receipt`: max 3 requests / minute per user
- On limit exceeded: return `429 Too Many Requests` with `Retry-After` header
- Log rate-limit violations for abuse monitoring

---

## 14. Secrets Management

- Store in environment variables
- NEVER expose:
  - AI keys
  - database credentials
  - payment secrets

---

## 15. Logging Security

- Do NOT log:
  - full media URLs
  - secrets
  - personal data

---

## 16. Future Hardening

- Add:
  - receipt OCR validation
  - duplicate media detection
  - anomaly detection

Post-MVP only