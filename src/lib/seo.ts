export const siteUrl = 'https://decksrxkc.com'

export const defaultSeoTitle = 'Kansas City Deck Builder | Custom & Covered Decks | DecksRX KC'
export const defaultSeoDescription =
  'DecksRXKC builds custom decks, screened-in decks, covered decks, stairs, railings, and outdoor living spaces for Kansas City homeowners.'
export const defaultSeoImagePath = '/images/optimized/kansas-city-composite-covered-deck-railing-detail.jpg'
export const defaultSeoImage = `${siteUrl}${defaultSeoImagePath}`

type SeoHeadOptions = {
  matches?: ReadonlyArray<{ globalNotFound?: boolean; status?: string }>
  title: string
  description: string
  path?: string
  image?: string
  type?: 'website' | 'article'
}

export function absoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl
  }

  return `${siteUrl}${pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`}`
}

export function getSeoHead({
  matches,
  title,
  description,
  path = '/',
  image = defaultSeoImage,
  type = 'website',
}: SeoHeadOptions) {
  if (matches?.some((match) => match.globalNotFound || match.status === 'notFound')) return getNotFoundHead()
  const canonicalUrl = absoluteUrl(path)
  const imageUrl = absoluteUrl(image)

  return {
    meta: [
      { title },
      { name: 'description', content: description },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:type', content: type },
      { property: 'og:url', content: canonicalUrl },
      { property: 'og:image', content: imageUrl },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: imageUrl },
    ],
    links: [
      {
        rel: 'canonical',
        href: canonicalUrl,
      },
    ],
  }
}

export function getNotFoundHead() {
  return { links: [], meta: [
    { title: 'Page Not Found | DecksRX KC' },
    { name: 'description', content: 'This page could not be found. Explore DecksRX KC deck services and planning guides.' },
    { name: 'robots', content: 'noindex, follow' },
  ] }
}
