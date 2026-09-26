import { AlertCircle, ArrowUpRight, CheckCircle, LoaderCircle } from 'lucide-react'
import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { business } from '../data/business'
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

type LeadFormProps = {
  tone?: 'dark' | 'light'
  className?: string
}

export function LeadForm({ tone = 'dark', className = '' }: LeadFormProps) {
  const [form, setForm] = useState<LeadFormState>(initialLeadForm)
  const [submitState, setSubmitState] = useState<SubmitState>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const dark = tone === 'dark'

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

  const fieldClass = `peer w-full border-0 border-b bg-transparent px-0 pt-7 pb-3 text-lg outline-none transition-colors placeholder:text-transparent focus:ring-0 ${
    dark ? 'border-bone/20 text-bone focus:border-soft-beige' : 'border-ink/20 text-ink focus:border-wood'
  }`
  const labelClass = `pointer-events-none absolute top-7 left-0 origin-left text-lg transition-all duration-300 peer-focus:top-0 peer-focus:text-[0.7rem] peer-focus:tracking-[0.14em] peer-focus:uppercase peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:tracking-[0.14em] peer-[:not(:placeholder-shown)]:uppercase ${
    dark ? 'text-bone/50 peer-focus:text-soft-beige' : 'text-ink/50 peer-focus:text-wood'
  }`

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <FloatingField label="Your name" labelClass={labelClass}>
          <input className={fieldClass} name="name" value={form.name} onChange={(event) => updateField('name', event.target.value)} placeholder="Your name" autoComplete="name" required />
        </FloatingField>
        <FloatingField label="Phone" labelClass={labelClass}>
          <input className={fieldClass} name="phone" type="tel" value={form.phone} onChange={(event) => updateField('phone', event.target.value)} placeholder="Phone" autoComplete="tel" required />
        </FloatingField>
        <FloatingField label="Email (optional)" labelClass={labelClass}>
          <input className={fieldClass} name="email" type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} placeholder="Email" autoComplete="email" />
        </FloatingField>
        <FloatingField label="City" labelClass={labelClass}>
          <input className={fieldClass} name="city" value={form.city} onChange={(event) => updateField('city', event.target.value)} placeholder="City" autoComplete="address-level2" required />
        </FloatingField>
      </div>

      <ChipGroup
        legend="What are we building?"
        name="projectType"
        options={projectTypes}
        value={form.projectType}
        onChange={(value) => updateField('projectType', value)}
        dark={dark}
      />

      <ChipGroup
        legend="Timeline"
        name="timeline"
        options={timelines}
        value={form.timeline}
        onChange={(value) => updateField('timeline', value)}
        dark={dark}
      />

      <div className="mt-8">
        <FloatingField label="Tell us about the space" labelClass={labelClass}>
          <textarea className={`${fieldClass} min-h-28 resize-y leading-7`} name="message" value={form.message} onChange={(event) => updateField('message', event.target.value)} placeholder="Project notes" />
        </FloatingField>
      </div>

      {submitState === 'success' ? (
        <div className={`mt-8 flex items-start gap-3 p-4 text-sm leading-6 ${dark ? 'bg-bone/8 text-bone' : 'bg-ink/5 text-ink'}`} role="status">
          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-soft-beige" aria-hidden="true" />
          Your request was sent. We will follow up shortly.
        </div>
      ) : null}

      {submitState === 'error' ? (
        <div className="mt-8 flex items-start gap-3 bg-red-500/10 p-4 text-sm leading-6 text-red-300" role="alert">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <span className={dark ? 'text-red-200' : 'text-red-800'}>{errorMessage || 'Something went wrong. Please call us or try again.'}</span>
        </div>
      ) : null}

      <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <button
          className={`group/btn relative inline-flex min-h-15 items-center justify-between gap-8 overflow-hidden py-2 pr-2 pl-6 text-[0.82rem] font-semibold tracking-[0.1em] uppercase [font-stretch:80%] transition-colors disabled:cursor-not-allowed disabled:opacity-70 ${
            dark ? 'bg-soft-beige text-night' : 'bg-night text-bone hover:text-night'
          }`}
          type="submit"
          disabled={submitState === 'submitting'}
        >
          <span className={`btn-fill ${dark ? 'bg-bone' : 'bg-soft-beige'}`} aria-hidden="true" />
          <span className="relative">{submitState === 'submitting' ? 'Sending…' : 'Request my free quote'}</span>
          <span className={`relative flex h-11 w-11 items-center justify-center ${dark ? 'bg-night text-bone' : 'bg-soft-beige text-night'}`}>
            {submitState === 'submitting' ? <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" /> : <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover/btn:rotate-45" aria-hidden="true" />}
          </span>
        </button>
        <a
          className={`mono text-xs uppercase tracking-[0.12em] transition-colors ${dark ? 'text-bone/60 hover:text-bone' : 'text-ink/60 hover:text-ink'}`}
          href={`tel:${business.phone}`}
          onClick={() => trackEvent('click_to_call', { page_path: typeof window === 'undefined' ? '/' : window.location.pathname })}
        >
          Or call {business.phoneDisplay}
        </a>
      </div>
    </form>
  )
}

function FloatingField({ label, labelClass, children }: Readonly<{ label: string; labelClass: string; children: ReactNode }>) {
  return (
    <label className="relative block">
      {children}
      <span className={labelClass}>{label}</span>
    </label>
  )
}

function ChipGroup({ legend, name, options, value, onChange, dark }: Readonly<{ legend: string; name: string; options: string[]; value: string; onChange: (value: string) => void; dark: boolean }>) {
  return (
    <fieldset className="mt-10">
      <legend className={`mono text-[0.68rem] uppercase tracking-[0.14em] ${dark ? 'text-bone/50' : 'text-ink/50'}`}>{legend}</legend>
      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((option) => {
          const checked = option === value
          return (
            <label
              key={option}
              className={`cursor-pointer border px-3.5 py-2 text-[0.88rem] transition-all duration-300 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-soft-beige ${
                checked
                  ? dark ? 'border-soft-beige bg-soft-beige text-night' : 'border-ink bg-ink text-bone'
                  : dark ? 'border-bone/18 text-bone/75 hover:border-bone/50 hover:text-bone' : 'border-ink/15 text-ink/75 hover:border-ink/50 hover:text-ink'
              }`}
            >
              <input className="sr-only" type="radio" name={name} value={option} checked={checked} onChange={() => onChange(option)} />
              {option}
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
