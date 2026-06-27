import { Sun } from 'lucide-react'
import { LeadForm } from '../LeadForm'

export function ContactSection() {
  return (
    <section id="contact" className="bg-warm-white px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden border border-charcoal/10 bg-charcoal text-white lg:grid-cols-[0.92fr_1.08fr]">
          <div className="p-7 sm:p-10 lg:p-12">
            <div className="flex items-center gap-2 text-soft-beige">
              <Sun className="h-5 w-5" aria-hidden="true" />
              <p className="text-sm font-black uppercase tracking-[0.16em]">Free Quote</p>
            </div>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl">
              Ready to build the deck your home has been missing?
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
              Send the basics and DecksRXKC will help you understand the best options for your space, budget, and timeline.
            </p>
            <div className="mt-8 border-y border-white/14 py-6">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-soft-beige">Simple next step</p>
              <p className="mt-3 text-xl font-black leading-tight text-white">
                Tell us what you want to build, repair, replace, cover, or screen in.
              </p>
            </div>
            <p className="mt-6 text-sm font-bold text-white/62">Serving Kansas City and surrounding areas.</p>
          </div>
          <LeadForm />
        </div>
      </div>
    </section>
  )
}
