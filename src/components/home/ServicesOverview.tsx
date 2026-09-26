import { ArrowUpRight } from 'lucide-react'
import { useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import { featuredServicePages, getServicePagePath, servicePages } from '../../data/servicePages'
import { getResponsiveImageProps } from '../../lib/images'
import { ButtonLink, SectionIntro } from '../ui'

const cardTones = [
  { card: 'bg-paper text-ink', muted: 'text-ink/65', rule: 'hairline', accent: 'text-wood', button: 'dark' as const },
  { card: 'bg-night text-bone', muted: 'text-bone/60', rule: 'hairline-light', accent: 'text-soft-beige', button: 'bronze' as const },
  { card: 'bg-sand text-ink', muted: 'text-ink/65', rule: 'hairline', accent: 'text-wood', button: 'dark' as const },
  { card: 'bg-graphite text-bone', muted: 'text-bone/60', rule: 'hairline-light', accent: 'text-soft-beige', button: 'bronze' as const },
]

export function ServicesOverview() {
  const others = servicePages.filter((service) => !featuredServicePages.includes(service))

  return (
    <section id="decks" className="relative bg-bone text-ink">
      <div className="shell pt-24 lg:pt-36">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionIntro
            title={<>Outdoor spaces built around how you <em className="text-wood">actually live</em></>}
            copy="From a focused repair to a fully covered, screened-in outdoor room — every service is planned as one finished system."
          />
          <div data-reveal="up">
            <ButtonLink href="/services" variant="dark">All services</ButtonLink>
          </div>
        </div>
      </div>

      {/* Sticky stacking cards */}
      <div className="shell mt-16 lg:mt-24">
        {featuredServicePages.map((service, index) => {
          const tone = cardTones[index % cardTones.length]
          return (
            <article
              key={service.slug}
              className={`relative mb-6 grid overflow-hidden lg:sticky lg:top-(--stack-top) lg:mb-10 lg:min-h-[78svh] lg:grid-cols-[1fr_1.05fr] ${tone.card}`}
              style={{ ['--stack-top' as string]: `calc(5.5rem + ${index * 1.4}rem)` }}
            >
              <div className="flex flex-col justify-between gap-10 p-6 sm:p-10 lg:p-14">
                <div>
                  <h3 className="font-display text-[clamp(3rem,6.4vw,7rem)] leading-[0.84]">{service.shortTitle}</h3>
                  <p className={`mt-6 max-w-lg text-[1.05rem] leading-7 ${tone.muted}`}>{service.heroCopy}</p>
                </div>
                <div>
                  <ul className={`grid gap-0 border-t sm:grid-cols-2 ${tone.rule}`}>
                    {service.bestFor.slice(0, 4).map((item) => (
                      <li key={item} className={`flex items-center gap-3 border-b py-3 text-[0.92rem] ${tone.rule}`}>
                        <span className={`h-1 w-1 shrink-0 ${tone.accent} bg-current`} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <ButtonLink href={getServicePagePath(service)} variant={tone.button} className="mt-8">
                    Explore {service.shortTitle.toLowerCase()}
                  </ButtonLink>
                </div>
              </div>
              <a href={getServicePagePath(service)} className="frame relative order-first min-h-[18rem] lg:order-none lg:min-h-full" data-cursor="View" tabIndex={-1} aria-hidden="true">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  {...getResponsiveImageProps(service.image, '(min-width: 1024px) 50vw, 100vw')}
                  alt=""
                  width="1200"
                  height="1000"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </article>
          )
        })}
      </div>

      <MoreServices services={others} />
    </section>
  )
}

function MoreServices({ services }: Readonly<{ services: typeof servicePages }>) {
  const [active, setActive] = useState<number | null>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    const list = listRef.current
    const preview = previewRef.current
    if (!list || !preview) return
    const rect = list.getBoundingClientRect()
    preview.style.transform = `translate3d(${event.clientX - rect.left}px, ${event.clientY - rect.top}px, 0) translate(-50%, -50%)`
  }

  return (
    <div className="shell pt-14 pb-24 lg:pt-24 lg:pb-36">
      <div ref={listRef} className="relative border-t border-ink" onPointerMove={onMove} onPointerLeave={() => setActive(null)}>
        {services.map((service, index) => (
          <a
            key={service.slug}
            href={getServicePagePath(service)}
            className="group relative flex items-center justify-between gap-6 border-b hairline py-6 lg:py-8"
            onPointerEnter={() => setActive(index)}
            data-reveal="up"
            style={{ ['--d' as string]: index * 0.5 }}
          >
            <h3 className="font-display text-[clamp(2.2rem,5vw,5rem)] leading-[0.9] transition-[transform,color] duration-700 ease-[var(--ease-out-expo)] group-hover:text-wood lg:group-hover:translate-x-4">
              {service.shortTitle}
            </h3>
            <span className="flex h-11 w-11 items-center justify-center border border-ink/15 transition-all duration-500 group-hover:border-ink group-hover:bg-ink group-hover:text-bone">
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
            </span>
          </a>
        ))}

        <div
          ref={previewRef}
          className={`pointer-events-none absolute top-0 left-0 z-10 hidden h-[18rem] w-[14rem] overflow-hidden shadow-image transition-[opacity,scale] duration-500 ease-[var(--ease-out-expo)] lg:block ${active === null ? 'scale-75 opacity-0' : 'scale-100 opacity-100'}`}
          aria-hidden="true"
        >
          {services.map((service, index) => (
            <img
              key={service.slug}
              className={`absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)] ${active === index ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
              {...getResponsiveImageProps(service.image, '224px')}
              alt=""
              width="224"
              height="288"
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </div>
  )
}
