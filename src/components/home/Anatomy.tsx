import { useEffect, useMemo, useRef, useState } from 'react'
import { SectionIntro } from '../ui'

/* -------------------------------------------------------------------------- */
/* Geometry — a 16' × 12' elevated deck built from axis-aligned boxes and      */
/* drawn in isometric projection. Units are feet.                              */
/* -------------------------------------------------------------------------- */

type Box = { x: number; y: number; z: number; w: number; d: number; h: number }
type Material = 'concrete' | 'lumber' | 'decking' | 'rail' | 'stair'
type Layer = { id: string; title: string; copy: string; material: Material; boxes: Box[] }

const UNIT = 18
const COS = Math.cos(Math.PI / 6)
const GAP = 2.7 // exploded spacing between layers, in feet

const W = 16
const D = 12
const FOOTING_TOP = 0.5
const POST_TOP = 3.9
const BEAM_TOP = 4.7
const JOIST_TOP = 5.5
const DECK_TOP = 5.64
const RAIL_TOP = DECK_TOP + 3

function buildLayers(): Layer[] {
  const postXs = [1, 8, 15]
  const postYs = [1, 11]
  const posts = postXs.flatMap((x) => postYs.map((y) => ({ x, y })))

  const footings = posts.map(({ x, y }) => ({ x: x - 0.6, y: y - 0.6, z: 0, w: 1.2, d: 1.2, h: FOOTING_TOP }))
  const postBoxes = posts.map(({ x, y }) => ({ x: x - 0.25, y: y - 0.25, z: FOOTING_TOP, w: 0.5, d: 0.5, h: POST_TOP - FOOTING_TOP }))
  const beams = postYs.map((y) => ({ x: 0.4, y: y - 0.3, z: POST_TOP, w: W - 0.8, d: 0.6, h: BEAM_TOP - POST_TOP }))

  const joists: Box[] = []
  for (let i = 0; i <= 12; i += 1) {
    joists.push({ x: Math.min(W - 0.2, (i * W) / 12), y: 0.2, z: BEAM_TOP, w: 0.2, d: D - 0.4, h: JOIST_TOP - BEAM_TOP })
  }
  joists.push({ x: 0, y: 0, z: BEAM_TOP, w: W, d: 0.2, h: JOIST_TOP - BEAM_TOP })
  joists.push({ x: 0, y: D - 0.2, z: BEAM_TOP, w: W, d: 0.2, h: JOIST_TOP - BEAM_TOP })

  const decking: Box[] = []
  const pitch = 0.55
  for (let y = 0.03; y + 0.47 <= D + 0.01; y += pitch) {
    decking.push({ x: -0.15, y, z: JOIST_TOP, w: W + 0.3, d: 0.47, h: DECK_TOP - JOIST_TOP })
  }

  const rails: Box[] = []
  const post = 0.36
  const rail = (from: number, to: number, fixed: number, axis: 'x' | 'y') => {
    const length = to - from
    const along = (start: number, size: number, z: number, h: number, depth = post): Box =>
      axis === 'x'
        ? { x: start, y: fixed, z, w: size, d: depth, h }
        : { x: fixed, y: start, z, w: depth, d: size, h }
    // posts every ~4'
    const count = Math.max(1, Math.round(length / 4))
    for (let i = 0; i <= count; i += 1) {
      const at = Math.min(to - post, from + (i * length) / count - (i === 0 ? 0 : post / 2))
      rails.push(along(at, post, DECK_TOP, RAIL_TOP - DECK_TOP))
    }
    // balusters
    for (let at = from + 0.5; at < to - 0.35; at += 0.42) {
      rails.push({ ...along(at, 0.1, DECK_TOP + 0.3, RAIL_TOP - DECK_TOP - 0.5, 0.1), [axis === 'x' ? 'y' : 'x']: fixed + 0.13 })
    }
    rails.push(along(from, length, DECK_TOP + 0.22, 0.12))
    rails.push(along(from - 0.04, length + 0.08, RAIL_TOP - 0.2, 0.2, post + 0.08))
  }
  rail(0, D, 0, 'y') // back-left edge
  rail(0, W, 0, 'x') // back-right edge
  rail(0, D, W - post, 'y') // front-right edge
  rail(0, 10, D - post, 'x') // front-left edge, left of the stair
  rail(14, W, D - post, 'x') // front-left edge, right of the stair

  const stairs: Box[] = []
  const steps = 7
  const rise = DECK_TOP / steps
  const run = 0.95
  for (let i = 0; i < steps - 1; i += 1) {
    stairs.push({ x: 10, y: D + i * run, z: 0, w: 4, d: run, h: DECK_TOP - (i + 1) * rise })
  }

  return [
    { id: 'footings', title: 'Footings', material: 'concrete', boxes: footings, copy: 'Concrete footings are sized and set to the depth the design and local code call for, so the deck starts on solid ground.' },
    { id: 'posts', title: 'Posts', material: 'lumber', boxes: postBoxes, copy: 'Posts are sized for the height of the deck and tied to the footings with the right hardware.' },
    { id: 'beams', title: 'Beams', material: 'lumber', boxes: beams, copy: 'Beams carry the load between posts. Spans and post spacing are worked out before a board is cut.' },
    { id: 'joists', title: 'Joists', material: 'lumber', boxes: joists, copy: 'Joists are spaced for the decking you choose — composite and wood boards have different requirements.' },
    { id: 'decking', title: 'Decking', material: 'decking', boxes: decking, copy: 'Composite or wood boards, fastened and gapped for drainage and a clean, consistent surface.' },
    { id: 'rails', title: 'Rails & stairs', material: 'rail', boxes: [...rails, ...stairs.map((box) => ({ ...box, stair: true }) as Box)], copy: 'Railings, stairs, and landings are finished as part of the same system — straight, solid, and easy to use.' },
  ]
}

