import { createRequire } from 'node:module'
// Optional authoring tool; sharp is not shipped to the browser or required by builds.
// Provide sharp in the local environment, or set SHARP_MODULE_PATH to its module directory.
const sharp = createRequire(import.meta.url)(process.env.SHARP_MODULE_PATH || 'sharp')
import { readdir, writeFile, stat } from 'node:fs/promises'
const manifest = {}
let saved = 0
for (const dir of ['public/images', 'public/images/optimized']) {
 for (const file of await readdir(dir)) {
  if (!file.endsWith('.webp') || /-(640|800|1200)\.webp$/.test(file)) continue
  const base = `${dir}/${file}`
  let original = base.replace(/\.webp$/, '.jpg')
  try { await stat(original) } catch { original = base }
  const middle = base.replace(/\.webp$/, '-800.webp')
  await sharp(original).resize({width:800,withoutEnlargement:true}).webp({quality:80}).toFile(middle)
  const candidates = []
  for (const path of [base.replace(/\.webp$/, '-640.webp'), middle, base.replace(/\.webp$/, '-1200.webp'), base]) {
   const {width} = await sharp(path).metadata()
   const src = path.replace(/^public/, '')
   if (!candidates.some(c=>c.width===width)) candidates.push({src,width})
  }
  manifest[base.replace(/^public/, '')] = candidates.sort((a,b)=>a.width-b.width)
  saved += (await stat(base.replace(/\.webp$/, '-1200.webp'))).size - (await stat(middle)).size
 }
}
await writeFile('src/data/responsiveImages.json', JSON.stringify(manifest,null,2)+'\n')
console.log(JSON.stringify({images:Object.keys(manifest).length,totalSavingsVs1200:saved}))
