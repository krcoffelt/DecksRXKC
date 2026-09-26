import { ArrowUpRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { business } from '../../data/business'
import { getResponsiveImageProps } from '../../lib/images'
import { SiteHeader } from '../SiteHeader'
import { ButtonLink, GoogleGLogo, RatingStars } from '../ui'

export const heroImagePath = '/images/kansas-city-custom-wood-deck-railing-project.jpg'

const slides = [
  {
    src: heroImagePath,
    alt: 'Custom cedar deck with dark railings and a wide stair on a Kansas City home at dusk',
    caption: 'Cedar deck, black rail, wide stair',
    position: 'object-[60%_55%]',
  },
  {
    src: '/images/optimized/kansas-city-covered-composite-deck-wide-view.jpg',
    alt: 'Covered composite deck with seating overlooking a backyard pool',
    caption: 'Covered composite deck over the pool',
    position: 'object-[50%_60%]',
  },
  {
    src: '/images/optimized/kansas-city-elevated-screened-porch-black-railing.jpg',
    alt: 'Elevated screened porch with black railing on a Kansas City home',
    caption: 'Elevated screened porch',
    position: 'object-[50%_35%]',
  },
  {
    src: '/images/optimized/kansas-city-elevated-composite-deck-cable-railing-stairs.jpg',
    alt: 'Elevated composite deck with black cable railing and a long stair run',
    caption: 'Elevated composite deck, cable rail',
    position: 'object-[40%_50%]',
  },
]

const SLIDE_MS = 6500
const boards = Array.from({ length: 9 })

export function Hero() {
  const [active, setActive] = useState(0)
  const [previous, setPrevious] = useState<number | null>(null)
  const [playing, setPlaying] = useState(false)
  const [loadRest, setLoadRest] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const go = (index: number) => {
    if (index === active) return
    setPrevious(active)
    setActive(index)
  }

  // Keep the first photo's download uncontested; fetch the rest once the page has loaded.
  useEffect(() => {
    const start = () => setLoadRest(true)
    if (document.readyState === 'complete') {
      const timer = window.setTimeout(start, 600)
      return () => window.clearTimeout(timer)
    }
    window.addEventListener('load', start, { once: true })
    return () => window.removeEventListener('load', start)
  }, [])

  // Autoplay only while the hero is on screen, the tab is visible, and motion is welcome.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const section = sectionRef.current
    if (!section) return
    let onScreen = true
    const sync = () => setPlaying(onScreen && document.visibilityState === 'visible')
    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting
      sync()
    })
    observer.observe(section)
    document.addEventListener('visibilitychange', sync)
    sync()
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', sync)
    }
  }, [])

  useEffect(() => {
    if (!playing || !loadRest) return
    const timer = window.setTimeout(() => {
      setPrevious(active)
      setActive((active + 1) % slides.length)
    }, SLIDE_MS)
    return () => window.clearTimeout(timer)
  }, [active, playing, loadRest])

  return (
    <section ref={sectionRef} className="relative flex h-[100svh] min-h-[40rem] flex-col text-bone" data-header-tone="dark">
      <SiteHeader variant="overlay" />

      {/* Backdrop layer: isolated so the header and phone bar can sit above the whole page */}
      <div className="grain absolute inset-0 isolate overflow-clip bg-night">
      {/* Rotating project photography */}
      <div className="absolute inset-0 -z-20" data-hero-media>
        {slides.map((slide, index) => {
          const state = index === active ? 'is-active z-20' : index === previous ? 'is-previous z-10' : 'is-idle z-0'
          return (
            <div key={slide.src} className={`hero-slide absolute inset-0 overflow-hidden ${state}`} aria-hidden={index !== active}>
              {index === 0 || loadRest ? <img
                className={`hero-slide-img h-full w-full object-cover ${slide.position} ${index === 0 ? "hero-media" : ""}`}
                {...getResponsiveImageProps(slide.src, '100vw')}
                alt={slide.alt}
                width="1600"
                height="1200"
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={index === 0 ? 'high' : 'low'}
              /> : null}
            </div>
          )
        })}
      </div>

      {/* Deck boards slide away to reveal the first photo */}
      <div className="hero-boards pointer-events-none absolute inset-0 -z-10 flex-col" aria-hidden="true">
        {boards.map((_, index) => (
          <span key={index} className="block bg-night" style={{ ['--i' as string]: index }} />
        ))}
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(17_16_14/0.55)_0%,transparent_22%,transparent_40%,rgb(17_16_14/0.9)_100%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgb(17_16_14/0.5)_0%,transparent_60%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-night/25" aria-hidden="true" />
      </div>

      <div className="shell relative flex flex-1 flex-col justify-end pt-28 pb-5 lg:pb-7">
        <div className="grid gap-8 lg:grid-cols-[1fr_minmax(0,25rem)] lg:items-end lg:gap-12">
          <h1 className="hero-lines hero-title">
            <span className="line-mask" style={{ ['--i' as string]: 0 }}><span>Custom Decks</span></span>
            <span className="line-mask" style={{ ['--i' as string]: 1 }}><span><em className="pr-[0.06em] text-soft-beige">built for</em> Kansas</span></span>
            <span className="line-mask" style={{ ['--i' as string]: 2 }}><span>City Homes</span></span>
          </h1>
          <div className="lg:pb-3">
            <p className="hero-fade text-[1.02rem] leading-7 text-bone/80" style={{ ['--i' as string]: 1 }}>
              DecksRXKC builds custom decks, screened-in decks, covered decks, stairs, railings, and outdoor living
              spaces across the Kansas City metro — planned for summer nights, family dinners, and every season in between.
            </p>
            <div className="hero-fade mt-7 flex flex-wrap items-center gap-3" style={{ ['--i' as string]: 2 }}>
              <ButtonLink href="#contact" variant="bronze">Get a free quote</ButtonLink>
              <ButtonLink href="#our-work" variant="outline">View our work</ButtonLink>
            </div>
          </div>
        </div>

        <div className="hero-fade mt-10 flex items-center justify-between gap-6 border-t border-bone/15 pt-5 lg:mt-12" style={{ ['--i' as string]: 3 }}>
          <a href={business.googleMapsUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-3 sm:gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-bone">
              <GoogleGLogo className="h-5 w-5" />
            </span>
            <span className="flex flex-col">
              <span className="flex items-center gap-2">
                <span className="font-display text-xl leading-none">5.0</span>
                <RatingStars className="text-[0.8rem]" />
              </span>
              <span className="mt-1 text-[0.82rem] text-bone/65 transition-colors group-hover:text-bone">{business.googleReviewCount} reviews on Google</span>
            </span>
            <ArrowUpRight className="hidden h-4 w-4 text-bone/50 transition-transform duration-500 group-hover:rotate-45 group-hover:text-bone sm:block" aria-hidden="true" />
          </a>

          <div className="flex items-center gap-6">
            <div className="hidden md:grid">
              {slides.map((slide, index) => (
                <p
                  key={slide.src}
                  className={`[grid-area:1/1] text-right text-[0.9rem] whitespace-nowrap text-bone/80 transition-all duration-700 ease-[var(--ease-out-expo)] ${index === active ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
                  aria-hidden={index !== active}
                >
                  {slide.caption}
                </p>
              ))}
            </div>
            <div className="flex gap-1.5">
              {slides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  className="group flex h-11 items-center"
                  aria-label={`Show ${slide.caption}`}
                  aria-pressed={index === active}
                  onClick={() => go(index)}
                >
                  <span className="relative block h-0.5 w-7 overflow-hidden bg-bone/25 transition-colors group-hover:bg-bone/45 sm:w-10">
                    {index === active ? (
                      <span
                        key={`${active}-${playing}`}
                        className={`hero-progress absolute inset-0 origin-left bg-soft-beige ${playing ? 'is-playing' : ''}`}
                        style={{ ['--slide-ms' as string]: `${SLIDE_MS}ms` }}
                      />
                    ) : null}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
