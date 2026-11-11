import type { ReactNode } from 'react'

type Props = { d?: number; className?: string; children: ReactNode }

/**
 * One headline line that slides up from behind a mask when its section enters.
 * The mask is padded so descenders and italic overhangs are never clipped.
 */
export function Line({ d = 0, className = '', children }: Props) {
  return (
    <span className={`line-mask block ${className}`}>
      <span className="reveal-line block" style={{ ['--d' as string]: d }}>
        {children}
      </span>
    </span>
  )
}
