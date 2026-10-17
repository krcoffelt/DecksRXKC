import { test } from 'node:test'
import assert from 'node:assert/strict'

let sequence = 0
async function visit({ search = '', referrer = '', blocked = false, saved } = {}) {
  const storage = new Map(saved ? [['decksrxkc-visit-v1', JSON.stringify(saved)]] : [])
  globalThis.window = { location: { search, pathname: '/services/deck-repair', origin: 'https://decksrxkc.com' } }
  globalThis.document = { referrer }
  globalThis.sessionStorage = {
    getItem: key => { if (blocked) throw new Error('blocked'); return storage.get(key) },
    setItem: (key, value) => { if (blocked) throw new Error('blocked'); storage.set(key, value) },
  }
  return import(`../src/lib/attribution.ts?test=${sequence++}`)
}

test('campaign survives navigation and joins a quote to the landing page without collecting arbitrary query values', async () => {
  const a = await visit({ search: '?utm_source=facebook&utm_medium=paid_social&utm_campaign=fall&email=private@example.com&fbclid=abc' })
  a.captureVisit()
  window.location.pathname = '/contact'
  window.location.search = ''
  const lead = a.getLeadAttribution()
  assert.equal(lead.traffic_source, 'facebook')
  assert.equal(lead.traffic_medium, 'paid_social')
  assert.equal(lead.utm_campaign, 'fall')
  assert.equal(lead.landing_page, '/services/deck-repair')
  assert.equal(lead.page_journey, '/services/deck-repair → /contact')
  assert.ok(!JSON.stringify(lead).includes('private@example.com'))
})
test('Google Ads click is retained, direct has no claimed referral, search uses hostname only', async () => {
  let a = await visit({ search: '?gclid=google-click' })
  assert.equal(a.getLeadAttribution().traffic_medium, 'cpc')
  a = await visit()
  assert.equal(a.getLeadAttribution().traffic_source, '(direct)')
  a = await visit({ referrer: 'https://www.google.com/search?q=private' })
  const lead = a.getLeadAttribution()
  assert.equal(lead.traffic_medium, 'organic')
  assert.equal(lead.referrer, 'www.google.com')
  assert.ok(!JSON.stringify(lead).includes('private'))
})
test('blocked storage does not lose the journey or prevent a lead', async () => {
  const a = await visit({ search: '?utm_source=newsletter', blocked: true })
  a.captureVisit()
  window.location.pathname = '/contact'
  window.location.search = ''
  assert.equal(a.getLeadAttribution().utm_source, 'newsletter')
})
test('new campaign and expired visit start new attribution', async () => {
  let a = await visit({ search: '?utm_source=facebook' })
  a.captureVisit()
  window.location.search = '?utm_source=google&utm_medium=cpc'
  window.location.pathname = '/contact'
  assert.equal(a.getLeadAttribution().landing_page, '/contact')
  a = await visit({ saved: { started:'2020-01-01',updated:0,landing:'/old',referrer:'',campaign:{},pages:['/old'] } })
  assert.equal(a.getLeadAttribution().landing_page, '/services/deck-repair')
})
test('journey is bounded, consecutive duplicates omitted, same-site referrer excluded', async () => {
  const a = await visit({ referrer: 'https://decksrxkc.com/old' })
  for (let i = 0; i < 30; i++) { window.location.pathname = `/page-${i}`; a.captureVisit(); a.captureVisit() }
  const lead = a.getLeadAttribution()
  assert.equal(lead.page_journey.split(' → ').length, 20)
  assert.equal(lead.referrer, '')
})
test('server rendering requires no browser globals', async () => {
  const a = await visit()
  delete globalThis.window
  assert.deepEqual(a.getLeadAttribution(), {})
})
