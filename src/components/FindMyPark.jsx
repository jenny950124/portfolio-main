import React, { useEffect } from 'react';
import './PowerPause.css';
import './FindMyPark.css';
import ProjectNavigation from './ProjectNavigation';
import SideNav from './SideNav';

import heroComposite from '../assets/Slider/p1.png';

import problemImg from '../assets/fmp/fmp3.png';
import researchInsight from '../assets/fmp/research_insight_fmp.png';
import journeyMap from '../assets/fmp/journeymap.png';
import solution1 from '../assets/fmp/solution1.png';
import solution2 from '../assets/fmp/solution2.png';
import solution3 from '../assets/fmp/solution3.png';
import p1 from '../assets/fmp/p1.png';
import p2 from '../assets/fmp/p2.png';
import p3 from '../assets/fmp/p3.png';
import wireframeImg from '../assets/fmp/wireframe.png';
import outcomesImg from '../assets/fmp/outcomes.png';

const sectionsForNav = [
  { id: 'overview',   label: 'Overview' },
  { id: 'problem',    label: 'Problem' },
  { id: 'research',   label: 'Research' },
  { id: 'solution',   label: 'Solution' },
  { id: 'wireframes', label: 'Wireframes' },
  { id: 'outcomes',   label: 'Outcomes' },
  { id: 'reflection', label: 'Reflection' },
];

export default function FindMyPark({ prevId, nextId }) {
  // useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, []);

  return (
    <div className="project-detail-wrapper powerpause-page findmypark-page has-side-right">
      <SideNav sections={sectionsForNav} side="right" offset={110} />

      <div className="content-zoom">
        <div className="zoom-inner">
          {/* ===== OVERVIEW ===== */}
          <section id="overview" className="meta-section meta--composite">
            <img src={heroComposite} alt="Find My Park hero composite" className="bg-image" />
          </section>

          {/* ===== PROBLEM ===== */}
          <section id="problem" className="problem-section section-block">
            <h4>PROBLEM</h4>
            <p className="callout">
              In dense downtown areas, people don’t know where the nearest greenery or
              walkable routes are—so they avoid going out at all.
            </p>
            <p>
              The project started from a friend who moved downtown with a dog. They wanted
              short, safe walks but didn’t know where to go, ending up circling the same block.
            </p>
            <div className="problem-image">
              <img src={problemImg} alt="Urban navigation problem" />
            </div>
          </section>

          {/* ===== RESEARCH ===== */}
          <section id="research" className="research-section section-block">
            <h4>RESEARCH</h4>
            <p className="callout">
              Key themes: location uncertainty, safety anxiety, and a lack of pet-friendly info.
            </p>

            <div className="research-stack">
              <figure className="research-figure research-figure--insights">
                <img src={researchInsight} alt="Research insights: quotes and needs" />
              </figure>

              <figure className="research-figure research-figure--journey">
                <img src={journeyMap} alt="User journey map across stages" />
              </figure>
            </div>
          </section>

          {/* ===== SOLUTION ===== */}
          <section id="solution" className="solution-section section-block">
            <h4>SOLUTION</h4>
            <p className="callout">Instantly surface nearby parks and routes—and make the outing feel good.</p>

            <div className="split">
              <div className="col">
                <h5 className="eyebrow">Core</h5>
                <ul>
                  <li><strong>Real-time GPS</strong> to discover nearby parks/trails</li>
                  <li><strong>Journey Builder</strong> to add cafés/landmarks</li>
                  <li><strong>Mood Music</strong> suggestions for vibe</li>
                  <li><strong>Community</strong> micro-groups for local tips</li>
                </ul>
              </div>
              <div className="col">
                <h5 className="eyebrow">Safety & Clarity</h5>
                <ul>
                  <li>Route ranking by safety and lighting</li>
                  <li>Pet-friendly tags and time-of-day tips</li>
                </ul>
              </div>
            </div>
            
            <div className="solution-rows">
              <div className="solution-row solution-row--features">
                <img src={solution1} alt="Solution overview" />
                <img src={solution2} alt="Solution detail 1" />
                <img src={solution3} alt="Solution detail 2" />
              </div>
            </div>
          </section>

          {/* ===== WIREFRAMES ===== */}
          <section id="wireframes" className="wireframe-section section-block">
            <h4>WIREFRAMES</h4>
            <p>
              A straightforward structure improves wayfinding and accessibility, with flows
              centered on search, accuracy, and safety.
            </p>
            <div className="wireframe-grid">
              <img src={wireframeImg} alt="Wireframes" />
            </div>
          </section>

          {/* ===== OUTCOMES ===== */}
          <section id="outcomes" className="outcomes-section section-block">
            <h4>OUTCOMES</h4>
            <div className="problem-image" style={{ marginTop: '0.5rem' }}>
              <img src={outcomesImg} alt="Outcomes" />
            </div>
            <div className="split" style={{ marginTop: '1rem' }}>
              <div className="col">
                <h5 className="eyebrow">Impact</h5>
                <ul>
                  <li>Users felt more confident exploring unfamiliar areas</li>
                  <li>Personalized routes turned quick walks into relaxing routines</li>
                </ul>
              </div>
              <div className="col">
                <h5 className="eyebrow">What I Learned</h5>
                <ul>
                  <li>Safety cues and clarity matter as much as discovery</li>
                  <li>Emotional framing (music, mood) sustains engagement</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ===== REFLECTION ===== */}
          <section id="reflection" className="reflection-section section-block">
            <h4>REFLECTION</h4>
            <p>
              This started when a close friend moved downtown with her dog and suddenly “just go for a walk” wasn’t simple—crowded blocks, sketchy sidewalks, even the odd needle. Find My Park became a location-based guide to the nearest safe, uncrowded park. Building it reset my priorities: fewer controls, a clear “you’re here,” and honest safety/crowd cues beat fancy features.
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
