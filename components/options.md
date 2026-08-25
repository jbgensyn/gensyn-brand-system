# Option Component

A selectable choice in a question, filter, or list. Renders as a button, not a styled radio.

## Anatomy
- Marker (18px circle, `--radius-full`, 2px border) + label text, `--space-4` gap, top-aligned
- Padding `--space-4` / `--space-5`, radius `--radius-lg`, background `--color-bg-surface`

## States
| State | Treatment |
|-------|-----------|
| Rest | `--border-thin`, `--shadow-sm` |
| Hover | border `--color-border-strong`, `--shadow-md`, background `--state-bg-hover` |
| Selected | background `--state-bg-selected`, border and marker fill in the active accent color, `--shadow-md` |
| Disabled | `--state-opacity-disabled`, no hover response |

## Conventions
- Selected state must change more than color alone — the marker fills, which reads without color perception
- Where the accent color varies by section, keep the surface white and let the border and filled marker carry the state; a fixed tinted fill will clash with a section color it wasn't chosen for
- Text is `--font-body-web` at `--text-base`; options are read, not scanned
- Transition `border-color` and `box-shadow` only, over `--duration-fast`. Never transition `background-color` on selection — the change should feel immediate.
- Hit target spans the full row; never make the marker alone clickable
