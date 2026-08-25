---
name: gensyn-design-system
description: Apply Gensyn brand tokens, component specs, logo assets, and design conventions to UI work including React components, CSS custom properties, Tailwind classes, and design layouts. Use when creating or editing any Gensyn project interface, component, or visual output.
---

# Gensyn Design System

Version 1.2 — August 2026
Source: github.com/jbgensyn/gensyn-brand-system

---

## Core Principles

- Reference CSS custom properties for all colors, spacing, typography, and motion — never hardcode values
- The page background is linen (`--color-bg-page`, `#F8F5F0`) — not white; white is for surfaces atop color only
- Shadows are always navy-tinted (Gensyn Navy base), never neutral gray
- Motion is calm and deliberate — no bounce, no spring physics
- Typography uses Enriqueta for web body, Noto Sans for display/headlines
- Layout feels structured and purposeful — Gensyn is a facilitation brand, not a startup brand

---

## Colors

### Primary Brand
- `--gensyn-navy: #263171` — **Gensyn Navy**, primary and default; use for headings, primary actions, inverse backgrounds
- `--gensyn-purple: #743694` — **Design Purple**, secondary; use for secondary actions and accents

Both values match the approved June 2025 logo artwork exactly. Do not substitute.

### Brand Accents
- `--gensyn-navy-accent: #CDD4FD` — navy-derived; tinted backgrounds, selected states, badge fills
- `--gensyn-purple-accent: #DDC3EA` — purple-derived; tinted backgrounds, section highlights

### Supporting Brand Colors
- `--gensyn-linen: #F8F5F0` — **Linen**; light backgrounds, page background
- `--gensyn-dark-gray: #313132` — **Dark Gray**; dark backgrounds and text; never use pure black
- `--gensyn-orange: #FFA630` — **Orange Peel**; complementary, focus ring, callout highlights
- `--gensyn-green: #0D714B` — **Dark Spring Green**; complementary

