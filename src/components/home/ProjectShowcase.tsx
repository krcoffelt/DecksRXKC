import { projects } from '../../data/siteContent'
import { SectionIntro } from '../ui'

export function ProjectShowcase() {
  const [featuredProject, ...supportingProjects] = projects

  return (
    <section id="our-work" className="bg-charcoal px-5 py-20 text-white sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <SectionIntro
            eyebrow="Project Work"
            title="From old deck to favorite room of the house"
            copy="The best deck projects solve practical problems first: unsafe stairs, harsh sun, limited space, poor access, or a layout nobody uses."
            tone="dark"
          />
          <div className="border-y border-white/14 py-6">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-soft-beige">Before / After</p>
            <p className="mt-3 text-2xl font-black leading-tight text-white">
              Hot, exposed, or aging decks become shaded, safer, and more comfortable outdoor rooms.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="relative min-h-[560px] overflow-hidden bg-black">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src={featuredProject.image}
              alt={featuredProject.title}
              width="1600"
              height="1200"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/86 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <h3 className="text-4xl font-black leading-tight">{featuredProject.title}</h3>
              <p className="mt-3 max-w-xl text-base leading-7 text-white/76">{featuredProject.details}</p>
            </div>
          </article>

          <div className="grid gap-6">
            {supportingProjects.map((project) => (
              <article key={project.title} className="grid gap-4 border-b border-white/14 pb-6 last:border-b-0 last:pb-0 sm:grid-cols-[0.9fr_1.1fr] lg:grid-cols-1 xl:grid-cols-[0.9fr_1.1fr]">
                <img
                  className="h-48 w-full object-cover"
                  src={project.image}
                  alt={project.title}
                  width="1600"
                  height="1200"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <h3 className="text-2xl font-black leading-tight">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/68">{project.details}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
