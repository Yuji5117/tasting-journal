# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## About this project

Tasting Journal — a personal app for recording tasting notes on wine, sake, and other
fermented beverages (create notes, browse history, view details, rate drinks, log aroma/flavor
notes). Currently MVP stage: data is mocked in-memory, no backend yet.

- Planned but not yet implemented: image upload, tag management, search & filter, AI tasting
  assistant, tasting map, statistics, Supabase-backed persistence (see README.md).

## Commands

- `npm run dev` — start the dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint (flat config via `eslint.config.mjs`, extends `eslint-config-next`)

There is no test runner configured in this repo.

## Architecture

- **Next.js 16 App Router**, React 19, TypeScript (strict), Tailwind CSS v4 (via
  `@tailwindcss/postcss`, no `tailwind.config` file — theme is configured in `app/globals.css`).
- Next.js 16 has breaking changes vs. older Next.js knowledge — before touching routing, data
  fetching, caching, or metadata APIs, check `node_modules/next/dist/docs/01-app/` for the
  current API shape rather than relying on training data (see AGENTS.md).
- Path alias `@/*` maps to the repo root (`tsconfig.json`).

### Feature-based structure

Domain code lives under `features/tasting-notes/`, not colocated with routes:
- `types/` — domain types (e.g. `TastingNote`)
- `constants/` — shared constant/enum-like data (e.g. `categories`, which also derives the
  `TastingNoteCategory` union type via `typeof categories[number]["value"]`)
- `data/` — mock data standing in for a backend (`mockNotes.ts`)
- `components/` — feature UI components, imported by route files under `app/`

Routes in `app/` are kept thin: they compose components from `features/tasting-notes/components`
rather than defining markup inline. When adding a new domain concept, prefer extending
`features/tasting-notes/` (or adding a sibling `features/<name>/` directory) over adding logic
directly under `app/`.

### Routing

- `/notes` — list view, filterable by category (filter UI exists but is not yet wired to state)
- `/notes/[id]` — detail view; `params` is a `Promise` and must be `await`ed (Next.js 16 async
  params convention)
- `/notes/create` — creation form (`TastingNoteForm`, a client component); the submit button
  lives in the route's header and triggers the form via `form="tasting-note-form"` +
  `type="submit"`, rather than a submit button inside the form itself
- No backend/mutation wiring yet — form submission currently only `console.log`s values, and
  `mockTastingNotes` is the sole data source read directly by page components

### Conventions observed in existing code

- Japanese is used for user-facing copy (labels, headings, placeholder text); keep new UI text
  consistent with this.
- Styling is Tailwind utility classes directly on elements — no CSS modules, no component
  library.
