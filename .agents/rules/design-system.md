---
trigger: always_on
---

# Rule: Design System

## Token Files Are the Source of Truth

The project has one design token file in `tokens/`. The agent must never modify them:

- `tokens/theme-tokens.css` — all color values, all font sizes, weights, line heights, and font families

The token file exports CSS custom properties (CSS variables) that are available globally.

## Mandatory: Use CSS Variables, Never Raw Values

The agent must never write hardcoded color values or typography values anywhere in this codebase.

**Wrong:**
```css
color: #1a1a1a;
font-size: 16px;
font-family: 'Inter', sans-serif;
background: #f5f5f5;
```

**Correct:**
```css
color: var(--color-on-surface);
font-size: var(--typography-body-large-font-size);
font-family: var(--typography-body-large-font-family);
background: var(--color-surface);
```

Before writing any style value, check the token files. If a variable exists for what you need, use it. If it does not exist, ask before inventing a new value.

## Primary Color Variables

Use these for most components:

| Variable | Usage |
|----------|-------|
| `--color-primary` | Main actions, buttons, links |
| `--color-on-primary` | Text on primary color |
| `--color-surface` | Card backgrounds, containers |
| `--color-background` | Page background |
| `--color-on-surface` | Primary text |
| `--color-on-surface-variant` | Secondary text |
| `--color-outline` | Borders, dividers |
| `--color-error` | Error states |

## Primary Typography Variables

Use these standard sizes. Each token also has companion variables for `font-weight`, `line-height`, `letter-spacing`, and `font-family` — replace `-font-size` with the desired property.

| Variable | Size | Usage |
|----------|------|-------|
| `--typography-title-large-font-size` | 24px | Page titles |
| `--typography-title-medium-font-size` | 20px | Section headers |
| `--typography-body-large-font-size` | 16px | Body text |
| `--typography-body-medium-font-size` | 14px | Secondary text |
| `--typography-body-small-font-size` | 12px | Captions |
| `--typography-label-large-font-size` | 14px | Button text |
| `--typography-label-medium-font-size` | 12px | Badges |

Example: to set font-weight on body text, use `var(--typography-body-large-font-weight)`.

## Spacing Scale

Use multiples of 4px for all spacing (margin, padding, gap). Do not use arbitrary values.

Allowed: `4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`

## Border Radius

The product has a consistent border radius. Use these values only:

- Small elements (badges, tags): `4px`
- Buttons and inputs: `8px`
- Cards and modals: `12px`

## Z-Index Scale

Use only these values. Do not use arbitrary z-index values.

| Level | Value | Usage |
|-------|-------|-------|
| base | `0` | Default content |
| sticky | `10` | Sticky headers |
| dropdown | `20` | Dropdown menus, popovers |
| overlay | `30` | Modals, side panels |
| banner | `40` | Toast notifications, banners |
| loader | `50` | Full-screen loaders |

## Animation Tokens

Use these for all transitions. Do not use arbitrary values.

```css
--transition-fast: 150ms ease;
--transition-normal: 250ms ease;
--transition-slow: 400ms ease;
```

Usage:

```css
.button {
  transition: background var(--transition-fast);
}
```

## Styling Method

- All component styles use CSS Modules (`.module.css` files).
- No inline `style={{}}` props except for truly dynamic values that cannot be expressed in CSS (e.g., a progress bar width driven by a number).
- No Tailwind. No styled-components. CSS Modules only.

## Mobile-First

SiteSync users are primarily on mobile. Every component must be built mobile-first:

- Default styles target mobile (small screens).
- Use `@media (min-width: 768px)` to layer in desktop styles.
- Touch targets must be a minimum of 44px tall.
- The milestone review page (`/projects/[projectId]/milestones/[milestoneId]/review`) must be fully functional on a 375px viewport.

## Dark Mode

The tokens file includes automatic dark mode via `prefers-color-scheme: dark` media query. Use standard color variables and they will automatically adapt:

```css
.card {
  background: var(--color-surface);
  color: var(--color-on-surface);
}
```