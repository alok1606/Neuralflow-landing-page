# NeuralFlow — FB Round 1 Submission

> **Next-Gen AI Data Automation Platform**
> Built for the FutureBuild Round 1 Speed Run · 26 June 2026

---

## 🚀 Live Demo

https://neuralflow-landing-page-nh9od5wbt-salok3191-2013s-projects.vercel.app/

## 📁 Repository

https://github.com/alok1606/Neuralflow-landing-page

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16** (App Router) |
| Language | **TypeScript 5** |
| Styling | **Tailwind CSS 3** + custom CSS variables |
| Fonts | **Inter** + **JetBrains Mono** (via `next/font`) |
| Animations | Native CSS Transitions & `@keyframes` only |
| Deployment | Vercel / Netlify |

---

## ✅ Hackathon Compliance Checklist

Every item below maps directly to a rule or scoring criterion from the official **FB_Round_1** problem statement.

---

### 🏗️ Allowed Framework — ✅ Compliant

The project is built with **Next.js** (App Router), which is explicitly listed in the allowed frameworks:
> _"React, Next.js, Vue, Nuxt, SolidJS, Angular, or Vanilla JS"_

---

### 🎨 Styling Tools — ✅ Compliant

Styling is done exclusively with **Tailwind CSS** (utility CSS) and hand-authored **CSS custom properties** in `globals.css`. No runtime CSS-in-JS engine is used anywhere.

---

## Feature 1 · Matrix-Driven Pricing & Currency Switcher ✅

**Rule:** Dynamic multi-currency pricing using a multi-dimensional configuration matrix. No hardcoded UI values. Changing billing cycle or currency must **not** re-render the parent component — updates must be isolated to the targeted text DOM nodes only.

### What was implemented

**`src/lib/pricing.ts`** — Single source of truth for all pricing logic:

```ts
export const PRICING_MATRIX: PricingMatrix = {
  tiers: {
    starter:    { baseUSD: 29  },
    pro:        { baseUSD: 79  },
    enterprise: { baseUSD: 299 },
  },
  currencies: {
    USD: { symbol: '$', tariff: 1.0,  decimals: 0 },
    INR: { symbol: '₹', tariff: 83.5, decimals: 0 },
    EUR: { symbol: '€', tariff: 0.92, decimals: 0 },
  },
  annualDiscount: 0.20,
}

export function computePrice(tierKey, currency, cycle): number {
  const { baseUSD } = PRICING_MATRIX.tiers[tierKey]
  const { tariff }  = PRICING_MATRIX.currencies[currency]
  const discount    = cycle === 'annual' ? PRICING_MATRIX.annualDiscount : 0
  return Math.round(baseUSD * tariff * (1 - discount))
}
```

- ✅ **Three currencies** — INR (₹), USD ($), EUR (€)
- ✅ **Three tiers** — Starter, Pro, Enterprise
- ✅ **Flat 20% annual discount** applied via the `annualDiscount` multiplier
- ✅ **Regional tariff variables** factored in per-currency (`tariff` field)
- ✅ **Zero hardcoded UI values** — all price strings are computed at runtime via `computePrice()`
- ✅ **State isolation** — `useRef` is used to hold direct references to individual price `<span>` DOM nodes; toggling currency or billing cycle mutates only those specific text nodes (`.textContent`), preventing any parent component re-render or layout reflow

---

## Feature 2 · Bento-to-Accordion with State Persistence ✅

**Rule:** Bento Grid on desktop → fluid Accordion on mobile. The **Context Lock Constraint** requires that if a user is hovering a bento node and resizes past the mobile breakpoint, the same active index must transfer to the mobile Accordion automatically.

### What was implemented

**`src/components/sections/BentoAccordion.tsx`** — zero external dependencies:

