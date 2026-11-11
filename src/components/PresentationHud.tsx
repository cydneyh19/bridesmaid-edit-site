type Props = {
  active: number
  total: number
  title: string
  dark: boolean
  onPrev: () => void
  onNext: () => void
  onExit: () => void
}

const pad = (n: number) => String(n).padStart(2, '0')

/** Minimal controls shown while presenting. Keyboard: arrows, Page Up/Down, Space, Home, End, Esc. */
export function PresentationHud({ active, total, title, dark, onPrev, onNext, onExit }: Props) {
  const tone = dark ? 'text-ivory border-ivory/40 bg-burgundy/70' : 'text-espresso border-espresso/25 bg-ivory/70'
  const btn = `label border px-3 py-2 backdrop-blur disabled:opacity-30 ${tone}`
  return (
    <div className="no-print fixed bottom-5 right-5 z-50 flex items-center gap-1.5">
      <p className="sr-only" aria-live="polite">
        Slide {active + 1} of {total}: {title}
      </p>
      <button type="button" onClick={onPrev} disabled={active === 0} className={btn} aria-label="Previous slide">
        Prev
      </button>
      <span className={`label px-3 py-2 font-light tabular-nums backdrop-blur ${tone} border-transparent`} aria-hidden>
        {pad(active + 1)} / {pad(total)}
      </span>
      <button type="button" onClick={onNext} disabled={active === total - 1} className={btn} aria-label="Next slide">
        Next
      </button>
      <button type="button" onClick={onExit} className={`${btn} ml-2`}>
        Exit<span className="sr-only"> presentation mode</span>
        <span aria-hidden className="ml-2 opacity-60">Esc</span>
      </button>
    </div>
  )
}
