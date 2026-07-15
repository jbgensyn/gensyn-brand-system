---
name: gensyn-design-system
description: Apply Gensyn brand tokens, component specs, logo assets, and design conventions to UI work including React components, CSS custom properties, Tailwind classes, and design layouts. Use when creating or editing any Gensyn project interface, component, or visual output.
---

# Gensyn Design System

Version 1.0 — July 2026
Source: github.com/jbgensyn/gensyn-brand-system

---

## Core Principles

- Reference CSS custom properties for all colors, spacing, typography, and motion — never hardcode values
- The page background is linen (`--color-bg-page`, `#F8F5F0`) — not white; white is for surfaces atop color only
- Shadows are always blue-tinted (brand blue base), never neutral gray
- Motion is calm and deliberate — no bounce, no spring physics
- Typography uses Enriqueta for web body, Noto Sans for display/headlines
- Layout feels structured and purposeful — Gensyn is a facilitation brand, not a startup brand

---

## Colors

### Primary Brand
- `--gensyn-blue: #042477` — Resolution Blue, primary; use for headings, primary actions, inverse backgrounds
- `--gensyn-purple: #743494` — Design Purple, secondary; use for secondary actions and accents
- `--gensyn-dark-gray: #313132` — text and dark alt; never use pure black

### Accent
- `--gensyn-linen: #F8F5F0` — page background
- `--gensyn-orange: #FFA630` — focus ring, callout highlights; use sparingly
- `--gensyn-green: #0D714B` — accent; use sparingly

### Tints & Shades
- `--gensyn-blue-light: #274A9E` · `--gensyn-blue-dark: #021845`
- `--gensyn-purple-light: #8E52AC` · `--gensyn-purple-dark: #52246C`
- `--gensyn-orange-dark: #E08F1B` · `--gensyn-green-dark: #095A3B`

### Neutrals (lightest to darkest)
- `--neutral-0: #F8F5F0` · `--neutral-100: #EFECE5` · `--neutral-200: #D8D5CE`
- `--neutral-400: #8E8E90` · `--neutral-600: #5B5B5D` · `--neutral-800: #313132` · `--neutral-900: #1D1D1F`

### Semantic Aliases (always prefer these in components)
- `--color-bg-page` → linen background
- `--color-bg-surface` → white (surfaces only)
- `--color-bg-inverse` → brand blue
- `--color-text-primary` → dark gray
- `--color-text-secondary` → neutral-600
- `--color-text-inverse` → white
- `--color-brand-primary` / `--color-brand-primary-hover` → blue / blue-dark
- `--color-brand-secondary` / `--color-brand-secondary-hover` → purple / purple-dark
- `--color-accent-orange` · `--color-accent-green`
- `--color-border-subtle` / `--color-border-strong` → neutral-200 / neutral-400
- `--color-focus-ring` → orange

### Category Colors (strategic planning artifacts)
- `--color-cat-benefits: #C23B6B`
- `--color-cat-issues: #042477` (brand blue)
- `--color-cat-opportunities: #0D714B` (brand green)
- `--color-cat-operations: #FFA630` (brand orange)

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

## Shadows (blue-tinted, no neumorphism)
- `--shadow-sm: 0 1px 2px rgba(4, 36, 119, 0.06)`
- `--shadow-md: 0 4px 16px rgba(4, 36, 119, 0.10)`
- `--shadow-lg: 0 12px 32px rgba(4, 36, 119, 0.14)`

---

## Motion
- `--ease-standard: cubic-bezier(0.4, 0, 0.2, 1)` — calm and deliberate, no bounce
- `--duration-fast: 120ms` · `--duration-base: 200ms` · `--duration-slow: 340ms`

---

## Layout
- `--content-max-width: 1180px`
- `--container-padding: var(--space-6)` (24px)

---

## Logo Assets

All logo files are outline-converted SVGs (no font dependencies).

| File | Use |
|------|-----|
| `assets/logo/gensyn-logo.svg` | Primary horizontal lockup — default use |
| `assets/logo/gensyn-logo-black.svg` | On light backgrounds where color isn't appropriate |
| `assets/logo/gensyn-logo-white.svg` | On dark/inverse backgrounds |
| `assets/logo/gensyn-logo-full.svg` | Square lockup with mark, name, and tagline |
| `assets/logo/gensyn-logo-mark.svg` | Mark only — for favicons, app icons, tight spaces |
| `assets/logo/gensyn-logo-mark-black.svg` | Mark only, black |
| `assets/logo/gensyn-logo-mark-white.svg` | Mark only, white |

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

## Component Conventions

### Button
- Variants: `primary` (blue) · `secondary` (purple) · `outline` · `ghost`
- Sizes: `sm` · `md` · `lg`
- Radius: `--radius-md` — never pill shape for buttons
- Focus: `--color-focus-ring` at 2px, 2px offset
- Transitions: `--duration-base`, `--ease-standard`

### Card
- Background: `--color-bg-surface` (white)
- Padding: `--space-6` default
- Radius: `--radius-lg`
- Shadow: `--shadow-md` when elevated
- Single soft blue-tinted shadow only — no neumorphism

### Input / Select
- Labels always above input — no floating labels
- Border: `--border-thin` at rest, `--border-strong` on focus
- Focus ring: `--color-focus-ring` (orange)
- Font: `--font-body-web`, `--text-base`

### Badge
- Tones: `neutral` · `benefits` · `issues` · `opportunities` · `operations`
- Shape: pill (`--radius-full`) — approved use case
- Size: `--text-xs` or `--text-sm`

---

## What Claude Should Always Do
- Use semantic token aliases in components, not raw color tokens
- Use `--color-bg-page` (linen) as the page background — never white
- Apply `--ease-standard` and duration tokens for all transitions
- Reference logo files by their canonical paths in this repo
- Keep layouts structured and purposeful — generous whitespace, clear hierarchy
- Use Enriqueta for body text, Noto Sans for display

## What Claude Should Never Do
- Hardcode hex values — always use a token variable
- Use pure black (`#000000`) anywhere — use `--gensyn-dark-gray` or `--neutral-900`
- Use white as a page background — linen only
- Add decorative gradients or drop shadows beyond the defined token set
- Use more than three font weights in a single view
- Use pill-shaped buttons — reserved for badges only
- Introduce new color values not defined in `tokens/colors.json`
- Use bounce or spring easing — motion is always calm and deliberate
