import { box, sections } from '../../content/campaign'
import { Folio } from '../Folio'
import { Line } from '../Line'
import { Numerals } from '../Numerals'
import { Eyebrow, Section } from '../Section'

const pad = (i: number) => String(i + 1).padStart(2, '0')

function CardText({ scale = 1 }: { scale?: number }) {
  return (
    <>
      <span className="font-sans font-medium uppercase tracking-[0.2em] text-espresso/70" style={{ fontSize: `${1.9 * scale}cqw` }}>
        {box.card.line}
      </span>
      <span className="font-display italic leading-tight text-espresso" style={{ fontSize: `${6.4 * scale}cqw` }}>
        {box.card.word}
      </span>
    </>
  )
}

export function ProposalBox() {
  const { width: W, height: H } = box.image
  const hero = box.hero
  const ribbon = box.details[0]
  const chip = 'label absolute left-2 top-2 bg-ivory/90 px-2 py-1 text-burgundy'

  return (
    <Section id="box" labelledBy="box-title" className="bg-ivory">
      <div className="relative w-full lg:min-h-[100svh]">
        {/* Hero: the open box, full-bleed on the left page */}
        <figure className="relative aspect-[4/5] overflow-hidden md:aspect-[4/3] lg:absolute lg:inset-y-0 lg:left-0 lg:aspect-auto lg:w-[50%]">
          <img src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} loading="lazy" className="reveal-img h-full w-full object-cover object-[45%_50%]" />
          <span className={`${chip} !top-[calc(var(--header-h)+0.5rem)] lg:left-[var(--gutter)] lg:!top-[calc(var(--header-h)+1rem)]`}>{box.detailsLabel}</span>
          <figcaption className="label absolute left-2 right-2 top-[calc(var(--header-h)+2.75rem)] font-light normal-case tracking-[0.04em] text-espresso md:right-auto md:max-w-[22rem] lg:bottom-6 lg:top-auto lg:left-[var(--gutter)] lg:right-auto lg:max-w-[22rem]">
            <span className="bg-ivory/90 box-decoration-clone px-2 py-1 leading-[1.9]">{hero.caption}</span>
          </figcaption>
        </figure>

        {/* Layered over the seam: the ribbon close-up and the annotated concept */}
        <div className="relative z-20 -mt-[16%] flex items-start justify-between gap-3 px-gutter lg:contents">
          <figure className="reveal w-[38%] rotate-[2deg] border-[6px] border-ivory bg-ivory lg:absolute lg:left-[41%] lg:top-[calc(var(--header-h)+5%)] lg:z-20 lg:mt-0 lg:w-[17%] lg:border-8" style={{ ['--d' as string]: 2 }}>
            <div className="relative overflow-hidden">
              <img src={ribbon.src} alt={ribbon.alt} width={ribbon.width} height={ribbon.height} loading="lazy" className="img-zoom h-auto w-full" />
              <span className="label absolute left-1.5 top-1.5 bg-ivory/90 px-1.5 py-0.5 text-burgundy">{box.detailsLabel}</span>
            </div>
            <figcaption className="label mt-2 font-light leading-snug text-espresso/75">{ribbon.title}</figcaption>
          </figure>

          <figure className="reveal mt-[18%] w-[58%] border-[6px] border-ivory bg-ivory lg:absolute lg:bottom-[6%] lg:left-[37%] lg:z-20 lg:mt-0 lg:w-[27%] lg:border-8" style={{ ['--d' as string]: 3 }}>
            <div className="relative [container-type:inline-size]">
              <img src={box.image.src} alt={box.image.alt} width={W} height={H} loading="lazy" className="h-auto w-full" />
              <div aria-hidden className="absolute left-[16.67%] top-[10.7%] flex h-[23.8%] w-[44.4%] flex-col items-center justify-center text-center">
                <CardText />
              </div>
              {/* Annotations, numbered to match the category index */}
              {box.hotspots.map((h, i) => (
                <span
                  key={i}
                  aria-hidden
                  className="absolute flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-burgundy font-sans text-[0.5625rem] font-medium tabular-nums text-ivory ring-2 ring-ivory md:h-6 md:w-6 md:text-[0.625rem]"
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                >
                  {pad(i)}
                </span>
              ))}
            </div>
            <figcaption className="label mt-2 font-light normal-case leading-snug tracking-[0.04em] text-espresso/75">
              <span className="mr-1.5 uppercase tracking-[0.2em] text-burgundy">{box.captionLabel}</span>
              {box.caption}
            </figcaption>
          </figure>
        </div>

        {/* Copy */}
        <div className="px-gutter pb-section pt-14 lg:ml-[68%] lg:flex lg:min-h-[100svh] lg:flex-col lg:justify-center lg:pl-0 lg:pr-[calc(var(--gutter)+1.5rem)] lg:pt-[max(calc(var(--section-pad)*0.75),calc(var(--header-h)+1.25rem))] lg:pb-[calc(var(--section-pad)*0.75)]">
          <Eyebrow number={sections[2].number}>{box.eyebrow}</Eyebrow>
          <h2 id="box-title" className="mt-6 font-display text-h2 font-medium">
            <Line d={1}>{box.headline[0]}</Line>
            <Line d={2}><em className="font-normal text-burgundy">{box.headline[1]}</em></Line>
          </h2>
          <p className="reveal mt-4 max-w-[30ch] font-display text-lede" style={{ ['--d' as string]: 2 }}>
            {box.subheadline}
          </p>
          <div className="reveal mt-5 max-w-[54ch] space-y-3 text-body font-light text-espresso/85" style={{ ['--d' as string]: 3 }}>
            {box.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <h3 className="label reveal mt-6 text-burgundy" style={{ ['--d' as string]: 4 }}>
            {box.categoriesLabel}
          </h3>
          <ol className="reveal mt-3 border-t border-espresso/20" style={{ ['--d' as string]: 5 }}>
            {box.categories.map((c, i) => (
              <li key={c} className="group flex items-baseline gap-4 border-b border-espresso/20 py-2">
                <span className="w-6 shrink-0 font-sans text-label font-light tabular-nums text-burgundy">{pad(i)}</span>
                <span className="font-display text-h3 transition-transform duration-500 ease-editorial motion-safe:group-hover:translate-x-1">
                  <Numerals text={c} />
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <Folio page="03" title="The Proposal Box" />
    </Section>
  )
}
