# SKILL: Auth Guard

## Purpose
Protect all API routes and enforce user roles.

---

## Location

`/lib/auth/guard.ts`

---

## Session Type Extension

NextAuth default session doesn't include `id` or `role`. Extend the types:

```ts
// types/next-auth.d.ts
import { DefaultSession } from "next-auth"

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string
      role: "OWNER" | "SUPERVISOR"
    } & DefaultSession["user"]
  }
}
```

---

## Implementation Pattern

Two helpers: `requireAuth` and `requireRole`. Called inside each route handler.

```ts
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

export async function requireAuth() {
  const session = await getServerSession()
  if (!session?.user?.id) {
    return {
      session: null,
      error: NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      ),
    }
  }
  return { session, error: null }
}

export function requireRole(
  session: { user: { role: string } },
  allowedRoles: string[]
) {
  if (!allowedRoles.includes(session.user.role)) {
    return NextResponse.json(
      { success: false, message: "Forbidden — insufficient role" },
      { status: 403 }
    )
  }
  return null
}
```

---

## Route-to-Role Mapping

| Route | Allowed Roles |
|---|---|
| `/api/upload-media` | SUPERVISOR |
| `/api/process-media` | SUPERVISOR |
| `/api/approve-update` | OWNER |
| `/api/upload-receipt` | OWNER |
| `/api/webhooks/flutterwave` | No auth (webhook signature) |

---

## Usage in Route Handlers

```ts
import { requireAuth, requireRole } from "@/lib/auth/guard"

export async function POST(req: NextRequest) {
  const { session, error } = await requireAuth()
  if (error) return error

  const roleError = requireRole(session, ["SUPERVISOR"])
  if (roleError) return roleError

  // business logic
}
```

---

## Project Membership Check

For routes that operate on a project, also verify the user belongs to the project:

```ts
import { prisma } from "@/lib/db/prisma"

export async function requireProjectMember(
  session: { user: { id: string } },
  projectId: string
) {
  const membership = await prisma.projectMember.findUnique({
    where: {
      projectId_userId: { projectId, userId: session.user.id },
    },
  })
  if (!membership) {
    return NextResponse.json(
      { success: false, message: "Not a project member" },
      { status: 403 }
    )
  }
  return null
}
```
