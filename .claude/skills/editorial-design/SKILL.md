---
name: editorial-design
description: Apply The Bridesmaid Edit's luxury Gen Z editorial design system.
---

Act as a senior luxury beauty art director.

Apply the following design system to the current project.

COLORS
Burgundy: #80320E
Dusty Rose: #CDA09B
Champagne: #DAC0A8
Ivory: #F7F3ED
Espresso: #352A27

TYPOGRAPHY
- Oversized editorial serif headlines
- Modern minimalist sans-serif body text
- Small uppercase section labels
- High-contrast typographic hierarchy

LAYOUT
- Asymmetric editorial grids
- Large-scale photography
- Intentional overlapping imagery
- Generous negative space
- Unexpected but balanced composition
- Distinct layout for each section

ART DIRECTION
- Luxury beauty editorial
- Contemporary Gen Z sophistication
- Romantic minimalism
- Premium fragrance campaign aesthetic

AVOID
- Generic wedding templates
- Repetitive centered layouts
- Excessive rounded cards
- Decorative gradients
- Unnecessary icons
- Cluttered compositions

Implement changes directly in the project.
Preserve existing functionality and content.
Review the finished layout at desktop and mobile sizes.

---

# Project specifics

The rules below make the direction above concrete for this codebase. Check every change against them before calling it done.



## 1. Brand tokens (never hard-code alternatives)

Colors live in `src/theme/tokens.css` as CSS variables and are exposed to Tailwind as `burgundy`, `rose`, `champagne`, `ivory`, `espresso`.

| Token | Hex | Role |
|---|---|---|
| `--c-burgundy` | `#80320E` | Selective accent: eyebrows, key numerals, one statement word per section |
| `--c-rose` | `#CDA09B` | Secondary accent, hairlines on dark, hover states |
| `--c-champagne` | `#DAC0A8` | Secondary background, rules on ivory |
| `--c-ivory` | `#F7F3ED` | Primary background |
| `--c-espresso` | `#352A27` | Body text and small editorial details |

- Ivory is the dominant background; champagne softens (one champagne spread plus panels). Espresso is text and small details. Burgundy is for dramatic type accents and one full-bleed closing spread; never more than one burgundy spread.
- No gradients as decoration. No pure `#000` or `#fff`.
- Body text keeps at least 4.5:1 contrast; display text at least 3:1.

## 2. Typography

- Display: **Cormorant Garamond** (`font-display`). Oversized, tight leading (0.85 to 1.0), negative tracking at the largest sizes. Italic is the expressive voice: one italic word or phrase per headline, not whole paragraphs.
- Text and UI: **Inter** (`font-sans`). Body 16 to 19px, line-height 1.6, max width about 60 characters.
- Labels and captions: Inter, 11 to 13px, uppercase, tracking `0.18em` or wider.
- **Numerals go in Inter (light), never Cormorant.** Cormorant ships old-style figures, so "11" reads as "II" and "1.3M" as "I.3M".
- Use the fluid scale in `tokens.css` and its Tailwind names: `text-mega`, `text-display`, `text-h2`, `text-h3`, `text-lede`, `text-statement`, `text-marquee`, `text-numeral`, `text-stat`, `text-body`, `text-label`. Do not invent one-off sizes.
- Allowed exceptions: `em` sizes that adjust inline text relative to its parent (numerals inside serif copy, marquee separators) and `cqw` sizes that must scale with an illustration (the proposal card).

## 3. Composition

- Every section has its own composition. Never repeat a layout across two sections.
- Asymmetry by default: off-center grids, text columns that do not mirror images, type that overlaps or bleeds behind photography.
- Centered text is allowed in at most one place on the page.
- Generous negative space. When unsure, remove an element rather than shrink it.
- Avoid: card grids, pill clusters, drop-shadow boxes, icon rows, generic wedding templates, script fonts, glitter, clip art, excessive florals.
- Lists are editorial indexes (numbered rows with hairlines), not cards.
- Magazine details are welcome: folios with a vertical running title, cover lines, knockout type, cropped oversized numerals. Use `Folio` and `IllustrationCrop` instead of reinventing them.

## 4. Imagery and authenticity

- Use Cydney's real photographs from `src/assets/images/` wherever a person appears. Never alter facial features, body proportions or skin tone. Crop only, and never crop through a face.
- Proposal box and storyboard visuals are original, unbranded illustrations. Label them as concepts.
- Inspiration and reference images (other people's boxes, stock) are never shown as Cydney's work.
- Do not use low-resolution screenshots or anything carrying app UI (like counts, avatars, follow buttons).
- Every `<img>` has meaningful `alt` text, `loading="lazy"` below the fold, and explicit dimensions or an aspect ratio so nothing stretches.

## 5. Credibility

- Only verified numbers: Kenya Moore Hair Spa grand opening video, 1.3M organic views, 78.4K likes, 5,739 comments, 9,988 shares, 1,556 saves (posted on Kenya Moore's profile during launch week).
- Brand experience: Valentino, Versace, Maison Margiela, Michael Kors, Estee Lauder (written Estée Lauder), Kenya Moore Haircare, Juvia's Place, Maybelline.
- Prospective partners (PHLUR, EADEM, Saltair, Sol de Janeiro, Touchland, Summer Fridays, OUAI, Rare Beauty, L'Occitane) are never shown as confirmed.
- Never invent follower counts, demographics, engagement rates, testimonials or an email address.

## 6. Copy

- No em dashes anywhere (copy, alt text, comments). Use periods, commas, colons or a vertical bar.
- Typographic quotes and apostrophes in visible copy (’ “ ”).
- Voice: personal, confident, polished. Not salesy, not robotic.
- All copy lives in `src/content/campaign.ts` so brand-specific versions only change data.

## 7. Motion and interaction

- Subtle only: reveal on enter (opacity plus 24px rise, 700 to 900ms, ease-out), image scale on hover (1.03 max), underline draw on links.
- Everything honors `prefers-reduced-motion: reduce` (no transforms, no marquee, no smooth scroll).
- Presentation mode: arrow keys, Page Up/Down, Space, Home, End; Esc exits. Focus is always visible.

## 8. Print

- `@page` is landscape 1920 by 1080 px with no margins; one section per page; navigation and controls hidden; motion states forced visible.

## Review checklist (run before declaring any change complete)

1. Run the dev server and screenshot at 1440, 834 and 390 px wide.
2. Check every section for overlapping text, clipped faces, stretched images and horizontal scroll.
3. `grep -rn "—" src index.html` returns nothing.
4. No metric or brand appears that is not listed in section 5.
5. Reduced-motion and print previews still show all content.
