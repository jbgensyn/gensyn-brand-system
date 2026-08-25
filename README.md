# Gensyn Design System

Brand tokens, component specs, and logo assets for all Gensyn Design work — web apps, assessment instruments, documents, and decks.

**Version 1.2.0** · August 2026

---

## Colors

### Primary

| | Name | Hex | Role |
|---|------|-----|------|
| ▊ | **Gensyn Navy** | `#263171` | Primary and default. Headings, primary actions, inverse backgrounds. |
| ▊ | **Design Purple** | `#743694` | Secondary. Secondary actions, section labels, accents. |

Both values match the approved June 2025 logo artwork exactly. The logo files in `assets/logo/` are the canonical source of these colors — the tokens follow the artwork, never the reverse.

### Brand accents

| | Name | Hex | Role |
|---|------|-----|------|
| ▊ | Navy Accent | `#CDD4FD` | Tinted backgrounds, selected states, badge fills |
| ▊ | Purple Accent | `#DDC3EA` | Tinted backgrounds, section highlights |

### Supporting

| | Name | Hex | Role |
|---|------|-----|------|
| ▊ | **Linen** | `#F8F5F0` | Light backgrounds — the page background. Never white. |
| ▊ | **Dark Gray** | `#313132` | Dark backgrounds and primary text. Never pure black. |
| ▊ | **Orange Peel** | `#FFA630` | Complementary — graphics only |
| ▊ | **Dark Spring Green** | `#0D714B` | Complementary — graphics only |

> **The two complementary colors are graphics colors, not text colors.**
> Use them for icons, fills, borders, focus rings, chart marks, and background areas. Never set type in either one, at any size or weight. Where words must carry the hue, use the darkened form: `--color-warning` (`#7A4A08`) for orange, `--gensyn-green-dark` (`#095A3B`) for green.

### Tints and shades

| Light (disabled, inactive) | Dark (hover, pressed) |
|---|---|
| Navy Light `#515A8D` | Navy Dark `#1E2759` |
| Purple Light `#905EA9` | Purple Dark `#5D2B76` |
| — | Orange Dark `#E08F1B` (fills only) |
| — | Green Dark `#095A3B` (fills, and text-safe green) |

### Contrast

| Pairing | Ratio | |
|---------|-------|---|
| Navy on Linen | 10.97:1 | AAA |
| White on Navy | 11.93:1 | AAA |
| Purple on Linen | 7.16:1 | AAA |
| White on Purple | 7.78:1 | AAA |
| Navy on Navy Accent | 8.20:1 | AAA |
| Navy on Purple Accent | 7.42:1 | AAA — preferred over purple-on-purple |
| Purple on Purple Accent | 4.84:1 | AA only |
| Green Dark on Linen | 7.61:1 | AAA — the text-safe green |
| Warning on Linen | 6.87:1 | AAA — the text-safe orange |
| **Orange Peel on Linen** | **1.80:1** | **Fails at every size** |
| **Dark Spring Green on Linen** | 5.55:1 | Passes, but reserved as a graphics color |

Open `palette-preview.html` in a browser for live swatches and rendered contrast pairs.

---

## Typography

- **Display / headline** — Noto Sans (`--font-display`). Substitutes Segoe UI Bold, which is proprietary and unlicensed for web.
- **Web body** — Enriqueta (`--font-body-web`). The real brand font, no substitution.
- **Print body** — Lora (`--font-body-print`). Substitutes Californian FB.

Scale runs `--text-xs` 13px through `--text-4xl` 72px on a 17px base. Uppercase is for labels only — never headings, body text, or buttons.

---

## What's in here

```
tokens/          Source of truth — W3C design-token format
  colors.json    Brand, accent, neutral, category, semantic aliases
  typography.json
  spacing.json   Space, radius, shadow, border, motion, breakpoints, layout
  charts.json    Categorical, sequential, and diverging palettes for assessment output
  states.json    Interaction surfaces and status colors

css/
  gensyn-tokens.css   GENERATED — do not edit
  gensyn-base.css     Reset, element defaults, focus ring, reduced-motion

components/      Written specs: buttons, cards, forms, badges,
                 progress, options, labels, feedback, charts

assets/logo/     7 SVG variants, 7 PNG exports, .ai source
scripts/         build-css.mjs — regenerates css/gensyn-tokens.css
package.json     Scripts and export map; no runtime dependencies
SKILL.md         Agent-readable version, loaded by Claude Design
palette-preview.html
```

There are no dependencies — the build uses only Node's standard library, so there is nothing to `npm install`. `package.json` exists to name the build commands and to define an export map for projects that consume this repo as a git submodule or dependency.

---

## Using it in a project

```css
@import 'gensyn-tokens.css';
@import 'gensyn-base.css';
```

Copy `css/` and `assets/` into the project (or add this repo as a submodule) and import both files. Then build with token variables only.

**Never hand-copy token values into a project.** A project holding its own copy of the hexes will drift from the brand silently — that is exactly how `#042477` survived in production for a month after the logo said otherwise. Import the generated CSS, and record which brand version the project is on.

CSS custom properties resolve inside SVG presentation attributes, so `fill="var(--chart-series-1)"` works in chart code. Numeric values a charting library consumes in JS need reading via `getComputedStyle`.

---

## Changing a token

1. Edit the relevant `tokens/*.json`.
2. Run `npm run build:css`. It resolves references, fails on a circular or unresolved one, and warns about any token with no CSS name.
3. Update `SKILL.md` if the change affects a rule an agent should follow.
4. Note it in `CHANGELOG.md` and bump the version in **both** `design-system-spec.json` and `package.json` — the generated CSS header reads its version from the spec file.
5. Commit and tag, so downstream projects can pin.

`npm run verify` rebuilds and fails if `css/gensyn-tokens.css` differs from what the tokens produce. Run it before committing, or wire it into CI — it catches a hand-edited or stale CSS file.

Never edit `css/gensyn-tokens.css` directly — it is a build artifact and the next build will overwrite you.

---

## Core rules

- Reference tokens; never hardcode a hex
- Linen is the page background, never white — white is for surfaces atop color
- Never pure black
- Shadows are navy-tinted, never neutral gray
- Complementary colors are graphics, not text
- Motion is calm — no bounce, no spring
- Pill shape for badges only, never buttons
- No more than three font weights in a single view