function project(x: number, y: number, z: number) {
  return [(x - y) * COS * UNIT, ((x + y) * 0.5 - z) * UNIT] as const
}

function toPoints(points: Array<readonly [number, number]>) {
  return points.map(([px, py]) => `${px.toFixed(1)},${py.toFixed(1)}`).join(' ')
}

function boxFaces({ x, y, z, w, d, h }: Box) {
  const top = [project(x, y, z + h), project(x + w, y, z + h), project(x + w, y + d, z + h), project(x, y + d, z + h)]
  const right = [project(x + w, y, z), project(x + w, y + d, z), project(x + w, y + d, z + h), project(x + w, y, z + h)]
  const left = [project(x, y + d, z), project(x + w, y + d, z), project(x + w, y + d, z + h), project(x, y + d, z + h)]
  return { top: toPoints(top), left: toPoints(left), right: toPoints(right) }
}

const ease = (t: number) => 1 - Math.pow(1 - t, 3)
const clamp = (value: number) => Math.min(1, Math.max(0, value))

/** Per-layer lift (feet) and local progress for a given overall progress. */
function layerState(progress: number, count: number) {
  const scaled = progress * (count + 0.6)
  const local = Array.from({ length: count }, (_, index) => clamp(scaled - index))
  const lifts = local.map((_, index) => {
    let lift = 0
    for (let j = 0; j <= index; j += 1) lift += GAP * (1 - ease(local[j]))
    return lift
  })
  const active = Math.min(count - 1, Math.floor(scaled))
  return { local, lifts, active }
}

