import type { ReactNode } from 'react'

type Props = {
  src: string
  /** Natural size of the full illustration */
  W: number
  H: number
  /** Region to show, in the illustration's own units */
  crop: { x: number; y: number; w: number; h: number }
  className?: string
  children?: ReactNode
}

/** Shows one region of an illustration at a larger scale, for editorial detail shots. */
export function IllustrationCrop({ src, W, crop, className = '', children }: Props) {
  return (
    <div className={`relative overflow-hidden [container-type:inline-size] ${className}`} style={{ aspectRatio: `${crop.w} / ${crop.h}` }}>
      <img
        src={src}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute max-w-none"
        style={{
          width: `${(W / crop.w) * 100}%`,
          left: `${(-crop.x / crop.w) * 100}%`,
          top: `${(-crop.y / crop.h) * 100}%`,
        }}
      />
      {children}
    </div>
  )
}
