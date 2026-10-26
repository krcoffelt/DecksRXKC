import { absoluteUrl } from '../lib/seo'
import { business } from '../data/business'

export function CollectionSchema({ name, path, items }: Readonly<{
  name: string
  path: string
  items: Array<{ name: string; path: string }>
}>) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${absoluteUrl(path)}#collection`,
    name,
    url: absoluteUrl(path),
    publisher: { '@id': business.entityId },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem', position: index + 1, name: item.name, url: absoluteUrl(item.path),
      })),
    },
  }).replace(/</g, '\\u003c') }} />
}