export function Anatomy() {
  const layers = useMemo(buildLayers, [])
  const stageRef = useRef<HTMLDivElement>(null)
  const groupRefs = useRef<Array<SVGGElement | null>>([])
  const dimsRef = useRef<SVGGElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const drawing = useMemo(() => {
    let minX = Infinity
    let maxX = -Infinity
    let minY = Infinity
    let maxY = -Infinity
    const extend = (px: number, py: number) => {
      minX = Math.min(minX, px)
      maxX = Math.max(maxX, px)
      minY = Math.min(minY, py)
      maxY = Math.max(maxY, py)
    }

    const groups = layers.map((layer, index) => {
      const sorted = [...layer.boxes].sort((a, b) => a.x + a.w / 2 + a.y + a.d / 2 + (a.z + a.h) * 0.05 - (b.x + b.w / 2 + b.y + b.d / 2 + (b.z + b.h) * 0.05))
      let leftMost: readonly [number, number] = [Infinity, 0]
      const lift = GAP * (index + 1)
      const faces = sorted.map((box) => {
        for (const [px, py, pz] of [[box.x, box.y, box.z], [box.x + box.w, box.y + box.d, box.z + box.h], [box.x, box.y + box.d, box.z + box.h], [box.x + box.w, box.y, box.z]] as const) {
          const [sx, sy] = project(px, py, pz)
          extend(sx, sy)
          extend(sx, sy - lift * UNIT)
          if (sx < leftMost[0]) leftMost = [sx, sy]
        }
        return { ...boxFaces(box), stair: Boolean((box as Box & { stair?: boolean }).stair) }
      })
      return { layer, faces, anchor: leftMost }
    })

    // Dimension strings floating above the finished deck
    const dimZ = RAIL_TOP + 1.3
    const a = project(0, -1, dimZ)
    const b = project(W, -1, dimZ)
    const c = project(-1, 0, dimZ)
    const e = project(-1, D, dimZ)
    for (const [px, py] of [a, b, c, e]) extend(px, py)

    const labelX = minX - 150
    const pad = 24
    return {
      groups,
      dims: { a, b, c, e },
      labelX,
      viewBox: `${(labelX - pad).toFixed(0)} ${(minY - pad).toFixed(0)} ${(maxX - labelX + pad * 2).toFixed(0)} ${(maxY - minY + pad * 2).toFixed(0)}`,
    }
  }, [layers])

  const initial = layerState(0, layers.length)

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    let lastActive = -1

    const apply = (progress: number) => {
      const state = layerState(progress, layers.length)
      state.lifts.forEach((lift, index) => {
        const group = groupRefs.current[index]
        if (!group) return
        group.setAttribute('transform', `translate(0 ${(-lift * UNIT).toFixed(1)})`)
        group.classList.toggle('is-set', state.local[index] >= 0.98)
        group.classList.toggle('is-active', index === state.active && state.local[index] < 0.98)
      })
      dimsRef.current?.classList.toggle('is-set', progress > 0.97)
      if (barRef.current) barRef.current.style.transform = `scaleX(${progress.toFixed(4)})`
      if (state.active !== lastActive) {
        lastActive = state.active
        setActive(state.active)
      }
    }

    if (reduce) {
      apply(1)
      return
    }

    const update = () => {
      frame = 0
      const rect = stage.getBoundingClientRect()
      const travel = rect.height - window.innerHeight
      apply(travel > 0 ? clamp(-rect.top / travel) : 0)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [layers])

  return (
    <section id="anatomy" className="grain relative bg-night text-bone">
      <div className="shell pt-24 lg:pt-36">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionIntro
            title={<>Built from the <em className="text-soft-beige">footings</em> up</>}
            copy="The parts you walk on get the attention. The parts underneath decide how long it lasts. Scroll to assemble a deck the way we build one — layer by layer."
            tone="dark"
          />
        </div>
      </div>

      <div ref={stageRef} className="relative h-[300svh] lg:h-[460svh]">
        <div className="sticky top-0 flex h-[100svh] items-center overflow-hidden">
          <div className="blueprint pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_60%_50%,black_30%,transparent_75%)]" aria-hidden="true" />
          <div className="shell relative grid w-full gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-10">
            <div className="order-last lg:order-none">
              <div className="h-px bg-bone/12">
                <div ref={barRef} className="h-px w-full origin-left scale-x-0 bg-soft-beige" />
              </div>
              <ol>
                {layers.map((layer, index) => {
                  const isActive = index === active
                  return (
                    <li key={layer.id} className={`border-b hairline-light py-4 transition-opacity duration-500 lg:py-5 ${isActive ? 'block opacity-100' : 'hidden opacity-35 lg:block'}`}>
                      <h3 className="font-display text-[clamp(1.9rem,2.6vw,2.8rem)] leading-none">{layer.title}</h3>
                      <div className={`grid transition-[grid-template-rows] duration-700 ease-[var(--ease-out-expo)] ${isActive ? 'grid-rows-[1fr]' : 'grid-rows-[1fr] lg:grid-rows-[0fr]'}`}>
                        <p className="overflow-hidden text-[0.98rem] leading-7 text-bone/65">
                          <span className="block pt-3">{layer.copy}</span>
                        </p>
                      </div>
                    </li>
                  )
                })}
              </ol>
            </div>

            <svg className="anatomy mx-auto h-[46svh] w-full max-w-full lg:h-[86svh]" viewBox={drawing.viewBox} role="img" aria-label="Exploded isometric drawing of a deck assembling from footings, posts, beams, joists, and decking up to railings and stairs">
              {drawing.groups.map(({ layer, faces, anchor }, index) => (
                <g
                  key={layer.id}
                  ref={(el) => { groupRefs.current[index] = el }}
                  data-material={layer.material}
                  transform={`translate(0 ${(-initial.lifts[index] * UNIT).toFixed(1)})`}
                >
                  <line className="leader" x1={drawing.labelX + 118} y1={anchor[1]} x2={anchor[0] - 8} y2={anchor[1]} />
                  <text className="label" x={drawing.labelX} y={anchor[1] + 4}>
                    {layer.title.toUpperCase()}
                  </text>
                  {faces.map((face, faceIndex) => (
                    <g key={faceIndex} className={face.stair ? 'stair' : undefined}>
                      <polygon className="f-left" points={face.left} />
                      <polygon className="f-right" points={face.right} />
                      <polygon className="f-top" points={face.top} />
                    </g>
                  ))}
                </g>
              ))}
              <g ref={dimsRef} className="dims">
                <line x1={drawing.dims.a[0]} y1={drawing.dims.a[1]} x2={drawing.dims.b[0]} y2={drawing.dims.b[1]} />
                <line x1={drawing.dims.c[0]} y1={drawing.dims.c[1]} x2={drawing.dims.e[0]} y2={drawing.dims.e[1]} />
                <text x={(drawing.dims.a[0] + drawing.dims.b[0]) / 2 + 10} y={(drawing.dims.a[1] + drawing.dims.b[1]) / 2 - 10}>16&apos;-0&quot;</text>
                <text x={(drawing.dims.c[0] + drawing.dims.e[0]) / 2 - 70} y={(drawing.dims.c[1] + drawing.dims.e[1]) / 2 - 10}>12&apos;-0&quot;</text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
