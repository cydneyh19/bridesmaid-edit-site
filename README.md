# The Bridesmaid Edit

An interactive editorial campaign presentation for Cydney Hill's bridal beauty partnership proposal.
React, TypeScript, Tailwind CSS and Vite.

## Run

```bash
npm install
npm run dev        # local development
npm run build      # production build in dist/
npm run preview    # serve the build
npm run export:pdf # landscape 1920 x 1080 PDF in exports/
```

## Presentation mode

Click **Present** (top right). Keys: Right, Down, Page Down or Space for next; Left, Up or Page Up for
previous; Home and End; Esc to exit. Section 05 spans two slides (credentials, then the invitation).

## Where things live

| Path | What |
|---|---|
| `src/theme/tokens.css` | Brand colors, fonts and fluid type scale (change these for brand variants) |
| `src/content/campaign.ts` | All copy, verified metrics and image references |
| `src/assets/images/` | Cydney's real photography (webp) |
| `src/assets/illustrations/` | Original, unbranded concept illustrations |
| `src/components/sections/` | One component per section |
| `src/hooks/` | Reveal on scroll, active section tracking, presentation mode |
| `DESIGN.md` | Design system and page-by-page layout plan |
| `.claude/skills/editorial-design/` | Project skill that enforces the design direction |

## Making a brand-specific version

1. Duplicate the project or branch it.
2. Edit `src/content/campaign.ts`: swap the box illustration for the partner's product photography,
   rename storyboard frame 02 around their hero product, and tailor the opportunities list.
3. Keep metrics to the verified Kenya Moore figures until a current media kit supplies more.
