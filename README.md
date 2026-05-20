# Jothis Construction

A clean, minimal, multi-page marketing website for **Jothis Construction** — a fictional construction company offering residential, commercial, interior, renovation and project management services.

Built with React, Vite, Tailwind CSS, React Router and Lucide icons. The design is light, corporate and content-first, with construction orange (`#f59e0b`) as the only accent.

## Tech stack

- **React 18** + **Vite** — fast dev/build
- **React Router DOM v6** — multi-page routing
- **Tailwind CSS** — utility styling with a custom design token set
- **Lucide React** — icon set
- **Framer Motion** — installed but used minimally (kept available for future use)

## Pages

| Route | File | Purpose |
| --- | --- | --- |
| `/` | `src/pages/Home.jsx` | Hero, about preview, services, projects, why-choose-us, CTA |
| `/about` | `src/pages/About.jsx` | Story, stats, mission/vision/values, team |
| `/services` | `src/pages/Services.jsx` | Service grid + 4-step process |
| `/projects` | `src/pages/Projects.jsx` | Filterable project grid |
| `/contact` | `src/pages/Contact.jsx` | Contact form, info cards, Google Map iframe |

## Folder structure

```
src/
├── components/          # Reusable UI (Navbar, Footer, cards, ...)
├── pages/               # One file per route
├── layouts/             # MainLayout — Navbar + Outlet + Footer
├── data/                # Centralised content (services, projects, team, stats)
├── styles/globals.css   # Tailwind layers + small utility classes
├── App.jsx              # Routes
└── main.jsx             # Entry point
```

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build locally
npm run preview
```

The dev server runs on `http://localhost:5173` by default.

## Design system

| Token | Value |
| --- | --- |
| Accent | `#f59e0b` (construction orange) |
| Ink (text) | `#111827` |
| Soft text | `#374151` |
| Muted text | `#6b7280` |
| Surface | `#ffffff` |
| Alt surface | `#f9fafb` |
| Lines | `#e5e7eb` |

Typography uses **Plus Jakarta Sans** for display headings and **Inter** for body — both loaded from Google Fonts in `index.html`.

Common utility classes (defined in `globals.css`):

- `.container-x` — max-width + horizontal padding
- `.section` — vertical section padding
- `.btn`, `.btn-primary`, `.btn-outline`, `.btn-ghost`
- `.eyebrow` — small accent-coloured label above headings
- `.input` — shared form field styling

## Deploy to Vercel

Vercel auto-detects Vite, so no extra configuration is required.

### Option A — Git integration (recommended)

1. Push this repo to GitHub / GitLab / Bitbucket.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel detects the framework as **Vite**. Leave defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Click **Deploy**. Subsequent pushes to `main` redeploy automatically.

### Option B — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel       # first run — answer the prompts
vercel --prod # deploy to production
```

### SPA routing (already handled by Vercel)

Vercel's Vite preset rewrites unknown paths to `index.html` automatically, so deep links like `/about` work without extra config. If you need to be explicit, drop the following into `vercel.json` at the project root:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Customising

- **Company copy** — edit text directly in `src/pages/*` and the `src/data/*` files.
- **Services** — `src/data/services.js` (icon comes from `lucide-react`).
- **Projects** — `src/data/projects.js`. Replace image URLs with your own assets and update the `categories` array if you add new ones.
- **Team** — `src/data/team.js`.
- **Stats & features** — `src/data/stats.js`.
- **Contact info, map, socials** — `src/components/Footer.jsx` and `src/pages/Contact.jsx`.
- **Colours / fonts** — `tailwind.config.js` and `index.html`.

## License

Demo project — replace this notice with your own license before shipping.
