import climbingCampaign from '../assets/worn-forward-bouldering-editorial.webp'
import actionCampaign from '../assets/worn-forward-approved-runner-no-grid.webp'
import heroCampaign from '../assets/worn-forward-runner-landscape.webp'
import weekendCampaign from '../assets/worn-forward-front-hike-v2.webp'
import { useState } from 'react'
import { BatteryFull, Wifi, Signal, RotateCcw } from 'lucide-react'
import { WornForwardDemo, trailLooks } from './WornForwardDemo'
import {
  ArrowDown,
  ArrowLeft,
  Check,
  ChevronRight,
  CloudRain,
  Download,
  EyeOff,
  Footprints,
  HeartHandshake,
  LockKeyhole,
  Repeat2,
  Scissors,
  Shield,
  Shirt,
  Send,
  Sparkles,
  Tag,
  Wrench,
} from 'lucide-react'

import {
  CaseStudyControls,
  CaseStudyFooter,
  CaseStudySectionNav,
  type CaseStudyControlProps,
  type CaseStudyNavItem,
} from './CaseStudyControls'

type RewardrobeCaseStudyProps = CaseStudyControlProps & {
  onBack: () => void
  onPrevious: () => void
  onNext: () => void
}

const rewardrobeNav: CaseStudyNavItem[] = [
  { id: 'rewardrobe-overview', label: 'Overview' },
  { id: 'rewardrobe-problem', label: 'Problem' },
  { id: 'rewardrobe-strategy', label: 'Strategy' },
  { id: 'rewardrobe-experience', label: 'Experience' },
  { id: 'rewardrobe-features', label: 'Features' },
  { id: 'rewardrobe-trust', label: 'Trust' },
  { id: 'rewardrobe-validation', label: 'Validation' },
  { id: 'rewardrobe-reflection', label: 'Reflection' },
]

function ProjectLogo() {
  return (
    <span className="rw-case-logo" aria-hidden="true">
      JK
      <i />
    </span>
  )
}

function PhoneShell({
  className = '',
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={`rw-case-phone ${className}`}>
      <span className="rw-case-phone-island" aria-hidden="true" />
      <div className="rw-case-phone-status">
        <span>9:41</span>
        <span className="wf-status-icons" aria-label="Full signal, Wi-Fi, battery"><Signal size={10} /><Wifi size={10} /><BatteryFull size={13} /></span>
      </div>
      <span className="wf-device-button wf-device-button-left" aria-hidden="true" /><span className="wf-device-button wf-device-button-right" aria-hidden="true" /><div className="rw-case-phone-content">{children}</div><span className="wf-home-indicator" aria-hidden="true" />
    </div>
  )
}

function GarmentRow() {
  return (
    <div className="rw-case-garment-row" aria-label="Four selected garments">
      <span><Shirt aria-hidden="true" /></span>
      <span><Shield aria-hidden="true" /></span>
      <span className="rw-case-garment-bottoms" aria-hidden="true" />
      <span><Footprints aria-hidden="true" /></span>
    </div>
  )
}

