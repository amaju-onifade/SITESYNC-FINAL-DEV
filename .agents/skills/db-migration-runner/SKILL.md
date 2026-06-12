# SKILL: DB Migration Runner

## Purpose
Manage Prisma schema changes and database migrations.

---

## Core Entities

Defined in `schema.prisma`:

- `Project` — created, activated, stores geofence + status
- `ProgressUpdate` — captures media, AI output, processing status, failure reason, retry count
- `PaymentRecord` — receipt upload, amount, paid date
- `User` — auth, role (OWNER / SUPERVISOR)
- `ProjectMember` — join table linking users to projects

---

## Workflow

### Normal migration (development)

```bash
npx prisma migrate dev --name descriptive_name
```

Naming convention: `add_field_to_model` or `create_new_model`

Examples:
- `add_failure_reason_to_progress_update`
- `create_payment_record`

### After migration

```bash
npx prisma generate
```

This regenerates the Prisma client types. Always run this after any schema change.

---

## When to Use Which Command

| Command | When |
|---|---|
| `prisma migrate dev` | You changed schema.prisma during development. Creates a new migration file. |
| `prisma migrate reset` | You want to drop the DB and re-apply all migrations. Destructive — only use in dev. |
| `prisma db push` | Quick prototyping. Skips migration files. Never use for committed schema changes. |
| `prisma migrate deploy` | CI/CD or production. Applies pending migrations without confirmation. |

For MVP development: use `prisma migrate dev` for all schema changes. Never use `db push` on committed code.

---

## Seed Data

File: `prisma/seed.ts`

Must include:
- A realistic project with valid geofence coordinates
- At least one ProgressUpdate with each processingStatus (PENDING, PROCESSING, COMPLETED, FAILED)
- A ProgressUpdate flagged with manual GPS coordinates (edge case)
- At least one completed PaymentRecord
- Projects in both active and inactive states

Run:

```bash
npx prisma db seed
```

Configure in `package.json`:

```json
"prisma": {
  "seed": "tsx prisma/seed.ts"
}
```

---

## Rules

- Never modify the database manually — always use Prisma migrations
- Keep the schema minimal — don't add fields until they're needed by the core product loop
- Every migration must have a descriptive `--name` flag
- Always run `prisma generate` after schema changes
- Check `prisma/seed.ts` compiles and runs before committing schema changes
