import { sections } from '../content/campaign'

type Props = { active: number; dark: boolean; onPresent: () => void }

export function Header({ active, dark: onDark, onPresent }: Props) {
  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 h-[var(--header-h)] border-b backdrop-blur-md transition-colors duration-500 ${
        onDark ? 'on-dark border-ivory/15 bg-burgundy/90 text-ivory' : 'border-espresso/10 bg-ivory/85 text-espresso'
      }`}
    >
      <div className="shell flex h-full items-center justify-between gap-6">
        <a href="#cover" className="font-display text-xl italic leading-none tracking-tight">
          The Bridesmaid <span className="not-italic">Edit</span>
        </a>

        <nav aria-label="Sections" className="hidden lg:block">
          <ol className="flex items-center gap-8">
            {sections.slice(1).map((s, i) => {
              const current = active === i + 1
              return (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    aria-current={current ? 'true' : undefined}
                    className={`label link-draw pb-1 transition-opacity ${current ? 'opacity-100' : 'opacity-55 hover:opacity-100'}`}
                  >
                    <span className="mr-2 font-light">{s.number}</span>
                    {s.short}
                  </a>
                </li>
              )
            })}
          </ol>
        </nav>

        <div className="flex items-center gap-5">
          <span className="label font-light tabular-nums opacity-60 lg:hidden" aria-hidden>
            {String(active + 1).padStart(2, '0')} / {String(sections.length).padStart(2, '0')}
          </span>
          <button
            type="button"
            onClick={onPresent}
            className={`label border px-4 py-2 transition-colors ${
              onDark ? 'border-ivory/50 hover:bg-ivory hover:text-burgundy' : 'border-espresso/30 hover:bg-espresso hover:text-ivory'
            }`}
          >
            Present
          </button>
        </div>
      </div>
    </header>
  )
}
