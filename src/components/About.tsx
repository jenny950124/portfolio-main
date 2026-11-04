import { useRef, useState, type CSSProperties } from 'react'
import type { PortfolioCopy } from '../data/copy'
import portrait from '../assets/about/portrait.jpg'
import matcha from '../assets/about/matcha.jpg'
import snowman from '../assets/about/book-snowman.jpg'
import gingerbread from '../assets/about/gingerbread.jpg'
import table from '../assets/about/cafe-table.jpg'
import strawberry from '../assets/about/strawberry.jpg'
import sunset from '../assets/about/sunset.jpg'
import tulips from '../assets/about/tulips.jpg'
import florist from '../assets/about/florist.jpg'
import espresso from '../assets/about/espresso.jpg'
import selfie from '../assets/about/selfie_vancouver.png'
import camping from '../assets/about/summer_camping.png'
import designbook from '../assets/about/designbook.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import './about-gallery.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const photos = [
  { id: 'sunset', src: sunset, alt: 'Cyclists beneath trees at a pink Vancouver sunset', title: 'A place I return to every summer.', ko: '여름이 오면 찾아가는 곳.', body: 'Coal Harbour, even the smallest sounds become music here.', bodyKo: '밴쿠버 콜 하버. 작은 소리 하나까지도 음악이 되는 곳.' },
  { id: 'strawberry', src: strawberry, alt: 'Iced coffee and strawberry dessert at a café', title: 'What signs does a sick cat show?', ko: '아픈 고양이는 어떤 자세를 취할까?.', body: 'Sick Cat Sign, South Korea. A café I visit whenever I’m back home—though finding the entrance was a challenge.', bodyKo: '식캣사인이라는 한국에 있는 카페지만 입구 찾기가 어려웠던 곳' },
  { id: 'florist', src: florist, alt: 'Jenny looking at colourful flowers in a flower shop', title: 'Flower Shop in Fort Langley.', ko: '포트랭니에 있는 빈티지 꽃 상점', body: 'A flower-shop moment in Fort Langley.', bodyKo: '작은 마을에서 만난 꽃집.' },
  { id: 'tulips', src: tulips, alt: 'Purple and yellow tulips outside a flower shop', title: 'Colour, collected.', ko: '모아 둔 색들.', body: 'Purple tulips and yellow petals at a Fort Langley flower shop.', bodyKo: '꽃집의 보라색 튤립과 노란 꽃잎의 자연의 색 조합.' },
  { id: 'espresso', src: espresso, alt: 'Stacked espresso cups in front of a red café poster', title: 'Espresso Bar.', ko: '리사르 에스프레소 바', body: 'An espresso-bar stop in South Korea, with a little vintage charm.', bodyKo: '한국의 에스프레소 바. 빈티지한 매력이 있는 공간에서 잠시 쉬어 가기.' },
  { id: 'portrait', src: portrait, alt: 'Jenny seated in a café wearing a cream blouse', title: 'Hi, I’m Jenny.', ko: '안녕하세요, 제니예요.', body: 'A little celebration at ELLIPSIS in Vancouver after successfully completing my internship.', bodyKo: '성공적으로 인턴십을 마친 나에게 선물.' },
  { id: 'selfie', src: selfie, alt: 'Jenny smiling in a Vancouver park with glasses and two peace signs', title: 'Portfolio Presentaion Day.', ko: '포트폴리오 발표의 날.', body: 'Returning to campus as a graduate, feeling something I’d never felt before.', bodyKo: '학생이 아닌 졸업생으로 다시 간 학교 처음느끼는 감정을 마주했던 날' },
  { id: 'gingerbread', src: gingerbread, alt: 'The gingerbread house made at Christmas', title: 'My own little ritual, every Christmas.', ko: '나만의 크리스마스 즐기는 법:', body: 'My way of celebrating Christmas: building a gingerbread house and watching Home Alone 1, 2, and 3.', bodyKo: '진져브레드 하우스 만들기와 나 홀로 집에 1,2,3 보기.' },
  { id: 'matcha', src: matcha, alt: 'Iced matcha with cream and strawberry pastries', title: 'Who thought of this combination?', ko: '이 조합은 누가 생각해 낸건지 절 받으세요.', body: 'Matcha and ube—a combination that never disappoints', bodyKo: '말차와 우베의 실패 없는 조합' },
  { id: 'snowman', src: snowman, alt: 'A snowman character assembled from a stack of books', title: 'A snowman never melts', ko: '절대 녹지 않는 눈사람.', body: 'A snowman made with books at Sick Cat Sign café', bodyKo: '감도 높은 카페 사장님의 겨울을 보내는 법.' },
  { id: 'table', src: table, alt: 'Coffee and cake on a round café table', title: 'With coffee winter is never cold', ko: '커피를 더 맛있게 즐기기.', body: 'I love cold winters—they make a warm cup of coffee taste even better.', bodyKo: '따뜻한 커피를 더 맛있게 만들어주는 추운 겨울이 좋다' },
  { id: 'camping', src: camping, alt: 'A colourful umbrella beside a mountain lake during summer camping', title: 'Savouring Vancouver’s short summer, slowly and happily.', ko: '밴쿠버의 짦은 여름을 더 천천히 그리고 가장 행복하게 보내는 법.', body: 'A camping chair, a book, music, and a view I never get tired of.', bodyKo: '캠핑 의자, 책, 노래, 그리고 절대 질리지 않는 뷰.' },
  {id: 'designbook',src: designbook, alt: 'Yellow cover of The Design of Everyday Things beside glasses', title: 'What is good design?', ko: '좋은 디자인이란?', body: `Good designs fit our needs so well that the design is invisible, serving us without drawing attention to itself.
    — Don Norman, The Design of Everyday Things (2013)`, bodyKo: `좋은 디자인은 우리의 필요에 너무나 잘 맞아 그 존재를 의식하지 못하게 한다. 자신에게 시선을 끌지 않으면서 우리를 돕는 것이다.
    — 돈 노먼, 《일상의 디자인》(2013)`,},
]

