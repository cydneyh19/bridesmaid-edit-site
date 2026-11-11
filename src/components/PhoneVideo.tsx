import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

type Props = {
  src: string
  poster: string
  title: string
  caption: string
  className?: string
}

/**
 * A looping, muted video inside a generic smartphone frame (drawn in CSS, no device artwork).
 * Plays only while on screen. Never autoplays under reduced motion. Always has a pause control.
 */
export function PhoneVideo({ src, poster, title, caption, className = '' }: Props) {
  const wrapRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const reduceMotion = useReducedMotion()
  const [playing, setPlaying] = useState(false)
  const [userPaused, setUserPaused] = useState(false)

  useEffect(() => {
    const wrap = wrapRef.current
    const video = videoRef.current
    if (!wrap || !video) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !reduceMotion && !userPaused) {
          video.play().catch(() => undefined)
        } else if (!entry.isIntersecting) {
          video.pause()
        }
      },
      { threshold: 0.35 },
    )
    io.observe(wrap)
    return () => io.disconnect()
  }, [reduceMotion, userPaused])

  const toggle = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      setUserPaused(false)
      video.play().catch(() => undefined)
    } else {
      setUserPaused(true)
      video.pause()
    }
  }, [])

  const side = 'absolute w-[3px] bg-espresso'

  return (
    <figure ref={wrapRef} className={className}>
      <div className="relative rounded-[2.6rem] bg-espresso p-[0.55rem] ring-1 ring-espresso/10">
        {/* side buttons */}
        <span aria-hidden className={`${side} -left-[3px] top-[17%] h-[5%] rounded-l-sm`} />
        <span aria-hidden className={`${side} -left-[3px] top-[25%] h-[9%] rounded-l-sm`} />
        <span aria-hidden className={`${side} -left-[3px] top-[36%] h-[9%] rounded-l-sm`} />
        <span aria-hidden className={`${side} -right-[3px] top-[27%] h-[13%] rounded-r-sm`} />

        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.1rem] bg-frame">
          <video
            ref={videoRef}
            className="h-full w-full object-cover print:hidden"
            poster={poster}
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={title}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            <source src={src} type="video/mp4" />
          </video>
          {/* Print shows the poster as a plain image: browsers print video posters poorly. */}
          <img src={poster} alt="" aria-hidden className="absolute inset-0 hidden h-full w-full object-cover print:block" />
          {/* camera pill */}
          <span aria-hidden className="absolute left-1/2 top-[1.8%] h-[3.3%] w-[30%] -translate-x-1/2 rounded-full bg-espresso" />
        </div>
      </div>

      <figcaption className="mt-4 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
        <span className="label leading-snug text-espresso/70">{caption}</span>
        <button
          type="button"
          onClick={toggle}
          className="no-print label shrink-0 border border-espresso/25 px-3 py-1.5 transition-colors hover:bg-espresso hover:text-ivory"
          aria-label={playing ? `Pause video: ${title}` : `Play video: ${title}`}
        >
          {playing ? 'Pause' : 'Play'}
        </button>
      </figcaption>
    </figure>
  )
}
