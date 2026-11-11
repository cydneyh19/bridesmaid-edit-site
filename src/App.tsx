import { useMemo } from 'react'
import { sections } from './content/campaign'
import { useActiveSection } from './hooks/useActiveSection'
import { usePresentation } from './hooks/usePresentation'
import { Header } from './components/Header'
import { PresentationHud } from './components/PresentationHud'
import { Cover } from './components/sections/Cover'
import { Story } from './components/sections/Story'
import { ProposalBox } from './components/sections/ProposalBox'
import { Storyboard } from './components/sections/Storyboard'
import { Creator } from './components/sections/Creator'

/** Slides used by presentation mode and print. Section 05 spans two slides. */
const slides = ['cover', 'story', 'box', 'content', 'credentials', 'invite'] as const
const slideTitles = [...sections.map((s) => s.title).slice(0, 4), sections[4].title, 'Partnership Opportunities']

export default function App() {
  const sectionIds = useMemo(() => sections.map((s) => s.id), [])
  const activeSection = useActiveSection(sectionIds)
  const activeSlide = useActiveSection(slides)
  const { presenting, start, stop, goTo } = usePresentation(slides, activeSlide)

  return (
    <>
      <a href="#main" className="no-print sr-only z-[60] bg-espresso px-4 py-3 text-ivory focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      {!presenting && <Header active={activeSection} dark={slides[activeSlide] === 'invite'} onPresent={start} />}
      {presenting && (
        <PresentationHud
          active={activeSlide}
          total={slides.length}
          title={slideTitles[activeSlide]}
          dark={slides[activeSlide] === 'invite'}
          onPrev={() => goTo(activeSlide - 1)}
          onNext={() => goTo(activeSlide + 1)}
          onExit={stop}
        />
      )}
      <main id="main">
        <Cover />
        <Story />
        <ProposalBox />
        <Storyboard />
        <Creator />
      </main>
    </>
  )
}
