# Label Components

Small typographic markers that classify content above a heading.

## Eyebrow
Sits above a title to name what kind of thing follows.
- `--font-display`, `--text-sm`, `--weight-medium`, `--tracking-wide`, uppercase
- Color `--color-brand-secondary` (purple) by default

## Section label
Names the current region of a longer flow.
- Same type treatment as the eyebrow
- Takes the section's own color when the flow is color-keyed; otherwise `--color-text-secondary`
- Optional descriptor follows in `--weight-regular` and `--color-text-secondary` — one label, two weights

## Stage label
Marks position in a fixed sequence ("Step 2 of 5", "Direction").
- `--font-display`, `--text-xs`, `--tracking-wide`, uppercase, `--weight-medium`

## Conventions
- One label per heading, never stacked
- Uppercase is for labels only — never for headings, body text, or button text
- Labels are `--font-display` even in body-text regions; the contrast against Enriqueta is what makes them read as metadata
- A color-keyed label uses the text-safe form of its color. Orange and green sections use `--color-warning` and `--gensyn-green-dark`, never the complementary colors themselves.
