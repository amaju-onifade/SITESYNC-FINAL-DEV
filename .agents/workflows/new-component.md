---
description: Decision guide for when and how to create a new component. Use before building to choose the right placement, server vs client, and naming.
---

# Workflow: Create New Component

## Before You Create: Should This Be a Component?

| Question | If Yes | If No |
|---|---|---|
| Is this UI used in ≥ 2 places? | Create a shared component | Inline it in the parent |
| Does this encapsulate a distinct UI concern? | Create a component | Keep it in the parent |
| Does this need its own state or logic? | Create a component | Keep it in the parent |

Components cost complexity — only extract when the reusability rule (≥ 2 uses) is met or the component is complex enough to warrant isolation.

---

## Where to Place It

```
Shared (used across routes)   → /app/components/{Name}/{Name}.tsx
Page-specific (used in 1 page) → /app/{route}/components/{Name}/{Name}.tsx
```

Each component gets its own folder with co-located CSS Module: `{Name}.module.css`

---

## Server vs Client Decision

```
Does the component need:
- useState / useReducer / useContext?
- useEffect?
- browser APIs (window, navigator)?
- event handlers (onClick, onSubmit)?
- custom hooks?

YES → add "use client" at the top
NO  → keep as server component (default)
```

**Rule:** Push data fetching up to server components. Keep `"use client"` as leaf components — they receive data via props.

---

## Naming Checklist

- [ ] Component file: `PascalCase.tsx`
- [ ] Styles file: `PascalCase.module.css`
- [ ] Props interface: `interface PascalCaseProps`
- [ ] Named export, not default (exception: Next.js file-convention components)

---

## Must Include

- [ ] Props typed via `interface ComponentNameProps`
- [ ] CSS Module import: `import styles from "./ComponentName.module.css"`
- [ ] Design tokens via CSS variables (no raw values)
- [ ] Mobile-first styles (375px default, `@media (min-width: 768px)` for desktop)
- [ ] Touch targets ≥ 44px
- [ ] Dark mode supported automatically via CSS variables

---

## Styling Reference

Design tokens in `tokens/theme-tokens.css`:

- Colors: `--color-surface`, `--color-on-surface`, `--color-primary`, etc.
- Typography: `--typography-body-large-font-size`, `--typography-label-large-font-size`, etc.
- Spacing: 4px grid (4, 8, 12, 16, 24, 32, 48, 64)
- Border radius: 4px (badges), 8px (buttons), 12px (cards)
- Transitions: `--transition-fast`, `--transition-normal`
- Z-index: stick to defined scale (base 0, sticky 10, dropdown 20, overlay 30, banner 40, loader 50)

See `design-system.md` and `component-builder` skill for full details.

---

## When NOT to Create a Component

- A single button or text label → just use the element directly
- A layout wrapper that adds no semantics → use a fragment or div
- A component that mixes server and client concerns → split into separate server + client components
- A component that would be used only once and is < 20 lines → inline it
