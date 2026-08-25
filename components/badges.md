# Badge Component

## Tones
Maps to the strategic planning category color convention:
- `neutral` — `--neutral-200` background, `--neutral-800` text
- `brand` — `--color-bg-accent-navy` (#CDD4FD) background, `--gensyn-navy` text
- `benefits` — `--color-cat-benefits` (#C23B6B)
- `issues` — `--color-cat-issues` (Gensyn Navy)
- `opportunities` — `--color-cat-opportunities` (Dark Spring Green)
- `operations` — `--color-cat-operations` (Orange Peel)

## Conventions
- Small, inline element — use `--text-xs` or `--text-sm`
- Radius: `--radius-full` for pill shape (one of the few approved pill uses)
- Padding: `--space-1` vertical, `--space-3` horizontal
- Never use more than two badge tones in a single view
- The `opportunities` and `operations` tones are background fills. Their label text is `--neutral-800`, never the category color itself — both are complementary colors and therefore graphics colors.
