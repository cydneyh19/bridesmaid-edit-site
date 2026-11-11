import { useCallback, useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Presentation mode: snap scrolling between sections and keyboard navigation.
 * Keys: ArrowRight/ArrowDown/PageDown/Space next, ArrowLeft/ArrowUp/PageUp previous, Home, End, Escape exits.
 */
export function usePresentation(ids: readonly string[], active: number) {
  const [presenting, setPresenting] = useState(false)

  const goTo = useCallback(
    (index: number) => {
      const i = Math.max(0, Math.min(ids.length - 1, index))
      const el = document.getElementById(ids[i])
      if (!el) return
      // Scroll the window directly: scrollIntoView can target a clipped ancestor instead of the page.
      const top = el.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
      if (el.tabIndex >= 0 || el.hasAttribute('tabindex')) el.focus({ preventScroll: true })
    },
    [ids],
  )

  const start = useCallback(() => {
    setPresenting(true)
    document.documentElement.requestFullscreen?.().catch(() => undefined)
  }, [])

  const stop = useCallback(() => {
    setPresenting(false)
    if (document.fullscreenElement) document.exitFullscreen().catch(() => undefined)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('presenting', presenting)
    if (presenting) goTo(active)
    // goTo(active) only when entering presentation mode
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presenting])

  useEffect(() => {
    const onFs = () => {
      if (!document.fullscreenElement && presenting) setPresenting(false)
    }
    document.addEventListener('fullscreenchange', onFs)
    return () => document.removeEventListener('fullscreenchange', onFs)
  }, [presenting])

  useEffect(() => {
    if (!presenting) return
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('input, textarea, select')) return
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          e.preventDefault()
          goTo(active + 1)
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          goTo(active - 1)
          break
        case 'Home':
          e.preventDefault()
          goTo(0)
          break
        case 'End':
          e.preventDefault()
          goTo(ids.length - 1)
          break
        case 'Escape':
          stop()
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [presenting, active, goTo, stop, ids.length])

  return { presenting, start, stop, goTo }
}
