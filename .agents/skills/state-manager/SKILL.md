# SKILL: State Manager

## Purpose
Control valid state transitions for core entities.

---

## ProgressUpdate.processingStatus

```
PENDING → PROCESSING → COMPLETED
                     → FAILED
```

| Transition | Trigger |
|---|---|
| PENDING → PROCESSING | `/api/process-media` begins Gemini call |
| PROCESSING → COMPLETED | Gemini returns valid output (JSON or text fallback) |
| PROCESSING → FAILED | Gemini unreachable or timeout (>20s) |
| FAILED → PROCESSING | Manual retry (increments `retryCount`) |

Rules:
- `FAILED` is a terminal state until manually retried
- `retryCount` increments on each FAILED → PROCESSING transition
- `failureReason` is set on PROCESSING → FAILED
- Never leave `PROCESSING` indefinitely — enforce timeout

---

## ProgressUpdate.reviewStatus

```
PENDING_REVIEW → APPROVED
               → REVISION_REQUESTED
```

| Transition | Trigger |
|---|---|
| PENDING_REVIEW → APPROVED | Owner clicks approve via `/api/approve-update` |
| PENDING_REVIEW → REVISION_REQUESTED | Owner requests revision |

Rules:
- Only the project Owner can transition this
- REVISION_REQUESTED allows the Supervisor to recapture and resubmit
- APPROVED is terminal — requires receipt to close milestone

---

## Project.status

```
CREATED → ACTIVE
```

| Transition | Trigger |
|---|---|
| CREATED → ACTIVE | Flutterwave payment webhook verified + project activated |

Rules:
- No inactive → active without payment verification
- Only Flutterwave webhook handler can activate (never client-side)

---

## Milestone Lifecycle (Conceptual)

```
Project ACTIVE → ProgressUpdates captured → Owner approves
→ Owner uploads receipt → PaymentRecord created → Milestone CLOSED
```

This is the Core Product Loop from AGENTS.md Section 2 — not a DB state field, but the conceptual flow that all features support.

---

## Rules

- Every transition must be handled explicitly — no implicit state changes
- No skipping states (e.g., cannot go PENDING → COMPLETED without PROCESSING)
- On failure, always set `failureReason` — never fail silently
- All state changes must be persisted to the database before responding to the client
- Use Prisma enum fields for state columns, not strings
