---
description: Feature gate checklist. Run this before building any new feature to validate it belongs in the MVP, then follow the correct build order.
---

# Workflow: New Feature

## Step 0: Feature Gate (Must Pass)

Run this checklist before writing any code.

- [ ] Does this strengthen the core product loop? (AGENTS.md Section 2)
- [ ] Is it explicitly NOT in the "What NOT to Build" list? (AGENTS.md Section 11)
- [ ] Does it map to an existing entity or is a new entity justified? (AGENTS.md Section 5)
- [ ] Can it be built with the existing tech stack? (AGENTS.md Section 4)
- [ ] Does it work on 2G/3G and offline-first? (AGENTS.md Section 10)

If any answer is NO → stop. Do not build.

---

## Step 1: Define the Feature

Write a one-sentence user story:

> As a **[user role]**, I want to **[action]** so that **[outcome]**.

Example:
> As an **Owner**, I want to **review a Proof Bundle** so that **I can approve or request revision remotely**.

Define acceptance criteria (3-5 bullet points max).

---

## Step 2: Identify Which Layers Change

| Layer | Check if changes needed |
|---|---|
| DB / Prisma schema | New entity or new field on existing entity? |
| API route | New route or extend existing? |
| AI / Gemini | New prompt or new output field? |
| UI component | New component or modify existing? |
| Offline / Sync | New offline behavior needed? |
| Auth / Roles | New role or endpoint to protect? |

For each layer, check if an existing skill or workflow already covers it before building from scratch.

---

## Step 3: Build Order

```
1. Prisma schema    → prisma migrate dev --name <desc>
2. Seed data update → prisma db seed
3. API route        → see api-route-scaffolder skill + new-api-route workflow
4. AI processing    → see ai-processor skill + add-ai-processing workflow
5. UI component     → see component-builder skill + new-component workflow
6. Integration      → connect UI to API, handle loading/error states
7. Offline support  → see offline-sync-manager skill
```

Build vertically: complete one end-to-end slice before moving to the next.

---

## Step 4: Verify

- [ ] Happy path works end-to-end
- [ ] Handles failure cases (network error, validation error, auth error)
- [ ] Offline behavior: queued or blocked with clear message
- [ ] Mobile: works on 375px viewport
- [ ] Errors are surfaced to the user — no silent failures
- [ ] Seed data updated to include new feature's entities

---

## Step 5: Update Documentation

- [ ] AGENTS.md — add new entity or API route if it becomes part of the core loop
- [ ] Skills — update route-to-role mapping in auth-guard if new route added
- [ ] Workflows — update any workflow that has the new feature as a dependency
