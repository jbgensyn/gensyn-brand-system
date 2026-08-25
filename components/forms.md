# Form Components

## Input
Props: `label` · `placeholder` · `type` · `value` · `onChange` · `multiline`
- `multiline: true` renders a textarea instead of single-line input
- Labels always above input — no floating labels
- Background: `--state-bg-input` at rest
- Focus ring: `--color-focus-ring` (orange), 2px, 2px offset
- Border: `--border-thin` at rest, `--border-strong` on focus

## Select
Props: `label` · `options` (string array) · `value` · `onChange`
- Same label, background, and border conventions as Input
- Custom styled — no browser default appearance

## Conventions
- All form elements use `--font-body-web` (Enriqueta)
- Font size: `--text-base` (17px)
- Never use placeholder as a substitute for a label
- Disabled fields use `--state-bg-disabled` and `--state-opacity-disabled`

## Error states
- Border `--color-error`, message text `--color-error` at `--text-sm`
- The message sits below the field, never as a tooltip or placeholder
- Name what to do, not just what is wrong
- See `feedback.md` for the standalone message block
