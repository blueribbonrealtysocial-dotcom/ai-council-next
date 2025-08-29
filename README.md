
# AI Council — Next.js (Vercel-ready)

This gives you a one-click-deployable Ask Page with serverless API endpoints for **Radar** and **Lacey**.

## Quick Start (Local)
1. Copy `.env.example` to `.env` and fill in your key(s).
2. `npm install`
3. `npm run dev`
4. Open http://localhost:3000

## Deploy to Vercel
- Create a new project and import this folder.
- Add environment variables:
  - `OPENAI_API_KEY`
  - (optional) `OPENAI_MODEL` (defaults to `gpt-4.1-mini`)
  - (optional) `SHARED_SECRET`
- Deploy. Your endpoints will be:
  - `/api/radar`
  - `/api/lacey`

## Security
- Keep API keys only in env vars (never commit them).
- If you set `SHARED_SECRET`, the front end must send the header `x-ai-council-key` with that value.

