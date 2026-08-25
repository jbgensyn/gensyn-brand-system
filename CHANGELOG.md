# Changelog

## v1.2.0 — August 2026

Adds the categories the system was missing for assessment work, and makes the system consumable: projects now import generated CSS instead of copying values.

### Added
- **`tokens/charts.json`** — data visualization tokens. Categorical series (6), sequential navy ramp (5), diverging attention-to-strength ramp (5), plus grid, axis-label, marker, halo, and track colors and shape constants.
- **`tokens/states.json`** — interaction and status tokens. Input/hover/selected/disabled surfaces, disabled and muted opacity, and error / warning / success / info each with text, surface, and border values.
- **`css/gensyn-tokens.css`** — generated from `tokens/*.json` by `scripts/build-css.mjs`. Semantic aliases emit `var()` references rather than resolved literals, so overriding a base token cascades through everything built on it.
- **`css/gensyn-base.css`** — reset, element defaults, a global `:focus-visible` ring, and a `prefers-reduced-motion` block.
- **`scripts/build-css.mjs`** — the token-to-CSS build. Resolves references, fails loudly on an unresolved or circular one, warns on any token with no CSS name.
- **`package.json`** — no dependencies; defines `npm run build:css`, an `npm run verify` guard that fails when the generated CSS is stale, and an export map for consuming projects.
- Breakpoint tokens (`sm` 480 / `md` 768 / `lg` 1024 / `xl` 1280) and `--container-padding-sm`.
- Component specs: `charts.md`, `progress.md`, `options.md`, `labels.md`, `feedback.md`.
- Logo clear space and minimum size rules.
- `brand` badge tone.
- **`README.md`** — human-readable overview with the palette, contrast table, repo map, and the process for changing a token.
- `--color-success-text` (`#095A3B`) — the text-safe green, since Dark Spring Green is now a graphics color.

### Rule change
- **The two complementary colors are graphics colors, not text colors.** Orange Peel and Dark Spring Green are for icons, fills, borders, focus rings, chart marks, and background areas — never type, at any size or weight. Where words must carry the hue, the darkened form does it: `--color-warning` (#7A4A08) for orange, `--gensyn-green-dark` (#095A3B) for green. Orange Peel genuinely fails contrast (1.8:1 on linen); Dark Spring Green would pass at 5.6:1 but follows the same rule so the two behave alike.

### Changed
- SKILL.md gains Data Visualization, Interaction States, Status Colors, Breakpoints, and Consuming This System sections, plus three new never-do rules.
- `components/forms.md` error states now use `--color-error` instead of borrowing the issues category color and describing the message text as "red-adjacent."

### Note
Status colors now split roles consistently: the brand hue does the graphic work (icon, border, fill) and a darkened form carries any text.

---

## v1.1.0 — August 2026

Corrects the primary brand colors to match the approved June 2025 logo artwork. The v1.0 primary blue was carried over from an older logo revision and did not match the logo files shipped in this repo.

### Changed
- **Primary brand color:** `#042477` (Resolution Blue) → `#263171` (**Gensyn Navy**). Navy is the default brand color.
- **Secondary brand color:** `#743494` → `#743694` (**Design Purple**).
- Token names `color.brand.blue*` → `color.brand.navy*`; CSS variables `--gensyn-blue*` → `--gensyn-navy*`.
- Tints and shades rederived from the corrected values:
  - navy-light `#274A9E` → `#515A8D`, navy-dark `#021845` → `#1E2759`
  - purple-light `#8E52AC` → `#905EA9`, purple-dark `#52246C` → `#5D2B76`
- Shadow tint base `rgba(4, 36, 119, …)` → `rgba(38, 49, 113, …)`.
- Category color `issues` → `#263171`.

### Added
- **Brand accents:** `--gensyn-navy-accent` `#CDD4FD` and `--gensyn-purple-accent` `#DDC3EA`, with semantic aliases `--color-bg-accent-navy` / `--color-bg-accent-purple`.
- Formal names and roles for the supporting palette: Linen `#F8F5F0` (light backgrounds), Dark Gray `#313132` (dark backgrounds), Orange Peel `#FFA630` and Dark Spring Green `#0D714B` (contrasting complementary colors).
- Contrast notes for brand pairings.
- `brand` badge tone using the navy accent.

### Removed
- `blue-tint-10` and `purple-tint-10` `color-mix()` tokens, superseded by the two named accents.

### Note on logo files
The logo SVGs were not modified. Their fills (`#263171`, `#743694`) are the canonical source of the brand colors — the tokens were corrected to match them, not the reverse.
