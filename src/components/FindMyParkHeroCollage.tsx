import { useLayoutEffect, useRef } from 'react'
import resting from '../assets/find-my-park-resting.jpg'
import dogWalk from '../assets/find-my-park-dog-walk.jpg'
import reading from '../assets/find-my-park-reading-lawn.jpg'
import discovery from '../assets/find-my-park-main-mockup.png'
import recommendation from '../assets/find-my-park-detail-mockup.png'
import './find-my-park-hero-collage.css'

export function FindMyParkHeroCollage() {
  const collageRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const collage = collageRef.current
    const hero = collage?.closest<HTMLElement>('.fmp-hero')
    const start = hero?.querySelector<HTMLElement>('[data-fmp-headline-start]')
    const end = hero?.querySelector<HTMLElement>('[data-fmp-headline-end]')
    const description = hero?.querySelector<HTMLElement>('.pc-lede')
    if (!collage || !hero || !start || !end || !description) return

    const alignPhotos = () => {
      const startBounds = start.getBoundingClientRect()
      const endBounds = end.getBoundingClientRect()
      const contentTop = hero.getBoundingClientRect().top + parseFloat(getComputedStyle(hero).paddingTop)
      collage.style.setProperty('--fmp-photo-top', `${startBounds.top - contentTop}px`)
      collage.style.setProperty('--fmp-photo-height', `${endBounds.bottom - startBounds.top}px`)
      const photoExtent = description.getBoundingClientRect().bottom - startBounds.top
      collage.style.setProperty('--fmp-photo-extent', `${photoExtent}px`)
    }
    const observer = new ResizeObserver(alignPhotos)
    observer.observe(hero.querySelector('h1')!)
    observer.observe(hero)
    observer.observe(description)
    alignPhotos()
    void document.fonts.ready.then(() => {
      if (collage.isConnected) alignPhotos()
    })
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={collageRef} className="fmp-hero-collage" aria-label="Relaxing, walking dogs, and reading in the park, with Find My Park app screens">
      <div className="fmp-hero-collage-photos">
        <img className="fmp-collage-resting" src={resting} alt="A person relaxing in a chair surrounded by greenery" />
        <img className="fmp-collage-dogs" src={dogWalk} alt="People walking their dogs across a park lawn" />
        <img className="fmp-collage-reading" src={reading} alt="Two people reading books beside a pond" />
      </div>
      <img className="fmp-collage-discovery" src={discovery} alt="Find My Park screen for describing your ideal park visit" />
      <img className="fmp-collage-recommendation" src={recommendation} alt="A recommended park in Find My Park" />
    </div>
  )
}
