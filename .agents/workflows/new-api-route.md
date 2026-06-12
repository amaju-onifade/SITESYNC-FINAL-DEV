---
description: Decision guide for when and how to create a new API route. Use before scaffolding to avoid unnecessary endpoints.
---

# Workflow: Create New API Route

## Before You Create: Should This Be a New Route?

Ask these questions first:

| Question | If Yes | If No |
|---|---|---|
| Does this action already have a route? | Use the existing route — don't duplicate | Proceed |
| Is this a new entity or action in the core product loop? | New route is appropriate | Reuse an existing route |
| Can this be a field or variant on an existing route? | Extend the existing route | Create new route |

Core rule: AGENTS.md Section 2 says **single API route per core action**. The existing routes are:

```
/api/upload-media       ← upload captured media
/api/process-media      ← run AI analysis on uploaded media
/api/approve-update     ← owner approves or requests revision
/api/upload-receipt     ← owner uploads payment proof
/api/webhooks/flutterwave ← payment webhook
```

If your action fits under one of these → extend it. If it's a genuinely new step in the product loop → create a new route.

---

## Naming Checklist

- kebab-case: `approve-update`, not `approveUpdate`
- Noun-verb: `upload-media`, `process-media`
- Placed at: `/app/api/{kebab-name}/route.ts`
- One route per file

---

## What Every Route MUST Include

- [ ] Zod input validation
- [ ] Auth check (requireAuth)
- [ ] Role check (requireRole) — see route-to-role mapping in auth-guard skill
- [ ] Explicit error handling with `{ success: false, message }`
- [ ] Typed response interface
- [ ] Prisma for all DB operations
- [ ] Logging on failure only

---

## Response Format Reference

```ts
// Success
{ success: true, data: ... }

// Error
{ success: false, message: string, code?: string }
```

Status codes: 200 (success), 400 (validation), 401 (no session), 403 (wrong role), 404 (not found), 429 (rate limited), 500 (unhandled).

---

## When NOT to Create a Route

- Reading data for a page → use a server component with direct Prisma call instead
- Client-side state changes → use React state, not an API route
- Actions that combine multiple unrelated operations → split into separate routes

---

## After Creating

1. Update the route-to-role mapping table in the auth-guard skill
2. Add the route to AGENTS.md Section 6 (Core APIs) if it becomes part of the core loop
3. Add the route to the Prerequisites list in any workflow that depends on it
