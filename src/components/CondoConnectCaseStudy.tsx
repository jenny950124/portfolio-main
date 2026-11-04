import type { MouseEvent, ReactNode } from 'react'
import {
  ArrowDown,
  ArrowLeft,
  Bell,
  BookOpen,
  BriefcaseBusiness,
  CakeSlice,
  CalendarDays,
  Check,
  Dumbbell,
  Home,
  Search,
  ShieldCheck,
  Users,
} from 'lucide-react'

import condoBookingProcess from '../assets/condobooking_process.png'
import {
  CaseStudyControls,
  CaseStudyFooter,
  CaseStudySectionNav,
  type CaseStudyControlProps,
  type CaseStudyNavItem,
} from './CaseStudyControls'

type CondoConnectCaseStudyProps = CaseStudyControlProps & {
  onBack: () => void
  onPrevious: () => void
  onNext: () => void
}

type Fact = {
  label: string
  value: string
}

const condoConnectNav: CaseStudyNavItem[] = [
  { id: 'condo-overview', label: 'Overview' },
  { id: 'condo-problem', label: 'Problem' },
  { id: 'condo-needs', label: 'Needs' },
  { id: 'condo-structure', label: 'Structure' },
  { id: 'condo-flow', label: 'Flow' },
  { id: 'condo-validation', label: 'Validation' },
  { id: 'condo-outcomes', label: 'Outcomes' },
  { id: 'condo-reflection', label: 'Reflection' },
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
  onBack,
  language,
  dark,
  onToggleTheme,
  onLanguageChange,
}: Omit<CondoConnectCaseStudyProps, 'onPrevious' | 'onNext'>) {
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

      <p>CONDO CONNECT</p>

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

export function CondoConnectCaseStudy({
  onBack,
  onPrevious,
  onNext,
  language,
  dark,
  onToggleTheme,
  onLanguageChange,
}: CondoConnectCaseStudyProps) {
  return (
    <main className="project-case condo-case">
      <ProjectHeader
        onBack={onBack}
        language={language}
        dark={dark}
        onToggleTheme={onToggleTheme}
        onLanguageChange={onLanguageChange}
      />

      <CaseStudySectionNav items={condoConnectNav} />

      <section className="pc-hero pc-container condo-hero" id="condo-overview">
        <div className="pc-hero-copy">
          <p className="pc-kicker">
            04 · RESIDENT SERVICE DESIGN
          </p>

          <h1>
            Shared spaces, without the guesswork.
          </h1>

          <p className="pc-lede">
            A clearer mobile experience that helps residents discover
            and enjoy life beyond their unit—from wellness and focused
            study to work, celebrations, and time together.
          </p>

          <div
            className="pc-tag-row"
            aria-label="Project disciplines"
          >
            <span>User Research</span>
            <span>Service Design</span>
            <span>UX/UI Design</span>
            <span>Prototyping</span>
          </div>

          <a className="pc-scroll-link" href="#condo-problem">
            View the case study
            <ArrowDown aria-hidden="true" />
          </a>
        </div>

        <div
          className="condo-hero-visual"
          aria-label="Condo Connect booking flow preview"
        >
          <div
            className="condo-hero-orbit condo-hero-orbit-one"
            aria-hidden="true"
          />

          <div
            className="condo-hero-orbit condo-hero-orbit-two"
            aria-hidden="true"
          />

          <img
            src={condoBookingProcess}
            alt="Three Condo Connect mobile screens showing amenity discovery, booking, and confirmation"
          />

          <div className="condo-hero-flow" aria-hidden="true">
            <span>Discover</span>
            <i />
            <span>Book</span>
            <i />
            <span>Confirm</span>
          </div>
        </div>
      </section>

      <FactStrip
        facts={[
          {
            label: 'Project',
            value: 'Condo amenity booking',
          },
          {
            label: 'My role',
            value: 'Research · Service · UX/UI',
          },
          {
            label: 'Research',
            value: 'Resident interviews',
          },
          {
            label: 'Validation',
            value: 'Testing · Client feedback',
          },
        ]}
      />

      <section
        className="pc-section pc-container"
        id="condo-problem"
      >
        <SectionIntro
          label="THE SERVICE PROBLEM"
          title={
            <>
              Residents could reserve a space.<br />They could not see the whole process.
            </>
          }
          body={
            <>
              <p>
                Interviews with people living in condos showed that
                the challenge started before the booking form.
                Facility details were difficult to find, availability
                was unclear, and the reservation steps felt more
                complicated than they needed to be.
              </p>

              <p>
                After booking, uncertainty continued. Residents needed
                a clear status, reliable details, and an easier way to
                understand updates or communicate with building
                management.
              </p>
            </>
          }
        />

        <HowMightWe>
          Make every stage of a shared-amenity reservation visible,
          from first discovery to a confirmed booking and follow-up
          support?
        </HowMightWe>
      </section>

      <section className="pc-section condo-needs" id="condo-needs">
        <div className="pc-container">
          <SectionIntro
            label="RESIDENT NEEDS"
            title={
              <>
                Four gaps in one
                {' '}
                everyday service.
              </>
            }
            body={
              <p>
                The research framed the experience as a connected
                service, rather than a single calendar screen.
              </p>
            }
          />

          <div className="condo-need-grid">
            <article>
              <Search aria-hidden="true" />
              <span>01</span>
              <h3>Find the right facility</h3>
              <p>
                See what each space offers, its rules, capacity, and
                key details before choosing it.
              </p>
            </article>

            <article>
              <CalendarDays aria-hidden="true" />
              <span>02</span>
              <h3>Understand availability</h3>
              <p>
                Compare open dates and times without moving between
                disconnected steps.
              </p>
            </article>

            <article>
              <Check aria-hidden="true" />
              <span>03</span>
              <h3>Trust the booking status</h3>
              <p>
                Know whether a request is selected, submitted,
                approved, or fully confirmed.
              </p>
            </article>

            <article>
              <Bell aria-hidden="true" />
              <span>04</span>
              <h3>Stay informed</h3>
              <p>
                Keep reservation details, building updates, and
                management communication in view.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="pc-section pc-container condo-service-section" id="condo-structure">
        <SectionIntro
          label="SERVICE STRUCTURE"
          title={
            <>
              One resident journey.<br />Three visible layers.
            </>
          }
          body={
            <p>
              The interface connects the resident&apos;s task with
              the information the system must show and the support
              building management needs to provide.
            </p>
          }
        />

        <div
          className="condo-service-map"
          aria-label="Condo Connect service structure"
        >
          <div className="condo-service-labels">
            <span>Resident</span>
            <span>Interface</span>
            <span>Building service</span>
          </div>

          <div className="condo-service-journey">
            <article>
              <strong>Explore</strong>
              <span>Compare amenities</span>
            </article>

            <article>
              <strong>Select</strong>
              <span>Choose date and time</span>
            </article>

            <article>
              <strong>Reserve</strong>
              <span>Review and submit</span>
            </article>

            <article>
              <strong>Manage</strong>
              <span>Check details and updates</span>
            </article>
          </div>

          <div className="condo-service-system">
            <article>
              <Search aria-hidden="true" />
              <span>Facility information</span>
            </article>

            <article>
              <CalendarDays aria-hidden="true" />
              <span>Availability state</span>
            </article>

            <article>
              <Check aria-hidden="true" />
              <span>Confirmation record</span>
            </article>

            <article>
              <Bell aria-hidden="true" />
              <span>Updates and support</span>
            </article>
          </div>

          <div className="condo-service-support">
            <span>Rules &amp; capacity</span>
            <span>Booking inventory</span>
            <span>Reservation status</span>
            <span>Management response</span>
          </div>
        </div>
      </section>

      <section
        className="pc-feature condo-life"
        aria-label="Animated day of condo amenity experiences"
      >
        <div className="pc-container">
          <div className="condo-life-heading">
            <p className="pc-section-label">
              A DAY BEYOND YOUR FRONT DOOR
            </p>

            <h2>
              More life,
              {' '}
              closer to home.
            </h2>

            <p>
              Amenities become an extension of home: a place to move,
              focus, meet, celebrate, and connect without adding another
              commute to the day.
            </p>
          </div>

          <div className="condo-life-stage">
            <div className="condo-life-scenes">
              <article className="condo-life-scene condo-life-wellness">
                <div className="condo-life-scene-top">
                  <span>7:00 AM · WELLNESS STUDIO</span>
                  <Dumbbell aria-hidden="true" />
                </div>

                <div className="condo-life-scene-copy">
                  <p>START WITH MOVEMENT</p>
                  <h3>Make wellbeing part of the building.</h3>
                  <span>
                    Morning yoga · Reformer Pilates · Personal training
                  </span>
                </div>

                <div className="condo-life-chips">
                  <span>Private instructor access</span>
                  <span>Equipment included</span>
                  <span>8 spots</span>
                </div>
              </article>

              <article className="condo-life-scene condo-life-study">
                <div className="condo-life-scene-top">
                  <span>11:30 AM · STUDY LOUNGE</span>
                  <BookOpen aria-hidden="true" />
                </div>

                <div className="condo-life-scene-copy">
                  <p>FOCUS WITHOUT THE COMMUTE</p>
                  <h3>A quiet place when home feels too small.</h3>
                  <span>
                    Solo study · Group projects · Late-night focus
                  </span>
                </div>

                <div className="condo-life-chips">
                  <span>Quiet zone</span>
                  <span>Fast Wi-Fi</span>
                  <span>Bookable desks</span>
                </div>
              </article>

              <article className="condo-life-scene condo-life-celebrate">
                <div className="condo-life-scene-top">
                  <span>3:00 PM · CELEBRATION ROOM</span>
                  <CakeSlice aria-hidden="true" />
                </div>

                <div className="condo-life-scene-copy">
                  <p>ROOM FOR THE MILESTONES</p>
                  <h3>Bring the birthday party closer to home.</h3>
                  <span>
                    Kids&apos; birthdays · Family gatherings · Shared meals
                  </span>
                </div>

                <div className="condo-life-chips">
                  <span>Kitchen access</span>
                  <span>Flexible seating</span>
                  <span>Easy cleanup</span>
                </div>
              </article>

              <article className="condo-life-scene condo-life-work">
                <div className="condo-life-scene-top">
                  <span>6:00 PM · WORK LOUNGE</span>
                  <BriefcaseBusiness aria-hidden="true" />
                </div>

                <div className="condo-life-scene-copy">
                  <p>WORK, WITHOUT LEAVING THE BUILDING</p>
                  <h3>Meet clients or teammates close to home.</h3>
                  <span>
                    Remote work · Small teams · Solo businesses
                  </span>
                </div>

                <div className="condo-life-chips">
                  <span>Display ready</span>
                  <span>Video calls</span>
                  <span>6-person table</span>
                </div>
              </article>

              <article className="condo-life-scene condo-life-social">
                <div className="condo-life-scene-top">
                  <span>8:00 PM · ROOFTOP LOUNGE</span>
                  <Users aria-hidden="true" />
                </div>

                <div className="condo-life-scene-copy">
                  <p>END THE DAY TOGETHER</p>
                  <h3>Turn neighbours into a community.</h3>
                  <span>
                    Shared dinners · Sunset gatherings · New connections
                  </span>
                </div>

                <div className="condo-life-chips">
                  <span>City views</span>
                  <span>BBQ access</span>
                  <span>Up to 20</span>
                </div>
              </article>
            </div>

            <ol className="condo-life-timeline" aria-hidden="true">
              <li>
                <span>7:00</span>
                <div>
                  <strong>Wellness</strong>
                  <small>Yoga · Pilates · PT</small>
                </div>
              </li>

              <li>
                <span>11:30</span>
                <div>
                  <strong>Study</strong>
                  <small>Quiet focus nearby</small>
                </div>
              </li>

              <li>
                <span>3:00</span>
                <div>
                  <strong>Celebrate</strong>
                  <small>Birthdays · Family</small>
                </div>
              </li>

              <li>
                <span>6:00</span>
                <div>
                  <strong>Work lounge</strong>
                  <small>Meetings · Calls</small>
                </div>
              </li>

              <li>
                <span>8:00</span>
                <div>
                  <strong>Community</strong>
                  <small>Rooftop · Neighbours</small>
                </div>
              </li>
            </ol>
          </div>

          <div className="condo-life-footer">
            <span>ONE BUILDING</span>
            <i />
            <strong>MORE WAYS TO LIVE WELL</strong>
          </div>
        </div>
      </section>

      <section className="pc-feature condo-flow-feature" id="condo-flow">
        <div className="pc-container condo-flow-showcase">
          <div className="pc-feature-copy">
            <p className="pc-section-label">
              CORE FLOW · DISCOVER TO CONFIRM
            </p>

            <h2>
              Keep the path short.<br />Keep the state visible.
            </h2>

            <p>
              The prototype reduces the experience to three
              understandable stages. Each screen gives the information
              needed for the next decision, then closes the loop with
              a complete confirmation.
            </p>

            <div className="condo-flow-legend">
              <span>
                <b>01</b>
                Discover
              </span>

              <span>
                <b>02</b>
                Book
              </span>

              <span>
                <b>03</b>
                Confirm
              </span>
            </div>
          </div>

          <div className="condo-flow-image">
            <img
              src={condoBookingProcess}
              alt="Condo Connect high-fidelity Discover, Book, and Confirm screens"
            />
          </div>
        </div>
      </section>

      <section className="pc-feature condo-feature-discover">
        <div className="pc-container pc-feature-grid">
          <div className="pc-feature-copy">
            <p className="pc-section-label">
              FEATURE 01 · DISCOVER
            </p>

            <h2>
              Understand the space
              {' '}
              before choosing it.
            </h2>

            <p>
              The home experience brings featured amenities,
              reservation access, and building updates together—from
              wellness studios and study lounges to celebration and
              meeting rooms. Residents see what each space makes
              possible before choosing it.
            </p>

            <ul className="pc-check-list condo-check-list">
              <li>
                <Check aria-hidden="true" />
                Amenity photos, purpose, and atmosphere
              </li>

              <li>
                <Check aria-hidden="true" />
                Rules, capacity, equipment, and instructor access
              </li>

              <li>
                <Check aria-hidden="true" />
                Options for wellness, study, work, and celebrations
              </li>
            </ul>
          </div>

          <div className="condo-amenity-panel">
            <div className="condo-amenity-hero">
              <span>FEATURED AMENITY</span>
              <h3>Rooftop Lounge</h3>
              <p>
                Panoramic views and a flexible gathering space.
              </p>
            </div>

            <div className="condo-amenity-details">
              <article>
                <Users aria-hidden="true" />
                <span>Capacity</span>
                <strong>Up to 20</strong>
              </article>

              <article>
                <Home aria-hidden="true" />
                <span>Space</span>
                <strong>Lounge seating</strong>
              </article>

              <article>
                <ShieldCheck aria-hidden="true" />
                <span>Access</span>
                <strong>Residents only</strong>
              </article>
            </div>

            <button type="button" tabIndex={-1}>
              Check availability
            </button>
          </div>
        </div>
      </section>

      <section className="pc-feature condo-feature-book">
        <div className="pc-container pc-feature-grid pc-feature-grid-reverse">
          <div className="condo-booking-panel">
            <div className="condo-booking-heading">
              <div>
                <span>ROOFTOP LOUNGE</span>
                <strong>Choose your visit</strong>
              </div>

              <CalendarDays aria-hidden="true" />
            </div>

            <div className="condo-booking-month">
              <span>April 2025</span>

              <div>
                <i>20</i>
                <i>21</i>
                <i className="active">22</i>
                <i>23</i>
                <i>24</i>
              </div>
            </div>

            <div className="condo-time-grid">
              <span>3:00 PM</span>
              <span className="active">5:00 PM</span>
              <span>7:00 PM</span>
            </div>

            <div className="condo-booking-summary">
              <div>
                <span>Date</span>
                <strong>Tue, Apr 22</strong>
              </div>

              <div>
                <span>Time</span>
                <strong>5:00–7:00 PM</strong>
              </div>
            </div>

            <button type="button" tabIndex={-1}>
              Review reservation
            </button>
          </div>

          <div className="pc-feature-copy">
            <p className="pc-section-label">
              FEATURE 02 · BOOK
            </p>

            <h2>
              Make availability
              {' '}
              impossible to misread.
            </h2>

            <p>
              Date and time selection live in one continuous view.
              The chosen slot stays visible in a summary so residents
              can verify the decision before they submit it.
            </p>
          </div>
        </div>
      </section>

      <section className="pc-feature condo-feature-confirm">
        <div className="pc-container pc-feature-grid">
          <div className="pc-feature-copy">
            <p className="pc-section-label">
              FEATURE 03 · CONFIRM &amp; MANAGE
            </p>

            <h2>
              Close the loop,
              {' '}
              then keep it accessible.
            </h2>

            <p>
              Confirmation is more than a success message. The final
              state keeps the facility, date, time, guest limit, and
              reference number together, with clear next steps for
              the calendar, existing bookings, updates, or management
              support.
            </p>
          </div>

          <div className="condo-confirm-panel">
            <div className="condo-confirm-icon">
              <Check aria-hidden="true" />
            </div>

            <span>RESERVATION CONFIRMED</span>
            <h3>Rooftop Lounge</h3>

            <div className="condo-confirm-details">
              <div>
                <CalendarDays aria-hidden="true" />
                <span>Tue, Apr 22 · 5:00–7:00 PM</span>
              </div>

              <div>
                <Users aria-hidden="true" />
                <span>Up to 20 guests</span>
              </div>

              <div>
                <Check aria-hidden="true" />
                <span>Reference #482719</span>
              </div>
            </div>

            <div className="condo-confirm-actions">
              <button type="button" tabIndex={-1}>
                Add to calendar
              </button>

              <button type="button" tabIndex={-1}>
                View my bookings
              </button>
            </div>

            <div className="condo-support-row">
              <Bell aria-hidden="true" />

              <span>
                <strong>Need an update?</strong>
                Building messages and support stay with the
                reservation.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="pc-section pc-container" id="condo-validation">
        <SectionIntro
          label="VALIDATION"
          title={
            <>
              Check the flow with residents.<br />Check the service with the client.
            </>
          }
          body={
            <p>
              Research and validation stayed connected to the people
              who would use and maintain the service. Resident
              interviews shaped the problem, usability testing
              examined the prototype, and client feedback grounded
              the experience in real service needs.
            </p>
          }
        />

        <div className="condo-validation-list">
          <article>
            <span>01</span>

            <div>
              <strong>Resident interviews</strong>

              <p>
                Spoke with people living in condos about how they find
                facilities, reserve them, check status, and seek help.
              </p>
            </div>
          </article>

          <article>
            <span>02</span>

            <div>
              <strong>Usability testing</strong>

              <p>
                Tested whether the Discover, Book, and Confirm
                sequence made the booking process understandable from
                end to end.
              </p>
            </div>
          </article>

          <article>
            <span>03</span>

            <div>
              <strong>Client feedback</strong>

              <p>
                Reviewed the proposed flow and service touchpoints so
                the resident experience stayed aligned with building
                operations.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="pc-section condo-outcome" id="condo-outcomes">
        <div className="pc-container">
          <SectionIntro
            label="DESIGN OUTCOME"
            title={
              <>
                A booking experience that
                {' '}
                explains itself.
              </>
            }
            body={
              <p>
                The final prototype consolidates facility discovery,
                availability, reservation details, status, and
                support into one continuous resident journey.
              </p>
            }
          />

          <div className="pc-outcome-grid">
            <article>
              <Search aria-hidden="true" />
              <strong>Information comes first</strong>

              <p>
                Residents can compare a facility&apos;s fit before
                beginning the reservation.
              </p>
            </article>

            <article>
              <CalendarDays aria-hidden="true" />
              <strong>The process stays visible</strong>

              <p>
                Selections and status remain clear at every point in
                the booking flow.
              </p>
            </article>

            <article>
              <Bell aria-hidden="true" />
              <strong>Support stays connected</strong>

              <p>
                Updates and management communication have a clear
                place after confirmation.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="pc-reflection condo-reflection" id="condo-reflection">
        <div className="pc-container pc-reflection-grid">
          <p className="pc-section-label">REFLECTION</p>

          <h2>
            A simple interface depends on a visible service
            underneath it.
          </h2>

          <p>
            Condo Connect reinforced that clarity is not only fewer
            screens. It comes from showing the information, status,
            and support people need at the exact point uncertainty
            begins.
          </p>
        </div>
      </section>

      <CaseStudyFooter
        language={language}
        currentProjectDescription="Condo Connect · Discover, book, and manage shared amenities with clarity."
        previousProjectName="PowerPause"
        previousProjectPath="/work/powerpause"
        nextProjectName="RE:WARDROBE"
        nextProjectPath="/work/rewardrobe"
        onPrevious={onPrevious}
        onNext={onNext}
      />
    </main>
  )
}