- ✅ **Bento Grid** rendered with CSS Grid (`repeat(3, 1fr)`) on `lg:` breakpoints, using `span 2` / `span 2` for featured tiles
- ✅ **Accordion** rendered on mobile using `maxHeight` CSS transitions driven by `scrollHeight` measurements — no external library
- ✅ **Context Lock Constraint** — a `ResizeObserver` on `document.body` detects when the viewport crosses the 1024px breakpoint. The shared `activeIndex` state (held in the parent `BentoAccordion` component) is passed to both children, so the exact active node is preserved and the corresponding Accordion panel opens smoothly on layout transition
- ✅ **Zero banned libraries** — no Framer Motion, Radix, Shadcn, HeadlessUI, or any runtime animation engine is present in `package.json`
- ✅ **Accordion expand/collapse** uses native `max-height` CSS with `cubic-bezier(0.45, 0, 0.55, 1)` (ease-in-out) at 300ms — matching the structural reflow specification

---

## 🔍 SEO & Semantic HTML ✅

**Rule:** Correct semantic tags, meta headers, Open Graph tags, accessible image attributes, `robots.txt`, sitemap.

### What was implemented

**`src/app/layout.tsx`** — Full metadata block:

- ✅ `<title>` with default + template pattern
- ✅ `<meta name="description">` and `<meta name="keywords">`
- ✅ **Open Graph** tags — `og:type`, `og:title`, `og:description`, `og:image` (1200×630), `og:url`, `og:locale`
- ✅ **Twitter Card** — `summary_large_image`, `twitter:site`, `twitter:creator`
- ✅ `<link rel="canonical">` via `alternates.canonical`
- ✅ **JSON-LD structured data** (`SoftwareApplication` schema) for rich search results
- ✅ `robots: { index: true, follow: true }`
- ✅ **`/robots.ts`** — generates `/robots.txt` with `Allow: /` and sitemap reference
- ✅ **`/sitemap.ts`** — generates `/sitemap.xml` with correct `lastModified`, `changeFrequency`, and `priority`
- ✅ **Semantic HTML** — `<main>`, `<header>`, `<section>`, `<article>`, `<nav>`, `<footer>` used throughout; deep `<div>` nesting avoided
- ✅ **Accessible images** — decorative SVGs use `aria-hidden="true"` and `alt=""`; meaningful images carry descriptive `alt` text
- ✅ `lang="en"` on the `<html>` element

---

## 🎬 Motion & Entrance Constraints ✅

**Rule:** Micro-interactions: 150–200ms ease-out. Structural reflows: 300–400ms ease-in-out. Total loader orchestration ≤ 500ms. No runtime CSS-in-JS animation engines.

### What was implemented

**`src/styles/globals.css`** — Named easing tokens:

```css
:root {
  --ease-out:   cubic-bezier(0.16, 1, 0.3, 1);
  --ease-inout: cubic-bezier(0.45, 0, 0.55, 1);
}
```

- ✅ **Loader** (`#loader`) — logo scales in at `0.4s var(--ease-out)`, progress bar fills at `380ms` — total well within the **500ms TTI** cap. Fade-out uses CSS `animation` only
- ✅ **Bento card hover** — `border-color`, `background`, `transform: translateY(-2px)` at `200ms var(--ease-out)` ✓
- ✅ **Accordion toggle** — `max-height` and `border-color` at `300ms var(--ease-in-out)` ✓
- ✅ **Pricing card hover** — `transform: translateY(-4px)` at `200ms var(--ease-out)` ✓
- ✅ **Accordion chevron rotation** — `300ms var(--ease-in-out)` ✓
- ✅ **All motion** uses native CSS `transition` / `@keyframes` or the Web Animations API — no Framer Motion or any runtime animation engine

---

## 🧩 Asset Compliance ✅

**Rule:** Meaningful integration of all asset categories — SVG Pack, Font list, Color Palette. Missing/unused assets incur heavy deductions.

### What was implemented

