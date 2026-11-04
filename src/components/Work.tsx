import { useState, type CSSProperties } from 'react'
import { ArrowUpRight, Plus, Sun, Moon } from 'lucide-react'
import type { PortfolioCopy } from '../data/copy'
import cafeThumbnail from '../assets/aperture-thumbnail.webp'
import condoThumbnail from '../assets/condobooking_process.webp'
import rewardrobeThumbnail from '../assets/worn-forward-runner-landscape.webp'
import { FindMyParkPreview } from './FindMyParkPreview'
import './work-accordion.css'
type WorkProps = {
  t: PortfolioCopy
  onOpenFindMyPark: () => void
  onOpenAperture: () => void
  onOpenPowerPause: () => void
  onOpenCondo: () => void
  onOpenRewardrobe: () => void
}
export function Work({
  t,
  onOpenFindMyPark,
  onOpenAperture,
  onOpenPowerPause,
  onOpenCondo,
  onOpenRewardrobe,
}: WorkProps) {
  const [expanded, setExpanded] = useState<string | null>('find-my-park')
  const korean = t.selected === '주요 프로젝트'
  const projects = [
    {
      id: 'find-my-park', number: '01', title: t.fmpTitle,
      category: korean ? '모바일 프로덕트' : 'Mobile product',
      description: t.fmpDescription,
      tags: 'Product Design · UX Research · AI-Powered Discovery',
      image: '', alt: 'Find My Park discovery and recommendation screens',
      open: onOpenFindMyPark,
    },
    {
      id: 'aperture', number: '02', title: t.cafeTitle,
      category: korean ? '서비스 디자인' : 'Service design',
      description: t.cafeDescription,
      tags: 'Service Design · Brand Experience · Responsive Web',
      image: cafeThumbnail, alt: 'Coffee craft and the jazz bar at Aperture',
      open: onOpenAperture,
    },
    {
      id: 'powerpause', number: '03', title: t.powerTitle,
      category: korean ? '모바일 프로덕트' : 'Mobile product',
      description: t.powerDescription,
      tags: 'UX Strategy · UI Design · Interaction Design',
      image: '', alt: 'PowerPause home energy controls on a mobile screen',
      open: onOpenPowerPause,
    },
    {
      id: 'condo-connect', number: '04', title: t.condoTitle,
      category: korean ? '서비스 디자인' : 'Service design',
      description: t.condoDescription,
      tags: 'User Research · User Flows · Prototyping',
      image: condoThumbnail, alt: 'Condo Connect app screens showing amenity discovery, booking, and confirmation',
      open: onOpenCondo,
    },
    {
      id: 'rewardrobe', number: '05', title: 'RE:WARDROBE',
      category: korean ? '프로덕트 콘셉트' : 'Product concept',
      description: korean
        ? '소유한 옷을 새롭게 스타일링하고, 새로운 아이템을 미리 보고, 완성된 코디를 저장하고 공유하는 아웃도어 옷장 경험입니다.'
        : 'A personal outdoor wardrobe that restyles what people own, previews new pieces, and turns finished outfits into saveable, shareable lookbooks.',
      tags: 'Product Strategy · UX/UI · Interaction Design',
      image: rewardrobeThumbnail, alt: 'Outdoor runner against a blue sky and dark rocks',
      open: onOpenRewardrobe,
    },
  ]
  return (
    <section className="work-section work-editorial" id="work" aria-labelledby="work-title">
      <div className="work-section-heading page-grid">
        <h2 id="work-title" className="eyebrow">02 · Portfolio</h2>
      </div>
      <div className="work-accordion page-grid">
        {projects.map((project) => {
          const isExpanded = expanded === project.id
          const triggerId = `work-trigger-${project.id}`
          const panelId = `work-panel-${project.id}`
          return (
            <article className="work-entry" key={project.id} data-expanded={isExpanded}>
              <h3 className="work-entry-heading">
                <button
                  className="work-entry-trigger"
                  id={triggerId}
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  onPointerEnter={(event) => {
                    if (
                      event.pointerType === 'mouse' &&
                      window.matchMedia('(hover: hover) and (pointer: fine)').matches
                    ) {
                      setExpanded(project.id)
                    }
                  }}
                  onClick={() => setExpanded(isExpanded ? null : project.id)}
                >
                  <span className="work-entry-number">{project.number}</span>
                  <span className="work-entry-title">{project.title}</span>
                  <span className="work-entry-category">{project.category}</span>
                  <Plus className="work-entry-toggle" size={24} strokeWidth={1.4} aria-hidden="true" />
                </button>
              </h3>
              <div
                className="work-entry-panel"
                id={panelId}
                role="region"
                aria-labelledby={triggerId}
                aria-hidden={!isExpanded}
                inert={!isExpanded}
              >
                <div className="work-entry-panel-inner">
                  <div className="work-entry-content">
                    <div className="work-entry-details">
                      <p className="work-entry-description">{project.description}</p>
                      <div className="work-entry-disciplines">
                        <p className="work-entry-label">{korean ? '디자인 분야' : 'Disciplines'}</p>
                        <p>{project.tags}</p>
                      </div>
                      <a
                        className="work-entry-link"
                        href={`/work/${project.id}`}
                      >
                        <span>{korean ? '케이스 스터디 보기' : 'View case study'}</span>
                        <ArrowUpRight size={20} strokeWidth={1.5} aria-hidden="true" />
                      </a>
                    </div>
                    <a
                      className={`work-entry-visual work-entry-visual-${project.id}`}
                      href={`/work/${project.id}`}
                      aria-label={`${korean ? '케이스 스터디 보기:' : 'View case study:'} ${project.title}`}
                    >
                      {project.id === 'condo-connect' && (
                        <div className="work-condo-preview-heading" aria-hidden="true">
                          <span>RESIDENT EXPERIENCE</span>
                          <strong>Shared spaces.<br />Simply connected.</strong>
                        </div>
                      )}
                      {project.id === 'rewardrobe' ? <div className="wf-work-editorial"><span className="wf-work-word" aria-hidden="true">RE:<br />WEAR.</span><img src={project.image} alt={project.alt} loading="lazy" /><span className="wf-work-tape" aria-hidden="true">YOUR CLOSET. A NEW PERSPECTIVE. ↗</span></div> : project.id === 'find-my-park' ? <FindMyParkPreview /> : project.id === 'powerpause' ? <PowerPausePreview /> : (
                        <img src={project.image} alt={project.alt} loading="lazy" decoding="async" />
                      )}
                      {(project.id === 'aperture' || project.id === 'rewardrobe') && (
                        <div className="work-photo-preview-heading" aria-hidden="true">
                          <span>{project.id === 'aperture' ? 'COFFEE & JAZZ' : 'YOUR CLOSET, REDISCOVERED'}</span>
                          <strong>{project.id === 'aperture'
                            ? <>A place to gather.<br />A reason to stay.</>
                            : <>Your Wardrobe.<br />New Stories.</>}</strong>
                        </div>
                      )}
                      {project.id === 'aperture' && (
                        <div className="work-aperture-day-night" aria-hidden="true">
                          <span><Sun />Day · Coffee</span>
                          <i />
                          <span><Moon />Night · Jazz</span>
                        </div>
                      )}
                      {project.id === 'rewardrobe' && (
                        <div className="work-photo-preview-tags" aria-hidden="true">
                          {['Discover', 'Style', 'Share'].map(tag => <span key={tag}>{tag}</span>)}
                        </div>
                      )}
                      {project.id === 'condo-connect' && (
                        <div className="work-condo-preview-flow" aria-hidden="true">
                          <span>Discover</span><i /><span>Book</span><i /><span>Confirm</span>
                        </div>
                      )}
                      <span className="work-entry-image-arrow" aria-hidden="true">
                        <ArrowUpRight size={24} strokeWidth={1.5} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
function PowerPausePreview() {
  const bars = [[34, 52], [46, 68], [40, 60], [58, 82], [49, 71], [64, 90], [43, 66]]
  return (
    <div className="power-work-preview">
      <div className="power-work-preview-heading">
        <span>HOME ENERGY</span>
        <strong>A little pause.<br />A lighter footprint.</strong>
      </div>
      <div className="powerpause-live-panels">
        <div className="powerpause-energy-card">
          <div className="powerpause-energy-top">
            <div>
              <p className="powerpause-mini-label">Home energy</p>
              <div className="powerpause-energy-reading">
                <div className="powerpause-number-stack" aria-hidden="true">
                  <span className="powerpause-number powerpause-number-off">1.8</span>
                  <span className="powerpause-number powerpause-number-on">3.2</span>
                </div>
                <span className="powerpause-number-unit">kW</span>
              </div>
            </div>
            <div className="powerpause-switch-group" aria-hidden="true">
              <div className="powerpause-switch-label-stack">
                <span className="powerpause-state-off">OFF</span>
                <span className="powerpause-state-on">ON</span>
              </div>
              <span className="powerpause-switch"><span className="powerpause-switch-knob" /></span>
            </div>
          </div>
          <div className="powerpause-bars" aria-hidden="true">
            {bars.map(([off, on], index) => (
              <i key={index} style={{ '--bar-off': `${off}%`, '--bar-on': `${on}%` } as CSSProperties} />
            ))}
          </div>
        </div>
        <div className="powerpause-device-card">
          <div className="powerpause-device-heading">
            <div><p className="powerpause-device-kicker">Living room</p><strong>Main power</strong></div>
            <span className="powerpause-status-dot" aria-hidden="true" />
          </div>
          <div className="powerpause-device-list">
            {['Lighting', 'Climate'].map((device) => (
              <div className="powerpause-device-row" key={device}>
                <span>{device}</span>
                <div className="powerpause-device-state-stack" aria-hidden="true">
                  <span className="powerpause-state-off">Paused</span>
                  <span className="powerpause-state-on">Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <span className="power-work-preview-caption">Small actions. Visible impact.</span>
    </div>
  )
}
