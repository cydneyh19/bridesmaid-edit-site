# The Bridesmaid Edit: Design System and Layout Plan

Luxury fashion editorial meets contemporary Gen Z beauty campaign. The project skill at
`.claude/skills/editorial-design/SKILL.md` is the enforceable version of this document.

## 1. Design system

### Color tokens (`src/theme/tokens.css`)

| Token | Hex | Tailwind | Use |
|---|---|---|---|
| Burgundy | `#80320E` | `burgundy` | Accent words, eyebrows, key numerals, contact block |
| Dusty Rose | `#CDA09B` | `rose` | Accent on espresso, hover, hairlines on dark |
| Champagne | `#DAC0A8` | `champagne` | Section 3 background, rules on ivory |
| Ivory | `#F7F3ED` | `ivory` | Primary background, text on dark |
| Espresso | `#352A27` | `espresso` | Text, section 4 background |

Colors are stored as RGB channels so Tailwind opacity modifiers work (`bg-espresso/80`).
Brand variants only change these variables.

### Type

| Role | Face | Size token | Notes |
|---|---|---|---|
| Mega masthead | Cormorant Garamond 500 | `--fs-mega` clamp(4.5rem, 13.5vw, 15rem) | Uppercase, tracking -0.02em, leading 0.82 |
| Display | Cormorant Garamond 400/500 | `--fs-display` clamp(3rem, 8vw, 8.5rem) | One italic accent word |
| Section headline | Cormorant Garamond 500 | `--fs-h2` clamp(2.5rem, 5.5vw, 5.75rem) | Leading 0.95 |
| Lede | Cormorant Garamond italic | `--fs-lede` clamp(1.25rem, 2vw, 1.75rem) | Burgundy or champagne on dark |
| Body | Inter 300/400 | 1rem to 1.125rem | Line-height 1.65, 60ch max |
| Label | Inter 500 | 0.6875rem to 0.75rem | Uppercase, tracking 0.2em |
| Numerals | Inter 200/300 | varies | Cormorant has old-style figures only |

### Space and grid

- 12-column grid, gutter `--gutter` clamp(1rem, 4vw, 4rem), section padding block clamp(5rem, 10vw, 9rem).
- Sections are at least one viewport tall; composition is asymmetric in every section.

### Motion

- Reveal: opacity 0 to 1 and 24px rise, 900ms, `cubic-bezier(.16,1,.3,1)`, staggered by `--d`.
- Hover: image scale 1.03, link underline draw.
- Rotating campaign seal on the cover and a brand marquee in section 5. Both stop under reduced motion.
- `prefers-reduced-motion: reduce` disables every transform, transition, animation and smooth scroll.

## 2. Page-by-page layout plan (v2: Modern Romance Meets Gen Z Luxury)

Each section is a different spread from the same magazine. Ivory dominates; champagne softens; burgundy
is reserved for type accents and one full-bleed closing spread.

| Section | v1 | v2 |
|---|---|---|
| 01 Cover | Masthead with portrait tucked under the letters | Full-height portrait bleeds off the right edge. "BRIDESMAID" runs across the gutter into the photo and switches from espresso to ivory exactly where it crosses (a knockout, two clipped copies of the same line). Mobile: the portrait becomes the top half of the screen and the title straddles its bottom edge. |
| 02 Story | Two-column photo collage | True split spread: proposal photo bleeds full height on the left, a vertical caption runs up its edge, the bouquet breaks out across the split. A giant cropped "11" in champagne sits behind the headline. |
| 03 Box | Illustration plus text | Product still life on an offset champagne panel that bleeds to the left edge. Numbered annotations sit on the products and match a numbered index. Two tilted detail crops (personalized card, satin wrap and lily) overlap the corners. |
| 04 Storyboard | Four equal frames on espresso | Champagne spread with four frames of different sizes and shapes on a staggered baseline, oversized numerals overlapping each frame. Mobile: frames alternate left and right at different widths instead of a swipe strip. |
| 05a Creator | Three-photo collage | Ring portrait as the dominant full-height image with Versace and Michael Kors content layered over its edge. Verified 1.3M result with an engagement breakdown drawn as hairline bars beside the looping video. |
| 05b Invitation | Ivory with a burgundy contact box | Full-bleed burgundy closing spread: brand marquee, the closing line at headline scale, opportunities index and contact set typographically. |

Motion: text rises in; photographs reveal with a clip wipe; hover zoom on images; everything off under reduced motion and forced visible in print.

## 3. Functional plan

- Fixed, translucent ivory header with section links (aria-current), skip link and Present button.
- Presentation mode: snap scrolling, keyboard navigation (arrows, Page Up/Down, Space, Home, End,
  Esc), slide counter and live region announcing the section title, optional fullscreen.
- Print: landscape 1920 by 1080 px pages, one section per page, chrome hidden, `npm run export:pdf`.

## 4. Folder structure

```
src/
  assets/images/          real photography (webp)
  assets/illustrations/   original unbranded SVG concepts
  content/campaign.ts     all copy and verified data
  theme/tokens.css        brand variables and type scale
  hooks/                  reveal, active section, presentation mode
  components/             header, presentation HUD, primitives
  components/sections/    one file per section
scripts/export-pdf.mjs    Playwright landscape PDF export
```
