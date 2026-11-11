import { box, sections } from '../../content/campaign'
import { Folio } from '../Folio'
import { Line } from '../Line'
import { IllustrationCrop } from '../IllustrationCrop'
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

  return (
    <Section id="box" labelledBy="box-title" className="flex items-center bg-ivory">
      <div className="shell grid-editorial items-center py-section lg:py-[calc(var(--section-pad)*0.75)]">
        {/* Still life */}
        <div className="relative col-span-4 md:col-span-8 lg:col-span-7">
          {/* Offset champagne panel bleeding to the left page edge */}
          <div aria-hidden className="absolute -left-[50vw] bottom-[14%] right-[20%] top-[12%] bg-champagne" />

          <figure className="reveal relative z-10" style={{ ['--d' as string]: 1 }}>
            <div className="relative [container-type:inline-size]">
              <img src={box.image.src} alt={box.image.alt} width={W} height={H} loading="lazy" className="reveal-img h-auto w-full" />
              <div aria-hidden className="absolute left-[16.67%] top-[10.7%] flex h-[23.8%] w-[44.4%] flex-col items-center justify-center text-center">
                <CardText />
              </div>
              {/* Annotations, numbered to match the index */}
              {box.hotspots.map((h, i) => (
                <span
                  key={i}
                  aria-hidden
                  className="absolute flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-burgundy font-sans text-[0.625rem] font-medium tabular-nums text-ivory ring-2 ring-ivory md:h-7 md:w-7"
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                >
                  {pad(i)}
                </span>
              ))}
            </div>
          </figure>

          {/* Detail crops: overlap the still life on desktop, sit in a row on mobile */}
          <div className="relative z-20 -mt-[12%] ml-auto w-[56%] md:w-[42%] lg:absolute lg:-right-[5%] lg:bottom-[9%] lg:mt-0 lg:w-[32%]">
            {box.details.map((d, i) => (
              <figure key={d.title} className="reveal rotate-[2deg] border-[6px] border-ivory bg-ivory lg:border-8" style={{ ['--d' as string]: 3 + i }}>
                <IllustrationCrop src={box.image.src} W={W} H={H} crop={d.crop}>
                  {d.card && (
                    <div
                      aria-hidden
                      className="absolute flex flex-col items-center justify-center text-center"
                      style={{ left: `${((150 - d.crop.x) / d.crop.w) * 100}%`, top: `${((90 - d.crop.y) / d.crop.h) * 100}%`, width: `${(400 / d.crop.w) * 100}%`, height: `${(200 / d.crop.h) * 100}%` }}
                    >
                      <CardText scale={W / d.crop.w} />
                    </div>
                  )}
                </IllustrationCrop>
                <figcaption className="label mt-2 font-light leading-snug text-espresso/70">
                  <span className="text-burgundy">{pad(i)}</span> {d.title}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="label relative z-10 mt-6 font-light normal-case tracking-[0.04em] text-espresso/75 lg:pr-[38%]">
            <span className="mr-2 uppercase tracking-[0.2em] text-burgundy">{box.captionLabel}</span>
            {box.caption}
          </p>
        </div>

        {/* Copy */}
        <div className="col-span-4 mt-14 md:col-span-8 lg:col-span-4 lg:col-start-9 lg:mt-0">
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
              <li key={c} className="group flex items-baseline gap-5 border-b border-espresso/20 py-2">
                <span className="w-7 shrink-0 font-sans text-label font-light tabular-nums text-burgundy">{pad(i)}</span>
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
