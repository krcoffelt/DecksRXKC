import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navItems } from '../data/siteContent'
import { ButtonLink } from './ui'

type SiteHeaderProps = {
  variant?: 'overlay' | 'solid'
}

export function SiteHeader({ variant = 'solid' }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const isOverlay = variant === 'overlay'

  return (
    <header className={`${isOverlay ? 'absolute inset-x-0 top-0 z-30' : 'bg-charcoal'} px-5 py-5 text-white sm:px-8`}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6">
        <a href="/" className="flex shrink-0 items-center" aria-label="DecksRXKC home">
          <img
            className="h-11 w-auto max-w-[180px] object-contain sm:h-14 sm:max-w-[220px]"
            src="/images/decksrxkc-header-logo-cropped.png"
            alt="DecksRXKC"
            width="330"
            height="84"
            loading="eager"
            decoding="async"
          />
        </a>

        <nav className="hidden items-center gap-7 text-sm font-bold text-white/82 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} className="transition hover:text-soft-beige" href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/#contact" variant="light" showArrow={false}>
            Free Quote
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/24 bg-white/10 transition hover:bg-white/15 lg:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {menuOpen ? (
        <nav
          className="absolute inset-x-5 top-20 z-30 border border-white/10 bg-charcoal p-4 shadow-image lg:hidden"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block border-b border-white/10 px-2 py-3 text-base font-bold text-white/86 last:border-b-0"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <ButtonLink className="mt-3 w-full" href="/#contact" variant="light" onClick={() => setMenuOpen(false)}>
            Free Quote
          </ButtonLink>
        </nav>
      ) : null}
    </header>
  )
}