**The two complementary colors are graphics colors, not text colors.** Use them for icons, fills, borders, focus rings, chart marks, and background areas. Never set type in Orange Peel or Dark Spring Green — at any size, in any weight. Where words must carry one of these hues, use the darkened form: `--color-warning` (#7A4A08) for orange, `--gensyn-green-dark` (#095A3B) for green.

### Tints & Shades
- `--gensyn-navy-light: #515A8D` · `--gensyn-navy-dark: #1E2759`
- `--gensyn-purple-light: #905EA9` · `--gensyn-purple-dark: #5D2B76`
- `--gensyn-orange-dark: #E08F1B` · `--gensyn-green-dark: #095A3B`

Light variants are for disabled and inactive states; dark variants are for hover and pressed states.

### Neutrals (lightest to darkest)
- `--neutral-0: #F8F5F0` · `--neutral-100: #EFECE5` · `--neutral-200: #D8D5CE`
- `--neutral-400: #8E8E90` · `--neutral-600: #5B5B5D` · `--neutral-800: #313132` · `--neutral-900: #1D1D1F`

### Semantic Aliases (always prefer these in components)
- `--color-bg-page` → linen background
- `--color-bg-surface` → white (surfaces only)
- `--color-bg-inverse` → Gensyn Navy
- `--color-bg-accent-navy` / `--color-bg-accent-purple` → brand accents
- `--color-text-primary` → dark gray
- `--color-text-secondary` → neutral-600
- `--color-text-inverse` → white
- `--color-brand-primary` / `--color-brand-primary-hover` → navy / navy-dark
- `--color-brand-secondary` / `--color-brand-secondary-hover` → purple / purple-dark
- `--color-accent-orange` · `--color-accent-green`
- `--color-border-subtle` / `--color-border-strong` → neutral-200 / neutral-400
- `--color-focus-ring` → orange

### Category Colors (strategic planning artifacts)
- `--color-cat-benefits: #C23B6B`
- `--color-cat-issues: #263171` (Gensyn Navy)
- `--color-cat-opportunities: #0D714B` (Dark Spring Green)
- `--color-cat-operations: #FFA630` (Orange Peel)

### Contrast Notes
- Navy on linen 10.97:1 · white on navy 11.93:1 · purple on linen 7.16:1 · white on purple 7.78:1 — all pass WCAG AA and AAA for body text
- Navy on navy-accent 8.2:1 · purple on purple-accent 4.84:1 — the purple pairing passes AA for body text but not AAA; use navy text on purple-accent for small type
- Orange Peel is 1.8:1 on linen — it fails as text at every size and weight. Orange Peel dark is 2.4:1 and also fails; it is a hover fill, not a text color.
- Dark Spring Green is 5.6:1 on linen and would pass, but is reserved as a graphics color so the two complementary colors follow one rule. The darkened form (#095A3B, 7.6:1) is the text-safe green.

### Deprecated (v1.0 → v1.1)
These values were carried over from an older logo revision and are no longer brand-correct. Replace on sight.

| Deprecated | Replacement |
|------------|-------------|
| `#042477` Resolution Blue | `#263171` Gensyn Navy |
| `#743494` | `#743694` Design Purple |
| `#274A9E` / `#021845` | `#515A8D` / `#1E2759` |
| `#8E52AC` / `#52246C` | `#905EA9` / `#5D2B76` |
| `--gensyn-blue*` token names | `--gensyn-navy*` |

---

## Typography

### Font Families
- Display/headline: `'Noto Sans', 'Segoe UI', system-ui, sans-serif`
- Web body: `'Enriqueta', Georgia, serif` ← primary web font
- Print body: `'Lora', 'Californian FB', Georgia, serif`

### Weights
`--weight-regular: 400` · `--weight-medium: 500` · `--weight-bold: 700` · `--weight-display: 800`

### Size Scale
`--text-xs: 13px` · `--text-sm: 15px` · `--text-base: 17px` · `--text-md: 20px`
`--text-lg: 24px` · `--text-xl: 32px` · `--text-2xl: 42px` · `--text-3xl: 56px` · `--text-4xl: 72px`

### Line Height & Tracking
`--leading-tight: 1.1` · `--leading-snug: 1.3` · `--leading-normal: 1.55` · `--leading-relaxed: 1.7`
`--tracking-tight: -0.01em` · `--tracking-normal: 0` · `--tracking-wide: 0.06em`

---

## Spacing (4px base grid)
`--space-1: 4px` · `--space-2: 8px` · `--space-3: 12px` · `--space-4: 16px` · `--space-5: 20px`
`--space-6: 24px` · `--space-8: 32px` · `--space-10: 40px` · `--space-12: 48px`
`--space-16: 64px` · `--space-20: 80px` · `--space-24: 96px` · `--space-32: 128px`

---

## Radius
`--radius-sm: 4px` · `--radius-md: 8px` · `--radius-lg: 14px` · `--radius-xl: 22px` · `--radius-full: 999px`

Soft, approachable radii. Pill shape (`--radius-full`) only for badges — not buttons.

---

## Shadows (navy-tinted, no neumorphism)
- `--shadow-sm: 0 1px 2px rgba(38, 49, 113, 0.06)`
- `--shadow-md: 0 4px 16px rgba(38, 49, 113, 0.10)`
- `--shadow-lg: 0 12px 32px rgba(38, 49, 113, 0.14)`

---

## Motion
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)` — calm and deliberate, no bounce
- `--duration-fast: 120ms` · `--duration-base: 200ms` · `--duration-slow: 340ms`

---

## Layout
- `--content-max-width: 1180px`
- `--container-padding: var(--space-6)` (24px)

---

## Data Visualization

Assessment output is a core Gensyn deliverable — charts are brand surface, not an afterthought.

### Categorical (unordered dimensions)
`--chart-series-1` navy · `-2` purple · `-3` green · `-4` orange · `-5` `#C23B6B` rose · `-6` purple-light

Use in order. More than six categories means grouping the data, not adding colors.

### Sequential (ordered magnitude)
`--chart-seq-1: #CDD4FD` · `-2: #939BCC` · `-3: #606AA2` · `-4: #263171` · `-5: #1E2759`

Steps 1–2 are fill-only — not enough contrast to sit under a label.

### Diverging (gap against target, balance)
`--chart-div-1: #EC9126` (needs attention) · `-2: #FCCA86` · `-3: #E8E5DF` (neutral) · `-4: #8EBAA6` · `-5: #0D714B` (strength)

### Support
`--chart-grid` · `--chart-axis-label` · `--chart-marker` · `--chart-marker-halo` · `--chart-track`
`--chart-fill-opacity: 0.12` · `--chart-stroke-width: 2px` · `--chart-marker-radius: 7px`

CSS variables resolve inside SVG presentation attributes — `fill="var(--chart-series-1)"` works. Never paste a hex into chart code.

Where a project names its own dimensions, alias them onto the series tokens and give each one a graphic token and a `-text` token. They diverge for the orange and green series, and are identical for the rest.

---

## Interaction States
- `--state-bg-input: #FCFBF9` · `--state-bg-hover` · `--state-bg-selected` (navy accent) · `--state-bg-selected-secondary` (purple accent) · `--state-bg-disabled`
- `--state-opacity-disabled: 0.4` · `--state-opacity-muted: 0.7`

## Status Colors
- `--color-error: #B3261E` with `--color-error-surface` / `--color-error-border`
- `--color-warning: #7A4A08` with `--color-warning-surface` / `--color-warning-border`
- `--color-success` (green — icon, border, fill) with `--color-success-text` (#095A3B) for the words
- `--color-info` (navy) with surface and border variants; navy is text-safe, so it needs no text variant

Both complementary colors follow the same split: the brand hue does the graphic work (icon, border, fill), a darkened form carries any text. `--color-warning` is the darkened orange; `--color-success-text` is the darkened green.

---

## Breakpoints
`--breakpoint-sm: 480px` · `--breakpoint-md: 768px` · `--breakpoint-lg: 1024px` · `--breakpoint-xl: 1280px`

Multi-column layouts collapse to one column at or below `md`. Container padding drops to `--container-padding-sm` (16px) below `md`.

---

## Logo Assets

All logo files are outline-converted SVGs (no font dependencies). Color logo fills are `#263171` and `#743694` — these files are the canonical source of the brand colors.

| File | Use |
|------|-----|
| `assets/logo/gensyn-logo.svg` | Primary horizontal lockup — default use |
| `assets/logo/gensyn-logo-black.svg` | On light backgrounds where color isn't appropriate |
| `assets/logo/gensyn-logo-white.svg` | On dark/inverse backgrounds |
| `assets/logo/gensyn-logo-full.svg` | Square lockup with mark, name, and tagline |
| `assets/logo/gensyn-logo-mark.svg` | Mark only — for favicons, app icons, tight spaces |
| `assets/logo/gensyn-logo-mark-black.svg` | Mark only, black |
| `assets/logo/gensyn-logo-mark-white.svg` | Mark only, white |

### Clear Space & Minimum Size
- Clear space on all sides equals the height of the logo mark's inner diamond — roughly 25% of total lockup height. Nothing intrudes: no text, no rule, no image edge.
- Minimum size: horizontal lockup 120px wide on screen, 1 inch in print. Below that, use the mark alone.
- Mark minimum: 16px. Below that, don't show a logo.
- Never recolor, rotate, stretch, add effects to, or place the color lockup on a background between roughly 25% and 75% lightness — use the white or black lockup there instead.

### PNG Exports (4:1 horizontal ratio)
| File | Dimensions | Use |
|------|------------|-----|
| `exports/gensyn-logo-h60.png`  | 240×60px   | Navbar/header |
| `exports/gensyn-logo-h240.png` | 960×240px  | Retina web, email, partner grids |
| `exports/gensyn-logo-h600.png` | 2400×600px | Presentations, documents |
| `exports/gensyn-logo-mark-16.png`  | 16×16px  | Favicon small |
| `exports/gensyn-logo-mark-32.png`  | 32×32px  | Favicon standard |
| `exports/gensyn-logo-mark-192.png` | 192×192px | PWA icon |
| `exports/gensyn-logo-mark-512.png` | 512×512px | App store, high-res PWA |

---

## Consuming This System

Projects import the generated CSS rather than copying values:

```css
@import 'gensyn-tokens.css';  /* generated from tokens/*.json */
@import 'gensyn-base.css';    /* reset and element defaults */
```

`css/gensyn-tokens.css` is a build artifact. Never hand-edit it and never hand-copy its contents into a project — change `tokens/*.json` and run `node scripts/build-css.mjs`. A project holding its own copy of the token values will silently drift from the brand.

---

## Component Conventions

### Button
- Variants: `primary` (navy) · `secondary` (purple) · `outline` · `ghost`
- Sizes: `sm` · `md` · `lg`
- Radius: `--radius-md` — never pill shape for buttons
- Focus: `--color-focus-ring` at 2px, 2px offset
- Transitions: `--duration-base`, `--ease-standard`

### Card
- Background: `--color-bg-surface` (white)
- Padding: `--space-6` default
- Radius: `--radius-lg`
- Shadow: `--shadow-md` when elevated
- Single soft navy-tinted shadow only — no neumorphism

### Input / Select
- Labels always above input — no floating labels
- Border: `--border-thin` at rest, `--border-strong` on focus
- Focus ring: `--color-focus-ring` (orange)
- Font: `--font-body-web`, `--text-base`
- Error border and message: `--color-error`

### Badge
- Tones: `neutral` · `brand` · `benefits` · `issues` · `opportunities` · `operations`
- Shape: pill (`--radius-full`) — approved use case
- Size: `--text-xs` or `--text-sm`

### Option
- Marker circle plus label, rendered as a button — not a styled radio
- Selected changes the marker fill, not only the color, so it reads without color perception
- Full row is the hit target

### Progress
- Track `--chart-track` at 4px; only the fill animates, over `--duration-slow`
- Fill may take the current section's color in a sectioned flow
- Always pair with a text count

### Labels (eyebrow / section / stage)
- `--font-display`, uppercase, `--tracking-wide` — uppercase is for labels only
- Eyebrow defaults to purple; section labels take the section color

### Feedback
- Status message: tinted surface, 3px left border, status-colored text
- Loading below 300ms shows nothing; spinner respects `prefers-reduced-motion`
- Status color never carries meaning alone

---

## What Claude Should Always Do
- Use semantic token aliases in components, not raw color tokens
- Use `--color-bg-page` (linen) as the page background — never white
- Apply `--ease-standard` and duration tokens for all transitions
- Reference logo files by their canonical paths in this repo
- Keep layouts structured and purposeful — generous whitespace, clear hierarchy
- Use Enriqueta for body text, Noto Sans for display
- Treat Gensyn Navy as the default brand color; reach for purple only as a deliberate secondary

## What Claude Should Never Do
- Hardcode hex values — always use a token variable
- Use pure black (`#000000`) anywhere — use `--gensyn-dark-gray` or `--neutral-900`
- Use `#042477` or `#743494` — these are deprecated v1.0 values that do not match the logo
- Recolor the logo files — their fills are the brand definition, not a derivative of it
- Use white as a page background — linen only
- Add decorative gradients or drop shadows beyond the defined token set
- Hand-copy token values into a project — import the generated CSS instead
- Use a hex literal in chart code — CSS variables work in SVG attributes
- Set type in Orange Peel or Dark Spring Green — they are graphics colors; use the darkened forms for text
- Use more than three font weights in a single view
- Use pill-shaped buttons — reserved for badges only
- Introduce new color values not defined in `tokens/colors.json`
- Use bounce or spring easing — motion is always calm and deliberate
