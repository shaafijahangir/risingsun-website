# Conversion Improvements — Success Criteria

Each criterion is written so Playwright MCP can verify it programmatically.
Manual items are marked **[MANUAL]** — Playwright cannot confirm these.

---

## Phase 1 — Remove Friction

### 1. Floating WhatsApp Button

- [ ] A fixed element is visible on every page (homepage, /blog, /packages, /services/medical, /services/flights, /services/accommodation, /services/cars, /trade)
- [ ] The button is positioned bottom-right and does not overlap page content destructively
- [ ] Clicking the button opens `https://wa.me/66877053366` (with or without pre-filled message param)
- [ ] The button is visible on desktop (1280px viewport)
- [ ] The button is visible on mobile (390px viewport)
- [ ] The button has an accessible `aria-label` containing "WhatsApp"

### 2. Sticky Mobile Bottom Bar

- [ ] At viewport width 390px, a sticky bottom bar is visible while scrolling the homepage
- [ ] The bar contains two buttons: one linking to WhatsApp (`wa.me/66877053366`) and one linking to Calendly
- [ ] At viewport width 1280px (desktop), the bar is NOT visible (`display: none` or equivalent)
- [ ] The bar does not obscure the floating WhatsApp button or page footer links

### 3. "Responds within hours" Trust Copy

- [ ] The homepage CTA section contains text matching "responds within" (case-insensitive)
- [ ] The hero section or its immediate vicinity contains text matching "responds within" OR this copy appears in at least one of: hero, CTA section, FAQ section

### 4. WhatsApp Link in Header

- [ ] The header contains a link to `wa.me/66877053366`
- [ ] The link is visible at 1280px viewport (desktop header)
- [ ] The link has an accessible label containing "WhatsApp"

---

## Phase 2 — Reduce Objections

### 5. FAQ Section on Homepage

- [ ] The homepage contains a section with a heading matching "FAQ" or "Questions" or "Asked" (case-insensitive)
- [ ] The section contains at least 5 expandable items (accordion)
- [ ] Each item expands and collapses on click
- [ ] The FAQ section appears in the DOM after the HowItWorks section and before the CTA section
- [ ] The following question topics are covered (text match, case-insensitive):
  - [ ] "free" (is the service free)
  - [ ] "booking.com" or "difference" (vs online booking)
  - [ ] "medical" (medical tourism coverage)
  - [ ] "message" or "whatsapp" or "not ready" (low-commitment contact option)
  - [ ] "after" or "what happens" (post-booking-call process)

### 6. Google Reviews Link

- [ ] In the TestimonialsSection, the text "Google reviews" or "87 reviews" is wrapped in an `<a>` tag
- [ ] The link `href` is not `#` or empty
- [ ] **[MANUAL]** The link destination is Salim's actual Google Business profile

---

## Phase 3 — Shorten Forms

### 7. WhatsApp Quick-Contact on Service Pages

- [ ] `/services/flights` contains a WhatsApp link (`wa.me/66877053366`) above the inquiry form
- [ ] `/services/accommodation` contains a WhatsApp link above the inquiry form
- [ ] `/services/cars` contains a WhatsApp link above the inquiry form
- [ ] `/services/medical` contains a WhatsApp link above the inquiry form
- [ ] `/trade` contains a WhatsApp link above the inquiry form
- [ ] Each WhatsApp link includes a pre-filled message param (`?text=`) relevant to the service

### 8. Non-Essential Fields Made Optional

- [ ] On `/services/flights`, the `return date` field is not marked required (no `required` attribute or asterisk)
- [ ] On `/services/flights`, the `class` field is not marked required
- [ ] On `/services/medical`, the `description` textarea is not marked required
- [ ] On `/services/cars`, the `drop-off location` field is not marked required
- [ ] On `/services/cars`, the `vehicle type` field is not marked required

---

## Phase 4 — Manual Checks

These cannot be automated. Verify by hand before launch.

- [ ] **[MANUAL]** Calendly link `https://calendly.com/salimjahangir67/15min` is live and bookable
- [ ] **[MANUAL]** WhatsApp number `+66 877 053 366` is active and receives messages
- [ ] **[MANUAL]** Google Business URL has been confirmed and added to the reviews widget
- [ ] **[MANUAL]** Fake testimonials replaced with real reviews from actual clients
- [ ] **[MANUAL]** Hero background image replaced with a real photo (Salim or Thailand)
- [ ] **[MANUAL]** Salim has reviewed all FAQ answers for accuracy

---

## Global Checks (run on every page)

- [ ] Floating WhatsApp button present on all 8 routes
- [ ] No broken links (all `href` values resolve, no 404s on internal routes)
- [ ] No console errors on page load
- [ ] Page loads in under 3 seconds on a simulated fast 3G connection
- [ ] All CTA buttons have accessible labels
- [ ] Site is navigable by keyboard (Tab order is logical, focus rings visible)
