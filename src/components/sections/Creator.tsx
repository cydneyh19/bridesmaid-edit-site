import { creator, credentials, sections } from '../../content/campaign'
import { useReveal } from '../../hooks/useReveal'
import { Folio } from '../Folio'
import { Line } from '../Line'
import { Numerals } from '../Numerals'
import { PhoneVideo } from '../PhoneVideo'
import { QrCode } from '../QrCode'
import { Eyebrow, Section } from '../Section'

/** "78.4K" -> 78400, "5,739" -> 5739 */
const toNumber = (v: string) => {
  const n = parseFloat(v.replace(/,/g, ''))
  return /k$/i.test(v) ? n * 1000 : /m$/i.test(v) ? n * 1_000_000 : n
}

/** Verified engagement, drawn as hairline bars relative to the largest value. */
function Breakdown() {
  const metrics = [...credentials.highlight.metrics].sort((a, b) => toNumber(b.value) - toNumber(a.value))
  const max = toNumber(metrics[0].value)
  return (
    <div>
      <p className="label text-espresso/60">{credentials.breakdownLabel}</p>
      <dl className="mt-2 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="label text-espresso/70">{m.label}</dt>
              <dd className="font-sans text-lg font-light tabular-nums tracking-tight">{m.value}</dd>
            </div>
            <div aria-hidden className="mt-1.5 h-px bg-espresso/15">
              <div className="h-[3px] -translate-y-px bg-burgundy" style={{ width: `${Math.max(2, (toNumber(m.value) / max) * 100)}%` }} />
            </div>
          </div>
        ))}
      </dl>
    </div>
  )
}

function Credentials() {
  const ref = useReveal<HTMLDivElement>()
  const h = credentials.highlight
  const { portrait, versace, michaelKors } = credentials.images
  const chip = 'label absolute bottom-2 left-2 whitespace-nowrap bg-ivory/90 px-2 py-1 text-espresso'

  return (
    <div ref={ref} id="credentials" data-slide className="relative lg:flex lg:min-h-[100svh] lg:items-center">
      {/* Dominant portrait with campaign work layered over its edge */}
      {/* Dusty rose layer: gives the collage depth behind the overlapping campaign shots */}
      <div aria-hidden className="absolute left-[28%] top-[12%] hidden h-[62%] w-[16%] bg-rose/45 lg:block" />
      <div className="relative h-[78svh] lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:w-[36%]">
        <figure className="absolute inset-0 overflow-hidden">
          <img src={portrait.src} alt={portrait.alt} width={portrait.width} height={portrait.height} loading="lazy" className="reveal-img h-full w-full object-cover object-[50%_14%]" />
        </figure>
        <figure className="reveal group absolute -bottom-16 right-[38%] z-10 w-[32%] border-[6px] border-ivory lg:bottom-auto lg:right-auto lg:left-[78%] lg:top-[16%] lg:w-[34%] lg:border-8" style={{ ['--d' as string]: 2 }}>
          <div className="overflow-hidden">
            <img src={versace.src} alt={versace.alt} width={versace.width} height={versace.height} loading="lazy" className="img-zoom aspect-[3/4] w-full object-cover object-[38%_35%]" />
          </div>
          <figcaption className={chip}>{versace.label}</figcaption>
        </figure>
        <figure className="reveal group absolute -bottom-24 right-gutter z-10 w-[34%] border-[6px] border-ivory lg:bottom-[10%] lg:right-auto lg:left-[88%] lg:w-[30%] lg:border-8" style={{ ['--d' as string]: 3 }}>
          <div className="overflow-hidden">
            <img src={michaelKors.src} alt={michaelKors.alt} width={michaelKors.width} height={michaelKors.height} loading="lazy" className="img-zoom aspect-[3/4] w-full object-cover object-[50%_40%]" />
          </div>
          <figcaption className={chip}>{michaelKors.label}</figcaption>
        </figure>
      </div>

      <div className="relative w-full px-gutter pb-section pt-36 lg:ml-[46%] lg:pb-[calc(var(--section-pad)*0.55)] lg:pt-[max(calc(var(--section-pad)*0.55),calc(var(--header-h)+1.25rem))] lg:pl-0 lg:pr-[calc(var(--gutter)+1.5rem)]">
        <Eyebrow number={sections[4].number}>{credentials.eyebrow}</Eyebrow>
        <h2 id="creator-title" className="mt-5 font-display text-h2 font-medium">
          <Line d={1}>
            {credentials.headline[0]} {credentials.headline[1]}
          </Line>
          <Line d={2}>
            <em className="font-normal text-burgundy">{credentials.headline[2].split(' ')[0]}</em> {credentials.headline[2].split(' ').slice(1).join(' ')}
          </Line>
        </h2>
        <p className="reveal mt-5 max-w-[60ch] text-body font-light text-espresso/85" style={{ ['--d' as string]: 2 }}>
          {credentials.intro}
        </p>

        {/* Proof: verified numbers beside the video that earned them */}
        <div className="reveal mt-6 grid gap-10 border-t border-espresso/15 pt-6 md:grid-cols-[minmax(0,1fr)_auto] lg:gap-10" style={{ ['--d' as string]: 3 }}>
          <div>
            <p className="label text-burgundy">
              {credentials.featuredLabel}
              <span className="mt-1 block text-espresso">{h.campaign}</span>
            </p>
            <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <p className="font-sans text-numeral font-extralight text-burgundy">{h.value}</p>
              <p className="label text-espresso/70">{h.label}</p>
            </div>
            <div className="mt-4">
              <Breakdown />
            </div>
            <p className="mt-4 text-body font-light text-espresso/70">{h.note}</p>
          </div>
          <PhoneVideo
            src={h.video.src}
            poster={h.video.poster}
            title={h.video.title}
            caption={h.video.caption}
            className="mx-auto w-[min(62vw,15rem)] md:mx-0 md:w-[clamp(10rem,13vw,14rem)]"
          />
        </div>
      </div>
      <Folio page="05" title="The Creator" />
    </div>
  )
}

