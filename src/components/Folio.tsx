type Props = { page: string; title: string; tone?: 'light' | 'dark'; className?: string }

/** Magazine folio: page number and a running title set vertically on the page edge (desktop only). */
export function Folio({ page, title, tone = 'light', className = '' }: Props) {
  const color = tone === 'dark' ? 'text-ivory/70' : 'text-espresso/55'
  return (
    <div aria-hidden className={`no-print pointer-events-none absolute bottom-8 right-5 z-20 hidden flex-col items-center gap-4 lg:flex ${color} ${className}`}>
      <span className="label vertical-rl whitespace-nowrap font-light">{title}</span>
      <span className="font-sans text-sm font-light tabular-nums">{page}</span>
    </div>
  )
}