// Photos begin over the title, then spread outward as the visitor scrolls.
const photoPositions = [
  [18, 32, 0, 35, 33, -14], [34, 23, 0, 45, 32, 8],
  [67, 23, 0, 56, 33, -8], [82, 33, 0, 65, 35, 13],
  [14, 52, 0, 34, 44, -9], [86, 52, 0, 65, 44, 9],
  [20, 71, 0, 36, 54, -12], [36, 77, 0, 46, 53, 12],
  [68, 77, 0, 56, 53, -7], [9, 74, 0, 40, 48, 10],
  [91, 73, 0, 61, 51, -11], [52, 80, 0, 51, 57, 5],
  [51, 20, 0, 50, 41, -8],
]

export function About({ t }: { t: PortfolioCopy }) {
  const [open, setOpen] = useState<string | null>(null)
  const stage = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    const element = stage.current
    if (!element) return
    const media = gsap.matchMedia()
    media.add({ desktop: '(min-width: 761px)', reduced: '(prefers-reduced-motion: reduce)' }, context => {
      const { desktop, reduced } = context.conditions!
      if (!desktop) return
      const cards = Array.from(element.querySelectorAll<HTMLElement>('.about-photo'))
      const heading = element.querySelector('.about-editorial-header')
      if (reduced) {
        cards.forEach((card, index) => {
          const [x, y, angle] = photoPositions[index]
          gsap.set(card, { left: `${x}%`, top: `${y}%`, rotation: angle, xPercent: -50, yPercent: -50 })
        })
        gsap.set(heading, { top: '50%', opacity: 1 })
        return
      }
      // Complete on entry; reset only after scrolling entirely above the section.
      // Transforms avoid relaying out every photo on each scroll frame.
      const scene = element.querySelector<HTMLElement>('.about-scatter-scene')!
      const timeline = gsap.timeline({ scrollTrigger: {
        trigger: scene, start: 'top 55%', toggleActions: 'play none none none',
        invalidateOnRefresh: true,
      } })
      cards.forEach((card, index) => {
        const [x, y, angle, startX, startY, startAngle] = photoPositions[index]
        gsap.set(card, { left: `${x}%`, top: `${y}%`, xPercent: -50, yPercent: -50 })
        timeline.fromTo(card,
          { x: () => (startX - x) / 100 * scene.clientWidth,
            y: () => (startY - y) / 100 * scene.clientHeight,
            rotation: startAngle, scale: 1.8, xPercent: -50, yPercent: -50 },
          { x: 0, y: 0, xPercent: -50, yPercent: -50, rotation: angle, scale: 1, duration: 0.9, ease: 'power3.out' },
          0,
        )
      })
      timeline.fromTo(heading, { top: '50%', opacity: 0 },
        { opacity: 1, duration: 0.45, ease: 'power1.out' }, 0.15)
      ScrollTrigger.create({
        trigger: element.closest('#about')!,
        start: 'top bottom',
        onLeaveBack: () => { timeline.pause(0) },
      })

    })
    return () => media.revert()
  }, { scope: stage })
  const korean = t.aboutLabel === '소개'
  return (
    <section className="about-section about-editorial page-grid" id="about" aria-labelledby="about-title">
      <p className="eyebrow about-section-label">03 · {t.aboutLabel}</p>
      <div className="about-floating-stage" ref={stage}>
      <div className="about-scatter-scene">
      <header className="about-editorial-header">
        <div>
          <h2 id="about-title">{korean ? '픽셀 너머의 나' : <>Behind<br />the pixels</>}</h2>
        </div>
        <div className="about-editorial-intro">
          <p>{korean ? '나를 만들어 가는 일상의 작은 것들.' : 'The everyday things that shaped me.'}</p>
          <span>{korean ? '사진 뒤에 그 안의 이야기를 만나 보세요.' : 'Hover to see the stories behind the photos.'}</span>
        </div>
      </header>
      <div className="about-photo-grid">
        {photos.map((photo, index) => (
          <figure className={`about-photo about-photo--${photo.id}`} key={photo.id} style={{
            '--scatter-x': `${photoPositions[index][0]}%`,
            '--scatter-y': `${photoPositions[index][1]}%`,
            '--scatter-angle': `${photoPositions[index][2]}deg`,
            '--gather-x': `${photoPositions[index][3]}%`,
            '--gather-y': `${photoPositions[index][4]}%`,
            '--gather-angle': `${photoPositions[index][5]}deg`,
          } as CSSProperties}>
            <button className="about-photo-button" type="button" aria-expanded={open === photo.id} aria-controls={`about-note-${photo.id}`} aria-label={`${photo.alt}. ${korean ? photo.ko : photo.title} ${korean ? photo.bodyKo : photo.body}`} onClick={() => setOpen(open === photo.id ? null : photo.id)} onKeyDown={event => { if (event.key === 'Escape') { setOpen(null); event.currentTarget.blur() } }}>
              <span className="about-photo-flipper">
              <span className="about-photo-front">
              <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
              </span>
              <span className="about-photo-note" id={`about-note-${photo.id}`}>

                <strong>{korean ? photo.ko : photo.title}</strong>
                <span>{korean ? photo.bodyKo : photo.body}</span>
              </span>
              </span>
            </button>
          </figure>
        ))}
      </div>
      </div>
      </div>
    </section>
  )
}
