import { sections, story } from '../../content/campaign'
import { Folio } from '../Folio'
import { Line } from '../Line'
import { Eyebrow, Section } from '../Section'

export function Story() {
  const { proposal, bouquet } = story.images
  return (
    <Section id="story" labelledBy="story-title" className="bg-ivory">
      <div className="lg:grid lg:min-h-[100svh] lg:grid-cols-[44%_1fr]">
        {/* Left page: full-bleed personal photograph */}
        <div className="relative h-[70svh] lg:h-auto">
          <figure className="absolute inset-0 overflow-hidden">
            <img
              src={proposal.src}
              alt={proposal.alt}
              width={proposal.width}
              height={proposal.height}
              loading="lazy"
              className="reveal-img h-full w-full object-cover object-[42%_10%]"
            />
          </figure>
          <p aria-hidden className="label vertical-rl absolute bottom-6 left-4 font-light text-ivory/90 lg:bottom-10 lg:left-6">
            {proposal.caption}
          </p>
          {/* Bouquet breaks across the gutter between the two pages */}
          <figure className="reveal absolute -bottom-14 right-gutter z-10 w-[40%] border-[7px] border-ivory md:w-[30%] lg:bottom-[9%] lg:right-auto lg:left-[calc(100%-13%)] lg:w-[26%] lg:border-[10px]" style={{ ['--d' as string]: 3 }}>
            <img src={bouquet.src} alt={bouquet.alt} width={bouquet.width} height={bouquet.height} loading="lazy" className="aspect-[3/4] w-full object-cover object-[50%_30%]" />
          </figure>
        </div>

        {/* Right page */}
        <div className="relative flex items-center overflow-hidden px-gutter pb-section pt-28 lg:py-section lg:pl-[clamp(8rem,16vw,15rem)]">
          {/* Oversized drop numeral, cropped by the page edge */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-[0.06em] top-[0.1em] select-none font-sans text-[clamp(13rem,58vw,22rem)] font-extralight leading-[0.78] tracking-[-0.1em] text-rose/45 lg:right-[0.02em] lg:top-auto lg:bottom-[0.02em] lg:text-[min(30vw,58vh)]"
          >
            {story.numeral}
          </span>

          <div className="relative z-10 max-w-[38rem]">
            <Eyebrow number={sections[1].number}>{story.eyebrow}</Eyebrow>
            {/* Mixed-scale headline: the line breaks carry the rhythm */}
            <h2 id="story-title" className="mt-6 font-display font-medium">
              <Line d={1} className="text-h2 leading-[0.95]">{story.headline[0]}</Line>
              <Line d={2} className="mt-2 pl-[12%] text-lede uppercase tracking-[0.18em] text-espresso/70">{story.headline[1]}</Line>
              <Line d={3} className="text-display leading-[0.9]"><em className="font-normal text-burgundy">{story.headline[2]}</em></Line>
            </h2>
            <p className="reveal mt-7 max-w-[34ch] border-l border-burgundy/40 pl-5 font-display text-lede text-burgundy" style={{ ['--d' as string]: 2 }}>
              {story.lede}
            </p>
            <div className="reveal mt-6 max-w-[58ch] space-y-3 text-body font-light text-espresso/85" style={{ ['--d' as string]: 3 }}>
              {story.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <dl className="reveal mt-9 grid grid-cols-3 border-t border-champagne pt-5" style={{ ['--d' as string]: 4 }}>
              {story.stats.map((s, i) => (
                <div key={s.label} className={`flex flex-col ${i > 0 ? 'border-l border-champagne pl-4 md:pl-6' : 'pr-4'}`}>
                  <dt className="label mt-2 font-normal leading-snug text-espresso/70">{s.label}</dt>
                  <dd className="order-first font-sans text-stat font-extralight text-burgundy">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Folio page="02" title="The Story" />
        </div>
      </div>
    </Section>
  )
}
