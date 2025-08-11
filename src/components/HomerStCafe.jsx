import React, { useEffect } from 'react';
import './PowerPause.css';
import './HomerStCafe.css';
import ProjectNavigation from './ProjectNavigation';
import SideNav from './SideNav';

import heroComposite from '../assets/Slider/p3.png';

import homerbefore from '../assets/app/homerbefore.png';
import homerbefore2 from '../assets/app/homerbefore2.png';
import solution1 from '../assets/app/solution1.png';
import solution2 from '../assets/app/solution2.png';
import solution3 from '../assets/app/solution3.png';
import desktopMockup1 from '../assets/app/desktop-mockup1.png';
import desktopMockup2 from '../assets/app/desktop-mockup2.png';
import desktopMockup3 from '../assets/app/desktop-mockup3.png';
import iphone1 from '../assets/app/iphone1.png';
import iphone2 from '../assets/app/iphone2.png';
import iphone3 from '../assets/app/iphone3.png';
import prototypeVideo from '../assets/app/Prototype.mp4';

const sectionsForNav = [
  { id: 'overview',   label: 'Overview' },
  { id: 'problem',    label: 'Problem' },
  { id: 'research',   label: 'Research' },
  { id: 'solution',   label: 'Solution' },
  { id: 'wireframes', label: 'Wireframes' },
  { id: 'outcomes',   label: 'Outcomes' },
  { id: 'reflection', label: 'Reflection' },
];

export default function HomerStCafe({ prevId, nextId }) {
  // useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, []);

  return (
    <div className="project-detail-wrapper powerpause-page homerst-page has-side-right">
      <SideNav sections={sectionsForNav} side="right" offset={110} />

      <div className="content-zoom">
        <div className="zoom-inner">
          {/* ===== OVERVIEW ===== */}
          <section id="overview" className="meta-section meta--composite">
            <img src={heroComposite} alt="Homer St. Café hero composite" className="bg-image" />
          </section>

          {/* ===== PROBLEM ===== */}
          <section id="problem" className="problem-section section-block">
            <h4>PROBLEM</h4>
            <p className="callout">Warm brand presence, weak mobile usability.</p>
            <p>
              The previous site was not responsive and core tasks like browsing the menu
              and making reservations weren’t smooth. The challenge was to translate the
              restaurant’s warmth and hospitality into digital.
            </p>
            <div className="problem-image">
              <img src={homerbefore} alt="Before redesign" />
              <img src={homerbefore2} alt="Before redesign—menu/reservation friction" />
            </div>
          </section>

          {/* ===== RESEARCH ===== */}
          <section id="research" className="research-section section-block">
            <h4>RESEARCH</h4>
            <p>
              Heuristic review and quick user checks highlighted friction around the reservation
              CTA, menu readability on mobile, and navigation clarity.
            </p>
          </section>

          {/* ===== SOLUTION ===== */}
          <section id="solution" className="solution-section section-block">
            <h4>SOLUTION</h4>
            <p className="callout">Visual-first layout + intuitive reservation flow.</p>

            <div className="split">
              <div className="col">
                <h5 className="eyebrow">IA & Navigation</h5>
                <ul>
                  <li>Sticky reservation CTA and a simplified menu structure</li>
                  <li>Photo-driven menu gallery</li>
                </ul>
              </div>
              <div className="col">
                <h5 className="eyebrow">Mood & Brand</h5>
                <ul>
                  <li>Warm tones, texture, and authentic photography</li>
                  <li>Type scales optimized for mobile readability</li>
                </ul>
              </div>
            </div>

            <div className="solution-image-row">
              <img src={solution1} alt="Solution visual 1" />
              <img src={solution2} alt="Solution visual 2" />
              <img src={solution3} alt="Solution visual 3" />
            </div>
          </section>

          {/* ===== MOCKUP (Wireframes) ===== */}
          <section id="wireframes" className="mockup-section section-block">
            <div className="overview-text-container">
              <h2 className="overview-title">MOCKUP</h2>
              <p className="overview-description">
                The redesign was tested across both desktop and mobile, ensuring responsiveness and maintaining
                the warmth of the brand experience regardless of screen size.
              </p>
            </div>

            <div className="mockup-group">
              <div className="mockup-column visible">
                <img src={desktopMockup1} alt="Homepage with CTA" className="mockup-image large" />
                <p className="mockup-caption">Homepage with reservation CTA and warm hero</p>
              </div>
              <div className="mockup-column visible">
                <img src={desktopMockup2} alt="Menu Gallery" className="mockup-image large" />
                <p className="mockup-caption">Photo-driven menu gallery</p>
              </div>
              <div className="mockup-column visible">
                <img src={desktopMockup3} alt="Contact & Footer" className="mockup-image large" />
                <p className="mockup-caption">Contact and location area with festive theme</p>
              </div>
            </div>

            <div className="mockup-group">
              <div className="mockup-column visible">
                <img src={iphone1} alt="Mobile Nav" className="mockup-image mobile large" />
                <p className="mockup-caption">Mobile menu navigation layout</p>
              </div>
              <div className="mockup-column visible">
                <img src={iphone2} alt="Mobile Content" className="mockup-image mobile large" />
                <p className="mockup-caption">Responsive visual layout</p>
              </div>
              <div className="mockup-column visible">
                <img src={iphone3} alt="Mobile Location" className="mockup-image mobile large" />
                <p className="mockup-caption">Location section optimized for mobile</p>
              </div>
            </div>
          </section>

          {/* ===== PROTOTYPE ===== */}
          <section className="prototype-section">
            <div className="overview-text-container">
              <h2 className="overview-title">PROTOTYPE</h2>
              <p className="overview-description">
                A clickable prototype was built and tested to simulate key user flows such as viewing the menu,
                making a reservation, and browsing on mobile.
              </p>
            </div>
            <div className="prototype-video-wrapper">
              <video controls className="prototype-video">
                <source src={prototypeVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>

          {/* ===== OUTCOMES ===== */}
          <section id="outcomes" className="outcomes-section section-block">
            <h4>OUTCOMES</h4>
            <div className="split">
              <div className="col">
                <h5 className="eyebrow">Impact</h5>
                <ul>
                  <li>Clearer paths to reservation and menu browsing on mobile</li>
                  <li>Visual warmth aligned the site with the in-store experience</li>
                </ul>
              </div>
              <div className="col">
                <h5 className="eyebrow">What I Learned</h5>
                <ul>
                  <li>Brand mood must be paired with unmissable primary CTAs</li>
                  <li>Type scale and image density are key to mobile comfort</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ===== REFLECTION ===== */}
          <section id="reflection" className="reflection-section section-block">
            <h4>REFLECTION</h4>
            <p>
              Offline warmth doesn’t automatically translate online. Intentional IA,
              visuals, and interaction design are what make the brand truly felt in digital.
            </p>
          </section>
        </div>
      </div>

      {/* ⬇︎ sticky wrapper */}
      <div className="project-nav-sticky">
        <ProjectNavigation prevId={prevId} nextId={nextId} />
      </div>
    </div>
  );
}
