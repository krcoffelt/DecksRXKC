import { useEffect, useRef } from 'react'

/**
 * One lightweight controller for every scroll/pointer effect on the site.
 * Components opt in with data attributes, so pages stay server-rendered and
 * fully readable without JavaScript.
 *
 *  data-reveal="up|fade|clip|clip-x|rule|lines" – animate in once when entering view (CSS in styles.css)
 *  data-parallax="0.12"               – translate on scroll relative to viewport centre
 *  data-hero-media                    – slow zoom + drift while the hero scrolls away
 *  data-progress                      – sets --progress (0–1) while a tall section scrolls through a pinned viewport
 *  data-hscroll / data-hscroll-track  – pinned horizontal gallery on large screens
 *  data-scrub                         – words (.scrub-word) light up as the block scrolls past
 *  data-count="18"                    – count up when visible
 *  data-velocity                      – marquee track that speeds up and skews with scroll velocity
 *  data-magnetic                      – element drifts toward the pointer
 *  data-cursor="view"                 – custom cursor grows with a label over this element
 */
const HYDRATED_EVENT = 'drx:page-hydrated'

/**
 * Called from a component inside each page route once it has hydrated. Route
 * components load lazily, so the controller waits for this before touching
 * server-rendered markup (otherwise React reports hydration mismatches).
 */
export function usePageHydrated() {
  useEffect(() => {
    const flagged = window as Window & { __drxHydrated?: boolean }
    flagged.__drxHydrated = true
    window.dispatchEvent(new Event(HYDRATED_EVENT))
  }, [])
}

export function MotionController() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let stop: (() => void) | undefined
    const begin = () => {
      window.removeEventListener(HYDRATED_EVENT, begin)
      if (!stop) stop = startMotion(cursorRef.current)
    }
    if ((window as Window & { __drxHydrated?: boolean }).__drxHydrated) begin()
    else window.addEventListener(HYDRATED_EVENT, begin)
    return () => {
      window.removeEventListener(HYDRATED_EVENT, begin)
      stop?.()
    }
  }, [])

  return (
    <div ref={cursorRef} className="cursor-dot" aria-hidden="true">
      <span>View</span>
    </div>
  )
}

