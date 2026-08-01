import { ArrowUpRight } from 'lucide-react'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { trackEvent } from '../lib/analytics'

type ButtonLinkProps = ComponentPropsWithoutRef<'a'> & {
  variant?: 'dark' | 'light' | 'outline' | 'ghost'
  children: ReactNode
  showArrow?: boolean
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
    dark: 'bg-charcoal text-white hover:bg-muted-green',
    light: 'bg-soft-beige text-charcoal hover:bg-white',
    outline: 'border border-current bg-transparent text-current hover:bg-white hover:text-charcoal',
    ghost: 'bg-transparent text-current hover:text-soft-beige',
  }

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-black transition ${variants[variant]} ${className}`}
      onClick={(event) => {
        if (typeof props.href === 'string') {
          if (props.href.startsWith('tel:')) {
            trackEvent('click_to_call', { destination: props.href })
          } else if (props.href.includes('contact') || props.href.includes('#contact')) {
            trackEvent('quote_cta_click', { destination: props.href })
          }
        }
        onClick?.(event)
      }}
      {...props}
    >
      {children}
      {showArrow ? <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" /> : null}
    </a>
  )
}

type SectionIntroProps = {
  eyebrow: string
  title: ReactNode
  copy?: string
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
}

export function SectionIntro({ eyebrow, title, copy, tone = 'light', align = 'left' }: SectionIntroProps) {
  const isDark = tone === 'dark'

  return (
    <div className={align === 'center' ? 'mx-auto max-w-4xl text-center' : 'max-w-4xl'}>
      <p className={`text-sm font-black uppercase tracking-[0.16em] ${isDark ? 'text-soft-beige' : 'text-wood'}`}>
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl ${
          isDark ? 'text-white' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p className={`mt-5 text-lg leading-8 ${align === 'center' ? 'mx-auto max-w-2xl' : 'max-w-3xl'} ${isDark ? 'text-white/72' : 'text-ink/70'}`}>
          {copy}
        </p>
      ) : null}
    </div>
  )
}

export function GoogleGLogo({ className = '' }: Readonly<{ className?: string }>) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-label="Google" role="img">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"
      />
    </svg>
  )
}

export function RatingStars({ className = '' }: Readonly<{ className?: string }>) {
  return (
    <span className={`inline-flex items-center gap-0.5 text-[#fbbc04] ${className}`} aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <span key={index} aria-hidden="true">★</span>
      ))}
    </span>
  )
}
