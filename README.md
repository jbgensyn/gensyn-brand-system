# Gensyn Design System

Brand tokens, component specs, and logo assets for all Gensyn Design work — web apps, assessment instruments, documents, and decks.

**Version 1.2.0** · August 2026

---

## Quick start

**1. Get the files into your project.** Either add this repo as a git submodule, or copy `css/` and `assets/` in.

```bash
git submodule add https://github.com/jbgensyn/gensyn-brand-system.git packages/gensyn-brand-system
```

**2. Import both stylesheets, tokens first.**

```css
@import 'packages/gensyn-brand-system/css/gensyn-tokens.css';
@import 'packages/gensyn-brand-system/css/gensyn-base.css';
```

`gensyn-tokens.css` defines every custom property. `gensyn-base.css` applies the reset, element defaults, focus ring, and reduced-motion handling.

**3. Build with token variables only.**

```css
.panel {
  background: var(--color-bg-surface);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  padding: var(--space-6);
}
```

**4. Record which brand version you're on** in your project's README, so a future update has a starting point.

Never copy token values into your project by hand. Import the generated CSS — a local copy of the hexes will drift from the brand without anyone noticing.

---

## Colors

### Primary

| | Name | Hex | Use for |
|---|------|-----|---------|
| ▊ | **Gensyn Navy** | `#263171` | Headings, primary actions, inverse backgrounds. The default brand color — reach for purple only as a deliberate secondary. |
| ▊ | **Design Purple** | `#743694` | Secondary actions, eyebrows and section labels, accents. |

The logo files in `assets/logo/` are the canonical source of these two values. If a token and the artwork ever disagree, the artwork is right.

### Brand accents

| | Name | Hex | Use for |
|---|------|-----|---------|
| ▊ | Navy Accent | `#CDD4FD` | Tinted backgrounds, selected states, badge fills |
| ▊ | Purple Accent | `#DDC3EA` | Tinted backgrounds, section highlights |

### Supporting

| | Name | Hex | Use for |
|---|------|-----|---------|
| ▊ | **Linen** | `#F8F5F0` | The page background. Never use white for a page. |
| ▊ | **Dark Gray** | `#313132` | Body text and dark backgrounds. Never use pure black. |
| ▊ | **Orange Peel** | `#FFA630` | Focus rings, chart marks, icons, fills — graphics only |
| ▊ | **Dark Spring Green** | `#0D714B` | Icons, fills, borders, chart marks — graphics only |

> **The two complementary colors are graphics colors, not text colors.**
> Never set type in Orange Peel or Dark Spring Green, at any size or weight. Where words need to carry the hue, use the darkened form: `--color-warning` (`#7A4A08`) for orange, `--gensyn-green-dark` (`#095A3B`) for green.

### Tints and shades

Light variants are for disabled and inactive states. Dark variants are for hover and pressed states.

| Light | Dark |
|---|---|
| Navy Light `#515A8D` | Navy Dark `#1E2759` |
| Purple Light `#905EA9` | Purple Dark `#5D2B76` |
| — | Orange Dark `#E08F1B` (fills only) |
| — | Green Dark `#095A3B` (fills, and the text-safe green) |

### Prefer semantic aliases

In component code, reach for the semantic name rather than the brand name — `--color-brand-primary` over `--gensyn-navy`, `--color-bg-page` over `--gensyn-linen`. Semantic aliases point at brand tokens through `var()`, so a future brand change flows through without touching your components.

### Contrast

| Pairing | Ratio | |
|---------|-------|---|
| Navy on Linen | 10.97:1 | AAA |
| White on Navy | 11.93:1 | AAA |
| Purple on Linen | 7.16:1 | AAA |
| White on Purple | 7.78:1 | AAA |
| Navy on Navy Accent | 8.20:1 | AAA |
| Navy on Purple Accent | 7.42:1 | AAA — prefer this over purple-on-purple |
| Purple on Purple Accent | 4.84:1 | AA only — not for small type |
| Green Dark on Linen | 7.61:1 | AAA — the text-safe green |
| Warning on Linen | 6.87:1 | AAA — the text-safe orange |
| **Orange Peel on Linen** | **1.80:1** | **Never as text** |
| **Dark Spring Green on Linen** | 5.55:1 | Never as text — graphics color |

Open `palette-preview.html` in a browser for live swatches and rendered contrast pairs.

---

## Typography

| Role | Font | Token |
|------|------|-------|
| Display / headline | Noto Sans | `--font-display` |
| Web body | Enriqueta | `--font-body-web` |
| Print body | Lora | `--font-body-print` |

Load Enriqueta and Noto Sans from Google Fonts; both are open-licensed.

The size scale runs `--text-xs` 13px through `--text-4xl` 72px on a 17px base. Line height and tracking have their own tokens (`--leading-*`, `--tracking-*`).

Two rules that catch people out: uppercase is for labels only — never headings, body text, or buttons — and no more than three font weights in a single view.

