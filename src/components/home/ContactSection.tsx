import { business } from '../../data/business'
import { getResponsiveImageProps } from '../../lib/images'
import { LeadForm } from '../LeadForm'

export function ContactSection() {
  return (
    <section id="contact" className="grain relative isolate overflow-hidden bg-charcoal text-bone">
      <div className="shell pt-24 lg:pt-36">
        <h2 className="display-lg" data-reveal="lines">
          <span className="line-mask" style={{ ['--i' as string]: 0 }}><span>Let’s build what</span></span>
          <span className="line-mask" style={{ ['--i' as string]: 1 }}><span>your <em className="text-soft-beige">backyard</em> is missing</span></span>
        </h2>
      </div>

      <div className="shell grid gap-14 pt-14 pb-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:pt-20 lg:pb-36">
        <div className="flex flex-col gap-10">
          <div className="frame crop aspect-[4/3] bg-graphite text-bone" data-reveal="clip">
            <img
              data-parallax="0.06"
              className="h-[114%] w-full -translate-y-[7%] object-cover"
              {...getResponsiveImageProps('/images/optimized/kansas-city-covered-composite-deck-wide-view.jpg', '(min-width: 1024px) 34vw, 100vw')}
              alt="Covered composite deck with seating overlooking a backyard pool"
              width="1200"
              height="900"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="lede text-bone/70">
            Send the basics — what you want to build, repair, replace, cover, or screen in — and we’ll help you understand the best options for your space, budget, and timeline.
          </p>
          <dl className="grid grid-cols-2 border-t hairline-light">
            <div className="py-5 pr-4">
              <dt className="mono text-[0.66rem] uppercase tracking-[0.14em] text-bone/60">Call</dt>
              <dd className="mt-2"><a className="link-line inline-block py-1.5 font-display text-2xl" href={`tel:${business.phone}`}>{business.phoneDisplay}</a></dd>
            </div>
            <div className="border-l hairline-light py-5 pl-5">
              <dt className="mono text-[0.66rem] uppercase tracking-[0.14em] text-bone/60">Hours</dt>
              <dd className="mt-2 text-bone/80">Mon – Sat, 8 AM – 5 PM</dd>
            </div>
          </dl>
        </div>
        <div className="border border-bone/10 bg-bone/[0.025] p-6 sm:p-10 lg:p-12">
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