function startMotion(cursor: HTMLDivElement | null): () => void {
  {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cleanups: Array<() => void> = []

    // ---- Reveal on enter ---------------------------------------------------
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            revealObserver.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    const countObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          countObserver.unobserve(el)
          const target = Number(el.dataset.count)
          const decimals = Number(el.dataset.decimals ?? 0)
          const pad = Number(el.dataset.pad ?? 0)
          if (reduceMotion || !Number.isFinite(target)) continue
          const start = performance.now()
          const duration = 1800
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration)
            const eased = 1 - Math.pow(1 - t, 4)
            el.textContent = (target * eased).toFixed(decimals).padStart(pad, '0')
            if (t < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )

    const scanned = new WeakSet<Element>()
    const scan = () => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        if (scanned.has(el)) return
        scanned.add(el)
        if (reduceMotion) el.classList.add('is-in')
        else revealObserver.observe(el)
      })
      document.querySelectorAll('[data-count]').forEach((el) => {
        if (scanned.has(el)) return
        scanned.add(el)
        countObserver.observe(el)
      })
    }
    scan()
    const mutationObserver = new MutationObserver(() => scan())
    mutationObserver.observe(document.body, { childList: true, subtree: true })
    cleanups.push(() => {
      revealObserver.disconnect()
      countObserver.disconnect()
      mutationObserver.disconnect()
    })

    // Failsafe: never leave content hidden if an observer misses it.
    const failsafe = window.setTimeout(() => {
      document.querySelectorAll('[data-reveal]').forEach((el) => {
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) el.classList.add('is-in')
      })
    }, 2500)
    cleanups.push(() => window.clearTimeout(failsafe))

    if (reduceMotion) {
      document.querySelectorAll<HTMLElement>('[data-progress]').forEach((el) => el.style.setProperty('--progress', '1'))
      return () => cleanups.forEach((fn) => fn())
    }

    // ---- Smooth scrolling ---------------------------------------------------
    let velocity = 0
    let destroyed = false
    let lenisInstance: { raf: (time: number) => void; destroy: () => void; on: (event: 'scroll', cb: (lenis: { velocity: number }) => void) => void; scrollTo: (target: string | HTMLElement, options?: { offset?: number }) => void } | null = null
    let lenisFrame = 0

    import('lenis').then(({ default: Lenis }) => {
      if (destroyed) return
      const lenis = new Lenis({ duration: 1.15, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
      lenisInstance = lenis as unknown as typeof lenisInstance
      lenis.on('scroll', (instance: { velocity: number }) => {
        velocity = instance.velocity
      })
      const raf = (time: number) => {
        lenis.raf(time)
        lenisFrame = requestAnimationFrame(raf)
      }
      lenisFrame = requestAnimationFrame(raf)
    })

    // In-page anchors glide with Lenis instead of jumping.
    const onAnchorClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest?.('a[href^="#"]') as HTMLAnchorElement | null
      if (!link || !lenisInstance) return
      const id = link.getAttribute('href')
      if (!id || id === '#') return
      const target = document.querySelector<HTMLElement>(id)
      if (!target) return
      event.preventDefault()
      lenisInstance.scrollTo(target, { offset: -24 })
      history.replaceState(null, '', id)
    }
    document.addEventListener('click', onAnchorClick)

    cleanups.push(() => {
      destroyed = true
      document.removeEventListener('click', onAnchorClick)
      if (lenisFrame) cancelAnimationFrame(lenisFrame)
      lenisInstance?.destroy()
    })

    // ---- Scroll-linked effects --------------------------------------------
    const desktop = window.matchMedia('(min-width: 1024px)')
    let frame = 0

    const layoutHScroll = () => {
      document.querySelectorAll<HTMLElement>('[data-hscroll]').forEach((section) => {
        const track = section.querySelector<HTMLElement>('[data-hscroll-track]')
        if (!track) return
        if (desktop.matches) {
          const distance = Math.max(0, track.scrollWidth - window.innerWidth)
          section.style.height = `${distance + window.innerHeight}px`
        } else {
          section.style.height = ''
          track.style.transform = ''
        }
      })
    }

    const update = () => {
      frame = 0
      const vh = window.innerHeight

      document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
        const speed = Number(el.dataset.parallax) || 0.1
        const rect = el.getBoundingClientRect()
        if (rect.bottom < -200 || rect.top > vh + 200) return
        const offset = (rect.top + rect.height / 2 - vh / 2) * -speed
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`
      })

      document.querySelectorAll<HTMLElement>('[data-hero-media]').forEach((el) => {
        const host = el.parentElement
        if (!host) return
        const rect = host.getBoundingClientRect()
        const progress = Math.min(1, Math.max(0, -rect.top / rect.height))
        el.style.transform = `translate3d(0, ${(progress * 18).toFixed(2)}%, 0) scale(${(1 + progress * 0.08).toFixed(4)})`
      })

      document.querySelectorAll<HTMLElement>('[data-progress]').forEach((section) => {
        const rect = section.getBoundingClientRect()
        const mode = section.dataset.progress
        let progress: number
        if (mode === 'enter') {
          // 0 when the top enters the bottom of the viewport, 1 when it reaches the top
          progress = (vh - rect.top) / vh
        } else {
          const travel = rect.height - vh
          progress = travel > 0 ? -rect.top / travel : rect.top < 0 ? 1 : 0
        }
        section.style.setProperty('--progress', Math.min(1, Math.max(0, progress)).toFixed(4))
      })

      if (desktop.matches) {
        document.querySelectorAll<HTMLElement>('[data-hscroll]').forEach((section) => {
          const track = section.querySelector<HTMLElement>('[data-hscroll-track]')
          if (!track) return
          const rect = section.getBoundingClientRect()
          const travel = rect.height - vh
          const progress = travel > 0 ? Math.min(1, Math.max(0, -rect.top / travel)) : 0
          const distance = Math.max(0, track.scrollWidth - window.innerWidth)
          track.style.transform = `translate3d(${(-progress * distance).toFixed(1)}px, 0, 0)`
          section.style.setProperty('--progress', progress.toFixed(4))
          const bar = section.querySelector<HTMLElement>('[data-hscroll-progress]')
          if (bar) bar.style.transform = `scaleX(${progress.toFixed(4)})`
        })
      }

      const pageProgress = document.documentElement.scrollHeight - vh
      document.querySelectorAll<HTMLElement>('[data-page-progress]').forEach((bar) => {
        bar.style.transform = `scaleX(${pageProgress > 0 ? Math.min(1, window.scrollY / pageProgress).toFixed(4) : 0})`
      })

      document.querySelectorAll<HTMLElement>('[data-scrub]').forEach((block) => {
        const words = block.querySelectorAll<HTMLElement>('.scrub-word')
        if (words.length === 0) return
        const rect = block.getBoundingClientRect()
        const start = vh * 0.85
        const end = vh * 0.3
        const progress = Math.min(1, Math.max(0, (start - rect.top) / (start - end + rect.height * 0.6)))
        const lit = Math.round(progress * words.length)
        words.forEach((word, index) => {
          word.style.opacity = index < lit ? '1' : '0.14'
        })
      })
    }

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    const onResize = () => {
      layoutHScroll()
      requestUpdate()
    }

    layoutHScroll()
    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', onResize)
    window.addEventListener('load', onResize)
    cleanups.push(() => {
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('load', onResize)
      if (frame) cancelAnimationFrame(frame)
    })

    // ---- Velocity marquees ---------------------------------------------------
    // Tracks drift constantly and surge (and lean) with scroll speed.
    let marqueeFrame = 0
    const marquees = new Map<HTMLElement, number>()
    let smoothVelocity = 0
    let lastTime = performance.now()
    const marqueeLoop = (now: number) => {
      const dt = Math.min(64, now - lastTime)
      lastTime = now
      smoothVelocity += (velocity - smoothVelocity) * 0.1
      velocity *= 0.9
      document.querySelectorAll<HTMLElement>('[data-velocity]').forEach((track) => {
        const direction = track.dataset.velocity === 'reverse' ? -1 : 1
        const half = track.scrollWidth / 2
        if (!half) return
        let x = marquees.get(track) ?? 0
        x -= direction * (0.05 + Math.abs(smoothVelocity) * 0.06) * dt
        if (x <= -half) x += half
        if (x > 0) x -= half
        marquees.set(track, x)
        const skew = Math.max(-8, Math.min(8, smoothVelocity * -0.5))
        track.style.transform = `translate3d(${x.toFixed(1)}px, 0, 0) skewX(${skew.toFixed(2)}deg)`
      })
      marqueeFrame = requestAnimationFrame(marqueeLoop)
    }
    marqueeFrame = requestAnimationFrame(marqueeLoop)
    cleanups.push(() => cancelAnimationFrame(marqueeFrame))

    // ---- Custom cursor + magnetic elements ---------------------------------
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (cursor && finePointer) {
      let x = window.innerWidth / 2
      let y = window.innerHeight / 2
      let cx = x
      let cy = y
      let raf = 0
      let magnet: HTMLElement | null = null
      const loop = () => {
        cx += (x - cx) * 0.2
        cy += (y - cy) * 0.2
        cursor.style.transform = `translate3d(${cx.toFixed(1)}px, ${cy.toFixed(1)}px, 0) translate(-50%, -50%)`
        raf = requestAnimationFrame(loop)
      }
      const releaseMagnet = () => {
        if (magnet) magnet.style.transform = ''
        magnet = null
      }
      const onMove = (event: PointerEvent) => {
        x = event.clientX
        y = event.clientY
        const element = event.target as Element | null
        const target = element?.closest?.('[data-cursor]') as HTMLElement | null
        cursor.classList.toggle('is-view', Boolean(target))
        const label = cursor.querySelector('span')
        if (label && target) label.textContent = target.dataset.cursor ?? 'View'
        cursor.classList.add('is-visible')

        const nextMagnet = element?.closest?.('[data-magnetic]') as HTMLElement | null
        if (nextMagnet !== magnet) releaseMagnet()
        if (nextMagnet) {
          magnet = nextMagnet
          const rect = nextMagnet.getBoundingClientRect()
          const dx = (x - (rect.left + rect.width / 2)) * 0.25
          const dy = (y - (rect.top + rect.height / 2)) * 0.35
          nextMagnet.style.transition = 'transform 0.5s var(--ease-out-expo)'
          nextMagnet.style.transform = `translate3d(${dx.toFixed(1)}px, ${dy.toFixed(1)}px, 0)`
        }
      }
      const onLeave = () => {
        cursor.classList.remove('is-visible')
        releaseMagnet()
      }
      window.addEventListener('pointermove', onMove, { passive: true })
      document.documentElement.addEventListener('pointerleave', onLeave)
      raf = requestAnimationFrame(loop)
      cleanups.push(() => {
        window.removeEventListener('pointermove', onMove)
        document.documentElement.removeEventListener('pointerleave', onLeave)
        cancelAnimationFrame(raf)
      })
    }

    return () => cleanups.forEach((fn) => fn())
  }
}

/** Splits a string into masked lines for the "lines" reveal. */
export function RevealLines({ lines, className = '', as: Tag = 'span' }: Readonly<{ lines: string[]; className?: string; as?: 'span' | 'div' }>) {
  return (
    <Tag className={className}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className="line-mask" style={{ ['--i' as string]: index }}>
          <span>{line}</span>
        </span>
      ))}
    </Tag>
  )
}
