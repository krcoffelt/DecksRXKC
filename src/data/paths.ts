/**
 * URL and label helpers kept apart from the content modules. Route `head`
 * functions stay in the main bundle, so importing these from here (rather than
 * from servicePages/guides/…) keeps page content out of every page's JavaScript.
 */
type WithSlug = { slug: string }

export function getServicePagePath(service: WithSlug) {
  return `/services/${service.slug}`
}

export function getProjectPagePath(project: WithSlug) {
  return `/projects/${project.slug}`
}

export function getGuidePagePath(guide: WithSlug) {
  return `/guides/${guide.slug}`
}

export function getServiceAreaPath(area: WithSlug) {
  return `/service-areas/${area.slug}`
}

export function getServiceAreaLabel(area: { city: string; state: string }) {
  return `${area.city}, ${area.state}`
}
