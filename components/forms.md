# Form Components

## Input
Props: `label` · `placeholder` · `type` · `value` · `onChange` · `multiline`
- `multiline: true` renders a textarea instead of single-line input
- Labels always above input — no floating labels
- Focus ring: `--color-focus-ring` (orange), 2px, 2px offset
- Border: `--border-thin` at rest, `--border-strong` on focus

## Select
Props: `label` · `options` (string array) · `value` · `onChange`
- Same label and border conventions as Input
- Custom styled — no browser default appearance

## Conventions
- All form elements use `--font-body-web` (Enriqueta)
- Font size: `--text-base` (17px)
- Never use placeholder as a substitute for a label
- Error states use `--color-cat-issues` (brand blue) for border, red-adjacent text for message
