# Conversion Improvements — Success Criteria

Each criterion is written so Playwright MCP can verify it programmatically.
Manual items are marked **[MANUAL]** — Playwright cannot confirm these.
Verified items are marked **[PASS]** or **[FAIL]**.

Last verified: 2026-05-06

---

## Phase 1 — Remove Friction

### 1. Floating WhatsApp Button

- [x] A fixed element is visible on every page — **[PASS]** confirmed on all 8 routes
- [x] The button is positioned bottom-right and does not overlap page content — **[PASS]** `bottom-6` desktop, `bottom-72px` mobile (above bar)
- [x] Clicking the button opens `https://wa.me/66877053366` — **[PASS]** href verified with pre-filled message
- [x] The button is visible on desktop (1280px viewport) — **[PASS]**
- [x] The button is visible on mobile (390px viewport) — **[PASS]** at 72px above bottom bar
- [x] The button has an accessible `aria-label` containing "WhatsApp" — **[PASS]** "Contact us on WhatsApp"

### 2. Sticky Mobile Bottom Bar

- [x] At viewport width 390px, a sticky bottom bar is visible — **[PASS]**
- [x] The bar contains two buttons: WhatsApp + Calendly — **[PASS]** both hrefs verified
- [x] At viewport width 1280px (desktop), the bar is NOT visible — **[PASS]** `display: none`
- [x] The bar does not obscure the floating WhatsApp button — **[PASS]** floating button sits 72px above bar on mobile

### 3. "Responds within hours" Trust Copy

- [x] The homepage CTA section contains text matching "responds within" — **[PASS]**

### 4. WhatsApp Link in Header

- [x] The header contains a link to `wa.me/66877053366` — **[PASS]**
- [x] The link is visible at 1280px viewport — **[PASS]**
- [x] The link has an accessible label containing "WhatsApp" — **[PASS]** `aria-label="Contact us on WhatsApp"`
- [x] The link is hidden on mobile (390px) — **[PASS]** `display: none` on mobile (bottom bar handles it)

---

## Phase 2 — Reduce Objections

### 5. FAQ Section on Homepage

- [x] The homepage contains a section with heading "Frequently Asked Questions" — **[PASS]**
- [x] The section contains exactly 5 expandable items — **[PASS]**
- [x] Each item expands and collapses on click — **[PASS]** accordion opens, `aria-expanded` toggles correctly
- [x] The FAQ section appears after HowItWorks and before CTA — **[PASS]**
- [x] Topics covered:
  - [x] "free" — **[PASS]**
  - [x] "booking.com" / "difference" — **[PASS]**
  - [x] "medical" — **[PASS]**
  - [x] "message" / "whatsapp" — **[PASS]**
  - [x] "after" / "what happens" — **[PASS]**

### 6. Google Reviews Link

- [x] "Google Reviews" text is wrapped in an `<a>` tag — **[PASS]**
- [x] The link `href` is not `#` or empty — **[PASS]** `https://g.page/r/risingsunthailand/review`
- [ ] **[MANUAL]** The link destination is Salim's actual Google Business profile — needs verification

---

## Phase 3 — Shorten Forms

### 7. WhatsApp Quick-Contact on Service Pages

- [x] `/services/flights` — **[PASS]** "Prefer to message first? WhatsApp Salim" with `?text=` param
- [x] `/services/accommodation` — **[PASS]**
- [x] `/services/cars` — **[PASS]**
- [x] `/services/medical` — **[PASS]**
- [x] `/trade` — **[PASS]**
- [x] Each link includes a pre-filled `?text=` param — **[PASS]** all verified

### 8. Non-Essential Fields Made Optional

- [x] `/services/flights` — return date optional — **[PASS]**
- [x] `/services/flights` — class optional — **[PASS]**
- [x] `/services/flights` — passengers optional — **[PASS]**
- [x] `/services/medical` — description textarea optional — **[PASS]**
- [x] `/services/cars` — drop-off location optional — **[PASS]**
- [x] `/services/cars` — vehicle type optional — **[PASS]**

Required fields correctly retained on all pages (name, email, core booking details).

---

## Phase 4 — Manual Checks

These cannot be automated. Verify by hand before launch.

- [ ] **[MANUAL]** Calendly link `https://calendly.com/salimjahangir67/15min` is live and bookable
- [ ] **[MANUAL]** WhatsApp number `+66 877 053 366` is active and receives messages
- [ ] **[MANUAL]** Google Business URL confirmed and matches `https://g.page/r/risingsunthailand/review`
- [ ] **[MANUAL]** Fake testimonials replaced with real reviews from actual clients
- [ ] **[MANUAL]** Hero background image replaced with a real photo (Salim or Thailand)
- [ ] **[MANUAL]** Salim has reviewed all FAQ answers for accuracy

---

## Global Checks

- [x] Floating WhatsApp button present on all 8 routes — **[PASS]**
- [x] No console errors on page load — **[PASS]** 0 errors (2 warnings, non-critical)
- [ ] **[MANUAL]** No broken links — verify internal navigation manually
- [ ] **[MANUAL]** Page loads under 3 seconds on fast 3G
