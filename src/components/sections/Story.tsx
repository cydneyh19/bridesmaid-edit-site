import { sections, story } from '../../content/campaign'
import { Folio } from '../Folio'
import { Line } from '../Line'
import { Eyebrow, Section } from '../Section'

/*
 * Split spread. Left page: a layered collage led by the proposal box inspiration image, with a
 * stationery detail overlapping its corner and Cydney's own proposal photograph as the personal
 * thread. Right page: the narrative, with the oversized "11" cropped by the page edge.
 */
export function Story() {
  const { proposal, inspiration, detail } = story.images
  const chip = 'label absolute left-2 top-2 bg-ivory/90 px-2 py-1 text-burgundy'

  return (
    <Section id="story" labelledBy="story-title" className="bg-ivory">
      <div className="pt-[calc(var(--header-h)+1.5rem)] lg:relative lg:min-h-[100svh] lg:pt-0">
        {/* Left page: collage */}
        <div className="relative mx-gutter aspect-[20/27] md:aspect-[10/9] lg:absolute lg:inset-y-0 lg:left-0 lg:m-0 lg:aspect-auto lg:w-[54%]">
          {/* Dusty rose plane behind the box: depth without decoration */}
          <div aria-hidden className="absolute bottom-[16%] left-0 top-[22%] hidden w-[34%] bg-rose/35 lg:block" />

          {/* Dominant: proposal box inspiration */}
          <figure className="absolute left-0 top-[4%] w-[68%] md:w-[46%] lg:left-[calc(var(--gutter)+4%)] lg:top-[calc(var(--header-h)+5%)] lg:h-[56%] lg:w-auto lg:aspect-[9/10]">
            <div className="relative overflow-hidden lg:h-full">
              <img src={inspiration.src} alt={inspiration.alt} width={inspiration.width} height={inspiration.height} loading="lazy" className="reveal-img aspect-[9/10] w-full object-cover lg:h-full" />
              <span className={chip}>{story.inspirationLabel}</span>
            </div>
            <figcaption className="mt-3 hidden max-w-[21rem] lg:block">
              <span className="label block text-espresso">{inspiration.caption}</span>
              <span className="mt-1.5 block text-[0.8125rem] font-light leading-snug text-espresso/65">{story.inspirationNote}</span>
            </figcaption>
          </figure>

          {/* Personal thread: Cydney's own proposal photograph */}
          <figure className="reveal absolute right-0 top-0 z-10 w-[38%] md:right-[8%] md:w-[30%] lg:right-[3%] lg:top-[calc(var(--header-h)+2%)] lg:w-[27%]" style={{ ['--d' as string]: 2 }}>
            <div className="overflow-hidden border-[6px] border-ivory lg:border-8">
              <img src={proposal.src} alt={proposal.alt} width={proposal.width} height={proposal.height} loading="lazy" className="img-zoom aspect-[3/4] w-full object-cover object-[38%_12%]" />
            </div>
            <figcaption className="label bg-ivory px-1.5 pt-1 font-light text-espresso/75">{proposal.caption}</figcaption>
          </figure>

          {/* Supporting detail: stationery, satin and keepsakes, overlapping the box's corner */}
          <figure className="reveal absolute bottom-0 right-[4%] z-20 w-[46%] md:right-[24%] md:w-[34%] lg:bottom-[9%] lg:right-[12%] lg:w-[33%]" style={{ ['--d' as string]: 3 }}>
            <div className="relative overflow-hidden border-[6px] border-ivory lg:border-8">
              <img src={detail.src} alt={detail.alt} width={detail.width} height={detail.height} loading="lazy" className="img-zoom aspect-[4/3] w-full object-cover" />
              <span className={chip}>{story.inspirationLabel}</span>
            </div>
            <figcaption className="label mt-1 px-1.5 font-light text-espresso/75">{detail.caption}</figcaption>
          </figure>
        </div>
        <p className="mx-gutter mt-4 text-[0.8125rem] font-light leading-snug text-espresso/65 lg:hidden">{story.inspirationNote}</p>

        {/* Right page: narrative */}
        <div className="relative flex items-center overflow-hidden px-gutter pb-section pt-16 lg:ml-[54%] lg:min-h-[100svh] lg:py-section lg:pl-[clamp(2.5rem,4vw,5rem)] lg:pt-[max(var(--section-pad),calc(var(--header-h)+1.25rem))]">
          {/* Oversized drop numeral, cropped by the page edge */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-[0.06em] top-[0.1em] select-none font-sans text-[clamp(13rem,58vw,22rem)] font-extralight leading-[0.78] tracking-[-0.1em] text-rose/45 lg:bottom-auto lg:right-[0.02em] lg:top-[calc(var(--header-h)+1rem)] lg:text-[min(30vw,58vh)]"
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
            <p className="reveal mt-6 max-w-[34ch] border-l border-burgundy/40 pl-5 font-display text-lede text-burgundy" style={{ ['--d' as string]: 2 }}>
              {story.lede}
            </p>
            <div className="reveal mt-5 max-w-[58ch] space-y-3 text-body font-light text-espresso/85" style={{ ['--d' as string]: 3 }}>
              {story.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <dl className="reveal mt-8 grid grid-cols-3 border-t border-champagne pt-5" style={{ ['--d' as string]: 4 }}>
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
