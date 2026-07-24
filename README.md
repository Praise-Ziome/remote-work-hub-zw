# Remote Work Hub ZW

Verified remote jobs, AI opportunities, freelance gigs, and internships for
Zimbabweans and professionals across Africa.

## Stack

- **Frontend:** React 18 + Vite + Tailwind CSS
- **Routing:** React Router
- **Icons:** Lucide React
- **Animation:** Framer Motion
- **Database / Auth / Storage (later):** Supabase
- **Deployment:** Vercel or Cloudflare Pages

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

```bash
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/     Navbar, Hero, JobCard, FeaturedJobs, Categories,
                  CareerTips, Newsletter, Footer
  context/        ThemeContext.jsx — dark/light mode (class strategy,
                  persisted to localStorage, respects prefers-color-scheme)
  data/           jobs.js, categories.js, resources.js — static content,
                  shaped to mirror future Supabase tables so they can be
                  swapped for real queries with minimal changes
  pages/          Home, Jobs, JobDetail, Resources, ResourceDetail,
                  About, Contact, Legal, NotFound
```

## Theming

Dark mode is the default (matches the primary design), driven by Tailwind's
`class` strategy. The toggle lives in the navbar and persists the choice to
`localStorage` under `rwh-theme`. Brand color tokens (`brand-*`) and dark
surface tokens (`surface-*`) live in `tailwind.config.js` — tweak them there
to restyle the whole app.

## Next steps (Supabase)

The data layer is intentionally isolated in `src/data/*.js` so it's a small
lift to swap in Supabase later:

1. `npm install @supabase/supabase-js`
2. Create `src/lib/supabaseClient.js`:
   ```js
   import { createClient } from '@supabase/supabase-js'
   export const supabase = createClient(
     import.meta.env.VITE_SUPABASE_URL,
     import.meta.env.VITE_SUPABASE_ANON_KEY
   )
   ```
3. Copy `.env.example` to `.env.local` and fill in your project's URL/anon key.
4. Replace the static `jobs` array in `src/data/jobs.js` with a
   `supabase.from('jobs').select('*')` call (e.g. via a small hook like
   `useJobs()`), keeping the same field names so components don't need to
   change.
5. Add Supabase Auth for employer/admin job posting, and Supabase Storage
   for company logos.

## Deployment

**Vercel:** import the repo, framework preset "Vite", build command
`npm run build`, output directory `dist`.

**Cloudflare Pages:** framework preset "Vite", build command `npm run build`,
build output directory `dist`.

Add any `VITE_*` environment variables in the host's dashboard once Supabase
is connected.
