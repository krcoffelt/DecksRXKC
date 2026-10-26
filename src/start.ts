import { createMiddleware, createStart } from '@tanstack/react-start'

// Canonical page URLs omit the trailing slash. Preserve query attribution and
// leave form/API methods and the static thank-you directory alone.
const canonicalPages = createMiddleware().server(({ request, next }) => {
  const url = new URL(request.url)
  if ((request.method === 'GET' || request.method === 'HEAD') &&
      /^\/(?:(services|service-areas|guides|projects)(\/.*)?|about|contact|privacy-policy|terms-and-conditions)\/+$/.test(url.pathname)) {
    return new Response(null, {
      status: 301,
      headers: { Location: url.pathname.replace(/\/+$/, '') + url.search },
    })
  }
  return next()
})

export const startInstance = createStart(() => ({ requestMiddleware: [canonicalPages] }))
