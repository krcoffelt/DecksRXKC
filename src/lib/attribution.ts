const storageKey = 'decksrxkc-visit-v1'
const campaignFields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid', 'fbclid', 'msclkid'] as const
type Visit = { started: string; updated: number; landing: string; referrer: string; campaign: Record<string, string>; pages: string[] }
let memoryVisit: Visit | undefined

/** Keep one bounded visit in this tab; never collect form contents or arbitrary query parameters. */
export function captureVisit() {
  if (typeof window === 'undefined') return
  const now = Date.now()
  let visit = memoryVisit
  try {
    const saved = JSON.parse(sessionStorage.getItem(storageKey) || 'null') as Visit | null
    if (saved && Array.isArray(saved.pages) && saved.campaign && typeof saved.updated === 'number') visit = saved
  } catch { /* Storage may be blocked; the in-memory visit still works. */ }
  const params = new URLSearchParams(window.location.search)
  const campaign = Object.fromEntries(campaignFields.map((key) => [key, (params.get(key) || '').slice(0, 300)]))
  // A new tagged campaign or 30 minutes of inactivity starts a new visit.
  const changedCampaign = campaignFields.some((key) => campaign[key] && campaign[key] !== visit?.campaign[key])
  if (!visit || now - visit.updated > 30 * 60 * 1000 || changedCampaign) {
    let referrer = ''
    try { const url = new URL(document.referrer); if (url.origin !== window.location.origin) referrer = url.hostname } catch { /* Direct visit. */ }
    visit = { started: new Date(now).toISOString(), updated: now, landing: window.location.pathname, referrer, campaign, pages: [] }
  }
  const path = window.location.pathname.slice(0, 300)
  if (visit.pages.at(-1) !== path) visit.pages = [...visit.pages, path].slice(-20)
  visit.updated = now
  memoryVisit = visit
  try { sessionStorage.setItem(storageKey, JSON.stringify(visit)) } catch { /* Do not block browsing or lead submission. */ }
  return visit
}

export function getLeadAttribution(): Record<string, string> {
  const visit = captureVisit()
  if (!visit) return {}
  const c = visit.campaign
  const paidGoogle = c.gclid || c.gbraid || c.wbraid
  const searchSource = /(^|\.)google\.[a-z.]+$/.test(visit.referrer) ? 'google' : /(^|\.)bing\.com$/.test(visit.referrer) ? 'bing' : /(^|\.)duckduckgo\.com$/.test(visit.referrer) ? 'duckduckgo' : ''
  return {
    landing_page: visit.landing,
    entry_referrer: visit.referrer || '(direct or unavailable)',
    traffic_source: c.utm_source || (paidGoogle ? 'google' : c.msclkid ? 'bing' : c.fbclid ? 'facebook' : searchSource || visit.referrer || '(direct)'),
    traffic_medium: c.utm_medium || (paidGoogle || c.msclkid ? 'cpc' : c.fbclid ? 'social' : c.utm_source ? '(not set)' : searchSource ? 'organic' : visit.referrer ? 'referral' : '(none)'),
    ...c,
    visit_started_at: visit.started,
    page_journey: visit.pages.join(' → '),
  }
}
