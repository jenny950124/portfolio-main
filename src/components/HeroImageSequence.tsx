import { useEffect, useRef } from 'react'
import chrome from '../assets/hero-editorial-chrome.webp'
import vinyl from '../assets/hero-editorial-vinyl-pink.webp'
import mug from '../assets/hero-editorial-mug.webp'
import jazz from '../assets/hero-editorial-jazz.webp'
import gorp from '../assets/hero-editorial-gorp-v3.webp'
import energy from '../assets/hero-editorial-energy-lime.webp'
import holdGreen from '../assets/hero-editorial-hold-green.webp'
import holdRed from '../assets/hero-editorial-hold-red.webp'
import holdBlue from '../assets/hero-editorial-hold-blue.webp'

// Transparent 3D editorial objects inspired by the supplied references.
const photographs = [chrome, mug, jazz, vinyl, holdGreen, gorp, energy, holdRed, holdBlue]

type FallingPhoto = {
  image: HTMLImageElement; x: number; y: number; vx: number; vy: number;
  angle: number; spin: number; age: number; width: number; height: number;
}

export function HeroImageSequence() {
  const canvas = useRef<HTMLCanvasElement>(null)
  const cursorHint = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const element = canvas.current
    const host = element?.closest<HTMLElement>('.hero')
    const context = element?.getContext('2d')
    if (!element || !host || !context) return
    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    const images = photographs.map(src => { const image = new Image(); image.src = src; return image })
    let width = 0, height = 0, frame = 0, last = 0, visible = true, index = 0
    let previousX = 0, previousY = 0, lastSpawn = -1000
    let hintStarted = 0
    let hintTimer: ReturnType<typeof setTimeout> | undefined
    const particles: FallingPhoto[] = []
    const resize = () => {
      width = element.clientWidth; height = element.clientHeight
      const ratio = Math.min(devicePixelRatio, 2)
      element.width = width * ratio; element.height = height * ratio
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
    }
    const observer = new ResizeObserver(resize); observer.observe(element)
    const visibility = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting }); visibility.observe(host)
    const move = (event: PointerEvent) => {
      if (reduced.matches || event.pointerType === 'touch') return
      const bounds = element.getBoundingClientRect()
      const x = event.clientX - bounds.left, y = event.clientY - bounds.top
      const hint = cursorHint.current
      if (!hintStarted) {
        hintStarted = performance.now()
        hintTimer = setTimeout(() => { if (cursorHint.current) cursorHint.current.dataset.visible = 'false' }, 12000)
      }
      if (hint) {
        hint.style.transform = `translate3d(${Math.min(x + 20, width - 125)}px, ${Math.min(y + 20, height - 42)}px, 0)`
        hint.dataset.visible = performance.now() - hintStarted < 12000 ? 'true' : 'false'
      }
      const now = performance.now()
      if (now - lastSpawn < 110 || (now - lastSpawn < 500 && Math.hypot(x - previousX, y - previousY) < 55)) return
      const image = images[index % images.length]
      if (!image.complete || !image.naturalWidth) return
      index++
      const photoWidth = Math.min(210, Math.max(120, width * .145))
      particles.push({ image, x, y, vx: Math.max(-210, Math.min(210, (x - previousX) * 3)), vy: -130,
        angle: (Math.random() - .5) * .4, spin: (Math.random() - .5) * 1.8, age: 0,
        width: photoWidth, height: photoWidth * image.naturalHeight / image.naturalWidth })
      if (particles.length > 14) particles.shift()
      previousX = x; previousY = y; lastSpawn = now
    }
    const leave = () => { if (cursorHint.current) cursorHint.current.dataset.visible = 'false' }
    host.addEventListener('pointerleave', leave)
    host.addEventListener('pointermove', move, { passive: true })
    const draw = (time: number) => {
      const dt = last ? Math.min((time - last) / 1000, .035) : 0; last = time
      context.clearRect(0, 0, width, height)
      if (visible && !document.hidden && !reduced.matches) {
        for (let i = particles.length - 1; i >= 0; i--) {
          const photo = particles[i]; photo.age += dt
          if (photo.age > 3.2) { particles.splice(i, 1); continue }
          photo.vy += 1050 * dt; photo.x += photo.vx * dt; photo.y += photo.vy * dt; photo.angle += photo.spin * dt
          const floor = height - photo.height * .55 - 12
          if (photo.y > floor && photo.vy > 0) {
            photo.y = floor; photo.vy *= -.48; photo.vx *= .75; photo.spin *= .65
          }
          if ((photo.x < photo.width / 2 && photo.vx < 0) || (photo.x > width - photo.width / 2 && photo.vx > 0)) photo.vx *= -.65
          context.save(); context.translate(photo.x, photo.y); context.rotate(photo.angle)
          context.globalAlpha = Math.min(1, photo.age / .1) * Math.min(1, (3.2 - photo.age) / .65)
          context.drawImage(photo.image, -photo.width / 2, -photo.height / 2, photo.width, photo.height)
          context.restore()
        }
      } else particles.length = 0
      frame = requestAnimationFrame(draw)
    }
    resize(); frame = requestAnimationFrame(draw)
    return () => { clearTimeout(hintTimer); cancelAnimationFrame(frame); observer.disconnect(); visibility.disconnect(); host.removeEventListener('pointermove', move); host.removeEventListener('pointerleave', leave) }
  }, [])
  return <><span ref={cursorHint} className="hero-cursor-hint" aria-hidden="true">Move to play</span>
  <figure className="hero-falling-gallery" aria-hidden="true">
    <canvas ref={canvas} className="hero-falling-canvas" />
  </figure></>
}
