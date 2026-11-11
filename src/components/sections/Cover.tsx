import type { CSSProperties } from 'react'
import { cover, creator } from '../../content/campaign'
import { Section } from '../Section'

/*
 * Knockout masthead: the title is drawn twice in the same place. The espresso copy sits on ivory;
 * the ivory copy is clipped to the photograph's rectangle, so the word changes colour exactly where it
 * crosses the image. Desktop: the photo is the right-hand column. Mobile: the photo is the top block and
 * the title straddles its bottom edge (pulled up by --pull, measured in the title's own em).
 */
const vars = { '--split': '57%', '--pull': '0.4em' } as CSSProperties

function Title({ tone }: { tone: 'espresso' | 'ivory' }) {
  return (
    <p className={`whitespace-nowrap font-display font-medium uppercase leading-[0.82] ${tone === 'ivory' ? 'text-ivory' : 'text-espresso'}`}>
      <span className={`mb-[0.12em] block text-[0.3em] normal-case leading-none ${tone === 'ivory' ? 'text-ivory' : 'text-burgundy'}`}>The</span>
      Bridesmaid
    </p>
  )
}

function Seal() {
  return (
    <div className="absolute bottom-[12%] left-[calc(var(--split)-3.5rem)] z-20 hidden h-28 w-28 rounded-full bg-ivory p-1 lg:block" aria-hidden>
      <svg viewBox="0 0 100 100" className="seal h-full w-full text-espresso">
        <defs>
          <path id="seal-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text className="font-sans" fontSize="8.4" letterSpacing="2.6" fill="currentColor">
          <textPath href="#seal-circle">{cover.seal.toUpperCase().repeat(2)}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center font-sans text-2xl font-extralight text-burgundy">11</span>
    </div>
  )
}

export function Cover() {
  return (
    <Section id="cover" labelledBy="cover-title" className="bg-ivory">
      <div style={vars} className="relative flex min-h-[100svh] flex-col">
        {/* Photograph */}
        <figure className="relative order-2 mt-6 h-[60svh] overflow-hidden lg:absolute lg:inset-y-0 lg:left-[var(--split)] lg:right-0 lg:order-none lg:mt-0 lg:h-auto">
          <img
            src={cover.image.src}
            alt={cover.image.alt}
            width={cover.image.width}
            height={cover.image.height}
            fetchPriority="high"
            className="reveal-img h-full w-full object-cover object-[50%_22%]"
          />
          {/* Cover lines and vertical side text, magazine style */}
          <p aria-hidden className="label vertical-rl absolute bottom-8 right-5 hidden font-light text-ivory/85 lg:block">
            {cover.verticalLine} <span className="mx-3">|</span> {creator.weddingDate}
          </p>
          <div aria-hidden className="absolute right-8 top-[calc(var(--header-h)+2rem)] hidden text-right lg:block">
            {cover.coverLines.map((l) => (
              <p key={l} className="font-display text-lede leading-[1.1] text-ivory">
                {l}
              </p>
            ))}
            <span className="ml-auto mt-3 block h-px w-10 bg-ivory/70" />
          </div>
        </figure>
        <Seal />

        {/* Meta row */}
        <div className="pad-shell reveal relative z-10 order-1 pt-[calc(var(--header-h)+1.5rem)] lg:order-none lg:w-[var(--split)]" style={{ ['--d' as string]: 0 }}>
          <div className="label flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 text-espresso/70 lg:pr-12">
            <p className="text-burgundy">{cover.eyebrow}</p>
            <p>
              {cover.issue} <span className="mx-2 text-burgundy">|</span> {creator.location}
            </p>
          </div>
        </div>

        <div className="hidden flex-1 lg:block" />

        {/* Knockout title */}
        <h1 id="cover-title" className="sr-only">
          The Bridesmaid Edit
        </h1>
        <div aria-hidden className="reveal relative z-10 order-3 -mt-[var(--pull)] text-mega lg:order-none lg:mt-0" style={{ ['--d' as string]: 1 }}>
          <div className="pad-shell [clip-path:inset(var(--pull)_0_-1em_0)] lg:[clip-path:inset(-1em_calc(100%-var(--split))_-1em_0)]">
            <Title tone="espresso" />
          </div>
          <div className="pad-shell absolute inset-0 [clip-path:inset(-1em_0_calc(100%-var(--pull))_0)] lg:[clip-path:inset(-1em_0_-1em_var(--split))]">
            <Title tone="ivory" />
          </div>
        </div>

        {/* Edit, subheadline, byline */}
        <div className="pad-shell relative z-10 order-4 pb-10 lg:order-none lg:w-[var(--split)] lg:pb-12">
          <div className="flex flex-wrap items-end gap-x-10 gap-y-4 lg:flex-nowrap">
            <p aria-hidden className="reveal font-display text-mega italic leading-[0.8] text-burgundy" style={{ ['--d' as string]: 2 }}>
              Edit
            </p>
            <p className="reveal max-w-[24ch] pb-[0.4em] font-display text-lede text-espresso" style={{ ['--d' as string]: 3 }}>
              {cover.subheadline}
            </p>
          </div>
          <div className="reveal mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-champagne pt-5 lg:mr-12" style={{ ['--d' as string]: 4 }}>
            <p className="label text-espresso">{cover.byline}</p>
            <p className="label font-light text-espresso/60">{cover.edition}</p>
          </div>
        </div>
      </div>
    </Section>
  )
}
