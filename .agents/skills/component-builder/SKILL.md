# SKILL: Component Builder

## Purpose
Create UI components aligned with SiteSync design system and conventions.

---

## File Structure

```
/app
  /components          ← shared/reusable components
  /{route}
    /components        ← page-specific components
    /page.tsx
```

- Shared: `/app/components/{ComponentName}/{ComponentName}.tsx`
- Page-specific: `/app/{route}/components/{ComponentName}/{ComponentName}.tsx`
- Each component gets its own folder with co-located CSS Module

---

## Component Pattern

### File naming
- Component: `PascalCase.tsx`
- Styles: `PascalCase.module.css`
- Props type: `interface ComponentNameProps` in same file

### Server vs Client

- Server component by default
- Add `"use client"` ONLY when you need: hooks, browser APIs, event handlers, state

### Template

```tsx
// Server component (default)
import styles from "./Card.module.css"

interface CardProps {
  title: string
  children: React.ReactNode
}

export function Card({ title, children }: CardProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  )
}
```

```tsx
// Client component (when needed)
"use client"

import styles from "./CaptureButton.module.css"

interface CaptureButtonProps {
  onCapture: (media: Blob) => void
  disabled?: boolean
}

export function CaptureButton({ onCapture, disabled }: CaptureButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={() => onCapture(new Blob())}
      disabled={disabled}
    >
      Capture
    </button>
  )
}
```

---

## Styling Rules

- CSS Modules only (`.module.css`) — no Tailwind, no styled-components, no inline styles
- Use design tokens via CSS variables (see `tokens/theme-tokens.css`)
- No raw color, font, or spacing values

```css
/* Correct */
.card {
  background: var(--color-surface);
  color: var(--color-on-surface);
  border-radius: 12px;
  padding: 16px;
}

/* Wrong */
.card {
  background: #f5f5f5;
  color: #1a1a1a;
  border-radius: 12px;
  padding: 16px;
}
```

---

## Design Token Reference

| Token | Usage |
|---|---|
| `--color-surface` / `--color-background` | Containers |
| `--color-on-surface` | Primary text |
| `--color-on-surface-variant` | Secondary text |
| `--color-primary` / `--color-on-primary` | Buttons, links |
| `--color-outline` | Borders, dividers |
| `--color-error` | Error states |
| `--typography-body-large-font-size` | Body text |
| `--typography-label-large-font-size` | Button text |
| `--typography-title-medium-font-size` | Section headers |
| `--transition-fast` | Hover/active transitions |

Full token set in `tokens/theme-tokens.css`. Always check there first.

---

## Mobile-First

- Default styles target mobile (375px viewport)
- Layer desktop at `@media (min-width: 768px)`
- Touch targets: minimum 44px tall
- Dark mode handled automatically via `prefers-color-scheme: dark` when using CSS variables

---

## Spacing & Sizing

- 4px grid: `4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px`
- Border radius: `4px` (badges), `8px` (buttons/inputs), `12px` (cards/modals)

---

## Exports

- Named exports only (no default exports)
- Exception: Next.js file-convention components (page, layout, loading, error, not-found)
