import type { ReactNode } from 'react'
import { business } from '../../data/business'
import { serviceAreaLinks } from '../../data/serviceAreaLinks'
import { getResponsiveImageProps } from '../../lib/images'

const marqueeItems = ['Custom decks', 'Screened-in rooms', 'Covered decks', 'Trex & TimberTech', 'Stairs & railings', 'Deck replacement', 'Repair done right']

const manifesto =
  'A deck should make the space between your house and your yard easier to live in — shaded when the sun is harsh, screened when the bugs are out, and built to shrug off Kansas City winters.'

export function Marquee() {
  const row = [...marqueeItems, ...marqueeItems]
  return (
    <div className="relative overflow-hidden bg-night py-7 text-bone sm:py-9" aria-hidden="true">
      <div data-velocity className="flex w-max items-center will-change-transform">
        {row.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center">
            <span className={`font-display px-7 text-[clamp(2.4rem,5.4vw,5.4rem)] leading-none sm:px-10 ${index % 2 === 1 ? 'outline-text text-bone/80' : ''}`}>{item}</span>
            <svg className="h-6 w-6 shrink-0 text-soft-beige" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" /></svg>
          </span>
        ))}
      </div>
    </div>
  )
}

export function Approach() {
  const words = manifesto.split(' ')
  return (
    <section id="approach" className="relative bg-bone text-ink">
      <div className="shell py-24 lg:py-40">
        <div className="grid gap-10 lg:grid-cols-[0.28fr_1fr]">
          <span className="hidden lg:block" />
          <p data-scrub className="text-[clamp(1.85rem,3.9vw,4.1rem)] leading-[1.06] font-medium tracking-[-0.035em]">
            {words.map((word, index) => (
              <span key={`${word}-${index}`} className="scrub-word">{word}{index < words.length - 1 ? ' ' : ''}</span>
            ))}
          </p>
        </div>

        <div className="mt-20 grid gap-10 lg:mt-32 lg:grid-cols-[0.28fr_1fr]">
          <div className="hidden lg:block">
            <div className="frame crop aspect-[3/4] bg-sand text-ink" data-reveal="clip">
              <img
                data-parallax="0.06"
                className="h-[112%] w-full -translate-y-[6%] object-cover"
                {...getResponsiveImageProps('/images/optimized/kansas-city-composite-covered-deck-railing-detail.jpg', '22vw')}
                alt="Composite deck boards meeting a dark railing post on a Kansas City deck"
                width="900"
                height="1200"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-12">
            <p className="lede max-w-xl text-ink/68" data-reveal="up">
              Every project starts with how your family actually wants to use the space — then we work backward
              into framing, footprint, materials, stairs, rails, and the finish details you will see every day.
            </p>
            <dl className="grid grid-cols-2 border-t hairline lg:grid-cols-4">
              <Stat label="Google rating" value={<><span data-count="5" data-decimals="1">5.0</span><span className="ml-1 align-top text-[0.42em] text-wood">★</span></>} index={0} />
              <Stat label="Five-star reviews" value={<span data-count={business.googleReviewCount}>{business.googleReviewCount}</span>} index={1} />
              <Stat label="Metro communities" value={<span data-count={serviceAreaLinks.length}>{serviceAreaLinks.length}</span>} index={2} />
              <Stat label="Both sides of State Line" value="KS+MO" index={3} />
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value, index }: Readonly<{ label: string; value: ReactNode; index: number }>) {
  return (
    <div className={`flex flex-col-reverse justify-end border-b hairline py-7 pr-4 ${index % 2 === 1 ? 'border-l pl-5' : ''} ${index > 0 ? 'lg:border-l lg:pl-6' : ''}`} data-reveal="up" style={{ ['--d' as string]: index }}>
      <dt className="mono mt-4 text-[0.66rem] uppercase tracking-[0.14em] text-ink/65">{label}</dt>
      <dd className="font-display text-[clamp(3.6rem,6.4vw,6.6rem)] leading-[0.82]">{value}</dd>
    </div>
  )
}
