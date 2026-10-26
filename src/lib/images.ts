export function getOptimizedImagePath(path: string, width?: 640 | 1200) {
  const optimizedPath = path.replace(/\.(?:jpe?g|png)$/i, width ? `-${width}.webp` : '.webp')
  return optimizedPath === path ? path : optimizedPath
}

export function getResponsiveImageProps(
  path: string,
  sizes = '100vw',
) {
  return {
    src: getOptimizedImagePath(path),
    srcSet: `${getOptimizedImagePath(path, 640)} 640w, ${getOptimizedImagePath(path, 1200)} 1200w, ${getOptimizedImagePath(path)} 1800w`,
    sizes,
  }
}

// Describe the photographed features, without assigning an unverified city,
// customer, material brand, or construction date to a project.
const imageDescriptions: Record<string, string> = {
  'kansas-city-custom-deck-builder': 'Custom backyard deck with stairs and railings',
  'kansas-city-screened-porch-wood-trim-black-screen': 'Screened porch with wood trim and black screens',
  'kansas-city-covered-screened-porch-addition': 'Covered screened porch addition attached to a home',
  'kansas-city-elevated-composite-deck-cable-railing-stairs': 'Elevated composite deck with cable railing and stairs',
  'kansas-city-elevated-screened-deck-wood-stairs': 'Elevated screened deck with wood stairs leading to the yard',
  'kansas-city-deck-stairs-railing-skirt': 'Deck stairs, railing, and skirting details',
  'kansas-city-composite-deck-cable-railing-stairs': 'Composite deck with cable railing and stairs',
  'kansas-city-composite-deck-board-railing-detail': 'Close view of composite deck boards and railing',
  'kansas-city-covered-deck-framing-addition': 'Framing for a covered deck addition',
  'kansas-city-large-backyard-deck-build': 'Large deck under construction in a backyard',
  'kansas-city-fall-deck-leaves-weathered-boards': 'Leaves on weathered deck boards in fall',
}

export function getImageDescription(path: string) {
  const name = path.split('/').pop()?.replace(/(?:-640|-1200)?\.(?:webp|jpe?g|png)$/i, '') ?? ''
  return imageDescriptions[name] ?? 'Deck project details'
}
