# Ezzyshop — Astro + TypeScript

Landing page for Ezzyshop built with Astro 4, React, and TypeScript.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

## Stack

- **Astro 4** — static-first framework, zero JS by default
- **TypeScript** (strict mode)
- **React** — only for interactive components (`Nav`, `Screens`)
- **DM Sans + Nunito** — Google Fonts

## Project structure

```
src/
├── components/
│   ├── Nav.tsx          ← React (client:load) — scroll + lang switcher
│   ├── Screens.tsx      ← React (client:visible) — tab switching
│   ├── Hero.astro
│   ├── Stats.astro
│   ├── Benefits.astro
│   ├── HowItWorks.astro
│   ├── Features.astro
│   ├── Testimonials.astro
│   ├── Pricing.astro
│   ├── CTA.astro
│   └── Footer.astro
├── i18n/
│   └── translations.ts  ← All UZ / RU / EN strings + types
├── layouts/
│   └── Layout.astro     ← HTML shell, fonts, scroll-reveal script
├── pages/
│   ├── index.astro      → / (Uzbek, default)
│   ├── ru/index.astro   → /ru (Russian)
│   └── en/index.astro   → /en (English)
└── styles/
    └── global.css       ← All CSS (variables, components, utilities)
public/
├── logo-dark.png        ← Used on dark backgrounds (hero, footer)
└── logo-light.png       ← Used on light backgrounds (scrolled nav)
```

## i18n

All copy lives in `src/i18n/translations.ts`. Add new keys there and reference them via `T[lang].key` in any component. Language routes:

| URL   | Language |
|-------|----------|
| `/`   | Uzbek    |
| `/ru` | Russian  |
| `/en` | English  |

## Customization

- **Colors** — edit CSS variables in `src/styles/global.css` (`:root` block)
- **Brand color** — `--brand: #a5c113`
- **Fonts** — swap Google Fonts link in `src/layouts/Layout.astro`
- **Pricing** — update `plans` array in `src/i18n/translations.ts`

## Build for production

```bash
npm run build
npm run preview
```

Output goes to `dist/`. Deploy to Vercel, Netlify, or any static host.

### Vercel

```bash
npx vercel
```

### Netlify

```bash
npx netlify deploy --prod --dir=dist
```
