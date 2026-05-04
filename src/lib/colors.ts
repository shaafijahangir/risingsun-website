/**
 * Single source of truth for Rising Sun brand colors.
 *
 * HOW TO USE IN COMPONENTS
 *   ✓  className="text-brand-navy bg-thai-gold"   ← always use Tailwind token names
 *   ✗  className="text-[#22668D]"                 ← ESLint will catch this
 *   ✗  style={{ color: '#22668D' }}               ← avoid; use cssVar() if you must
 *
 * HOW TO USE IN JAVASCRIPT / TYPESCRIPT
 *   import { cssVar } from '@/lib/colors';
 *   const color = cssVar('brand-navy');  // → "var(--brand-navy)"
 *
 * ADDING A NEW COLOR
 *   1. Add it to `tokens` below with its HSL value and a label.
 *   2. Add the matching CSS variable to src/index.css  →  --your-token: <hsl>;
 *   3. Add the Tailwind mapping to tailwind.config.ts  →  "your-token": 'hsl(var(--your-token))'
 *   That's it. Never hardcode hex or HSL values anywhere else.
 */

export const tokens = {
  "brand-navy": {
    hsl: "214 88% 16%",
    label: "Primary dark blue — headings, footer, buttons, UI elements",
  },
  "thai-gold": {
    hsl: "50 92% 42%",
    label: "Primary accent — CTAs, highlights, active states, icons",
  },
  "thai-teal": {
    hsl: "174 54% 45%",
    label: "Secondary accent — decorative gradients, medical section",
  },
  "brand-offwhite": {
    hsl: "35 100% 97%",
    label: "Light background — alternating page sections",
  },
  "thai-cream": {
    hsl: "54 71% 93%",
    label: "Warm neutral — subtle highlights and gradient endpoints",
  },
} as const;

export type ColorToken = keyof typeof tokens;

/**
 * Returns a CSS variable reference for programmatic use in inline styles.
 * Prefer Tailwind class names in JSX instead of this function.
 *
 * @example
 * // In a canvas draw call or a library that requires a string color:
 * const navy = cssVar('brand-navy'); // "var(--brand-navy)"
 */
export const cssVar = (token: ColorToken): string => `var(--${token})`;
