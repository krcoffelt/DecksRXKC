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

export const googleAdsId = import.meta.env.VITE_GOOGLE_ADS_ID?.trim()
const googleAdsConversionLabel = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL?.trim()
export const googleTagId = googleAdsId || gaMeasurementId

export function trackQuoteConversion(transactionId: string) {
  if (typeof window === 'undefined' || !window.gtag || !googleAdsId || !googleAdsConversionLabel) return
  window.gtag('event', 'conversion', {
    send_to: `${googleAdsId}/${googleAdsConversionLabel}`,
    value: 1,
    currency: 'USD',
    transaction_id: transactionId,
  })
}
