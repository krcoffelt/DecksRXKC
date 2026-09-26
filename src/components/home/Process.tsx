import { processSteps } from '../../data/siteContent'
import { getResponsiveImageProps } from '../../lib/images'
import { SectionIntro } from '../ui'

export function Process() {
  return (
    <section id="process" className="relative bg-paper text-ink">
      <div className="shell py-24 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <SectionIntro
            title={<>A clear path from first problem to <em className="text-wood">finished space</em></>}
          />
          <div className="frame crop aspect-[16/10] bg-sand text-ink" data-reveal="clip">
            <img
              data-parallax="0.05"
              className="h-[112%] w-full -translate-y-[6%] object-cover"
              {...getResponsiveImageProps('/images/kansas-city-covered-deck-framing-addition.jpg', '(min-width: 1024px) 38vw, 100vw')}
              alt="Covered deck roof framing tied into a Kansas City home"
              width="1200"
              height="750"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <ol className="mt-16 grid border-t border-ink sm:grid-cols-2 lg:mt-24 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className={`group relative border-b hairline py-8 sm:pr-6 lg:border-b-0 lg:py-10 ${index > 0 ? 'lg:border-l lg:pl-6' : ''} ${index % 2 === 1 ? 'sm:border-l sm:pl-6 lg:pl-6' : ''}`}
              data-reveal="up"
              style={{ ['--d' as string]: index }}
            >
              <h3 className="font-display text-[clamp(1.8rem,2.2vw,2.3rem)] leading-[0.95] transition-colors duration-500 group-hover:text-wood">{step.title}</h3>
              <p className="mt-4 text-[0.96rem] leading-7 text-ink/62">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
