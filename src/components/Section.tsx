import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

type Props = {
  id: string
  labelledBy: string
  className?: string
  dark?: boolean
  /** False when the section contains its own slides (inner elements carry data-slide). */
  slide?: boolean
  children: ReactNode
}

/** A full-viewport editorial section. Doubles as a slide in presentation and print. */
export function Section({ id, labelledBy, className = '', dark = false, slide = true, children }: Props) {
  const ref = useReveal<HTMLElement>()
  return (
    <section
      ref={ref}
      id={id}
      data-slide={slide ? '' : undefined}
      tabIndex={-1}
      aria-labelledby={labelledBy}
      className={`relative min-h-[100svh] w-full overflow-x-clip outline-none ${dark ? 'on-dark' : ''} ${className}`}
    >
      {children}
    </section>
  )
}

type EyebrowProps = { number: string; children: ReactNode; tone?: 'light' | 'dark'; d?: number }

export function Eyebrow({ number, children, tone = 'light', d = 0 }: EyebrowProps) {
  return (
    <p
      className={`label reveal flex items-center gap-3 ${tone === 'dark' ? 'text-rose' : 'text-burgundy'}`}
      style={{ ['--d' as string]: d }}
    >
      <span className="font-light tabular-nums">{number}</span>
      <span aria-hidden className={`h-px w-8 ${tone === 'dark' ? 'bg-rose/60' : 'bg-burgundy/50'}`} />
      <span>{children}</span>
    </p>
  )
}
