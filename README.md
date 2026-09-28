# RootMate Waitlist

Landing page + waitlist signup for RootMate (formerly Büro Buddy) — shown via QR code at
interviews to start building a community of international students in Germany.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`, no config file needed)
- Supabase (shared `büro-buddy` project) for storing signups

## Setup

```bash
npm install
cp .env.example .env.local   # fill in Supabase URL + anon key
npm run dev
```

## Supabase

The signup form and the community counter talk to the **shared büro-buddy Supabase
project** (not a separate project — free tier only allows 2). Schema lives in
[`supabase/migration.sql`](./supabase/migration.sql):

- `waitlist_signups` table (`email` unique, `created_at`)
- RLS: anon can only `INSERT`, never `SELECT` — emails stay private
- `get_waitlist_count()` RPC — safe public aggregate count, no individual rows exposed

Apply it against the linked project with:

```bash
supabase link --project-ref wcxvfhrhmtgvnvsxwigk
supabase db query --linked --file supabase/migration.sql
```

## Behavior notes

- Community counter is hidden until there are more than 25 signups (avoids showing "0
  members" early on).
- Duplicate email submissions get a friendly "you're already on the list" message
  instead of a generic error.
- Copy is available in English and German via a simple toggle (`src/lib/i18n.ts`), no
  i18n framework needed for a single page.

## Deploy

Deployed on Vercel (framework auto-detected as Vite). Env vars needed in the Vercel
project: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`.

Once the production URL is live, generate a QR code pointing to it for use at
interviews/events.
