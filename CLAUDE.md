# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Next.js, port 3000)
npm run build     # Production build
npm run lint      # Run ESLint
```

There is no test suite in this project.

## Architecture

This is a **Next.js 15 App Router** marketing site for an ice cream brand, built with React 19 and Tailwind CSS v3.

### Routing and layout

All routes live under `app/` using the App Router convention. `app/layout.jsx` is the single root layout — it wraps every page with `<Header>` and `<Footer>` and loads the `Outfit` Google Font. Each route has a single `page.jsx`; page-level `metadata` exports are defined there.

Routes: `/` (home), `/our-products`, `/our-history`, `/news`, `/where-to-buy`.

### Content model

There is no CMS or API. All page content (flavor cards, product categories, location data, news updates, brand milestones) is hardcoded as plain JS arrays at the top of each page file. To add or change content, edit those arrays directly in the relevant `app/*/page.jsx`.

### Navigation duplication

`Nav.jsx` (desktop, hidden below `md`) and `MobileNav.jsx` (mobile sheet) each maintain their own copy of the `links` array and the `isActiveLink` helper. When adding or removing a route, update both files. Both use `usePathname()` from `next/navigation` and carry `"use client"` as a result.

### Components

- `components/` — shared layout components (`Header`, `Footer`, `Nav`, `MobileNav`)
- `components/ui/` — shadcn/ui-style primitives (currently only `Sheet`, backed by Radix Dialog); add new shadcn components here using the CLI (`npx shadcn@latest add <component>`). The project is configured for `.jsx` (not `.tsx`) and the "new-york" style.
- `lib/utils.js` — exports `cn()` (clsx + tailwind-merge), the standard utility for conditional class names

### Styling conventions

- Brand colors are CSS custom properties in `app/globals.css`: `--color-cream` (`#fff8f1`), `--color-brand` (`#18498a`), `--color-brand-dark` (`#123a6f`), `--color-accent` (`#28b940`). Use `var(--color-*)` or the equivalent hex inline — the Tailwind config does not alias these to utility names.
- Three reusable Tailwind component classes are defined in `globals.css` under `@layer components`: `.section-kicker`, `.section-title`, `.section-copy`. Use these for the repeated section-header pattern across pages.
- The `@/` path alias maps to the project root (e.g. `@/components/Footer`).

### Server vs. client components

Pages and `Footer` are Server Components by default. `Nav` and `MobileNav` are Client Components (`"use client"`) because they read the current pathname. `export const metadata` must only appear in Server Component files — never in files marked `"use client"`.
