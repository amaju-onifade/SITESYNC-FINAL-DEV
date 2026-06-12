# SiteSync — Deployment Completion Plan

## 1. Credentials Required (Production)

| Service | Env Variable | Where to Get It |
|---|---|---|
| **Cloudinary** | `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` | https://cloudinary.com (free tier) |
| **Google Gemini** | `GEMINI_API_KEY` | https://aistudio.google.com/apikey (free) |
| **Flutterwave** | `FLUTTERWAVE_SECRET_KEY`, `FLUTTERWAVE_PUBLIC_KEY`, `FLUTTERWAVE_WEBHOOK_SECRET` | https://dashboard.flutterwave.com (live keys) |
| **NextAuth** | `AUTH_SECRET` | Generate via: `openssl rand -base64 32` |
| **Database** | `DATABASE_URL` | https://console.neon.tech (Neon PostgreSQL) |

## 2. Pre-Deployment Checklist

- [ ] Set all real credentials in `.env.local`
- [ ] Remove the fallback check in `lib/upload.ts` that detects `"your-*"` placeholders (or keep it and just ensure real values are set)
- [ ] Run `npx prisma generate`
- [ ] Run `npx prisma migrate deploy` to apply migrations to production DB
- [ ] Run `npm run build` — fix any build errors
- [x] Test `POST /api/process-media` with a real capture end-to-end (Verified via `/test-ai`)
- [ ] Verify `POST /api/projects/[id]/activate` creates a Flutterwave payment link
- [x] Verify Gemini model name (`gemini-2.5-flash`) is correctly configured in `lib/ai/processMedia.ts`

## 3. Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Set all env variables in Vercel dashboard:
- Go to Project Settings → Environment Variables
- Add every variable from `.env.local`

## 4. Post-Deployment Verification

- [x] Verify AI Engine with Nigerian site photo (via `/test-ai`)
- [ ] Register a new account
- [ ] Create a project
- [ ] Activate the project (Flutterwave payment)
- [ ] Assign a supervisor
- [ ] Supervisor captures media (log in as supervisor)
- [x] AI processes and generates report (Tested & Confirmed)
- [ ] Owner reviews and approves
- [ ] Supervisor requests payment
- [ ] Owner uploads receipt — milestone marked PAID

## 5. Known Gaps for Future Iterations

| Item | Priority | Notes |
|---|---|---|
| Upload retry with exponential backoff (3 attempts) | Done | Implemented in `lib/upload.ts` |
| Camera permission denied OS instructions | Low | Show OS settings guidance |
| AI system prompt in DB/config file | Low | Currently hardcoded in `processMedia.ts` |
| Google Maps Places autocomplete for address | Low | Requires Google Maps API key |
| Notification system (owner notified when capture submitted) | Medium | Requires WebSocket or polling |
