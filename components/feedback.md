# Feedback Components

Error, warning, success, info, empty, and loading states.

## Message block
- Surface `--color-{status}-surface`, left border 3px `--color-{status}-border`, radius `0 --radius-md --radius-md 0`
- Text `--color-{status}` at `--text-sm`, `--font-body-web`
- Padding `--space-4` / `--space-5`

| Status | Token prefix | Use |
|--------|--------------|-----|
| Error | `--color-error` | Something failed or is invalid; the person must act |
| Warning | `--color-warning` | Something will go wrong if unchanged |
| Success | `--color-success` (border/icon), `--color-success-text` (words) | An action completed |
| Info | `--color-info` | Context, no action required |

## Conventions
- Status color is never the only signal — always pair with text that names the problem
- Error messages name what to do, not just what broke
- Both complementary colors split roles: the brand hue borders and marks, a darkened form carries the words. Orange → `--gensyn-orange` border, `--color-warning` text. Green → `--color-success` border, `--color-success-text` text.

## Loading
- A calm indicator, not a progress bar, when duration is unknown
- Spinner: 2px ring in `--color-border-subtle` with one arc in `--color-brand-primary`, 700ms linear rotation
- Below 300ms, show nothing — a flash of spinner reads as a glitch
- Respect `prefers-reduced-motion`: replace rotation with a static ring and text

## Empty state
- Centered, `--color-text-secondary`, `--text-base`
- One line naming what would be here, plus the action that fills it
- No illustration, no exclamation marks
