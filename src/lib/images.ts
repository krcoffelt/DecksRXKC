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
