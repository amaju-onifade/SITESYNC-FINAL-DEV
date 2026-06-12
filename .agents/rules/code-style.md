---
trigger: always_on
---

# Code Style Rules — SiteSync

## 1. General Principles

- Code must be:
  - readable
  - predictable
  - minimal

- Avoid:
  - clever abstractions
  - premature generalization

---

## 2. File Structure

/app
  /api
  /dashboard
    /components
  /capture
    /components
  /components (shared)
/lib
  /db
  /ai
  /storage
  /payments
/types (shared TS types)
/prisma

Server-only code must NOT be imported into client components.

---

## 3. TypeScript Rules

- `strict: true` in tsconfig — no exceptions
- **No `any`** — use `unknown` + type narrowing if type is uncertain
- Prefer `interface` for public API shapes (props, DB models, API responses)
- Prefer `type` for unions, intersections, and utility types
- Use `as const` for literal constants and enum-like objects
- All function params and return types must be explicitly typed
- Avoid type assertions (`as Type`) — prefer type guards or declaring properly

---

## 4. Naming Conventions

Variables / functions:
- camelCase

Types / Interfaces:
- PascalCase

Database Models:
- Singular (ProgressUpdate, PaymentRecord)

API routes:
- kebab-case (upload-media, process-media)

Files:
- Components: PascalCase (CaptureForm.tsx)
- Utilities: camelCase (formatDate.ts)
- Types: PascalCase (project.types.ts)

---

## 5. Import Ordering

Group in this order, separated by a blank line:

1. External (react, next, prisma, etc.)
2. Internal absolute (`@/lib/...`, `@/components/...`, `@/types/...`)
3. Relative (`./...`, `../...`)

No default exports — use named exports only.

Exception: Next.js file-convention components (pages, layouts, loading, error, not-found) require default exports.

---

## 6. React / Component Conventions

- Server component by default
- Add `"use client"` ONLY when you need: hooks, browser APIs, event handlers, or state
- Keep `"use client"` as leaf components — push data fetching up to server components
- All component props typed via `interface ComponentNameProps`
- Extract reusable UI to `/app/components` (shared), page-specific to `/app/{route}/components`

```tsx
// Server component (default)
interface DashboardProps {
  projectId: string
}

export async function Dashboard({ projectId }: DashboardProps) {
  const project = await getProject(projectId)
  return <ProjectCard project={project} />
}
```

```tsx
// Client component (when needed)
"use client"

interface CaptureButtonProps {
  onCapture: (media: Blob) => void
  disabled?: boolean
}

export function CaptureButton({ onCapture, disabled }: CaptureButtonProps) {
  return (
    <button onClick={() => onCapture(new Blob())} disabled={disabled}>
      Capture
    </button>
  )
}
```

---

## 7. API Handler Pattern

Every API route must:

1. Validate input
2. Authorize user
3. Execute logic
4. Handle failure explicitly
5. Return typed JSON response

```ts
import { NextRequest } from "next/server"

interface UploadResponse {
  success: boolean
  urls?: string[]
  message?: string
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json()
    // validate
    // auth
    // logic
    return NextResponse.json({ success: true, urls: [...] })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to upload media" },
      { status: 400 }
    )
  }
}
```

---

## 8. Error Handling

- No silent failures
- Always return structured errors

Format:

```ts
{
  success: false,
  message: string,
  code?: string
}
```

---

## 9. Database Access

- Use Prisma ONLY
- No raw SQL unless necessary
- All writes must be:
  - explicit
  - validated

---

## 10. AI Layer

- Encapsulate Gemini calls in `/lib/ai`
- Never call AI directly from UI
- AI functions must return typed responses (not `any`)

---

## 11. Reusability Rule

Only abstract when:
- logic is reused ≥ 2 times

Otherwise:
- keep inline

---

## 12. Logging

- Log only:
  - failures
  - AI responses (trimmed)
  - payment events

Avoid verbose logs
