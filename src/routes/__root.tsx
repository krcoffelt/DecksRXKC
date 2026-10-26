import type { ReactNode } from 'react'
import { useEffect } from 'react'
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  useLocation,
} from '@tanstack/react-router'
import { defaultSeoDescription, defaultSeoImagePath, defaultSeoTitle, getNotFoundHead, getSeoHead } from '../lib/seo'
import { gaMeasurementId, googleAdsId, googleTagId } from '../lib/analytics'
import { MotionController } from '../components/motion'
import { captureVisit } from '../lib/attribution'
import { SiteHeader } from '../components/SiteHeader'
import { SiteFooter } from '../components/SiteFooter'
import '../styles.css'

export const Route = createRootRoute({
  head: ({ match, matches }) => {
    const seo = match.globalNotFound || match.status === 'notFound' ? getNotFoundHead() : getSeoHead({ matches,
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
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/instrument-serif-400-italic.woff2', crossOrigin: 'anonymous' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/icon-192.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
    }
  },
  component: RootComponent,
  notFoundComponent: NotFoundPage,
})

function RootComponent() {
  const location = useLocation()
  useEffect(() => { captureVisit() }, [location.href])
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
        {googleTagId ? (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`} />
            <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());${googleAdsId ? `gtag('config',${JSON.stringify(googleAdsId)});` : ''}${gaMeasurementId ? `gtag('config',${JSON.stringify(gaMeasurementId)},{anonymize_ip:true});` : ''}` }} />
          </>
        ) : null}
      </head>
      <body>
        <div id="top" aria-hidden="true" />
        <a
          href="#main"
          className="fixed top-3 left-3 z-[100] -translate-y-24 bg-soft-beige px-4 py-3 text-sm font-semibold text-night transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
        <MotionController />
        <Scripts />
      </body>
    </html>
  )
}

function NotFoundPage() {
  return <main id="main" className="min-h-screen bg-bone text-ink" data-header-tone="light">
    <SiteHeader />
    <section className="shell py-28">
      <p className="eyebrow">404</p>
      <h1 className="display-md mt-6">Page not found</h1>
      <p className="lede mt-6">This page may have moved. Explore our deck services or return to the homepage.</p>
      <a href="/" className="link-line mt-8 inline-block">Return to DecksRX KC</a>
      <a href="/services" className="link-line mt-8 ml-8 inline-block">Explore deck services</a>
    </section>
    <SiteFooter />
  </main>
}