export function RewardrobeCaseStudy({
  onBack,
  onPrevious,
  onNext,
  language,
  dark,
  onToggleTheme,
  onLanguageChange,
}: RewardrobeCaseStudyProps) {
  const [previewLook, setPreviewLook] = useState(0)
  const [dressReplay, setDressReplay] = useState(0)
  const handleBack = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    onBack()
  }

  return (
    <main className="rw-case">
      <header className="rw-case-nav">
        <a
          className="rw-case-home"
          href="/#work"
          aria-label="Return to selected work"
          onClick={handleBack}
        >
          <ProjectLogo />
        </a>

        <p>RE:WARDROBE</p>

        <div className="rw-case-nav-actions">
          <a className="rw-case-back" href="/#work" onClick={handleBack}>
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

      <CaseStudySectionNav items={rewardrobeNav} />

      <section className="rw-case-hero rw-case-container" id="rewardrobe-overview">
        <div className="rw-case-hero-copy">
          <p className="rw-case-kicker">05 · PERSONAL STYLE PLATFORM</p>
          <h1>Worn forward.</h1>
          <p className="rw-case-lede">
            RE:WARDROBE turns the clothes people already own into a personal
            styling system—then lets them preview new pieces, build a lookbook,
            and share the result.
          </p>

          <div className="rw-case-hero-tags" aria-label="Project disciplines">
            <span>Product Strategy</span>
            <span>UX/UI Design</span>
            <span>Interaction Design</span>
          </div>

          <a className="rw-case-scroll" href="#rewardrobe-problem">
            View the case study
            <ArrowDown aria-hidden="true" />
          </a>
        </div>

        <div className="rw-case-hero-visual" aria-label="RE:WARDROBE personal styling preview">
          <img
            className="rw-case-hero-photo"
            src={heroCampaign}
            alt="Runner in a white technical top and black shorts against blue sky and dark rocks"
          />

          <div className="rw-editorial-frame" aria-hidden="true"><i /><i /><i /><i /></div>
          <span className="rw-editorial-stamp" aria-hidden="true">RE: / WEAR AGAIN</span>
          <div className="rw-case-hero-field-note">
            <span>MY LOOKBOOK · FOREST LAYERS</span>
            <strong>New looks. More possibilities.</strong>
          </div>



          <div className="rw-case-hero-condition" aria-hidden="true">
            <span>07°</span>
            <i />
            <span>RAIN</span>
            <i />
            <span>18 KM/H</span>
          </div>
        </div>
      </section>

      <section className="rw-case-facts" aria-label="Project overview">
        <div className="rw-case-container rw-case-facts-grid">
          <div>
            <span>Project</span>
            <strong>Independent concept</strong>
          </div>
          <div>
            <span>My role</span>
            <strong>End-to-end UI/UX design</strong>
          </div>
          <div>
            <span>Platform</span>
            <strong>White-label mobile app</strong>
          </div>
          <div>
            <span>Focus</span>
            <strong>Personal closet · Styling · Virtual try-on</strong>
          </div>
        </div>
      </section>

      <section className="rw-case-section rw-case-container" id="rewardrobe-problem">
        <div className="rw-case-section-label">THE STARTING POINT</div>
        <div className="rw-case-problem-grid">
          <h2>
            A full closet should make getting dressed easier.<br />Too often, it still does not.
          </h2>

          <div className="rw-case-problem-copy">
            <p>
              Outdoor wardrobes grow one layer at a time, but people still
              forget what they own, repeat the same combinations, and struggle
              to imagine a new piece alongside their existing clothes.
            </p>
            <p>
              The opportunity is not another shopping feed. It is a personal
              closet that helps people restyle familiar pieces, ask a virtual
              fashion expert for advice, and preview before purchasing.
            </p>
          </div>
        </div>

        <div className="rw-case-hmw">
          <span>HOW MIGHT WE</span>
          <p>
            How might we turn outdoor wardrobes into new outfit possibilities?
          </p>
        </div>
      </section>

      <section className="rw-case-section rw-case-strategy" id="rewardrobe-strategy">
        <div className="rw-case-container">
          <div className="rw-case-section-label">PRODUCT STRATEGY</div>
          <div className="rw-case-heading-row">
            <h2>One wardrobe.<br />Three ways to see more.</h2>
            <p>
              The service connects wardrobe memory, expert styling, and virtual
              try-on that connects personal outfits with relevant brand products.
            </p>
          </div>

          <div className="rw-case-pillar-grid">
            <article>
              <span>01</span>
              <Shirt aria-hidden="true" />
              <h3>Remember what you own</h3>
              <p>
                Import purchases or photograph existing pieces so the digital
                closet reflects what is actually at home.
              </p>
            </article>

            <article>
              <span>02</span>
              <Sparkles aria-hidden="true" />
              <h3>Style with an expert</h3>
              <p>
                Turn weather, activity, mood, and recent wear into a small set
                of recommendations with clear stylist notes.
              </p>
            </article>

            <article>
              <span>03</span>
              <Repeat2 aria-hidden="true" />
              <h3>Preview before buying</h3>
              <p>
                Place a new item beside owned pieces on a personal avatar, then
                save the finished look or share it.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="rw-case-section rw-case-container" id="rewardrobe-experience">
        <div className="rw-case-section-label">CORE EXPERIENCE</div>
        <div className="rw-case-heading-row">
          <h2>From a crowded closet{' '}to a creative styling tool.</h2>
          <p>
            A simple flow moves from wardrobe capture to expert advice, virtual
            try-on, and a shareable lookbook—connecting familiar pieces with new discoveries from fashion brands.
          </p>
        </div>

        <div className="rw-case-flow" aria-label="Four-step product flow">
          <article>
            <span>01</span>
            <strong>Add</strong>
            <p>Import purchases or photograph clothes already owned.</p>
          </article>
          <ChevronRight aria-hidden="true" />
          <article>
            <span>02</span>
            <strong>Style</strong>
            <p>Ask a virtual expert for activity-aware combinations.</p>
          </article>
          <ChevronRight aria-hidden="true" />
          <article>
            <span>03</span>
            <strong>Try</strong>
            <p>Preview owned pieces and potential purchases together.</p>
          </article>
          <ChevronRight aria-hidden="true" />
          <article>
            <span>04</span>
            <strong>Publish</strong>
            <p>Save a private lookbook or publish a selected look.</p>
          </article>
        </div>
      </section>

      <section className="rw-case-showcase rw-case-showcase-dark" id="rewardrobe-features">
        <div className="rw-case-container rw-case-showcase-grid">
          <div className="rw-case-showcase-copy">
            <p className="rw-case-section-label">FEATURE 01 · SMART DISCOVERY</p>
            <h2 className="rw-discovery-title"><span>Your wardrobe.</span><span>New combinations.</span></h2>
            <p>
              Recommendations begin with the user&apos;s real closet, then use the
              weather, activity, mood, and recent wear. Each look includes a
              short note from the virtual stylist.
            </p>

            <div className="rw-case-feature-note">
              <Sparkles aria-hidden="true" />
              <span>
                “Pair your charcoal cargos with a light shell, then explore a trail shoe that completes the look.”
              </span>
            </div>
          </div>

          <div className="rw-case-showcase-phones">
            <PhoneShell className="rw-case-feature-phone rw-case-feature-phone-context"><WornForwardDemo /></PhoneShell>
            <PhoneShell className="rw-case-feature-phone rw-case-feature-phone-result"><WornForwardDemo initialLook={1} /></PhoneShell>
          </div>
        </div>
      </section>

      <section className="rw-case-showcase rw-case-fit-section">
        <div className="rw-case-container rw-case-fit-grid">
          <div
            className="rw-fit-lab"
            aria-label="Animated women and men outdoor outfit builder"
          >
            <header className="rw-fit-header">
              <span>VIRTUAL CLOSET · LIVE PREVIEW</span>
              <div><i /> LOOK READY</div>
            </header>

            <div className="rw-fit-tabs" aria-label="Choose model view">{['Trail', 'Forest', 'Hike'].map((label, index) => <button key={label} className={previewLook === index ? 'active' : ''} aria-pressed={previewLook === index} onClick={() => setPreviewLook(index)}>{label}</button>)}<button type="button" className="rw-fit-replay" onClick={() => setDressReplay(value => value + 1)} aria-label="Replay the selected outfit preview"><RotateCcw size={15} aria-hidden="true" /><span>View again</span></button></div>
            <div className={`rw-fit-stage wf-dress-stage wf-model-view-${previewLook}`} key={`${previewLook}-${dressReplay}`}>
              <img className="wf-campaign-preview wf-preview-reveal" src={trailLooks[previewLook].image} alt={trailLooks[previewLook].detail} />
              <span className="wf-dress-label">{trailLooks[previewLook].title}</span>
            </div>

            <div className="rw-fit-progress" aria-hidden="true">
              <span>01 · My closet</span>
              <i />
              <span>02 · Stylist edit</span>
              <i />
              <span>03 · Try-on</span>
              <i />
              <strong>Ready</strong>
            </div>
          </div>

          <div className="rw-case-showcase-copy">
            <p className="rw-case-section-label">FEATURE 02 · VIRTUAL CLOSET</p>
            <h2>Your next look<br />starts here.</h2>
            <p>
              The preview brings owned pieces and considered additions together
              in one complete look. It supports women
              and men without scoring bodies or promising an exact fit.
            </p>

            <ul className="rw-case-check-list">
              <li><Check aria-hidden="true" /> Owned and new pieces shown together</li>
              <li><Check aria-hidden="true" /> Women, men, and paired avatar views</li>
              <li><Check aria-hidden="true" /> Reduced-motion and text alternatives</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="wf-campaign-spread" aria-label="Outdoor campaign editorial">
        <div className="rw-case-container wf-campaign-spread-grid">
          <div className="wf-campaign-spread-copy">
            <p className="rw-case-section-label">THE OUTSIDE EDIT · 01</p>
            <h2 className="wf-fresh-title"><span>Fresh air.</span><span>Fresh perspective.</span></h2>
            <p>Technical layers. Room to move. A new way to wear what you already own.</p>
            <span className="wf-campaign-spread-index">WORN FORWARD / FIELD NOTES</span>
          </div>
          <figure><img src={actionCampaign} alt="Runner in a white technical top crossing dark rocks against a blue sky" loading="lazy" /><figcaption>Made for the moments outside.</figcaption></figure>
        </div>
      </section>

      <section className="wf-campaign-spread wf-climbing-story" aria-labelledby="wf-climbing-title">
        <div className="rw-case-container wf-campaign-spread-grid">
          <figure><img src={climbingCampaign} alt="A climber finding a hold on sunlit granite while a friend spots from below" loading="lazy" /><figcaption>A shared route. A different perspective.</figcaption></figure>
          <div className="wf-campaign-spread-copy">
            <p className="rw-case-section-label">THE OUTSIDE EDIT · 02 / BOULDER DAYS</p>
            <h2 id="wf-climbing-title">Find your hold.<br />Find your people.</h2>
            <p>A day at the boulders is about movement, shared attempts, and trusting the person below you. The clothes move through it all: the approach, the climb, and the time between routes.</p>
            <p>Worn Forward brings that rhythm into styling. Rediscover a tee and roomy trousers from your wardrobe, then explore a light layer for the walk back. Save the combination for your next day outside.</p>
            <span className="wf-campaign-spread-index">WORN FORWARD / LIFE BETWEEN ROUTES</span>
          </div>
        </div>
      </section>

      <section className="rw-case-lookbook" aria-labelledby="rw-lookbook-title">
        <div className="rw-case-container rw-lookbook-grid">
          <div className="rw-case-showcase-copy rw-lookbook-copy">
            <p className="rw-case-section-label">FEATURE 03 · MY LOOKBOOK</p>
            <h2 id="rw-lookbook-title"><span>Style it.</span><span>Save it.</span><span>Share it.</span></h2>
            <p>
              Every finished outfit can become a personal 4:5 lookbook card.
              Keep it private, post it inside the community, or export it for
              Instagram without exposing the full wardrobe.
            </p>

            <div className="rw-lookbook-options" aria-label="Lookbook sharing options">
              <span><LockKeyhole aria-hidden="true" /> Save privately</span>
              <span><Send aria-hidden="true" /> Share in app</span>
              <span><Download aria-hidden="true" /> Export 4:5</span>
            </div>
          </div>

          <div className="rw-lookbook-visual" aria-label="Forest lookbook editorial">
            <span className="rw-lookbook-float-note rw-lookbook-float-note-one" aria-hidden="true">
              STYLIST EDIT · 07
            </span>
            <span className="rw-lookbook-float-note rw-lookbook-float-note-two" aria-hidden="true">
              3 OWNED · 1 NEW
            </span>

            <img
              className="rw-lookbook-campaign"
              src={weekendCampaign}
              alt="Model in a blue shell, cream vest and tan hiking trousers"
            />

            <article className="rw-lookbook-card" aria-label="Saved Forest Layers lookbook card">
              <div className="rw-lookbook-card-top">
                <span>MY LOOKBOOK</span>
                <strong>07</strong>
              </div>
              <div className="rw-lookbook-card-scene">
                <img src={weekendCampaign} alt="Saved complete outfit" />
                <img src={trailLooks[1].image} alt="" aria-hidden="true" />
              </div>
              <div className="rw-lookbook-card-bottom">
                <div>
                  <strong>FOREST LAYERS</strong>
                  <span>Day hike · 7°C</span>
                </div>
                <span>OWNED 03 · NEW 01</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="rw-case-showcase rw-case-showcase-moss">
        <div className="rw-case-container rw-case-showcase-grid">
          <div className="rw-case-showcase-copy">
            <p className="rw-case-section-label">FEATURE 04 · CARE & NEXT LIFE</p>
            <h2>Keep the connection going.</h2>
            <p>
              Once styling and try-on create everyday value, the same wardrobe
              can surface care, repair, and trade-in at the moment an item needs
              attention—not as the main reason to use the product.
            </p>
          </div>

          <PhoneShell className="rw-case-next-life-phone">
            <p className="rw-phone-label">NEXT LIFE</p>
            <h2>Give it a next life.</h2>
            <p className="rw-phone-intro">Choose the option that works for you and your gear.</p>

            <div className="rw-phone-service-list">
              <div><Wrench aria-hidden="true" /><span><strong>Care and repair</strong><small>Keep the item in use.</small></span><ChevronRight /></div>
              <div><Repeat2 aria-hidden="true" /><span><strong>Trade in</strong><small>Check eligibility and estimate.</small></span><ChevronRight /></div>
              <div><Tag aria-hidden="true" /><span><strong>Resell</strong><small>Prepare verified details.</small></span><ChevronRight /></div>
              <div><HeartHandshake aria-hidden="true" /><span><strong>Donate</strong><small>Find a local partner.</small></span><ChevronRight /></div>
              <div><Scissors aria-hidden="true" /><span><strong>Upcycle</strong><small>Explore approved services.</small></span><ChevronRight /></div>
            </div>
          </PhoneShell>
        </div>
      </section>

      <section className="rw-case-section rw-case-container" id="rewardrobe-trust">
        <div className="rw-case-section-label">TRUST & RESPONSIBLE AI</div>
        <div className="rw-case-heading-row">
          <h2>The recommendation should never feel like a black box.</h2>
          <p>
            AI supports the interaction, but it is not the product story. The
            experience stays useful without an avatar and transparent about how
            recommendations are made.
          </p>
        </div>

        <div className="rw-case-trust-grid">
          <article>
            <Sparkles aria-hidden="true" />
            <h3>Explain the suggestion</h3>
            <p>Show the activity, weather, and wardrobe signals behind every look.</p>
          </article>
          <article>
            <LockKeyhole aria-hidden="true" />
            <h3>Keep the avatar private</h3>
            <p>Make setup optional and let customers delete photos and avatar data.</p>
          </article>
          <article>
            <EyeOff aria-hidden="true" />
            <h3>Avoid false confidence</h3>
            <p>Never claim exact fit, score a body, or invent sustainability impact.</p>
          </article>
        </div>
      </section>

      <section className="rw-case-section rw-case-mvp">
        <div className="rw-case-container">
          <div className="rw-case-section-label">SCOPE</div>
          <div className="rw-case-heading-row">
            <h2>Start with the ownership loop.</h2>
            <p>
              The MVP proves whether a personal closet, stylist guidance, and
              virtual try-on create repeat value before adding a public social
              layer or marketplace.
            </p>
          </div>

          <div className="rw-case-scope-grid">
            <article>
              <p>RELEASE 01</p>
              <h3>Core experience</h3>
              <ul>
                <li>Purchase import and manual item capture</li>
                <li>Searchable personal closet</li>
                <li>Virtual stylist recommendations</li>
                <li>Owned + new virtual try-on</li>
                <li>Private lookbook and 4:5 export</li>
                <li>Care and repair reminders</li>
              </ul>
            </article>

            <article>
              <p>PHASE 02</p>
              <h3>After validation</h3>
              <ul>
                <li>Opt-in community lookbook feed</li>
                <li>Human stylist and creator sessions</li>
                <li>Cross-brand product previews</li>
                <li>Verified resale and trade-in tools</li>
                <li>Sharing and moderation safeguards</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="rw-case-section rw-case-container" id="rewardrobe-validation">
        <div className="rw-case-section-label">VALIDATION PLAN</div>
        <div className="rw-case-heading-row">
          <h2>What I would test next.</h2>
          <p>
            This is a speculative concept, so the next step is validating the
            assumptions—not presenting invented results.
          </p>
        </div>

        <div className="rw-case-validation-list">
          <article>
            <span>01</span>
            <h3>Wardrobe behaviour</h3>
            <p>How do people remember, locate, combine, care for, and part with clothing?</p>
          </article>
          <article>
            <span>02</span>
            <h3>Avatar trust</h3>
            <p>What controls make virtual try-on feel helpful, private, and honest?</p>
          </article>
          <article>
            <span>03</span>
            <h3>Recommendation value</h3>
            <p>Do explanations improve confidence and help people wear underused items?</p>
          </article>
          <article>
            <span>04</span>
            <h3>Sharing boundaries</h3>
            <p>When does a private look become something people genuinely want to share?</p>
          </article>
        </div>
      </section>

      <section className="rw-case-reflection" id="rewardrobe-reflection">
        <div className="rw-case-container rw-case-reflection-grid">
          <p className="rw-case-section-label">REFLECTION</p>
          <h2>
            Personal styling can connect wardrobe discovery with brand discovery.
          </h2>
          <p>
            Designing Worn Forward taught me to connect two needs: helping people find fresh outfits in their own wardrobe, and helping fashion brands introduce pieces that complement it. I would next test whether styling explanations and outfit previews build confidence, encourage product discovery, and give customers a reason to return.
          </p>
        </div>
      </section>

      <div className="case-study-disclaimer rw-case-container">
        Independent concept with original imagery and garment designs. Not
        affiliated with or endorsed by any outdoor or fashion brand.
      </div>

      <CaseStudyFooter
        language={language}
        currentProjectDescription="RE:WARDROBE · Worn forward."
        previousProjectName="Condo Connect"
        previousProjectPath="/work/condo-connect"
        nextProjectName="Find My Park"
        nextProjectPath="/work/find-my-park"
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </main>
  )
}
