# Progress Component

A thin horizontal indicator of position through a sequence. Distinct from a score bar, which shows a measured value.

## Conventions
- Track: `--chart-track` on a white surface; `--color-border-subtle` when the bar sits directly on linen, where `--chart-track` is too faint to read. Height 4px, `--radius-full`, `overflow: hidden`.
- Fill: `--radius-full`, transitions `width` over `--duration-slow` with `--ease-standard`
- Fill color defaults to `--color-brand-primary`. In a sectioned sequence it may take the current section's color, which makes the section change legible without a second element.
- Never animate the track, only the fill
- Pair with a text count ("3 of 14") — a bar alone gives position but not scale

## Score bar variant
- Same track and radius; fill color is the series color for the dimension being scored
- Track height 6px so the value reads as a measurement rather than navigation
- Always label with the numeric value; the bar is the secondary channel
- The label takes the dimension's `-text` color, not its graphic color — they differ for orange and green series
