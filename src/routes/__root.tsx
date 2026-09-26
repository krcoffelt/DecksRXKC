import type { ReactNode } from 'react'
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { defaultSeoDescription, defaultSeoImagePath, defaultSeoTitle, getSeoHead } from '../lib/seo'
import { gaMeasurementId } from '../lib/analytics'
import { MotionController } from '../components/motion'
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
        { name: 'theme-color', content: '#11100e' },
        ...seo.meta,
      ],
      links: [
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/archivo-variable.woff2', crossOrigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff', href: '/fonts/instrument-serif-400-italic.woff', crossOrigin: 'anonymous' },
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
        <div id="top" aria-hidden="true" />
        {children}
        <MotionController />
        <Scripts />
      </body>
    </html>
  )
}
