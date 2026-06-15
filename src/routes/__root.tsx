import type { ReactNode } from 'react'
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        title: 'DecksRXKC — Custom Decks & Screened-In Decks in Kansas City',
      },
      {
        name: 'description',
        content:
          'DecksRXKC builds custom decks, screened-in decks, covered decks, stairs, railings, and outdoor living spaces for Kansas City homeowners.',
      },
      {
        property: 'og:description',
        content:
          'DecksRXKC builds custom decks, screened-in decks, covered decks, stairs, railings, and outdoor living spaces for Kansas City homeowners.',
      },
      {
        property: 'og:title',
        content: 'DecksRXKC — Custom Decks & Screened-In Decks in Kansas City',
      },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      {
        rel: 'preload',
        as: 'image',
        href: '/images/kansas-city-composite-covered-deck-railing-detail.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/images/decksrxkc-full-logo-transparent.png',
      },
    ],
  }),
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
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