- ✅ **SVG Pack** — All provided SVGs (`arrow-trending-up`, `arrow-path`, `chart-pie`, `cog-8-tooth`, `cube-16-solid`, `link`, `search`, `chevron-*`, `x-mark`) are used across the Bento feature cards, Navbar, FAQ, and UI controls. No external icon libraries.
- ✅ **Fonts** — `Inter` (body) and `JetBrains Mono` (code/labels) loaded via `next/font/google` with `display: 'swap'` — both specified in the asset font list
- ✅ **Color Palette** — All six hex values applied as CSS custom properties and used consistently across all components:

| Token | Hex |
|---|---|
| `--forsythia` | `#FFC801` |
| `--deep-saffron` | `#FF9932` |
| `--nocturnal` | `#114C5A` |
| `--oceanic-noir` | `#172B36` |
| `--arctic-powder` | `#F1F6F4` |
| `--mystic-mint` | `#D9E8E2` |

- ✅ **OG Image** (`/public/og-image.svg`) — used in Open Graph and Twitter Card metadata

---

## 📱 Responsive Breakpoints ✅

**Rule:** Flawless layout adaptation across mobile, tablet, and desktop without horizontal clipping or overlapping typography.

- ✅ Tailwind's `lg:` breakpoint (1024px) drives all major layout switches
- ✅ Bento Grid is `hidden` on mobile; Accordion is `lg:hidden` on desktop — no overlap
- ✅ `overflow-x: hidden` on `body` prevents any horizontal scroll
- ✅ Fluid typography sizing via `clamp()` and responsive padding utilities

---

## ⚡ Performance ✅

**Rule:** No excessive layout thrashing, component mount-flashing, or unnecessary global re-renders.

- ✅ No banned libraries (`framer-motion`, `@radix-ui`, `shadcn`, `headlessui`) — verified in `package.json`
- ✅ Currency/billing toggle uses direct DOM node mutation via `useRef` — zero parent re-render
- ✅ `useCallback` used on all event handlers in `BentoAccordion` to prevent child re-renders
- ✅ `ResizeObserver` used instead of `window.addEventListener('resize')` to avoid excessive listener callbacks
- ✅ `next/font` with `display: swap` prevents render-blocking font requests
- ✅ Loader completes within 500ms — no TTI delay

---

## Project Structure

```
neuralflow/
├── public/
│   ├── svgs/               # All provided SVG assets
│   └── og-image.svg        # Open Graph image
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Metadata, fonts, JSON-LD, OG tags
│   │   ├── page.tsx        # Root page, section composition
│   │   ├── robots.ts       # /robots.txt generation
│   │   └── sitemap.ts      # /sitemap.xml generation
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, Features, BentoAccordion, Pricing,
│   │   │                   # Testimonials, CTABanner, FAQ
│   │   └── ui/             # Loader, ScrollRevealProvider
│   ├── hooks/
│   │   └── useScrollReveal.ts
│   ├── lib/
│   │   ├── pricing.ts      # PRICING_MATRIX + computePrice()
│   │   └── data.ts         # Static content data
│   ├── styles/
│   │   └── globals.css     # CSS variables, easing tokens, animations
│   └── types/
│       └── index.ts        # TypeScript interfaces
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Scoring Self-Assessment

| Criterion | Points Available | Status |
|---|---|---|
| Feature 1: Dynamic multi-currency pricing matrix | 15 | ✅ |
| Re-render & State Isolation Guardrail | 15 | ✅ |
| Feature 2: Bento-to-Accordion + zero-dependency rule | 10 | ✅ |
| Semantic DOM Layout | 15 | ✅ |
| SEO Hygiene & Metadata | 10 | ✅ |
| Loading Sequence Performance (≤500ms) | 5 | ✅ |
| Asset Compliance & Design Polish | 15 | ✅ |
| Breakpoint Fluidity | 10 | ✅ |
| Motion Accuracy | 5 | ✅ |
| **Total** | **100** | |
