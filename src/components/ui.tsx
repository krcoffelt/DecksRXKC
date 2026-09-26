import { ArrowUpRight, Plus } from 'lucide-react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { business } from '../data/business'
import { trackEvent } from '../lib/analytics'
import { getResponsiveImageProps } from '../lib/images'

/* -------------------------------------------------------------------------- */
/* Buttons                                                                    */
/* -------------------------------------------------------------------------- */

type ButtonLinkProps = ComponentPropsWithoutRef<'a'> & {
  variant?: 'dark' | 'light' | 'outline' | 'ghost' | 'bronze'
  children: ReactNode
  showArrow?: boolean
}

function trackCta(href: unknown) {
  if (typeof href !== 'string') return
  if (href.startsWith('tel:')) {
    trackEvent('click_to_call', { destination: href })
  } else if (href.includes('contact') || href.includes('#contact')) {
    trackEvent('quote_cta_click', { destination: href })
  }
}

export function ButtonLink({
  variant = 'dark',
  children,
  className = '',
  showArrow = true,
  onClick,
  ...props
}: ButtonLinkProps) {
  const variants = {
    dark: 'bg-night text-bone hover:text-night',
    light: 'bg-bone text-night',
    bronze: 'bg-soft-beige text-night',
    outline: 'border border-current/30 bg-transparent text-current hover:border-current',
    ghost: 'bg-transparent text-current px-0! min-h-0!',
  }
  const fill = {
    dark: 'bg-soft-beige',
    light: 'bg-soft-beige',
    bronze: 'bg-bone',
    outline: 'bg-current/10',
    ghost: 'hidden',
  }

  return (
    <a
      className={`group/btn relative inline-flex min-h-14 items-center justify-between gap-6 overflow-hidden py-2 pr-2 pl-5 text-[0.8rem] font-semibold tracking-[0.08em] uppercase [font-stretch:80%] transition-colors duration-500 ${showArrow ? '' : 'pr-5!'} ${variants[variant]} ${className}`}
      onClick={(event) => {
        trackCta(props.href)
        onClick?.(event)
      }}
      {...props}
    >
      <span className={`btn-fill ${fill[variant]}`} aria-hidden="true" />
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover/btn:-translate-y-full">{children}</span>
        <span className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover/btn:translate-y-0" aria-hidden="true">{children}</span>
      </span>
      {showArrow ? (
        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden border border-current/25">
          <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover/btn:translate-x-6 group-hover/btn:-translate-y-6" aria-hidden="true" />
          <ArrowUpRight className="absolute h-4 w-4 -translate-x-6 translate-y-6 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0" aria-hidden="true" />
        </span>
      ) : null}
    </a>
  )
}

/** Round, magnetic call-to-action used for the big closing moments. */
export function CircleLink({ href, children, className = '', tone = 'copper' }: Readonly<{ href: string; children: ReactNode; className?: string; tone?: 'copper' | 'bone' }>) {
  return (
    <a
      href={href}
      data-magnetic
      onClick={() => trackCta(href)}
      className={`group relative flex aspect-square w-40 shrink-0 items-center justify-center overflow-hidden rounded-full text-center text-[0.78rem] font-semibold tracking-[0.1em] uppercase [font-stretch:80%] sm:w-48 ${tone === 'copper' ? 'bg-soft-beige text-night' : 'bg-bone text-night'} ${className}`}
    >
      <span className="absolute inset-0 origin-bottom scale-y-0 rounded-full bg-night transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-y-100" aria-hidden="true" />
      <span className="relative flex flex-col items-center gap-3 transition-colors duration-500 group-hover:text-bone">
        <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
        {children}
      </span>
    </a>
  )
}

/* -------------------------------------------------------------------------- */
/* Typography helpers                                                         */
/* -------------------------------------------------------------------------- */

type SectionIntroProps = {
  title: ReactNode
  copy?: string
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  as?: 'h1' | 'h2'
  size?: 'md' | 'lg'
}

