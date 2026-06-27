import { ArrowUpRight } from 'lucide-react'
import { googleReviews } from '../../data/siteContent'
import { GoogleGLogo, RatingStars, SectionIntro } from '../ui'

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
          eyebrow="Google Reviews"
          title="Deck work homeowners are willing to recommend"
          copy="Real Google feedback from customers who trusted DecksRXKC with decks, fences, repairs, staining, stairs, and outdoor living projects."
          align="center"
        />

        <div className="mt-12 flex flex-col gap-6 border-y border-charcoal/10 py-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <GoogleGLogo className="h-11 w-11" />
              <span className="text-2xl font-semibold text-charcoal">Google Rating</span>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-4xl font-black text-charcoal">5.0</span>
              <RatingStars className="text-3xl" />
              <span className="text-base font-bold text-ink/52">{googleReviews.length} recent reviews</span>
            </div>
          </div>
          <a
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-charcoal px-7 text-sm font-black text-white transition hover:bg-muted-green"
            href="https://www.google.com/search?q=DecksRX+KC+Google+reviews"
            target="_blank"
            rel="noreferrer"
          >
            Write a Review
            <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-4" aria-label="DecksRXKC Google review cards">
          {googleReviews.map((review) => (
            <ReviewCard key={`${review.name}-${review.date}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReviewCard({ review }: Readonly<{ review: (typeof googleReviews)[number] }>) {
  return (
    <article className="flex h-[360px] w-[86vw] shrink-0 snap-start flex-col justify-between border border-charcoal/10 bg-warm-white p-5 sm:w-[390px] sm:p-6">
      <div>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-charcoal text-lg font-black text-soft-beige">
            {getInitials(review.name)}
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-black text-charcoal">{review.name}</h3>
            <p className="mt-1 text-sm font-bold text-ink/48">{review.meta}</p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <RatingStars className="text-lg" />
              <span className="text-sm font-bold text-ink/50">{review.date}</span>
            </div>
          </div>
        </div>
        <p className="mt-5 overflow-hidden text-lg font-semibold leading-7 text-charcoal [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:5]">
          "{review.review}"
        </p>
      </div>
      <div className="mt-6 flex items-center gap-3">
        <GoogleGLogo className="h-8 w-8" />
        <div className="text-sm leading-5">
          <p className="font-bold text-ink/52">Posted on</p>
          <p className="font-black text-[#4285f4]">Google</p>
        </div>
      </div>
    </article>
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
