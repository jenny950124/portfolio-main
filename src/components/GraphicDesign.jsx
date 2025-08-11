import React, { useEffect, useRef } from 'react';
import './PowerPause.css';
import './GraphicDesign.css';
import ProjectNavigation from './ProjectNavigation';
import SideNav from './SideNav';
import ProjectsAutoSlider from './ProjectsAutoSlider';

import heroComposite from '../assets/Slider/p4.png';

import furniture from '../assets/gd/furniture.png';
import gd1 from '../assets/gd/gd1.png';
import gd2 from '../assets/gd/gd2.png';
import gd3 from '../assets/gd/gd3.png';
import gd4 from '../assets/gd/gd4.png';
import gd5 from '../assets/gd/gd5.png';
import gd6 from '../assets/gd/gd6.png';
import gd7 from '../assets/gd/gd7.png';

const sectionsForNav = [
  { id: 'overview',   label: 'Overview' },
  { id: 'problem',    label: 'Goals' },
  { id: 'branding',   label: 'Branding' },
  { id: 'outcomes',   label: 'Outcomes' },
  { id: 'reflection', label: 'Reflection' },
];

export default function GraphicDesign({ prevId, nextId }) {
  // useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, []);

  const solutionSlides = [
    { href: '#', img: gd4,       title: 'Sticker / Logo' },
    { href: '#', img: gd1,       title: 'Coffee cup identity' },
    { href: '#', img: gd6,       title: 'Poster' },
    { href: '#', img: furniture, title: 'DESIGN poster' },
  ];

  const sliderWrapRef = useRef(null);
  useEffect(() => {
    const el = sliderWrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) el.classList.add('is-live');
        else el.classList.remove('is-live');
      }),
      { root: null, threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="project-detail-wrapper powerpause-page gd-page has-side-right">
      <SideNav sections={sectionsForNav} side="right" offset={110} />

      <div className="content-zoom">
        <div className="zoom-inner">
          {/* ===== OVERVIEW ===== */}
          <section id="overview" className="meta-section meta--composite">
            <img src={heroComposite} alt="Graphic Design hero composite" className="bg-image" />
          </section>

          {/* ===== GOALS ===== */}
          <section id="problem" className="problem-section section-block">
            <h4>GOALS</h4>
            <p className="callout">Turn everyday objects into brand media—simple, minimal, modern.</p>

            <div className="split">
              <div className="col">
                <h5 className="eyebrow">Design Goals</h5>
                <ul>
                  <li>Define a clean visual language that reflects my identity</li>
                  <li>Scale the system across product, packaging, and social</li>
                  <li>Keep warmth and a touch of humor in tone &amp; manner</li>
                </ul>
              </div>
              <div className="col">
                <h5 className="eyebrow">Deliverables</h5>
                <ul>
                  <li>Logo &amp; type system + color tokens</li>
                  <li>Mug / tote / business card / social mockups</li>
                  <li>Lightweight usage guide</li>
                </ul>
              </div>
            </div>

            <div className="gd-banner">
              <img src={gd7} alt="Graphic system applications collage" />
            </div>
          </section>

          {/* ===== BRANDING ===== */}
          <section id="branding" className="branding-section section-block">
            <h4>BRANDING</h4>
            <p className="callout">"Turning ordinary daily scenes into meaningful brand touchpoints, where even the most practical objects are infused with a subtle sense of playfulness and charm."</p>

   
            <div className="problem-image">
              <img src={gd2} alt="Context visuals" />
              <img src={gd3} alt="Brand concept" />
            </div>
          </section>

          {/* ===== OUTCOMES ===== */}
          <section id="outcomes" className="outcomes-section section-block">
            <h4>OUTCOMES</h4>
            <div className="split">
              <div className="col">
                <h5 className="eyebrow">Impact</h5>
                <ul>
                  <li>Clearer personal visual language reusable across touchpoints</li>
                  <li>Cohesive system for product, packaging, and social content</li>
                </ul>
              </div>
              <div className="col">
                <h5 className="eyebrow">What I Learned</h5>
                <ul>
                  <li>“Light humor + generous whitespace” scales well to many artifacts</li>
                  <li>System thinking simplifies future iterations and extensions</li>
                </ul>
              </div>
            </div>

            <div ref={sliderWrapRef} className="gd-auto-wrap">
              <ProjectsAutoSlider items={solutionSlides} speed={10} />
            </div>
          </section>

          {/* ===== REFLECTION ===== */}
          <section id="reflection" className="reflection-section section-block">
            <h4>REFLECTION</h4>
            <p>
              Personal branding became an exercise in scaling tone, message, and pace across
              different artifacts. The core language—light humor and generous whitespace—
              is something I now carry into client work as well.
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