export function SectionIntro({ title, copy, tone = 'light', align = 'left', as: Heading = 'h2', size = 'md' }: SectionIntroProps) {
  const isDark = tone === 'dark'

  return (
    <div className={align === 'center' ? 'mx-auto max-w-5xl text-center' : 'max-w-5xl'}>
      <Heading
        className={`${size === 'lg' ? 'display-lg' : 'display-md'} ${isDark ? 'text-bone' : 'text-ink'}`}
        data-reveal="up"
      >
        {title}
      </Heading>
      {copy ? (
        <p
          className={`lede mt-7 ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-2xl'} ${isDark ? 'text-bone/64' : 'text-ink/64'}`}
          data-reveal="up"
          style={{ ['--d' as string]: 1 }}
        >
          {copy}
        </p>
      ) : null}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Breadcrumbs + page hero                                                    */
/* -------------------------------------------------------------------------- */

export type Crumb = { label: string; href?: string }

export function Breadcrumbs({ items, tone = 'dark' }: Readonly<{ items: Crumb[]; tone?: 'light' | 'dark' }>) {
  const muted = tone === 'dark' ? 'text-bone/50 hover:text-bone' : 'text-ink/50 hover:text-ink'
  const current = tone === 'dark' ? 'text-soft-beige' : 'text-wood'
  return (
    <nav aria-label="Breadcrumb" className="mono flex flex-wrap items-center gap-2 text-[0.68rem] uppercase tracking-[0.14em]">
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-2">
          {index > 0 ? <span aria-hidden="true" className={tone === 'dark' ? 'text-bone/30' : 'text-ink/30'}>/</span> : null}
          {item.href ? (
            <a className={`transition-colors ${muted}`} href={item.href}>{item.label}</a>
          ) : (
            <span aria-current="page" className={current}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

type PageHeroProps = {
  title: ReactNode
  intro?: ReactNode
  image?: string
  imageAlt?: string
  breadcrumbs?: Crumb[]
  actions?: ReactNode
  meta?: Array<{ label: string; value: ReactNode }>
  children?: ReactNode
  size?: 'tall' | 'compact'
}

/** Dark hero used by every inner page: oversized H1, blueprint grid, and a wide photo window. Renders the page's single H1. */
export function PageHero({ title, intro, image, imageAlt = '', breadcrumbs, actions, meta, children, size = 'tall' }: PageHeroProps) {
  return (
    <section className="grain relative isolate overflow-hidden bg-night text-bone" data-header-tone="dark">
      <div className="blueprint pointer-events-none absolute inset-0 -z-10 [mask-image:linear-gradient(180deg,black,transparent_85%)]" aria-hidden="true" />

      <div className={`shell ${size === 'tall' ? 'pt-36 lg:pt-44' : 'pt-32 lg:pt-40'} pb-12 lg:pb-16`}>
        {breadcrumbs ? <div className="hero-fade" style={{ ['--i' as string]: 0 }}><Breadcrumbs items={breadcrumbs} /></div> : null}

        <h1 className="display-lg hero-fade mt-10 max-w-[18ch] text-bone lg:mt-14" style={{ ['--i' as string]: 1 }}>{title}</h1>

        <div className="hero-rule mt-12 h-px w-full bg-bone/15 lg:mt-16" aria-hidden="true" />

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-start lg:gap-16">
          {intro ? <div className="lede hero-fade max-w-2xl text-bone/72" style={{ ['--i' as string]: 2 }}>{intro}</div> : <span />}
          {actions ? <div className="hero-fade flex flex-wrap gap-3 lg:justify-end" style={{ ['--i' as string]: 3 }}>{actions}</div> : null}
        </div>

        {meta ? (
          <dl className="hero-fade mt-12 grid grid-cols-2 border-t hairline-light sm:grid-cols-4" style={{ ['--i' as string]: 4 }}>
            {meta.map((item, index) => (
              <div key={item.label} className={`border-b hairline-light py-5 pr-4 sm:border-b-0 ${index > 0 ? 'sm:border-l sm:pl-5' : ''} ${index % 2 === 1 ? 'border-l pl-4 sm:pl-5' : ''}`}>
                <dt className="mono text-[0.66rem] uppercase tracking-[0.14em] text-bone/45">{item.label}</dt>
                <dd className="mt-2 text-[0.95rem] text-bone/88">{item.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        {children}
      </div>

      {image ? (
        <div className="relative h-[62svh] overflow-hidden lg:h-[78svh]" data-reveal="clip">
          <img
            data-parallax="0.12"
            className="absolute inset-x-0 -top-[12%] h-[124%] w-full object-cover"
            {...getResponsiveImageProps(image, '100vw')}
            alt={imageAlt}
            width="1600"
            height="1200"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(17_16_14/0.35),transparent_30%,transparent_70%,rgb(17_16_14/0.5))]" />
          <p className="mono absolute right-5 bottom-5 text-[0.66rem] uppercase tracking-[0.14em] text-bone/70 sm:right-8 lg:right-12">DecksRXKC · Kansas City</p>
        </div>
      ) : null}
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/* Content blocks                                                             */
/* -------------------------------------------------------------------------- */

export function FaqList({ items, tone = 'light' }: Readonly<{ items: Array<{ question: string; answer: string }>; tone?: 'light' | 'dark' }>) {
  const dark = tone === 'dark'
  return (
    <div className={`border-t ${dark ? 'hairline-light' : 'hairline'}`}>
      {items.map((faq, index) => (
        <details key={faq.question} className={`faq group border-b ${dark ? 'hairline-light' : 'hairline'}`} open={index === 0} data-reveal="up" style={{ ['--d' as string]: index }}>
          <summary className="flex items-start justify-between gap-6 py-7">
            <h3 className={`text-xl leading-snug font-medium tracking-[-0.01em] sm:text-2xl ${dark ? 'text-bone' : 'text-ink'}`}>{faq.question}</h3>
            <span className={`faq-icon mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border ${dark ? 'border-bone/20 text-bone [--faq-contrast:var(--color-night)]' : 'border-ink/15 text-ink'}`}>
              <Plus className="h-4 w-4" aria-hidden="true" />
            </span>
          </summary>
          <p className={`faq-body max-w-3xl pb-8 text-base leading-7 sm:text-lg sm:leading-8 ${dark ? 'text-bone/64' : 'text-ink/64'}`}>{faq.answer}</p>
        </details>
      ))}
    </div>
  )
}

export function NumberedList({ items, tone = 'light' }: Readonly<{ items: Array<{ title: string; copy: string }>; tone?: 'light' | 'dark' }>) {
  const dark = tone === 'dark'
  return (
    <ol className={`border-t ${dark ? 'hairline-light' : 'hairline'}`}>
      {items.map((step, index) => (
        <li key={step.title} className={`group grid gap-3 border-b py-9 sm:grid-cols-[0.9fr_1.1fr] sm:gap-8 ${dark ? 'hairline-light' : 'hairline'}`} data-reveal="up" style={{ ['--d' as string]: index }}>
          <h3 className={`font-display text-3xl leading-[0.95] transition-colors duration-500 sm:text-4xl ${dark ? 'text-bone group-hover:text-soft-beige' : 'text-ink group-hover:text-wood'}`}>{step.title}</h3>
          <p className={`text-base leading-7 ${dark ? 'text-bone/62' : 'text-ink/64'}`}>{step.copy}</p>
        </li>
      ))}
    </ol>
  )
}

export function ArrowRow({ href, children, meta, tone = 'light' }: Readonly<{ href: string; children: ReactNode; meta?: ReactNode; tone?: 'light' | 'dark' }>) {
  const dark = tone === 'dark'
  return (
    <a href={href} className={`group relative flex items-center justify-between gap-6 overflow-hidden border-b py-6 transition-colors duration-500 ${dark ? 'hairline-light text-bone hover:text-soft-beige' : 'hairline text-ink hover:text-wood'}`}>
      <span className="flex flex-col gap-1">
        {meta ? <span className={`mono text-[0.66rem] uppercase tracking-[0.14em] ${dark ? 'text-bone/40' : 'text-ink/40'}`}>{meta}</span> : null}
        <span className="text-xl font-medium tracking-[-0.01em] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:translate-x-2 sm:text-2xl">{children}</span>
      </span>
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center border transition-all duration-500 ${dark ? 'border-bone/20 group-hover:border-soft-beige group-hover:bg-soft-beige group-hover:text-night' : 'border-ink/15 group-hover:border-ink group-hover:bg-ink group-hover:text-bone'}`}>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
      </span>
    </a>
  )
}

/** Closing call-to-action used across inner pages. */
export function CtaBand({ title, copy, image = '/images/optimized/kansas-city-covered-composite-deck-pool-view.jpg' }: Readonly<{ title: ReactNode; copy?: string; image?: string }>) {
  return (
    <section className="grain relative isolate overflow-hidden bg-night text-bone" data-header-tone="dark">
      <div className="absolute inset-0 -z-10">
        <img data-parallax="0.12" className="h-[130%] w-full -translate-y-[10%] object-cover opacity-45" {...getResponsiveImageProps(image, '100vw')} alt="" width="1600" height="1200" loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(17_16_14/0.9),rgb(17_16_14/0.5)_50%,rgb(17_16_14/0.92))]" />
      </div>
      <div className="shell py-28 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="display-lg max-w-[14ch]" data-reveal="up">{title}</h2>
            {copy ? <p className="lede mt-8 max-w-xl text-bone/68" data-reveal="up" style={{ ['--d' as string]: 1 }}>{copy}</p> : null}
            <div className="mt-10 flex flex-wrap items-center gap-3" data-reveal="up" style={{ ['--d' as string]: 2 }}>
              <ButtonLink href="/contact" variant="bronze">Request a free quote</ButtonLink>
              <ButtonLink href={`tel:${business.phone}`} variant="outline">Call {business.phoneDisplay}</ButtonLink>
            </div>
          </div>
          <div className="hidden lg:block" data-reveal="fade" style={{ ['--d' as string]: 3 }}>
            <CircleLink href="/contact">Start your<br />quote</CircleLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Figure({ src, alt, caption, className = '', aspect = 'aspect-[4/3]', sizes = '(min-width: 1024px) 50vw, 100vw', loading = 'lazy' }: Readonly<{ src: string; alt: string; caption?: string; className?: string; aspect?: string; sizes?: string; loading?: 'lazy' | 'eager' }>) {
  return (
    <figure className={className}>
      <div className={`frame ${aspect} bg-sand`} data-reveal="clip">
        <img className="h-full w-full object-cover" {...getResponsiveImageProps(src, sizes)} alt={alt} width="1200" height="900" loading={loading} decoding="async" />
      </div>
      {caption ? (
        <figcaption className="mt-4 border-t hairline pt-4 text-sm leading-6 text-ink/60">{caption}</figcaption>
      ) : null}
    </figure>
  )
}

/* -------------------------------------------------------------------------- */
/* Brand marks                                                                */
/* -------------------------------------------------------------------------- */

/** Typographic wordmark echoing the DecksRXKC logo's white + copper split. */
export function Wordmark({ className = '' }: Readonly<{ className?: string }>) {
  return (
    <span className={`font-display inline-flex items-baseline text-[1.65rem] leading-none font-bold! tracking-[0.01em] ${className}`}>
      Decks<span className="text-soft-beige">RX</span>KC
    </span>
  )
}

export function GoogleGLogo({ className = '' }: Readonly<{ className?: string }>) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-label="Google" role="img">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" />
    </svg>
  )
}

export function RatingStars({ className = '' }: Readonly<{ className?: string }>) {
  return (
    <span className={`inline-flex items-center gap-0.5 text-soft-beige ${className}`} aria-label="5 star rating" role="img">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden="true">★</span>
      ))}
    </span>
  )
}
