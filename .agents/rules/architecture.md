---
trigger: always_on
---

# Architecture Rules — SiteSync

## 1. System Philosophy
- Single-app architecture (no microservices)
- API-driven via Next.js route handlers
- No background job queues
- No external orchestration layers

System must remain:
- Deterministic
- Debuggable
- Low-latency

### Payment Provider
- **Flutterwave** (webhook verified)

---

## 2. Request Flow Pattern

All flows follow:

Client → API Route → DB / External Service → DB → Response

NO:
- chained async pipelines
- background workers
- message queues

---

## 3. Offline Architecture

- IndexedDB used for:
  - media queue
  - upload retry state

- Sync strategy:
  - optimistic UI
  - background retry

---

## 4. Scaling Strategy (Future)

- Vertical scaling first
- Introduce queues ONLY after:
  - >100 concurrent processing jobs
  - consistent timeout failures

Until then → keep architecture simple