export type AnalyticsEvent = 'click_to_call' | 'generate_lead' | 'quote_cta_click'

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

export const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()

export function trackEvent(event: AnalyticsEvent, parameters: Record<string, string> = {}) {
  if (typeof window === 'undefined' || !gaMeasurementId || !window.gtag) {
    return
  }

  window.gtag('event', event, parameters)
}
