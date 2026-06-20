import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/service-areas')({
  component: ServiceAreasLayout,
})

function ServiceAreasLayout() {
  return <Outlet />
}

