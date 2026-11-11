import { sections, storyboard } from '../../content/campaign'
import { Folio } from '../Folio'
import { Line } from '../Line'
import { Eyebrow, Section } from '../Section'

/*
 * Four frames, four different sizes and shapes on a staggered baseline.
 * Desktop: one editorial row. Mobile: frames alternate sides at different widths.
 */
const layout = [
  { li: 'w-full lg:w-[31%]', aspect: '392 / 260', pos: '50% 40%' },
  { li: 'w-[82%] self-end lg:z-10 lg:-ml-[4%] lg:w-[23%] lg:self-auto lg:mt-[7%]', aspect: '392 / 260', pos: '50% 40%', frame: 'lg:border-8 lg:border-champagne' },
  { li: 'w-[72%] lg:w-[19%] lg:mt-[3%]', aspect: '1 / 1', pos: '35% 50%' },
  { li: 'w-[86%] self-end lg:w-[21%] lg:self-auto lg:mt-0', aspect: '5 / 6', pos: '50% 30%' },
]

export function Storyboard() {
  return (
    <Section id="content" labelledBy="content-title" className="flex items-center bg-champagne">
      <div className="shell w-full py-section lg:pb-[calc(var(--section-pad)*0.75)] lg:pt-[max(calc(var(--section-pad)*0.75),calc(var(--header-h)+1.25rem))]">
        <div className="grid-editorial items-end">
          <div className="col-span-4 md:col-span-8 lg:col-span-7">
            <Eyebrow number={sections[3].number}>{storyboard.eyebrow}</Eyebrow>
            <h2 id="content-title" className="mt-5 font-display text-display font-medium">
              <Line d={1}>
                {storyboard.headline[0]} <em className="font-normal text-burgundy">{storyboard.headline[1]}</em>
              </Line>
            </h2>
            <p className="reveal mt-3 font-display text-lede" style={{ ['--d' as string]: 2 }}>
              {storyboard.subheadline}
            </p>
          </div>
          <p className="reveal col-span-4 mt-6 max-w-[52ch] text-body font-light text-espresso/85 md:col-span-6 lg:col-span-4 lg:col-start-9 lg:mt-0" style={{ ['--d' as string]: 3 }}>
            {storyboard.body}
          </p>
        </div>

        <ol aria-label={storyboard.stripLabel} className="mt-12 flex flex-col gap-14 lg:mt-6 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
          {storyboard.frames.map((f, i) => (
            <li key={f.number} className={`reveal group relative ${layout[i].li}`} style={{ ['--d' as string]: 3 + i }}>
              <figure>
                {/* Oversized numeral overlapping the frame's top edge */}
                <span aria-hidden className="relative z-10 -mb-[0.32em] block font-sans text-[clamp(4rem,5.5vw,6rem)] font-extralight leading-none tracking-[-0.04em] text-burgundy">
                  {f.number}
                </span>
                <div className={`overflow-hidden bg-ivory ${'frame' in layout[i] ? layout[i].frame : ''}`}>
                  <img
                    src={f.src}
                    alt={f.alt}
                    loading="lazy"
                    className="reveal-img img-zoom w-full object-cover"
                    style={{ aspectRatio: layout[i].aspect, objectPosition: layout[i].pos }}
                  />
                </div>
                <figcaption className="mt-4 max-w-[34ch]">
                  <p className="label font-light text-espresso/65">
                    {storyboard.frameLabel} {f.number} <span className="mx-1 text-burgundy">|</span> {f.kind}
                  </p>
                  <h3 className="mt-2 font-display text-h3">{f.title}</h3>
                  <p className="mt-2 text-body font-light text-espresso/80">{f.text}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ol>

        <p className="label reveal mt-10 font-light lg:mt-6 normal-case tracking-[0.04em] text-espresso/75" style={{ ['--d' as string]: 7 }}>
          <span className="mr-2 uppercase tracking-[0.2em] text-burgundy">{storyboard.noteLabel}</span>
          {storyboard.disclaimer}
        </p>
      </div>
      <Folio page="04" title="Beyond the Box" />
    </Section>
  )
}
