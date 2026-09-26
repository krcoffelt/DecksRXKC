import { ArrowUpRight, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { business } from '../data/business'
import { navItems } from '../data/siteContent'
import { trackEvent } from '../lib/analytics'
import { getResponsiveImageProps } from '../lib/images'
import { usePageHydrated } from './motion'
import { Wordmark } from './ui'

type SiteHeaderProps = {
  /** Kept for compatibility — the header reads the tone of the section beneath it. */
  variant?: 'overlay' | 'solid'
}

const menuImages: Record<string, string> = {
  '/': '/images/kansas-city-custom-wood-deck-railing-project.jpg',
  '/services': '/images/optimized/kansas-city-screened-porch-wood-trim-black-screen.jpg',
  '/projects': '/images/optimized/kansas-city-covered-composite-deck-pool-view.jpg',
  '/guides': '/images/kansas-city-composite-deck-board-railing-detail.jpg',
  '/service-areas': '/images/overland-park-composite-deck.jpg',
  '/about': '/images/kansas-city-large-backyard-deck-build.jpg',
  '/contact': '/images/optimized/kansas-city-elevated-composite-deck-cable-railing-stairs.jpg',
}

/** Light or dark for a computed CSS color; null when it is mostly transparent. */
function toneOfColor(color: string): 'dark' | 'light' | null {
  const numbers = color.match(/-?[\d.]+%?/g)?.map((value) => (value.endsWith('%') ? Number.parseFloat(value) / 100 : Number(value)))
  if (!numbers || numbers.length < 3) return null
  const alpha = color.includes('/') || numbers.length > 3 ? numbers[3] ?? 1 : 1
  if (alpha < 0.5) return null
  if (color.startsWith('rgb')) {
    const [r, g, b] = numbers
    return 0.2126 * r + 0.7152 * g + 0.0722 * b < 128 ? 'dark' : 'light'
  }
  // oklab()/oklch(): first channel is perceptual lightness (0–1)
  if (color.startsWith('ok')) return numbers[0] < 0.6 ? 'dark' : 'light'
  // color(srgb r g b)
  const [r, g, b] = numbers
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 0.5 ? 'dark' : 'light'
}

/** Reads what sits beneath the header: an explicit data-header-tone wins, then photos, then the first opaque background. */
function readToneUnderHeader(): 'dark' | 'light' {
  const stack = document.elementsFromPoint(window.innerWidth / 2, 36)
  for (const element of stack) {
    if (element.closest('header, #site-menu, .cursor-dot')) continue
    const explicit = element.closest<HTMLElement>('[data-header-tone]')
    if (explicit) return explicit.dataset.headerTone === 'light' ? 'light' : 'dark'
    let node: Element | null = element
    while (node) {
      if (node.tagName === 'IMG' || node.tagName === 'VIDEO') return 'dark'
      const tone = toneOfColor(getComputedStyle(node).backgroundColor)
      if (tone) return tone
      node = node.parentElement
    }
  }
  return 'light'
}

export function SiteHeader(_props: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [tone, setTone] = useState<'dark' | 'light'>('dark')
  const [path, setPath] = useState('')
  const [preview, setPreview] = useState('/')
  const [showBar, setShowBar] = useState(false)
  usePageHydrated()

  useEffect(() => {
    setPath(window.location.pathname)
    let lastY = window.scrollY
    let frame = 0
    const read = () => {
      frame = 0
      const y = window.scrollY
      setScrolled(y > 40)
      setHidden(y > 320 && y > lastY + 4)
      if (y < lastY - 4 || y < 320) setHidden(false)
      lastY = y

      setTone(readToneUnderHeader())

      // Phone call/quote bar: after the first screen, hidden while a form or the footer is in view.
      const vh = window.innerHeight
      const inView = (el: Element | null) => {
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top < vh && rect.bottom > 0
      }
      const formVisible = [...document.querySelectorAll('main form')].some(inView)
      setShowBar(y > vh * 0.75 && !formVisible && !inView(document.querySelector('footer')))
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(read)
    }
    read()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const isActive = (href: string) => path === href || path.startsWith(`${href}/`)
  const onDark = tone === 'dark' || menuOpen
  const text = onDark ? 'text-bone' : 'text-ink'
  const bar = scrolled && !menuOpen ? (onDark ? 'bg-night/70 backdrop-blur-xl border-bone/10' : 'bg-bone/75 backdrop-blur-xl border-ink/10') : 'border-transparent bg-transparent'
  const menuLinks = [{ label: 'Home', href: '/' }, ...navItems]

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[transform,background-color,border-color,color] duration-700 ease-[var(--ease-out-expo)] ${text} ${bar} ${
          hidden && !menuOpen ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="shell flex h-18 items-center justify-between gap-6 lg:h-20">
          <a href="/" className="relative z-10 flex min-h-11 shrink-0 items-center" aria-label="DecksRXKC home">
            <Wordmark className="text-[1.5rem] sm:text-[1.7rem]" />
          </a>

          <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                className="group relative block overflow-hidden text-[0.8rem] font-medium tracking-[0.08em] uppercase [font-stretch:85%]"
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                <span className={`block transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-full ${isActive(item.href) ? (onDark ? 'text-soft-beige' : 'text-wood') : ''}`}>{item.label}</span>
                <span className={`absolute inset-0 block translate-y-full transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-y-0 ${onDark ? 'text-soft-beige' : 'text-wood'}`} aria-hidden="true">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="relative z-10 flex items-center gap-3">
            <a
              href={`tel:${business.phone}`}
              className={`mono hidden text-[0.74rem] tracking-[0.08em] transition-opacity hover:opacity-100 lg:block ${onDark ? 'opacity-70' : 'opacity-70'}`}
              onClick={() => trackEvent('click_to_call', { page_path: path || '/' })}
            >
              {business.phoneDisplay}
            </a>
            <a
              href="/contact"
              className="group/btn relative hidden min-h-11 items-center gap-3 overflow-hidden bg-soft-beige pr-1.5 pl-4 text-[0.76rem] font-semibold tracking-[0.1em] text-night uppercase [font-stretch:80%] sm:inline-flex"
              onClick={() => trackEvent('quote_cta_click', { destination: '/contact' })}
            >
              <span className="btn-fill bg-bone" aria-hidden="true" />
              <span className="relative">Free quote</span>
              <span className="relative flex h-8 w-8 items-center justify-center bg-night text-bone">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover/btn:rotate-45" aria-hidden="true" />
              </span>
            </a>
            <button
              type="button"
              className={`group flex h-11 items-center gap-3 border px-4 text-[0.76rem] font-semibold tracking-[0.1em] uppercase [font-stretch:80%] transition-colors xl:hidden ${onDark ? 'border-bone/25 hover:border-bone/60' : 'border-ink/20 hover:border-ink/60'}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="site-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="hidden sm:inline">{menuOpen ? 'Close' : 'Menu'}</span>
              <span className="relative block h-2.5 w-5" aria-hidden="true">
                <span className={`absolute left-0 h-px w-5 bg-current transition-all duration-500 ${menuOpen ? 'top-1.25 rotate-45' : 'top-0'}`} />
                <span className={`absolute left-0 h-px bg-current transition-all duration-500 ${menuOpen ? 'top-1.25 w-5 -rotate-45' : 'top-2.5 w-3'}`} />
              </span>
            </button>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden" aria-hidden="true">
          <div data-page-progress className="h-px w-full origin-left scale-x-0 bg-soft-beige" />
        </div>
      </header>

      <div
        id="site-menu"
        className={`fixed inset-0 z-40 bg-night text-bone transition-[clip-path] duration-1000 ease-[var(--ease-in-out-quart)] xl:hidden ${
          menuOpen ? '[clip-path:inset(0_0_0_0)]' : 'pointer-events-none [clip-path:inset(0_0_100%_0)]'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="blueprint absolute inset-0 opacity-60" />
        <div className="shell relative grid h-full gap-10 overflow-y-auto pt-28 pb-8 md:grid-cols-[1.3fr_1fr]">
          <nav aria-label="Mobile navigation" className="flex flex-col justify-center">
            <ul>
              {menuLinks.map((item, index) => (
                <li key={item.href} className="overflow-hidden border-b border-bone/10">
                  <a
                    href={item.href}
                    tabIndex={menuOpen ? 0 : -1}
                    className={`group flex items-baseline gap-5 py-2.5 transition-transform duration-800 ease-[var(--ease-out-expo)] ${menuOpen ? 'translate-y-0' : 'translate-y-full'}`}
                    style={{ transitionDelay: menuOpen ? `${150 + index * 55}ms` : '0ms' }}
                    onClick={() => setMenuOpen(false)}
                    onPointerEnter={() => setPreview(item.href)}
                    onFocus={() => setPreview(item.href)}
                  >
                    <span className={`font-display text-[clamp(2.4rem,min(10vw,8.5svh),5.2rem)] leading-[0.92] transition-colors duration-300 group-hover:text-soft-beige ${isActive(item.href) && item.href !== '/' ? 'text-soft-beige' : ''}`}>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className={`hidden flex-col justify-center transition-opacity delay-500 duration-700 md:flex ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative aspect-[4/5] overflow-hidden bg-graphite">
              {Object.entries(menuImages).map(([href, src]) => (
                <img
                  key={href}
                  className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-1000 ease-[var(--ease-out-expo)] ${preview === href ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
                  {...getResponsiveImageProps(src, '40vw')}
                  alt=""
                  width="800"
                  height="1000"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </div>

          <div className={`flex flex-col gap-6 border-t border-bone/10 pt-6 transition-opacity delay-500 duration-700 sm:flex-row sm:items-end sm:justify-between md:col-span-2 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}>
            <p className="mono max-w-[18rem] text-[0.68rem] leading-5 uppercase tracking-[0.14em] text-bone/50">Custom decks, covered &amp; screened rooms · Kansas City, KS + MO</p>
            <div className="flex flex-col gap-2 sm:items-end">
              <a className="font-display text-4xl" href={`tel:${business.phone}`} tabIndex={menuOpen ? 0 : -1}>{business.phoneDisplay}</a>
              <a className="mono text-[0.7rem] uppercase tracking-[0.14em] text-soft-beige" href="/contact" tabIndex={menuOpen ? 0 : -1} onClick={() => setMenuOpen(false)}>Request a free quote →</a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-bone/10 bg-night/92 px-3 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl transition-transform duration-500 ease-[var(--ease-out-expo)] lg:hidden ${
          showBar && !menuOpen ? 'translate-y-0' : 'pointer-events-none translate-y-full'
        }`}
        aria-hidden={!showBar || menuOpen}
      >
        <div className="grid grid-cols-[auto_1fr] gap-2">
          <a
            href={`tel:${business.phone}`}
            tabIndex={showBar ? 0 : -1}
            className="flex min-h-12 items-center gap-2 border border-bone/20 px-4 text-[0.78rem] font-semibold tracking-[0.1em] text-bone uppercase [font-stretch:80%]"
            onClick={() => trackEvent('click_to_call', { page_path: path || '/', placement: 'mobile_bar' })}
          >
            <Phone className="h-4 w-4 text-soft-beige" aria-hidden="true" />
            Call
          </a>
          <a
            href="/contact"
            tabIndex={showBar ? 0 : -1}
            className="flex min-h-12 items-center justify-between gap-3 bg-soft-beige pr-1.5 pl-4 text-[0.78rem] font-semibold tracking-[0.1em] text-night uppercase [font-stretch:80%]"
            onClick={() => trackEvent('quote_cta_click', { destination: '/contact', placement: 'mobile_bar' })}
          >
            Get a free quote
            <span className="flex h-9 w-9 items-center justify-center bg-night text-bone">
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </>
  )
}
