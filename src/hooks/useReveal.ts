import { useEffect, useRef } from 'react'

/** Adds `is-visible` to the element once it enters the viewport, which plays its `.reveal` children. */
export function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold },
    )
    io.observe(el)
    // Printing must show everything, even sections never scrolled into view.
    const onPrint = () => el.classList.add('is-visible')
    window.addEventListener('beforeprint', onPrint)
    return () => {
      io.disconnect()
      window.removeEventListener('beforeprint', onPrint)
    }
  }, [threshold])

  return ref
}