---

## Charts and assessment output

Scored artifacts are a core Gensyn deliverable, so the system covers them directly.

| Need | Tokens |
|------|--------|
| Unordered categories | `--chart-series-1` … `-6`, used in order |
| Ordered magnitude | `--chart-seq-1` … `-5` (navy ramp; steps 1–2 are fill-only) |
| Gap against target, balance | `--chart-div-1` … `-5` (attention → neutral → strength) |
| Gridlines, labels, markers, tracks | `--chart-grid`, `--chart-axis-label`, `--chart-marker`, `--chart-marker-halo`, `--chart-track` |
| Shape constants | `--chart-fill-opacity`, `--chart-stroke-width`, `--chart-marker-radius` |

CSS custom properties resolve inside SVG presentation attributes, so `fill="var(--chart-series-1)"` works directly in chart code. For numeric values a charting library consumes in JS rather than passing through to the DOM, read them once with `getComputedStyle(document.documentElement).getPropertyValue()`.

If your project names its own dimensions, alias them onto the series tokens and give each one a graphic token and a `-text` token — series 3 and 4 are the complementary colors, so their labels need the darkened forms. See `components/charts.md` for the full conventions.

---

## Component specs

Written specs live in `components/`. Read the relevant one before building:

| File | Covers |
|------|--------|
| `buttons.md` | Four variants, three sizes, focus and disabled states |
| `cards.md` | Surface, elevation, radius |
| `forms.md` | Inputs, selects, labels, error states |
| `badges.md` | Category tones and pill shape |
| `options.md` | Selectable choices with marker and selected state |
| `progress.md` | Progress bars and score bars |
| `labels.md` | Eyebrow, section, and stage labels |
| `feedback.md` | Error, warning, success, info, loading, empty |
| `charts.md` | Palette choice and chart conventions |

---

## Logo

Seven SVG variants and seven PNG exports are in `assets/logo/`. All SVGs are outline-converted, so they carry no font dependencies.

- **Default:** `gensyn-logo.svg`, the horizontal color lockup
- **On dark backgrounds:** `gensyn-logo-white.svg`
- **Tight spaces, favicons, app icons:** the `-mark` files
- **Clear space:** on all sides, equal to the height of the mark's inner diamond — roughly 25% of the lockup height. Nothing intrudes.
- **Minimum size:** 120px wide on screen, 1 inch in print for the horizontal lockup; 16px for the mark alone. Below that, show no logo.
- Never recolor, rotate, stretch, or add effects. On a mid-lightness background, use the white or black lockup rather than the color one.

`SKILL.md` has the full file-by-file table with dimensions and intended use.

---

## Repo map

```
tokens/          Source of truth — W3C design-token format
  colors.json    Brand, accent, neutral, category, semantic aliases
  typography.json
  spacing.json   Space, radius, shadow, border, motion, breakpoints, layout
  charts.json    Categorical, sequential, and diverging palettes
  states.json    Interaction surfaces and status colors

css/
  gensyn-tokens.css   GENERATED — do not edit
  gensyn-base.css     Reset, element defaults, focus ring, reduced-motion

components/      Written component specs
assets/logo/     7 SVG variants, 7 PNG exports, .ai source
scripts/         build-css.mjs — regenerates css/gensyn-tokens.css
package.json     Scripts and export map; no runtime dependencies
SKILL.md         Agent-readable version, loaded by Claude Design
CHANGELOG.md     What changed in each version, and why
palette-preview.html
```

There are no dependencies — the build uses only Node's standard library, so there is nothing to `npm install` before running it.

---

## Changing a token

1. Edit the relevant `tokens/*.json`.
2. Run `npm run build:css`. It resolves references, fails on a circular or unresolved one, and warns about any token with no CSS name.
3. Update `SKILL.md` if the change affects a rule an agent should follow.
4. Note it in `CHANGELOG.md` and bump the version in **both** `design-system-spec.json` and `package.json` — the generated CSS header reads its version from the spec file.
5. Commit and tag, so downstream projects can pin to a version.

`npm run verify` rebuilds and fails if `css/gensyn-tokens.css` differs from what the tokens produce. Run it before committing — it catches a hand-edited or stale CSS file.

Never edit `css/gensyn-tokens.css` directly. It is a build artifact and the next build overwrites it.

---

## Core rules

- Reference tokens; never hardcode a hex
- Prefer semantic aliases over brand tokens in component code
- Linen is the page background, never white — white is for surfaces atop color
- Never pure black
- Shadows are navy-tinted, never neutral gray
- Complementary colors are graphics, not text
- Motion is calm — no bounce, no spring
- Pill shape for badges only, never buttons
- No more than three font weights in a single view

---

## Working with Claude

`SKILL.md` is this system in agent-readable form and is loaded automatically by Claude Design — new work picks up the current brand without being told. In a code project, point Claude at `SKILL.md` and the relevant `components/*.md` file rather than pasting values into the prompt.
