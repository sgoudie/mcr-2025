# Morning Chorus Records (mcr-2025)

Static marketing/catalogue site for the record label. **Astro 5** + **Tailwind v4**, deployed to **Vercel**.

## Commands

- `npm run dev` — local dev server (`astro dev`)
- `npm run build` — production build (`astro build`)
- `npm run preview` — serve the built output locally
- `npx vercel --prod` — build + deploy to production from source (project is linked)

## Structure

- `src/content/releases/*.json` — one JSON file per release (`mcr001`–`mcr015`). Schema in `src/content.config.ts`. Release images live in `src/content/releases/assets/<slug>.{jpg,png}` and are optimised at build time.
- `src/content/playlists/*.json` — Spotify playlist entries.
- `src/pages/releases/index.astro` — catalogue grid (sorted by `catalogue_number` desc, no date filtering).
- `src/pages/releases/[slug].astro` — per-release detail page (`getStaticPaths`).
- `src/pages/index.astro`, `playlists.astro`, `404.astro`, `src/layouts/BaseLayout.astro`.

## Adding a release

1. Add `src/content/releases/mcrNNN.json` matching the schema (note `release_date` is `dd/mm/yyyy`).
2. Add the artwork at `src/content/releases/assets/mcrNNN.jpg` and set `image: "mcrNNN.jpg"`.
3. Commit + push (or `npx vercel --prod`). The build regenerates the listing and detail page.

## Deployment gotchas

- **Never commit `.vercel/`.** It is gitignored. If Vercel's prebuilt output (`.vercel/output/`) gets committed, Vercel skips `astro build` and serves stale prebuilt files — new releases won't appear despite correct source (deploys finish in ~2s instead of running a real build).
- `dist/` and `.astro/` are build/cache artifacts — gitignored, never commit.
- Redirects (`/archive` → `/releases`) are configured in `astro.config.mjs`.
- Production domain: `www.morningchorusrecords.com` (Vercel project `mcr-2025`).