function Invitation() {
  const ref = useReveal<HTMLDivElement>()
  const brands = credentials.brands
  const Track = ({ dup = false }: { dup?: boolean }) => (
    <div aria-hidden className={`flex shrink-0 items-center ${dup ? 'marquee-dup' : ''}`}>
      {brands.map((b) => (
        <span key={b} className="flex items-center whitespace-nowrap font-display text-marquee italic">
          <span className="px-[0.35em]">{b}</span>
          <span className="font-sans text-[0.3em] not-italic text-champagne">●</span>
        </span>
      ))}
    </div>
  )

  return (
    <div ref={ref} id="invite" data-slide className="on-dark relative flex min-h-[100svh] flex-col justify-between gap-12 bg-burgundy pb-12 pt-[calc(var(--header-h)+2.5rem)] text-ivory lg:pb-14">
      <div>
        <div className="shell">
          <h3 className="label reveal text-ivory/75" style={{ ['--d' as string]: 0 }}>
            {credentials.brandsLabel}
          </h3>
          <ul className="sr-only">
            {brands.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <div className="marquee reveal mt-5 overflow-hidden border-y border-ivory/20 py-4" style={{ ['--d' as string]: 1 }}>
          <div className="marquee-track flex w-max">
            <Track />
            <Track dup />
          </div>
        </div>
      </div>

      <div className="shell flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <p className="reveal max-w-[18ch] font-display text-h2 font-medium" style={{ ['--d' as string]: 2 }}>
          {credentials.closingLead} <em className="font-normal text-champagne">{credentials.closingAccent}</em>
        </p>
        {/* Cydney's own photographs, layered: the fragrance portrait leads, the bouquet tucks under its corner */}
        <div className="relative flex items-start gap-3 lg:mr-[4%] lg:block lg:h-[clamp(11rem,24vh,15rem)] lg:w-[clamp(20rem,31vw,28rem)]">
          {credentials.closingImages.map((im, i) => (
            <figure
              key={im.src}
              className={`reveal ${i === 0 ? 'w-[46%] lg:absolute lg:-top-[12%] lg:right-0 lg:z-10 lg:w-[44%]' : 'mt-10 w-[44%] lg:absolute lg:bottom-0 lg:left-0 lg:mt-0 lg:w-[56%]'}`}
              style={{ ['--d' as string]: 3 + i }}
            >
              <div className="overflow-hidden border-[5px] border-ivory/90">
                <img src={im.src} alt={im.alt} width={im.width} height={im.height} loading="lazy" className={`img-zoom w-full object-cover ${i === 0 ? 'aspect-[3/4] object-[50%_30%]' : 'aspect-[5/4] object-[45%_35%]'}`} />
              </div>
              <figcaption className="label mt-1.5 font-light text-ivory/70">{im.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="shell grid-editorial items-end gap-y-12">
        <div className="col-span-4 md:col-span-8 lg:col-span-6">
          <h3 className="label reveal text-ivory/75" style={{ ['--d' as string]: 3 }}>
            {credentials.opportunitiesLabel}
          </h3>
          <ol className="reveal mt-3 border-t border-ivory/20" style={{ ['--d' as string]: 4 }}>
            {credentials.opportunities.map((o, i) => (
              <li key={o} className="group flex items-baseline gap-5 border-b border-ivory/20 py-2.5">
                <span className="w-7 shrink-0 font-sans text-label font-light tabular-nums text-champagne">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-display text-h3 transition-transform duration-500 ease-editorial motion-safe:group-hover:translate-x-1">
                  <Numerals text={o} />
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Sign-off: monogram, contact, QR */}
        <div className="reveal col-span-4 md:col-span-8 lg:col-span-5 lg:col-start-8" style={{ ['--d' as string]: 5 }}>
          <div className="flex items-end justify-between gap-6 border-b border-ivory/20 pb-5">
            <p aria-hidden className="font-display text-display font-normal leading-[0.8]">
              {credentials.monogram[0]}
              <span className="mx-[0.08em] font-light italic text-champagne">/</span>
              {credentials.monogram[1]}
            </p>
            <a href={creator.portfolioUrl} target="_blank" rel="noreferrer" className="shrink-0" aria-label="Open cydneytaylorhill.com">
              <QrCode className="h-24 w-24 md:h-28 md:w-28" />
            </a>
          </div>
          <address className="mt-5 grid grid-cols-1 gap-4 not-italic sm:grid-cols-3">
            <div>
              <p className="label text-ivory/70">Creator</p>
              <p className="mt-1 text-body font-medium">{creator.name}</p>
            </div>
            <div>
              <p className="label text-ivory/70">{credentials.contactLabels.social}</p>
              <p className="mt-1 text-body">
                <a className="link-draw" href={creator.instagramUrl} target="_blank" rel="noreferrer">
                  {creator.handle}
                </a>
              </p>
            </div>
            <div>
              <p className="label text-ivory/70">{credentials.contactLabels.portfolio}</p>
              <p className="mt-1 text-body">
                <a className="link-draw" href={creator.portfolioUrl} target="_blank" rel="noreferrer">
                  {creator.portfolio}
                </a>
              </p>
            </div>
          </address>
        </div>
      </div>
      <Folio page="06" title="The Invitation" tone="dark" />
    </div>
  )
}

export function Creator() {
  return (
    <Section id="creator" labelledBy="creator-title" slide={false} className="bg-ivory">
      <Credentials />
      <Invitation />
    </Section>
  )
}
