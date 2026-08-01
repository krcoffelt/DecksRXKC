import type { ReactNode } from 'react'
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { defaultSeoDescription, defaultSeoImagePath, defaultSeoTitle, getSeoHead } from '../lib/seo'
import { gaMeasurementId } from '../lib/analytics'
import '../styles.css'

export const Route = createRootRoute({
  head: () => {
    const seo = getSeoHead({
      title: defaultSeoTitle,
      description: defaultSeoDescription,
      path: '/',
      image: defaultSeoImagePath,
    })

    return {
      meta: [
        { charSet: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        ...seo.meta,
      ],
      links: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images/decksrxkc-full-logo-transparent.png',
        },
      ],
    }
  },
  component: RootComponent,
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {gaMeasurementId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${gaMeasurementId}',{anonymize_ip:true});` }} />
          </>
        ) : null}
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
