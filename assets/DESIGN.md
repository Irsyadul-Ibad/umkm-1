---
version: alpha
name: Pagi Selasar UMKM Landing
description: Editorial, mobile-first landing page template for Indonesian small businesses, starting with a warm neighborhood bakery.
colors:
  background: "#F4F1E7"
  surface: "#FAF8F1"
  ink: "#242B25"
  muted: "#697068"
  accent: "#61734F"
  accent-soft: "#DDE5CD"
  line: "#D8D5C9"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
rounded:
  sm: "2px"
  DEFAULT: "4px"
  pill: "999px"
spacing:
  page-gutter: "clamp(20px, 5vw, 76px)"
  section-mobile: "64px"
  section-desktop: "112px"
  page-max: "1440px"
components:
  button: { height: "52px", radius: "2px", focus: "3px accent" }
  product: { image-ratio: "4 / 5", border: "1px line", shadow: "none" }
  nav: { height: "84px", surface: "background" }
---

# Pagi Selasar Design System

## Overview

### Creative North Star

An independent Indonesian food journal meets the handwritten batch label on a neighborhood bakery bag. The page feels composed like a small print feature: asymmetrical product photography, a strong serif headline and quiet production notes.

### Product context and register

- **Audience and primary job:** Indonesian microbusiness visitors arriving from social media on a phone; understand the offer, price, place, and ordering route quickly.
- **Target market(s) and evidence:** Indonesia; the PRD specifies Bahasa Indonesia, Indonesian Rupiah, small local businesses, and WhatsApp ordering.
- **Locale(s) and language policy:** Bahasa Indonesia (`id-ID`); format prices with `Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })`.
- **Usage scene:** A short mobile visit from Instagram or TikTok, often on cellular data; desktop is a wider editorial adaptation.
- **Register:** Brand-led marketing landing page, with direct utility at prices, opening hours, and WhatsApp actions.
- **Memorable signature:** A small batch stamp repeated as a production label, tying the page to how the product is actually made.
- **Restraint:** Product photography and concrete copy lead. Navigation, price, and contact remain plain and easy to scan.
- **Anti-references:** Gradient SaaS hero, inflated rounded cards, emoji icon grids, generic slogans, and invented customer portraits.
- **Token ownership/runtime mapping:** This file is the visual specification. CSS custom properties in `styles.css` implement the same semantic palette under `:root` and `[data-theme]`; the theme data in `app.js` selects coordinated page copy, imagery, and palette. Update both when changing a durable visual decision.

## Colors

Kuliner uses tepung `#F4F1E7`, ink `#242B25`, pandan `#61734F`, pandan muda `#DDE5CD`, and a warm line `#D8D5C9`. Fashion and craft replace the accent with brick `#A34842` and clay `#8A5928`, with adjusted cream surfaces. Text stays warm and dark. Focus rings use the active accent; dividers are one-pixel lines. Avoid pure white and black. Essential buttons use white text on the selected accent; muted copy remains dark enough for readable body text.

## Typography

Use Fraunces for display and pull quotes, with Georgia as a resilient serif fallback. Use DM Sans for navigation, paragraphs, prices, and utility labels, with Arial as fallback. Body text begins at 16px with generous leading. Eyebrow labels use restrained uppercase and letter spacing. Keep prose in sentence case and use Indonesian Rupiah formatting for prices.

## Layout

Mobile-first with 20px minimum page gutters and a four-column mental grid at 375px. At desktop, use a 12-column editorial grid capped at 1120px inside a 1440px page. Keep the hero asymmetrical, products on an offset three-column grid, and section spacing open: 64px mobile and about 112px desktop. Images reserve aspect-ratio geometry before loading. Category controls, content, and a mobile bottom order action remain reachable at narrow widths.

## Elevation & Depth

Hierarchy comes from space, photography, and fine rules. Cards use a warm surface and thin border; no heavy shadow, blur, or gradient. The cart uses a native modal dialog so browser focus and dismissal behavior stay familiar.

## Shapes

Use nearly square corners (2–4px) for product and media surfaces, and a pill only for compact category controls. Hairline dividers serve the editorial rhythm. Avoid uniform bubble-like cards.

## Components

### Foundational visual states

Buttons show hover, keyboard focus, pressed, and disabled states. The mobile order strip reserves its height and respects the safe-area inset. Cart feedback is announced through a polite live region.

### Buttons and actions

Solid pandan is the primary action, outline is secondary, and underlined text is tertiary. All targets are at least 44px tall. WhatsApp actions have a clear order verb and open the prefilled message in a new tab.

### Navigation and data display

The one-page navigation anchors to Menu, Cerita, and Lokasi. Product cards retain their price and ordering action. Theme controls are real buttons with pressed states.

### Forms and overlays

The cart uses native `<dialog>` with an accessible name, item quantity controls, and a labeled optional name field. No product data is stored persistently. WhatsApp links contain only the current intentional order draft.

### Iconography

Use small inline line marks and text arrows. Keep action labels visible; no emoji or unlabeled icon-only action.

### Motion

Short opacity and small position reveals guide the page. Product hover only zooms the image slightly. Respect `prefers-reduced-motion`; interaction remains understandable without animation.

### Content and data visualization

Voice is conversational, specific, and grounded in ingredients, place, and process. Prices use Indonesian locale. All testimonials, names, hours, locations, and menu items in the starter are clearly labeled sample data and must be replaced with verified business details before publication.

## Do's and Don'ts

- **Do:** Lead with the specific product and how to order.
- **Do:** Replace each sample image with the business's own product photo before launch.
- **Don't:** Present sample testimonials, locations, hours, or performance claims as verified facts.
- **Don't:** Add strong gradients, heavy shadows, decorative emoji, or generic feature-card grids.
