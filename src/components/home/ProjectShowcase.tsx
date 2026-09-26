import { ArrowUpRight } from 'lucide-react'
import { getProjectPagePath, projectPages } from '../../data/projects'
import { getServicePage } from '../../data/servicePages'
import { getResponsiveImageProps } from '../../lib/images'
import { ButtonLink } from '../ui'

export function ProjectShowcase() {
  return (
    <section id="our-work" data-hscroll className="grain relative bg-night text-bone">
      <div className="lg:sticky lg:top-0 lg:flex lg:h-[100svh] lg:flex-col lg:justify-between lg:overflow-hidden">
        <div className="shell flex items-end justify-between gap-6 pt-24 lg:pt-24">
          <div>
            <h2 className="display-md max-w-[16ch]" data-reveal="up">
              From tired deck to <em className="text-soft-beige">favorite room</em> of the house
            </h2>
          </div>
        </div>

        <div className="no-scrollbar mt-12 overflow-x-auto lg:mt-0 lg:overflow-visible">
          <div data-hscroll-track className="flex w-max snap-x snap-mandatory items-end gap-5 px-5 pb-6 will-change-transform sm:px-8 lg:snap-none lg:gap-10 lg:px-12 lg:pb-0">
            {projectPages.map((project, index) => {
              const service = getServicePage(project.primaryServiceSlug)
              const tall = index % 2 === 0
              return (
                <a
                  key={project.slug}
                  href={getProjectPagePath(project)}
                  data-cursor="View"
                  className={`group relative block shrink-0 snap-start ${tall ? 'w-[80vw] sm:w-[52vw] lg:w-[30vw]' : 'w-[80vw] sm:w-[60vw] lg:w-[40vw]'}`}
                >
                  <div className={`frame bg-graphite ${tall ? 'aspect-[4/5] lg:aspect-auto lg:h-[54svh]' : 'aspect-[4/3] lg:aspect-auto lg:h-[42svh]'}`}>
                    <img
                      className="h-full w-full object-cover"
                      {...getResponsiveImageProps(project.heroImage, '(min-width: 1024px) 40vw, 80vw')}
                      alt={project.title}
                      width="1200"
                      height="1500"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="mono absolute top-4 left-4 bg-night/70 px-2.5 py-1.5 text-[0.64rem] uppercase tracking-[0.14em] text-bone backdrop-blur-md">
                      {service?.shortTitle ?? 'Deck project'}
                    </span>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-6 border-t hairline-light pt-4">
                    <div>
                      <h3 className="font-display text-[clamp(1.9rem,2.6vw,2.8rem)] leading-[0.92] transition-colors group-hover:text-soft-beige">{project.shortTitle}</h3>
                    </div>
                    <span className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center border border-bone/20 transition-all duration-500 group-hover:border-soft-beige group-hover:bg-soft-beige group-hover:text-night">
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:rotate-45" aria-hidden="true" />
                    </span>
                  </div>
                </a>
              )
            })}

            <div className="flex w-[80vw] shrink-0 snap-start flex-col justify-between border border-bone/12 p-8 sm:w-[52vw] lg:h-[54svh] lg:w-[26vw] lg:p-10">
              <p className="font-display text-[clamp(2.4rem,3vw,3.4rem)] leading-[0.92]">
                Composite, cedar, covered, screened — <em className="text-soft-beige">see how each one was planned.</em>
              </p>
              <div className="mt-10">
                <ButtonLink href="/projects" variant="bronze">All projects</ButtonLink>
              </div>
            </div>
          </div>
        </div>

        <div className="shell hidden pb-10 lg:block">
          <div className="flex items-center gap-6">
            <div className="h-px flex-1 bg-bone/12">
              <div data-hscroll-progress className="h-px w-full origin-left scale-x-0 bg-soft-beige" />
            </div>
          </div>
        </div>
        <div className="h-16 lg:hidden" />
      </div>
    </section>
  )
}
