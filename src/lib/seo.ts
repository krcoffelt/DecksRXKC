export const siteUrl = 'https://decksrxkc.com'

export const defaultSeoTitle = 'DecksRXKC | Custom Decks & Screened-In Decks in Kansas City'
export const defaultSeoDescription =
  'DecksRXKC builds custom decks, screened-in decks, covered decks, stairs, railings, and outdoor living spaces for Kansas City homeowners.'
export const defaultSeoImagePath = '/images/optimized/kansas-city-composite-covered-deck-railing-detail.jpg'
export const defaultSeoImage = `${siteUrl}${defaultSeoImagePath}`

type SeoHeadOptions = {
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
  title,
  description,
  path = '/',
  image = defaultSeoImage,
  type = 'website',
}: SeoHeadOptions) {
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
