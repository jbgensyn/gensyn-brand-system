# Chart Conventions

Applies to any scored or plotted artifact: radar profiles, score bars, gauges, quadrant plots, distribution charts.

## Choosing a palette
- **Unordered dimensions** (four capability axes, workshop categories) → `--chart-series-1` through `-6`, in order. Never skip a number to get a color you like; if you need more than six, group the data instead.
- **Ordered magnitude** (heat, density, score intensity) → `--chart-seq-1` … `-5`. Steps 1–2 are fill-only; they do not carry enough contrast to sit under a label.
- **Gap against target, or balance** → `--chart-div-1` … `-5`. Orange end reads as needs attention, green end as strength, `-3` as neutral.

## Support tokens
- Gridlines, polar rings, axis rules → `--chart-grid`
- Tick and axis labels → `--chart-axis-label`, unless the label is series-colored to match its data
- Points of interest, crosshairs, balance markers → `--chart-marker` with a `--chart-marker-halo` ring so the mark reads against any fill
- Unfilled bar or progress track → `--chart-track`

## Conventions
- Never hardcode a hex in chart code. CSS custom properties resolve in SVG presentation attributes — `fill="var(--chart-series-1)"` works. In a charting library that computes color in JS rather than passing it through to the DOM, read the value once with `getComputedStyle(document.documentElement).getPropertyValue()` rather than pasting a literal.
- Area and radar fills use `--chart-fill-opacity` (0.12). Higher opacity buries the gridlines.
- The complementary colors (Orange Peel, Dark Spring Green) are fill and marker colors, never label or axis-text colors. When a series label must match its data and that series is orange or green, use the darkened form for the label — `--color-warning` and `--gensyn-green-dark` respectively.
- Where a project names its own dimensions, alias them onto the series tokens and give each one a graphic token and a `-text` token. They diverge for the two complementary colors and are identical for the rest.
- Color is never the only channel. Pair it with a label, a value, or a position so the chart survives a grayscale print and colorblind readers.
- A chart on a linen page sits on a white surface card, not directly on the page background.
