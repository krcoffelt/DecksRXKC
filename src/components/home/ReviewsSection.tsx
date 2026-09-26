import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { business } from '../../data/business'
import { googleReviews } from '../../data/siteContent'
import { GoogleGLogo, RatingStars } from '../ui'

const featured = googleReviews.filter((review) => ['Brandy Sansone', 'Laura Heitshusen', 'Kylee Beyea', 'Matt Panuco'].includes(review.name))

export function ReviewsSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % featured.length), 8000)
    return () => window.clearInterval(timer)
  }, [])

  const rowA = googleReviews.slice(0, 6)
  const rowB = googleReviews.slice(6)

  return (
    <section id="reviews" className="grain relative overflow-hidden bg-night py-24 text-bone lg:py-36">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <a href={business.googleMapsUrl} target="_blank" rel="noreferrer" className="group block" data-reveal="up">
            <span className="font-display block text-[clamp(9rem,22vw,22rem)] leading-[0.78] tracking-[-0.02em]">
              5.0
            </span>
            <span className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t hairline-light pt-5">
              <RatingStars className="text-lg" />
              <span className="flex items-center gap-2 text-sm text-bone/70">
                <GoogleGLogo className="h-4 w-4" /> {business.googleReviewCount} reviews on Google
              </span>
              <span className="link-line mono inline-flex items-center gap-1 text-[0.68rem] uppercase tracking-[0.14em] text-soft-beige">
                Read them all <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </span>
            </span>
          </a>

          <figure className="relative flex flex-col justify-between">
            <h2 className="display-sm max-w-[22ch] text-bone/60" data-reveal="up">Deck work homeowners are willing to recommend</h2>
            <div className="mt-10 grid">
              {featured.map((review, reviewIndex) => (
                <div
                  key={review.name}
                  className={`[grid-area:1/1] transition-all duration-1000 ease-[var(--ease-out-expo)] ${reviewIndex === index ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'}`}
                  aria-hidden={reviewIndex !== index}
                >
                  <blockquote className="text-[clamp(1.5rem,2.6vw,2.6rem)] leading-[1.18] font-medium tracking-[-0.025em]">
                    <span className="accent text-soft-beige">“</span>{review.review}<span className="accent text-soft-beige">”</span>
                  </blockquote>
                  <figcaption className="mono mt-8 text-[0.7rem] uppercase tracking-[0.14em] text-bone/55">{review.name} — Google review</figcaption>
                </div>
              ))}
            </div>
            <div className="mt-10 flex items-center">
              <div className="flex gap-2">
                {featured.map((review, reviewIndex) => (
                  <button
                    key={review.name}
                    type="button"
                    className="group flex h-11 items-center px-1"
                    aria-label={`Show review from ${review.name}`}
                    aria-pressed={reviewIndex === index}
                    onClick={() => setIndex(reviewIndex)}
                  >
                    <span className={`block h-px transition-all duration-500 ${reviewIndex === index ? 'w-12 bg-soft-beige' : 'w-6 bg-bone/30 group-hover:bg-bone/60'}`} />
                  </button>
                ))}
              </div>
            </div>
          </figure>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-4 lg:mt-28" aria-label="More Google reviews">
        <ReviewRow reviews={rowA} />
        <ReviewRow reviews={rowB} reverse />
      </div>
    </section>
  )
}

function ReviewRow({ reviews, reverse = false }: Readonly<{ reviews: typeof googleReviews; reverse?: boolean }>) {
  return (
    <div className="group/row relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <div
        className="flex w-max animate-marquee gap-4 group-hover/row:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: '90s', animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {[0, 1].map((copy) =>
          reviews.map((review) => (
            <article
              key={`${copy}-${review.name}`}
              aria-hidden={copy === 1}
              className="flex w-[21rem] shrink-0 flex-col justify-between border border-bone/10 bg-bone/[0.03] p-6 transition-colors duration-500 hover:border-soft-beige/40 sm:w-[26rem]"
            >
              <div className="flex items-center justify-between">
                <RatingStars className="text-xs" />
                <span className="mono text-[0.62rem] uppercase tracking-[0.12em] text-bone/60">{review.date}</span>
              </div>
              <p className="mt-5 overflow-hidden text-[0.98rem] leading-7 text-bone/78 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4]">“{review.review}”</p>
              <div className="mt-6 flex items-center gap-3 border-t hairline-light pt-4">
                <span className="font-display flex h-9 w-9 items-center justify-center bg-soft-beige text-base text-night">{getInitials(review.name)}</span>
                <span className="text-sm font-semibold">{review.name}</span>
              </div>
            </article>
          )),
        )}
      </div>
    </div>
  )
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}
