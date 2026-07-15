# Button Component

## Variants
- `primary` — solid Gensyn Blue (`--color-brand-primary`), white text
- `secondary` — solid Gensyn Purple (`--color-brand-secondary`), white text
- `outline` — transparent background, brand blue border and text
- `ghost` — no border, no background, brand blue text

## Sizes
- `sm` — compact, suitable for inline or secondary actions
- `md` — default size for most contexts
- `lg` — primary CTA contexts

## Props
`variant` · `size` · `disabled` · `children` · `onClick` · `type`

## Conventions
- Never hardcode colors — always use semantic token variables
- Disabled state reduces opacity to 0.4, cursor not-allowed
- Focus ring uses `--color-focus-ring` (orange) at 2px offset
- Transitions use `--duration-base` and `--ease-standard`
- No pill shape — use `--radius-md` (8px) for default buttons
