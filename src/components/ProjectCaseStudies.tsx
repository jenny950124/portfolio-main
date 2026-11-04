import type { CSSProperties, MouseEvent, ReactNode } from 'react'
import {
  ArrowDown,
  ArrowLeft,
  Bell,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Coffee,
  Compass,
  Dog,
  Footprints,
  Gift,
  Home,
  Leaf,
  Lightbulb,
  MapPin,
  Mic2,
  Moon,
  Music2,
  Navigation,
  Power,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Sun,
  Ticket,
  Timer,
  Users,
  WalletCards,
  Zap,
} from 'lucide-react'

import cafeThumbnail from '../assets/cafe_thumbnail.webp'
import { FindMyParkHeroCollage } from './FindMyParkHeroCollage'
import findMyParkMain from '../assets/find-my-park-main-mockup.webp'
import findMyParkReading from '../assets/find-my-park-waterfront-reading.jpg'
import {
  CaseStudyControls,
  CaseStudyFooter,
  CaseStudySectionNav,
  type CaseStudyControlProps,
  type CaseStudyNavItem,
} from './CaseStudyControls'

type CaseStudyProps = CaseStudyControlProps & {
  onBack: () => void
  onPrevious: () => void
  onNext: () => void
}

type ProjectHeaderProps = Omit<CaseStudyProps, 'onPrevious' | 'onNext'> & {
  projectName: string
}

type Fact = {
  label: string
  value: string
}

const findMyParkNav: CaseStudyNavItem[] = [
  { id: 'fmp-overview', label: 'Overview' },
  { id: 'fmp-problem', label: 'Problem' },
  { id: 'fmp-research', label: 'Research' },
  { id: 'fmp-strategy', label: 'Strategy' },
  { id: 'fmp-experience', label: 'Experience' },
  { id: 'fmp-outcomes', label: 'Outcomes' },
  { id: 'fmp-reflection', label: 'Reflection' },
]

const powerPauseNav: CaseStudyNavItem[] = [
  { id: 'power-overview', label: 'Overview' },
  { id: 'power-problem', label: 'Problem' },
  { id: 'power-audience', label: 'Audience' },
  { id: 'power-principles', label: 'Principles' },
  { id: 'power-features', label: 'Features' },
  { id: 'power-trust', label: 'Trust' },
  { id: 'power-reflection', label: 'Reflection' },
]

const apertureNav: CaseStudyNavItem[] = [
  { id: 'aperture-overview', label: 'Overview' },
  { id: 'aperture-challenge', label: 'Challenge' },
  { id: 'aperture-ecosystem', label: 'Ecosystem' },
  { id: 'aperture-structure', label: 'Structure' },
  { id: 'aperture-features', label: 'Features' },
  { id: 'aperture-validation', label: 'Validation' },
  { id: 'aperture-reflection', label: 'Reflection' },
]

function ProjectMark() {
  return (
    <span className="pc-logo" aria-hidden="true">
      JK
      <i />
    </span>
  )
}

function ProjectHeader({
  projectName,
  onBack,
  language,
  dark,
  onToggleTheme,
  onLanguageChange,
}: ProjectHeaderProps) {
  const handleBack = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onBack()
  }

  return (
    <header className="pc-nav pc-container">
      <a
        className="pc-home"
        href="/#work"
        aria-label="Return to selected work"
        onClick={handleBack}
      >
        <ProjectMark />
      </a>

      <p>{projectName}</p>

      <div className="pc-nav-actions">
        <a className="pc-back" href="/#work" onClick={handleBack}>
          <ArrowLeft aria-hidden="true" />
          Back to work
        </a>

        <CaseStudyControls
          language={language}
          dark={dark}
          onToggleTheme={onToggleTheme}
          onLanguageChange={onLanguageChange}
        />
      </div>
    </header>
  )
}

