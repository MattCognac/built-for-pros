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
| `app/v2/` | Alternate landing layout and styles |
| `app/privacy`, `app/terms` | Legal pages |
| `app/api/lead/route.ts` | Lead form submissions (optional webhook) |
| `content/site.ts` | Copy, navigation, pricing, FAQ, and other site content |
| `lib/seo.ts` | Metadata helpers |
| `components/` | Shared UI, sections, and v2-specific components |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The v2 experience is at [http://localhost:3000/v2](http://localhost:3000/v2).

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server (Turbopack) |
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
