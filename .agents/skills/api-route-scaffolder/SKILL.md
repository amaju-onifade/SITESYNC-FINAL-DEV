# SKILL: API Route Scaffolder

## Purpose
Generate consistent Next.js App Router API routes following project conventions.

---

## File Naming

- kebab-case (`upload-media/route.ts`, not `uploadMedia/route.ts`)
- One route per file
- Place under `/app/api/{resource}`

---

## Required Pattern

Every route must:

1. Validate input — Zod schema
2. Authenticate user — getServerSession
3. Authorize — verify project membership + role
4. Execute logic
5. Handle errors explicitly
6. Return typed JSON

---

## Template

```ts
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { z } from "zod"

const bodySchema = z.object({
  // define fields
})

interface SuccessResponse {
  success: true
  data: unknown
}

interface ErrorResponse {
  success: false
  message: string
  code?: string
}

type RouteResponse = SuccessResponse | ErrorResponse

export async function POST(req: NextRequest): Promise<NextResponse<RouteResponse>> {
  try {
    // 1. Auth
    const session = await getServerSession()
    if (!session?.user) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      )
    }

    // 2. Validate
    const body = await req.json()
    const parsed = bodySchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: "Invalid input", code: "VALIDATION_ERROR" },
        { status: 400 }
      )
    }

    // 3. Authorize (project membership check)
    if (!isProjectMember(session.user.id, parsed.data.projectId)) {
      return NextResponse.json(
        { success: false, message: "Forbidden" },
        { status: 403 }
      )
    }

    // 4. Logic — replace with actual business logic
    const result = await doSomething(parsed.data)

    // 5. Respond
    return NextResponse.json({ success: true, data: result })

  } catch (error) {
    console.error("POST /api/route failed:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}
```

---

## Status Code Reference

| Code | When |
|------|------|
| 200 | Success |
| 400 | Validation failure |
| 401 | No session |
| 403 | Not project member |
| 404 | Resource not found |
| 429 | Rate limited |
| 500 | Unhandled error |

---

## Notes

- Route handlers are server-only — never import client code
- Use named export (`POST`, `GET`, etc.) matching the HTTP method
- Log failures with context, never log secrets or full media URLs
