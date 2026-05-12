# Built for Pros

Marketing site for **Built for Pros** — subscription-based marketing for contractors and home service businesses. The site presents custom websites, SEO, Google presence, reviews, and managed ads, with CTAs for scheduling and lead capture.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- [Lucide](https://lucide.dev) icons

## Project structure

| Path | Purpose |
|------|---------|
| `app/page.tsx` | Main landing page |
| `app/privacy`, `app/terms` | Legal pages |
| `app/api/lead/route.ts` | Lead form submissions (optional webhook) |
| `content/site.ts` | Copy, navigation, pricing, FAQ, and other site content |
| `lib/seo.ts` | Metadata helpers |
| `components/sections/` | Landing page sections |
| `components/ui/` | Shared UI helpers |

## Getting started

## Local dev ports

- Marketing site: [http://localhost:3000](http://localhost:3000)
- CRM: [http://localhost:3001](http://localhost:3001)

The marketing app's dev scripts pin this app to port `3000` so it does not collide with the CRM.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server on port `3000` |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Environment variables

Optional:

| Variable | Description |
|----------|-------------|
| `LEAD_WEBHOOK_URL` | If set, lead form POSTs are forwarded to this URL as JSON. |

Local overrides can live in `.env.local` (not committed).

## Deploy

This app is a standard Next.js deployment. [Vercel](https://vercel.com) is the typical host; connect the repo and set `LEAD_WEBHOOK_URL` in the project environment if you use the lead webhook.

## Repository

[github.com/MattCognac/built-for-pros](https://github.com/MattCognac/built-for-pros)
