import { AlertCircle, ArrowUpRight, CheckCircle, LoaderCircle } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { projectTypes, timelines } from '../data/siteContent'
import { getSupabaseClient, isSupabaseConfigured } from '../lib/supabase'
import { trackEvent } from '../lib/analytics'

const initialLeadForm = {
  name: '',
  phone: '',
  email: '',
  city: '',
  projectType: projectTypes[0],
  timeline: timelines[0],
  message: '',
}

type LeadFormState = typeof initialLeadForm
type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

const fieldClass =
  'mt-2 min-h-12 w-full border border-charcoal/12 bg-white px-4 text-base font-semibold text-charcoal outline-none transition placeholder:text-charcoal/42 focus:border-wood focus:ring-4 focus:ring-soft-beige/35'

const labelClass = 'text-xs font-black uppercase tracking-[0.14em] text-charcoal/64'

export function LeadForm() {
  const [form, setForm] = useState<LeadFormState>(initialLeadForm)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  function updateField<Field extends keyof LeadFormState>(field: Field, value: LeadFormState[Field]) {
    setForm((current) => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErrorMessage('')

    const supabase = getSupabaseClient()

    if (!isSupabaseConfigured || !supabase) {
      setSubmitState('error')
      setErrorMessage('Supabase is not configured yet. Add the VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY environment variables.')
      return
    }

    setSubmitState('submitting')

    const { error } = await supabase.from('quote_requests').insert({
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || null,
      city: form.city.trim(),
      project_type: form.projectType,
      timeline: form.timeline,
      message: form.message.trim() || null,
      source: 'decksrxkc-landing-page',
      user_agent: typeof navigator === 'undefined' ? null : navigator.userAgent,
      page_path: typeof window === 'undefined' ? '/' : window.location.pathname,
    })

    if (error) {
      setSubmitState('error')
      setErrorMessage(error.message)
      return
    }

    setForm(initialLeadForm)
    setSubmitState('success')
    trackEvent('generate_lead', {
      project_type: form.projectType,
      city: form.city.trim(),
    })
  }

  return (
    <form className="bg-warm-white p-6 text-charcoal sm:p-8 lg:p-10" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <label>
          <span className={labelClass}>Name</span>
          <input
            className={fieldClass}
            name="name"
            value={form.name}
            onChange={(event) => updateField('name', event.target.value)}
            placeholder="Your name"
            autoComplete="name"
            required
          />
        </label>

        <label>
          <span className={labelClass}>Phone</span>
          <input
            className={fieldClass}
            name="phone"
            type="tel"
            value={form.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            placeholder="(913) 555-0123"
            autoComplete="tel"
            required
          />
        </label>

        <label>
          <span className={labelClass}>Email</span>
          <input
            className={fieldClass}
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => updateField('email', event.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </label>

        <label>
          <span className={labelClass}>City</span>
          <input
            className={fieldClass}
            name="city"
            value={form.city}
            onChange={(event) => updateField('city', event.target.value)}
            placeholder="Kansas City"
            autoComplete="address-level2"
            required
          />
        </label>

        <label>
          <span className={labelClass}>Project Type</span>
          <select
            className={`${fieldClass} appearance-none`}
            name="projectType"
            value={form.projectType}
            onChange={(event) => updateField('projectType', event.target.value)}
            required
          >
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span className={labelClass}>Timeline</span>
          <select
            className={`${fieldClass} appearance-none`}
            name="timeline"
            value={form.timeline}
            onChange={(event) => updateField('timeline', event.target.value)}
            required
          >
            {timelines.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </label>

        <label className="sm:col-span-2">
          <span className={labelClass}>Project Notes</span>
          <textarea
            className={`${fieldClass} min-h-28 py-3 leading-7`}
            name="message"
            value={form.message}
            onChange={(event) => updateField('message', event.target.value)}
            placeholder="Tell us what you want to build, repair, replace, or screen in."
          />
        </label>
      </div>

      {submitState === 'success' ? (
        <div className="mt-5 flex items-start gap-3 border border-muted-green/24 bg-muted-green/10 p-4 text-sm font-bold leading-6 text-charcoal">
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-muted-green" aria-hidden="true" />
          Your request was sent. We will follow up shortly.
        </div>
      ) : null}

      {submitState === 'error' ? (
        <div className="mt-5 flex items-start gap-3 border border-red-200 bg-red-50 p-4 text-sm font-bold leading-6 text-red-800">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          {errorMessage || 'Something went wrong. Please call us or try again.'}
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          className="inline-flex min-h-14 items-center justify-center rounded-full bg-charcoal px-8 text-base font-black text-white transition hover:bg-muted-green disabled:cursor-not-allowed disabled:opacity-70"
          type="submit"
          disabled={submitState === 'submitting'}
        >
          {submitState === 'submitting' ? (
            <>
              <LoaderCircle className="mr-2 h-5 w-5 animate-spin" aria-hidden="true" />
              Sending
            </>
          ) : (
            <>
              Request Free Quote
              <ArrowUpRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </>
          )}
        </button>
        <a className="text-sm font-black text-charcoal transition hover:text-wood" href="tel:+19132056531" onClick={() => trackEvent('click_to_call', { page_path: typeof window === 'undefined' ? '/' : window.location.pathname })}>
          Or call (913) 205-6531
        </a>
      </div>
    </form>
  )
}