function FactStrip({ facts }: { facts: Fact[] }) {
  return (
    <section className="pc-facts" aria-label="Project facts">
      <div className="pc-container pc-facts-grid">
        {facts.map((fact) => (
          <div key={fact.label}>
            <span>{fact.label}</span>
            <strong>{fact.value}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}

function SectionIntro({
  label,
  title,
  body,
}: {
  label: string
  title: ReactNode
  body: ReactNode
}) {
  return (
    <div className="pc-section-intro">
      <p className="pc-section-label">{label}</p>
      <div className="pc-heading-row">
        <h2>{title}</h2>
        <div className="pc-heading-body">{body}</div>
      </div>
    </div>
  )
}

function HowMightWe({ children }: { children: ReactNode }) {
  return (
    <div className="pc-hmw">
      <span>HOW MIGHT WE</span>
      <p>{children}</p>
    </div>
  )
}

function FlowStep({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: ReactNode
}) {
  return (
    <article className="pc-flow-card">
      <span>{number}</span>
      <strong>{title}</strong>
      <p>{children}</p>
    </article>
  )
}

export function FindMyParkCaseStudy({
  onBack,
  onPrevious,
  onNext,
  language,
  dark,
  onToggleTheme,
  onLanguageChange,
}: CaseStudyProps) {
  return (
    <main className="project-case fmp-case">
      <ProjectHeader
        projectName="FIND MY PARK"
        onBack={onBack}
        language={language}
        dark={dark}
        onToggleTheme={onToggleTheme}
        onLanguageChange={onLanguageChange}
      />

      <CaseStudySectionNav items={findMyParkNav} />

      <section className="pc-hero pc-container fmp-hero" id="fmp-overview">
        <div className="pc-hero-copy">
          <p className="pc-kicker">01 · MOBILE PRODUCT</p>
          <h1>Find a <span data-fmp-headline-start>park</span> that fits your <span data-fmp-headline-end>mood.</span></h1>
          <p className="pc-lede">
            A context-aware discovery experience that helps city dwellers find
            a nearby park or walking route based on what they need—not only
            where they are.
          </p>

          <div className="pc-tag-row" aria-label="Project disciplines">
            <span>Product Design</span>
            <span>UX Research</span>
            <span>AI-Powered Discovery</span>
          </div>

          <a className="pc-scroll-link" href="#fmp-problem">
            View the case study
            <ArrowDown aria-hidden="true" />
          </a>
        </div>

        <FindMyParkHeroCollage />
      </section>

      <FactStrip
        facts={[
          { label: 'Project', value: 'Independent mobile concept' },
          { label: 'My role', value: 'End-to-end UX/UI designer' },
          { label: 'Timeline', value: '3 weeks · Solo project' },
          { label: 'Tools', value: 'Figma · Photoshop' },
        ]}
      />

      <section className="pc-section pc-container" id="fmp-problem">
        <SectionIntro
          label="THE STARTING POINT"
          title={<>A nearby park can still feel difficult to find.</>}
          body={
            <>
              <p>
                The project began when a friend with a dog struggled to find a
                short, safe walk in the city. Maps showed green areas, but not
                whether a route fit the available time, mood, daylight, or a
                pet's needs.
              </p>
              <p>
                The opportunity was not another directory of parks. It was a
                decision tool for the moment before someone steps outside.
              </p>
            </>
          }
        />

        <HowMightWe>
          Help people choose a nearby outdoor space with enough context to feel
          confident before they leave?
        </HowMightWe>
      </section>

      <section className="pc-section fmp-research" id="fmp-research">
        <div className="pc-container">
          <SectionIntro
            label="RESEARCH THEMES"
            title={<>Three reasons a pin on a map was not enough.</>}
            body={
              <p>
                Early research and competitive review pointed to uncertainty
                before the trip—not a lack of park names—as the central issue.
              </p>
            }
          />

          <div className="pc-three-grid">
            <article>
              <Navigation aria-hidden="true" />
              <span>01</span>
              <h3>Location uncertainty</h3>
              <p>
                People needed a clear “you are here,” realistic travel time,
                and a route that matched the time they actually had.
              </p>
            </article>
            <article>
              <ShieldCheck aria-hidden="true" />
              <span>02</span>
              <h3>Safety anxiety</h3>
              <p>
                Lighting, crowd level, time of day, and route visibility shaped
                whether a recommendation felt usable.
              </p>
            </article>
            <article>
              <Dog aria-hidden="true" />
              <span>03</span>
              <h3>Scattered details</h3>
              <p>
                Pet rules, trail type, waterfront access, cafés, and landmarks
                were spread across different sources.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="pc-section pc-container" id="fmp-strategy">
        <SectionIntro
          label="PRODUCT STRATEGY"
          title={<>Start with the moment.<br />Then reveal the map.</>}
          body={
            <p>
              Instead of asking users to search by park name, the experience
              begins with intent, available time, and a short description of
              the moment they want.
            </p>
          }
        />

        <figure className="fmp-strategy-moment">
          <img
            src={findMyParkReading}
            alt="A person reading a book beside sunlit water"
            loading="lazy"
            decoding="async"
          />
          <figcaption>A quiet place to read. Start with the moment someone wants.</figcaption>
        </figure>

        <div className="pc-flow pc-flow-four" aria-label="Find My Park discovery flow">
          <FlowStep number="01" title="Describe">
            Choose a need, time window, or simple prompt.
          </FlowStep>
          <ChevronRight aria-hidden="true" />
          <FlowStep number="02" title="Match">
            Compare a small set of relevant nearby places.
          </FlowStep>
          <ChevronRight aria-hidden="true" />
          <FlowStep number="03" title="Check">
            Review safety, pet, route, and atmosphere details.
          </FlowStep>
          <ChevronRight aria-hidden="true" />
          <FlowStep number="04" title="Go">
            Build the walk and stay oriented along the way.
          </FlowStep>
        </div>
      </section>

      <section className="fmp-motion-story" id="fmp-experience">
        <div className="pc-container fmp-motion-grid">
          <div className="fmp-motion-copy">
            <p className="pc-section-label">A LIVING JOURNEY</p>
            <h2>See the walk form{' '}before stepping outside.</h2>
            <p>
              A quiet motion sequence turns changing context into a route. It
              connects the current location, daylight, a waterfront loop, and
              an optional café stop without making the experience feel busy.
            </p>

            <div className="fmp-motion-status">
              <span><i /> Live context</span>
              <strong>45-minute reset · 2.1 km</strong>
            </div>
          </div>

          <div
            className="fmp-route-illustration"
            aria-label="Animated Find My Park walking route illustration"
          >
            <div className="fmp-illustration-sun" aria-hidden="true" />
            <div className="fmp-illustration-water" aria-hidden="true">
              <i /><i /><i />
            </div>

            <svg
              className="fmp-route-map"
              viewBox="0 0 720 470"
              role="img"
              aria-label="A route connecting the current location, waterfront, and café"
            >
              <path
                className="fmp-map-contour"
                d="M-20 115 C115 52 226 63 322 127 S532 217 746 113"
              />
              <path
                className="fmp-map-contour fmp-map-contour-two"
                d="M-18 346 C134 250 255 311 356 352 S578 399 748 314"
              />
              <path
                className="fmp-route-base"
                d="M92 365 C138 305 188 319 225 272 C269 216 244 165 323 145 C413 122 418 252 503 238 C570 227 576 159 642 102"
              />
              <path
                className="fmp-route-progress"
                pathLength="1"
                d="M92 365 C138 305 188 319 225 272 C269 216 244 165 323 145 C413 122 418 252 503 238 C570 227 576 159 642 102"
              />
              <circle className="fmp-route-pulse fmp-route-pulse-start" cx="92" cy="365" r="13" />
              <circle className="fmp-route-pulse fmp-route-pulse-mid" cx="323" cy="145" r="13" />
              <circle className="fmp-route-pulse fmp-route-pulse-end" cx="642" cy="102" r="13" />
            </svg>

            <div className="fmp-route-marker fmp-route-marker-start">
              <Navigation aria-hidden="true" />
              <span><small>You are here</small><strong>Coal Harbour</strong></span>
            </div>

            <div className="fmp-route-marker fmp-route-marker-park">
              <Footprints aria-hidden="true" />
              <span><small>Waterfront loop</small><strong>Calm · 2.1 km</strong></span>
            </div>

            <div className="fmp-route-marker fmp-route-marker-cafe">
              <Coffee aria-hidden="true" />
              <span><small>Optional stop</small><strong>Open until 7 PM</strong></span>
            </div>

            <div className="fmp-route-moving-dot" aria-hidden="true">
              <i />
            </div>
          </div>
        </div>
      </section>

      <section className="pc-feature fmp-feature-dark">
        <div className="pc-container pc-feature-grid">
          <div className="pc-feature-copy">
            <p className="pc-section-label">FEATURE 01 · MOMENT MATCHING</p>
            <h2>Search for a feeling,{' '}not a park name.</h2>
            <p>
              The opening screen combines quick chips with natural-language
              prompts. Results stay intentionally small so the experience
              supports a decision instead of creating another endless feed.
            </p>

            <div className="fmp-prompt-card">
              <Sparkles aria-hidden="true" />
              <div>
                <span>What do you need today?</span>
                <strong>Somewhere quiet to read in the sun.</strong>
              </div>
            </div>
          </div>

          <div className="fmp-feature-phone-stage">
            <img src={findMyParkMain} alt="Moment-based Find My Park search screen" />
            <div className="fmp-match-card">
              <span>94% match</span>
              <strong>Stanley Park</strong>
              <small>Quiet now · Sunny · 14 min</small>
            </div>
          </div>
        </div>
      </section>

      <section className="pc-feature fmp-feature-light">
        <div className="pc-container pc-feature-grid pc-feature-grid-reverse">
          <div className="fmp-confidence-panel" aria-label="Confidence information preview">
            <div className="fmp-confidence-map">
              <MapPin aria-hidden="true" />
              <span>You are here</span>
            </div>
            <div className="fmp-signal-list">
              <div><Sun aria-hidden="true" /><span>Daylight</span><strong>1 hr 42 min</strong></div>
              <div><Users aria-hidden="true" /><span>Crowd</span><strong>Calm</strong></div>
              <div><ShieldCheck aria-hidden="true" /><span>Lighting</span><strong>Good</strong></div>
              <div><Dog aria-hidden="true" /><span>Dogs</span><strong>On leash</strong></div>
            </div>
          </div>

          <div className="pc-feature-copy">
            <p className="pc-section-label">FEATURE 02 · CONFIDENCE LAYER</p>
            <h2>Show the context{' '}people use to decide.</h2>
            <p>
              The detail view makes distance, daylight, crowd conditions,
              lighting, and pet rules visible before navigation begins. Honest
              context matters more than a generic safety score.
            </p>
          </div>
        </div>
      </section>

      <section className="pc-feature fmp-feature-green">
        <div className="pc-container pc-feature-grid">
          <div className="pc-feature-copy">
            <p className="pc-section-label">FEATURE 03 · JOURNEY BUILDER</p>
            <h2>Turn discovery into{' '}a walk worth taking.</h2>
            <p>
              A selected park can become a lightweight journey with a trail,
              café stop, landmark, time estimate, and optional mood music. The
              route remains editable rather than forcing one perfect answer.
            </p>
          </div>

          <div className="fmp-journey-card">
            <div className="fmp-journey-top">
              <span>Your 45-minute reset</span>
              <strong>Harbour Green Loop</strong>
            </div>
            <ol>
              <li><MapPin aria-hidden="true" /><div><strong>Start nearby</strong><span>4 min walk</span></div></li>
              <li><Footprints aria-hidden="true" /><div><strong>Waterfront loop</strong><span>2.1 km · Easy</span></div></li>
              <li><Coffee aria-hidden="true" /><div><strong>Optional café stop</strong><span>Open until 7 PM</span></div></li>
              <li><Music2 aria-hidden="true" /><div><strong>Mood music</strong><span>Quiet afternoon</span></div></li>
            </ol>
            <button type="button" tabIndex={-1}>Start journey</button>
          </div>
        </div>
      </section>

      <section className="pc-section pc-container" id="fmp-outcomes">
        <SectionIntro
          label="DESIGN OUTCOME"
          title={<>Less searching<br />More confidence to go.</>}
          body={
            <p>
              The final concept moves from location-first browsing to a guided,
              context-aware decision. It makes “you are here” unmistakable,
              reduces the number of controls, and surfaces changing conditions
              without pretending they are permanent facts.
            </p>
          }
        />

        <div className="pc-outcome-grid">
          <article><Compass aria-hidden="true" /><strong>Clear orientation</strong><p>Location and travel time stay visible throughout the experience.</p></article>
          <article><Sparkles aria-hidden="true" /><strong>Personal relevance</strong><p>Recommendations respond to purpose, time, and everyday constraints.</p></article>
          <article><ShieldCheck aria-hidden="true" /><strong>Honest confidence</strong><p>Safety and crowd cues are framed as live context, not guarantees.</p></article>
        </div>
      </section>

      <section className="pc-reflection fmp-reflection" id="fmp-reflection">
        <div className="pc-container pc-reflection-grid">
          <p className="pc-section-label">REFLECTION</p>
          <h2>The most useful map may begin before the map appears.</h2>
          <p>
            This project taught me that discovery becomes more personal when
            the interface understands the decision around a place—not only its
            coordinates.
          </p>
        </div>
      </section>

      <CaseStudyFooter
        language={language}
        currentProjectDescription="Find My Park · Find the right park for your moment."
        previousProjectName="RE:WARDROBE"
        previousProjectPath="/work/rewardrobe"
        nextProjectName="Aperture Coffee Bar"
        nextProjectPath="/work/aperture"
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </main>
  )
}

export function PowerPauseCaseStudy({
  onBack,
  onPrevious,
  onNext,
  language,
  dark,
  onToggleTheme,
  onLanguageChange,
}: CaseStudyProps) {
  return (
    <main className="project-case power-case">
      <ProjectHeader
        projectName="POWERPAUSE"
        onBack={onBack}
        language={language}
        dark={dark}
        onToggleTheme={onToggleTheme}
        onLanguageChange={onLanguageChange}
      />

      <CaseStudySectionNav items={powerPauseNav} />

      <section className="pc-hero pc-container power-hero" id="power-overview">
        <div className="pc-hero-copy">
          <p className="pc-kicker">03 · MOBILE PRODUCT</p>
          <h1>Your home energy.<br />In one hand.</h1>
          <p className="pc-lede">
            PowerPause makes home energy visible and actionable from anywhere,
            combining remote control, timely alerts, savings, and community
            giving in one focused experience.
          </p>

          <div className="pc-tag-row" aria-label="Project disciplines">
            <span>UX Strategy</span>
            <span>UI Design</span>
            <span>Connected Home</span>
          </div>

          <a className="pc-scroll-link" href="#power-problem">
            View the case study
            <ArrowDown aria-hidden="true" />
          </a>
        </div>

        <div className="power-hero-visual power-project-overview" role="img" aria-label="PowerPause product overview: live energy monitoring, remote device control, actionable alerts, savings, and community giving.">
          <div className="power-overview-brand">
            <span><Power aria-hidden="true" /> PowerPause</span>
            <small>CONTROL · SAVE · GIVE</small>
          </div>
          <div className="power-overview-dashboard" aria-hidden="true">
            <div className="power-overview-greeting"><span>My home</span><strong>Energy, made clear.</strong></div>
            <div className="power-overview-energy">
              <div><span>Live usage</span><strong>1.8 <small>kW</small></strong></div>
              <span className="power-overview-connected"><i /> Connected</span>
              <div className="power-overview-chart">
                {[38, 52, 45, 72, 88, 64, 48, 40, 32, 28, 24, 20].map((height, index) => (
                  <i key={index} style={{ height: `${height}%` }} />
                ))}
              </div>
              <p>See what your home is using, right now.</p>
            </div>
            <div className="power-overview-scenes">
              <span className="active"><Home />Home<small>All on</small></span>
              <span><ShoppingBag />Away<small>All off</small></span>
              <span><Moon />Sleep<small>Night mode</small></span>
            </div>
            <div className="power-overview-alert">
              <Bell /><div><strong>Left a light on?</strong><span>Pause it from wherever you are.</span></div><span className="power-overview-pause">Pause</span>
            </div>
            <div className="power-overview-benefits">
              <div><Leaf /><strong>See your savings</strong><span>Track energy and cost together.</span></div>
              <div><Gift /><strong>Share the good</strong><span>Put savings toward community giving.</span></div>
            </div>
          </div>
          <p className="power-overview-caption">One home. Clear actions. Shared impact.</p>
        </div>
      </section>

      <FactStrip
        facts={[
          { label: 'Project', value: 'Independent utility-app concept' },
          { label: 'My role', value: 'UX/UI + Visual Designer' },
          { label: 'Timeline', value: '4 weeks · Solo project' },
          { label: 'Focus', value: 'Control · Savings · Giving' },
        ]}
      />

      <section className="pc-section pc-container" id="power-problem">
        <SectionIntro
          label="THE STARTING POINT"
          title={<>The light was on.<br />I was nowhere near home.</>}
          body={
            <>
              <p>
                The idea began after leaving a bedroom light on during a trip
                and later receiving a higher electricity bill. The cost was
                frustrating, but the bigger problem was having no way to check
                or act from a distance.
              </p>
              <p>
                Energy apps often explain usage after it happens. PowerPause
                explores what changes when the same information becomes an
                immediate action.
              </p>
            </>
          }
        />

        <HowMightWe>
          Help people understand and control home energy in the moment—even
          when they are away?
        </HowMightWe>
      </section>

      <section className="pc-section power-audience" id="power-audience">
        <div className="pc-container">
          <SectionIntro
            label="WHO IT SERVES"
            title={<>Different homes.<br />The same need for control.</>}
            body={
              <p>
                The concept focuses on situations where energy responsibility
                is shared, remote, or easy to lose track of.
              </p>
            }
          />

          <div className="pc-three-grid">
            <article>
              <ShoppingBag aria-hidden="true" />
              <span>01</span>
              <h3>Travelers</h3>
              <p>People who want confidence that their home is safe and not wasting energy while they are away.</p>
            </article>
            <article>
              <Users aria-hidden="true" />
              <span>02</span>
              <h3>Shared households</h3>
              <p>Roommates and families who need a neutral, visible picture of shared utility use.</p>
            </article>
            <article>
              <Zap aria-hidden="true" />
              <span>03</span>
              <h3>Connected-home starters</h3>
              <p>People adopting smart plugs who need a simple system instead of separate device controls.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="pc-section pc-container" id="power-principles">
        <SectionIntro
          label="PRODUCT PRINCIPLES"
          title={<>Make the safest action{' '}the easiest action.</>}
          body={
            <p>
              The product reduces energy management to four principles:
              immediacy, one-hand control, visible wins, and responsible
              automation.
            </p>
          }
        />

        <div className="power-principle-grid">
          <article><Power aria-hidden="true" /><span>ONE-TAP ACTION</span><h3>Pause it now</h3><p>Turn off a device, room, or the whole home without navigating a deep system.</p></article>
          <article><Bell aria-hidden="true" /><span>TIMELY CONTEXT</span><h3>Alert with a fix</h3><p>Every unusual-use alert includes the reason, estimated impact, and direct action.</p></article>
          <article><CircleDollarSign aria-hidden="true" /><span>VISIBLE VALUE</span><h3>Show kWh and cost</h3><p>Translate abstract energy use into a unit and dollar amount people can compare.</p></article>
          <article><Gift aria-hidden="true" /><span>SHARED BENEFIT</span><h3>Save and share</h3><p>Turn consistent savings into points that can support small community donations.</p></article>
        </div>
      </section>

      <section className="pc-feature power-motion" aria-label="PowerPause remote energy animation">
        <div className="pc-container power-motion-grid">
          <div className="power-motion-copy">
            <p className="pc-section-label">LIVE ENERGY LOOP</p>
            <h2>See it.<br />Pause it.<br />Save it.</h2>
            <p>
              A live sequence turns invisible energy use into one clear remote
              action—from detecting an unusual light to confirming that it has
              been paused from anywhere.
            </p>
            <div className="power-motion-status">
              <i /> Live home · Remote connection
            </div>
          </div>

          <div className="power-motion-stage" aria-hidden="true">
            <div className="power-motion-home">
              <header>
                <div>
                  <span>MY HOME · LIVE</span>
                  <strong>Energy right now</strong>
                </div>
                <div className="power-motion-reading">
                  <b>1.8 kW</b>
                  <b>1.6 kW</b>
                </div>
              </header>

              <svg className="power-motion-lines" viewBox="0 0 620 310" preserveAspectRatio="none">
                <path d="M310 30V96M310 96H150V152M310 96H470V152M150 222V260H470V222" />
                <path className="power-motion-flow" d="M310 30V96M310 96H150V152M310 96H470V152M150 222V260H470V222" />
              </svg>

              <div className="power-motion-hub"><Zap aria-hidden="true" /></div>

              <div className="power-motion-rooms">
                <article>
                  <Home aria-hidden="true" />
                  <span>Living room</span>
                  <strong>0.6 kW</strong>
                </article>
                <article className="power-motion-room-alert">
                  <Lightbulb aria-hidden="true" />
                  <span>Bedroom light</span>
                  <strong>
                    <span><i /> On for 6h</span>
                    <span><Check aria-hidden="true" /> Paused</span>
                  </strong>
                </article>
                <article>
                  <Zap aria-hidden="true" />
                  <span>Kitchen</span>
                  <strong>0.7 kW</strong>
                </article>
                <article>
                  <ShieldCheck aria-hidden="true" />
                  <span>Climate</span>
                  <strong>Eco mode</strong>
                </article>
              </div>
            </div>

            <div className="power-motion-alert">
              <div className="power-motion-alert-icon"><Bell aria-hidden="true" /></div>
              <div>
                <span>UNUSUAL USE DETECTED</span>
                <strong>Bedroom light is still on.</strong>
                <small>6 hours · Estimated extra cost $1.28</small>
              </div>
              <div className="power-motion-action">
                <span>Pause device</span>
                <span><Check aria-hidden="true" /> Paused remotely</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pc-feature power-feature-dark" id="power-features">
        <div className="pc-container pc-feature-grid">
          <div className="pc-feature-copy">
            <p className="pc-section-label">FEATURE 01 · REMOTE CONTROL</p>
            <h2>One thumb.<br />The whole home.</h2>
            <p>
              A home overview prioritizes rooms and devices that need attention.
              Quick scenes such as Away, Sleep, and Travel Mode bundle repeated
              actions without hiding what will change.
            </p>

            <ul className="pc-check-list">
              <li><Check aria-hidden="true" />Room and device controls</li>
              <li><Check aria-hidden="true" />Away, Sleep, and Travel scenes</li>
              <li><Check aria-hidden="true" />Confirmation before high-impact actions</li>
            </ul>
          </div>

          <div className="power-control-panel">
            <div className="power-panel-header">
              <div><span>My home</span><strong>Everything looks good.</strong></div>
              <span className="power-home-score">18% ↓</span>
            </div>
            <div className="power-scene-row">
              <span className="active"><Home aria-hidden="true" />Home<small>All on</small></span>
              <span><ShoppingBag aria-hidden="true" />Away<small>All off</small></span>
              <span><Moon aria-hidden="true" />Sleep<small>Night mode</small></span>
            </div>
            <div className="power-device-list">
              <div><Lightbulb aria-hidden="true" /><span>Living room lights</span><button type="button" tabIndex={-1} aria-label="Lights on"><i /></button></div>
              <div><Zap aria-hidden="true" /><span>Kitchen appliances</span><strong>3 on</strong></div>
              <div><ShieldCheck aria-hidden="true" /><span>Security</span><strong>Armed</strong></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pc-feature power-feature-light">
        <div className="pc-container pc-feature-grid pc-feature-grid-reverse">
          <div className="power-alert-stack">
            <article className="power-alert-card urgent">
              <Zap aria-hidden="true" />
              <div><span>Unusual use detected</span><strong>Bedroom light has been on for 6 hours.</strong><small>Estimated extra cost today: $1.28</small></div>
              <button type="button" tabIndex={-1}>Turn off</button>
            </article>
            <article className="power-alert-card">
              <Clock3 aria-hidden="true" />
              <div><span>Peak period begins at 5 PM</span><strong>Run the dishwasher before 4:30?</strong><small>Potential saving: $0.84</small></div>
              <button type="button" tabIndex={-1}>Schedule</button>
            </article>
          </div>

          <div className="pc-feature-copy">
            <p className="pc-section-label">FEATURE 02 · ACTIONABLE ALERTS</p>
            <h2>Do not report a problem{' '}without offering a fix.</h2>
            <p>
              Alerts explain what changed, why it matters, and what the user can
              do next. One-tap actions keep urgency useful instead of alarming.
            </p>
          </div>
        </div>
      </section>

      <section className="pc-feature power-feature-lime">
        <div className="pc-container pc-feature-grid">
          <div className="pc-feature-copy">
            <p className="pc-section-label">FEATURE 03 · SAVINGS TO GIVING</p>
            <h2>Make every small win{' '}feel worth repeating.</h2>
            <p>
              Savings points connect personal habits to a visible benefit. The
              user stays in control of when and where points become a
              micro-donation.
            </p>
          </div>

          <div className="power-reward-card">
            <div className="power-reward-total">
              <span>This month</span>
              <strong>$18.40 saved</strong>
              <small>1,840 points available</small>
            </div>
            <div className="power-reward-progress"><i /></div>
            <div className="power-donation-row">
              <Gift aria-hidden="true" />
              <div><strong>Share your savings</strong><span>Support a local energy-access fund</span></div>
              <ChevronRight aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="pc-section pc-container">
        <SectionIntro
          label="CORE FLOW"
          title={<>Control first.<br />Motivation follows.</>}
          body={
            <p>
              The product flow moves from immediate utility to longer-term
              habit building without turning essential home controls into a
              game.
            </p>
          }
        />

        <div className="pc-flow pc-flow-four" aria-label="PowerPause core flow">
          <FlowStep number="01" title="Connect">Link the utility account and compatible devices.</FlowStep>
          <ChevronRight aria-hidden="true" />
          <FlowStep number="02" title="Control">See the home state and act with one hand.</FlowStep>
          <ChevronRight aria-hidden="true" />
          <FlowStep number="03" title="Save">Understand patterns, cost, and peak-time choices.</FlowStep>
          <ChevronRight aria-hidden="true" />
          <FlowStep number="04" title="Share">Choose whether earned points support a donation.</FlowStep>
        </div>
      </section>

      <section className="pc-section power-trust" id="power-trust">
        <div className="pc-container">
          <SectionIntro
            label="TRUST & SAFETY"
            title={<>Remote control needs{' '}visible boundaries.</>}
            body={
              <p>
                The system confirms high-impact actions, shows who changed a
                shared setting, and keeps automation easy to review or pause.
              </p>
            }
          />

          <div className="pc-outcome-grid">
            <article><ShieldCheck aria-hidden="true" /><strong>Confirm critical actions</strong><p>Whole-home and climate changes receive a clear confirmation step.</p></article>
            <article><Users aria-hidden="true" /><strong>Respect shared homes</strong><p>Activity history shows when a household member changes a shared device.</p></article>
            <article><Timer aria-hidden="true" /><strong>Keep automation reversible</strong><p>Every schedule and scene can be reviewed, paused, or overridden.</p></article>
          </div>
        </div>
      </section>

      <section className="pc-reflection power-reflection" id="power-reflection">
        <div className="pc-container pc-reflection-grid">
          <p className="pc-section-label">REFLECTION</p>
          <h2>Energy data becomes useful when it ends with a clear action.</h2>
          <p>
            PowerPause strengthened my approach to connected products: simplify
            the decision, show the consequence, and keep the person in control.
          </p>
        </div>
      </section>

      <div className="pc-disclaimer pc-container">
        Independent concept project exploring a utility-app experience. Not
        affiliated with BC Hydro.
      </div>

      <CaseStudyFooter
        language={language}
        currentProjectDescription="PowerPause · Control, save, and share—from wherever you are."
        previousProjectName="Aperture Coffee Bar"
        previousProjectPath="/work/aperture"
        nextProjectName="Condo Connect"
        nextProjectPath="/work/condo-connect"
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </main>
  )
}

export function ApertureCaseStudy({
  onBack,
  onPrevious,
  onNext,
  language,
  dark,
  onToggleTheme,
  onLanguageChange,
}: CaseStudyProps) {
  return (
    <main className="project-case aperture-case">
      <ProjectHeader
        projectName="APERTURE COFFEE BAR"
        onBack={onBack}
        language={language}
        dark={dark}
        onToggleTheme={onToggleTheme}
        onLanguageChange={onLanguageChange}
      />

      <CaseStudySectionNav items={apertureNav} />

      <section className="pc-hero pc-container aperture-hero" id="aperture-overview">
        <div className="pc-hero-copy">
          <p className="pc-kicker">02 · CLIENT SERVICE DESIGN</p>
          <h1>One place.<br />Two rhythms.</h1>
          <p className="pc-lede">
            A responsive brand and service experience that helps Aperture move
            naturally from daytime coffee to live jazz—while giving performers
            and the owner clearer ways to manage their work.
          </p>

          <div className="pc-tag-row" aria-label="Project disciplines">
            <span>Service Design</span>
            <span>Brand Experience</span>
            <span>Responsive Web</span>
          </div>

          <a className="pc-scroll-link" href="#aperture-challenge">
            View the case study
            <ArrowDown aria-hidden="true" />
          </a>
        </div>

        <div className="aperture-hero-visual">
          <img
            src={cafeThumbnail}
            alt="Aperture coffee preparation and evening jazz atmosphere"
          />

          <div className="aperture-hero-brand" aria-hidden="true">
            <i>★</i>
            <strong>APERTURE</strong>
            <span>COFFEE BAR</span>
          </div>

          <div className="aperture-day-night">
            <span><Sun aria-hidden="true" /> Day · Coffee</span>
            <i />
            <span><Moon aria-hidden="true" /> Night · Jazz</span>
          </div>
        </div>
      </section>

      <FactStrip
        facts={[
          { label: 'Project', value: 'Real client redesign' },
          { label: 'My role', value: 'Service · Brand · UX/UI' },
          { label: 'Platform', value: 'Responsive website' },
          { label: 'Validation', value: 'Testing · Client feedback' },
        ]}
      />

      <section className="pc-section pc-container" id="aperture-challenge">
        <SectionIntro
          label="THE CLIENT CHALLENGE"
          title={<>The website showed a café.<br />The business was much more.</>}
          body={
            <>
              <p>
                Aperture's older website made menus and performances difficult
                to find. It also did not explain jazz to new visitors or show
                how the space changed after dark.
              </p>
              <p>
                Behind the interface, the owner was manually managing event
                posts, performer schedules, ticket sales, and low-margin leather
                goods shipping while also running the café.
              </p>
            </>
          }
        />

        <HowMightWe>
          Make the full Aperture experience easy to discover while removing
          repetitive operational work from the owner?
        </HowMightWe>
      </section>

      <section className="pc-section aperture-system" id="aperture-ecosystem">
        <div className="pc-container">
          <SectionIntro
            label="SERVICE ECOSYSTEM"
            title={<>Designing for guests,{' '}performers, and the owner.</>}
            body={
              <p>
                The redesign became a service system with three connected but
                distinct user needs—not a visual refresh of the same pages.
              </p>
            }
          />

          <div className="aperture-actor-grid">
            <article>
              <Coffee aria-hidden="true" />
              <span>GUESTS</span>
              <h3>Know what is happening</h3>
              <p>Move from menu to jazz discovery, understand the atmosphere, and buy the right ticket.</p>
              <ul><li>Day and night navigation</li><li>Clear menus and hours</li><li>Jazz guide and event calendar</li></ul>
            </article>
            <article>
              <Mic2 aria-hidden="true" />
              <span>PERFORMERS</span>
              <h3>Manage their own show</h3>
              <p>Create an event, update the schedule, and manage ticket sales from the same website.</p>
              <ul><li>Performer event portal</li><li>Schedule ownership</li><li>Ticket management</li></ul>
            </article>
            <article>
              <Store aria-hidden="true" />
              <span>OWNER</span>
              <h3>Focus on the space</h3>
              <p>Receive the venue fee and retain oversight without becoming the administrator for every show.</p>
              <ul><li>Space-rental visibility</li><li>Approval and oversight</li><li>Less manual posting</li></ul>
            </article>
          </div>
        </div>
      </section>

      <section className="pc-section pc-container" id="aperture-structure">
        <SectionIntro
          label="INFORMATION ARCHITECTURE"
          title={<>A navigation shaped around{' '}real reasons to visit.</>}
          body={
            <p>
              The information architecture gives coffee, live jazz, performers,
              and leather craft a clear place without flattening them into one
              generic hospitality menu.
            </p>
          }
        />

        <div className="aperture-ia">
          <div className="aperture-ia-root">APERTURE</div>
          <div className="aperture-ia-line" />
          <div className="aperture-ia-grid">
            <article><Coffee aria-hidden="true" /><strong>Visit</strong><span>Hours · Location · Atmosphere</span></article>
            <article><WalletCards aria-hidden="true" /><strong>Menu</strong><span>Coffee · Food · Evening drinks</span></article>
            <article><Music2 aria-hidden="true" /><strong>Live Jazz</strong><span>Discover · Learn · Tickets</span></article>
            <article><Mic2 aria-hidden="true" /><strong>Play Here</strong><span>Space · Schedule · Perform</span></article>
            <article><ShoppingBag aria-hidden="true" /><strong>Leather Goods</strong><span>Browse online · Buy in store</span></article>
          </div>
        </div>
      </section>

      <section className="pc-feature aperture-journey" id="aperture-features">
        <div className="pc-container">
          <div className="aperture-journey-heading">
            <p className="pc-section-label">THE SERVICE IN MOTION</p>
            <h2>Two digital paths.<br />One physical destination.</h2>
            <p>
              The website handles discovery and preparation online, then lets
              the most meaningful part happen inside the café: hearing the
              artist or holding the handmade piece before purchasing it.
            </p>
          </div>

          <div className="aperture-journey-stage">
            <article className="aperture-journey-track aperture-journey-track-event">
              <header>
                <Music2 aria-hidden="true" />
                <div>
                  <span>LIVE MUSIC JOURNEY</span>
                  <strong>From discovery to the backroom</strong>
                </div>
              </header>

              <ol>
                <li style={{ '--journey-step': 0 } as CSSProperties}>
                  <span>01</span>
                  <div><strong>Discover a show</strong><small>Artist story · Date · Sound</small></div>
                  <Music2 aria-hidden="true" />
                </li>
                <li style={{ '--journey-step': 1 } as CSSProperties}>
                  <span>02</span>
                  <div><strong>Reserve a place</strong><small>Ticket · Donation · Confirmation</small></div>
                  <Ticket aria-hidden="true" />
                </li>
                <li style={{ '--journey-step': 2 } as CSSProperties}>
                  <span>03</span>
                  <div><strong>Arrive at Aperture</strong><small>4124 Main Street · 7–9 PM</small></div>
                  <MapPin aria-hidden="true" />
                </li>
                <li style={{ '--journey-step': 3 } as CSSProperties}>
                  <span>04</span>
                  <div><strong>Support the artist</strong><small>Enjoy the set · Artist keeps the value</small></div>
                  <Check aria-hidden="true" />
                </li>
              </ol>

              <div className="aperture-journey-progress" aria-hidden="true">
                <i />
              </div>
            </article>

            <article className="aperture-journey-track aperture-journey-track-product">
              <header>
                <ShoppingBag aria-hidden="true" />
                <div>
                  <span>LEATHER GOODS JOURNEY</span>
                  <strong>From online story to in-store sale</strong>
                </div>
              </header>

              <ol>
                <li style={{ '--journey-step': 0 } as CSSProperties}>
                  <span>01</span>
                  <div><strong>Meet the maker</strong><small>Materials · Process · Story</small></div>
                  <Sparkles aria-hidden="true" />
                </li>
                <li style={{ '--journey-step': 1 } as CSSProperties}>
                  <span>02</span>
                  <div><strong>Browse available pieces</strong><small>No shipping promise · Clear availability</small></div>
                  <ShoppingBag aria-hidden="true" />
                </li>
                <li style={{ '--journey-step': 2 } as CSSProperties}>
                  <span>03</span>
                  <div><strong>Visit the café</strong><small>See the finish · Feel the leather</small></div>
                  <Store aria-hidden="true" />
                </li>
                <li style={{ '--journey-step': 3 } as CSSProperties}>
                  <span>04</span>
                  <div><strong>Purchase in person</strong><small>No packing · No post-office trip</small></div>
                  <Check aria-hidden="true" />
                </li>
              </ol>

              <div className="aperture-journey-progress" aria-hidden="true">
                <i />
              </div>
            </article>
          </div>

          <div className="aperture-journey-destination">
            <MapPin aria-hidden="true" />
            <span>Both journeys finish where Aperture creates the most value—in the room itself.</span>
          </div>
        </div>
      </section>

      <section className="pc-feature aperture-feature-dark">
        <div className="pc-container pc-feature-grid">
          <div className="pc-feature-copy">
            <p className="pc-section-label">FEATURE 01 · DAY TO NIGHT</p>
            <h2>Teach the concept{' '}through the interface.</h2>
            <p>
              The visual system shifts from a warm daytime café palette to a
              darker, richer jazz atmosphere. Event context and short jazz
              stories help new audiences feel invited rather than uninformed.
            </p>
          </div>

          <div className="aperture-site-preview">
            <div className="aperture-browser-bar"><i /><i /><i /><span>aperturecoffeebar.com</span></div>
            <div className="aperture-site-hero">
              <span>TONIGHT AT APERTURE</span>
              <h3>Coffee by day.<br />Live jazz after dark.</h3>
              <div><button type="button" tabIndex={-1}>See tonight's show</button><button type="button" tabIndex={-1}>View café menu</button></div>
            </div>
            <div className="aperture-site-events">
              <span>UPCOMING</span>
              <article><strong>19</strong><div><b>September</b><span>Late Set Trio · 8 PM</span></div><Ticket aria-hidden="true" /></article>
              <article><strong>24</strong><div><b>September</b><span>Open Jam · 7:30 PM</span></div><Ticket aria-hidden="true" /></article>
            </div>
          </div>
        </div>
      </section>

      <section className="pc-feature aperture-feature-paper">
        <div className="pc-container pc-feature-grid pc-feature-grid-reverse">
          <div className="aperture-performer-flow">
            <div className="aperture-performer-header">
              <div><span>PERFORMER PORTAL</span><strong>Create your show</strong></div>
              <Mic2 aria-hidden="true" />
            </div>
            <ol>
              <li className="complete"><Check aria-hidden="true" /><div><strong>Event details</strong><span>Title, lineup, description</span></div></li>
              <li className="active"><CalendarDays aria-hidden="true" /><div><strong>Schedule</strong><span>Select an approved date and set times</span></div></li>
              <li><Ticket aria-hidden="true" /><div><strong>Tickets</strong><span>Price, capacity, and sales window</span></div></li>
              <li><ShieldCheck aria-hidden="true" /><div><strong>Review</strong><span>Submit the listing for venue approval</span></div></li>
            </ol>
            <button type="button" tabIndex={-1}>Continue</button>
          </div>

          <div className="pc-feature-copy">
            <p className="pc-section-label">FEATURE 02 · PERFORMER SELF-SERVICE</p>
            <h2>Give the work{' '}to the person who owns it.</h2>
            <p>
              Performers can manage their event details, schedule, and ticket
              setup in one guided flow. The owner keeps approval rights and
              receives the space-rental fee without manually publishing every
              update.
            </p>
          </div>
        </div>
      </section>

      <section className="pc-feature aperture-feature-leather">
        <div className="pc-container pc-feature-grid">
          <div className="pc-feature-copy">
            <p className="pc-section-label">FEATURE 03 · LEATHER CRAFT</p>
            <h2>Keep the craft.<br />Remove the costly fulfilment.</h2>
            <p>
              Online orders created packaging, shipping, and post-office work
              that did not match the margin. The redesigned model uses the site
              as a product story and catalogue, then converts interest into an
              in-store purchase.
            </p>

            <ul className="pc-check-list">
              <li><Check aria-hidden="true" />Show materials, process, and available pieces</li>
              <li><Check aria-hidden="true" />Set clear “Available in café” expectations</li>
              <li><Check aria-hidden="true" />Let the owner keep making without running fulfilment</li>
            </ul>
          </div>

          <div className="aperture-leather-card">
            <div className="aperture-leather-photo"><ShoppingBag aria-hidden="true" /><span>HANDMADE AT APERTURE</span></div>
            <div className="aperture-leather-info">
              <span>Vegetable-tanned leather</span>
              <h3>Everyday Card Wallet</h3>
              <p>Cut, stitched, and finished by the owner in small batches.</p>
              <div><Store aria-hidden="true" /><span><strong>Available in café</strong>See and purchase this piece at Aperture.</span></div>
              <button type="button" tabIndex={-1}>Plan your visit</button>
            </div>
          </div>
        </div>
      </section>

      <section className="pc-section pc-container" id="aperture-validation">
        <SectionIntro
          label="VALIDATION"
          title={<>Test the experience.<br />Then return to the business.</>}
          body={
            <p>
              Competitive analysis informed the structure, usability testing
              checked whether core information and flows were understandable,
              and client feedback kept the solution grounded in what the owner
              could realistically maintain.
            </p>
          }
        />

        <div className="aperture-validation-list">
          <article><span>01</span><strong>Competitive analysis</strong><p>Compared how independent cafés and music venues separate menus, events, education, and ticketing.</p></article>
          <article><span>02</span><strong>Usability testing</strong><p>Checked whether guests could find menus and shows, and whether the performer flow felt understandable.</p></article>
          <article><span>03</span><strong>Client feedback</strong><p>Reviewed operational effort, owner oversight, performer responsibility, and the in-store leather sales model.</p></article>
        </div>
      </section>

      <section className="pc-section aperture-outcome">
        <div className="pc-container">
          <SectionIntro
            label="DESIGN OUTCOME"
            title={<>A website that redistributes work,{' '}not only information.</>}
            body={
              <p>
                The final service makes Aperture's identity clearer to guests,
                gives performers ownership of their shows, and removes two
                repetitive burdens—manual event publishing and low-margin
                online fulfilment—from the owner.
              </p>
            }
          />

          <div className="pc-outcome-grid">
            <article><Music2 aria-hidden="true" /><strong>Jazz becomes approachable</strong><p>Context, stories, schedules, and tickets share one understandable home.</p></article>
            <article><Mic2 aria-hidden="true" /><strong>Performers gain ownership</strong><p>The people running the show manage the information that changes most often.</p></article>
            <article><Store aria-hidden="true" /><strong>The owner protects focus</strong><p>The system supports venue income and craft sales with less administrative work.</p></article>
          </div>
        </div>
      </section>

      <section className="pc-reflection aperture-reflection" id="aperture-reflection">
        <div className="pc-container pc-reflection-grid">
          <p className="pc-section-label">REFLECTION</p>
          <h2>The best redesign changed who had to do the work.</h2>
          <p>
            Aperture taught me to look beyond the customer-facing screen. A
            service becomes stronger when it also respects the time, margins,
            and responsibilities behind the business.
          </p>
        </div>
      </section>

      <CaseStudyFooter
        language={language}
        currentProjectDescription="Aperture Coffee Bar · Coffee by day. Live jazz after dark."
        previousProjectName="Find My Park"
        previousProjectPath="/work/find-my-park"
        nextProjectName="PowerPause"
        nextProjectPath="/work/powerpause"
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </main>
  )
}
