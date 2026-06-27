import { quickAnswers } from '../../data/siteContent'
import { SectionIntro } from '../ui'

export function AnswerBlock() {
  return (
    <section className="bg-charcoal px-5 py-20 text-white sm:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionIntro
            eyebrow="Quick Answers"
            title="Deck questions homeowners ask before they call"
            copy="Short answers for the highest-intent local searches, backed by the same services shown throughout the site."
            tone="dark"
          />
          <div className="divide-y divide-white/14 border-y border-white/14">
            {quickAnswers.map((item) => (
              <div key={item.question} className="py-6">
                <h3 className="text-xl font-black leading-tight text-white">{item.question}</h3>
                <p className="mt-3 text-base leading-7 text-white/70">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
