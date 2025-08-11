import React, { useEffect } from 'react';
import './PowerPause.css';
import ProjectNavigation from './ProjectNavigation';
import SideNav from './SideNav';

import heroComposite from '../assets/Slider/p2.png';

import problemImg from '../assets/bc/problem1.png';
import problemImg2 from '../assets/bc/problem2.png';
import research1 from '../assets/bc/research1.png';
import persona from '../assets/bc/persona.png';
import solution2 from '../assets/bc/mockup2.png';
import solution3 from '../assets/bc/mockup3.png';
import solution4 from '../assets/bc/mockup4.png';
import wireframe1 from '../assets/bc/wireframe1.png';
import wireframe2 from '../assets/bc/wireframe2.png';

const sectionsForNav = [
  { id: 'overview',   label: 'Overview' },
  { id: 'problem',    label: 'Problem' },
  { id: 'research',   label: 'Research' },
  { id: 'solution',   label: 'Solution' },
  { id: 'wireframes', label: 'Wireframes' },
  { id: 'outcomes',   label: 'Outcomes' },
  { id: 'reflection', label: 'Reflection' },
];

const PowerPause = ({ prevId, nextId }) => {
  // useEffect(() => { window.scrollTo({ top: 0, behavior: 'auto' }); }, []);

  return (
    <div className="project-detail-wrapper powerpause-page has-side-right">
      <SideNav
  sections={sectionsForNav}
  side="right"
  offset={110}
  variant="side"
  showFrom="problem"
/>



      <div className="content-zoom">
        <div className="zoom-inner">
          {/* ===== OVERVIEW ===== */}
          <section id="overview" className="meta-section meta--composite">
            <img src={heroComposite} alt="PowerPause hero composite" className="bg-image" />
          </section>

          {/* ===== PROBLEM ===== */}
          <section id="problem" className="problem-section section-block">
            <h4>PROBLEM</h4>
            <p className="callout">
              A common mistake triggered this concept: during a vacation, a bedroom light remained on for weeks.
              The result was an unexpectedly high electricity bill.
            </p>
            <p>
              The incident exposed a clear need for <strong>anywhere control</strong> of home electricity—both to
              increase safety and to stop waste before it occurs. The concept also channels verified savings into
              micro-donations for neighbors in need.
            </p>

            <div className="split">
              <div className="col">
                <h5 className="eyebrow">User Pains</h5>
                <ul>
                  <li>No remote control; devices can’t be turned off while away.</li>
                  <li>Low visibility; issues are noticed only when the bill arrives.</li>
                  <li>Safety anxiety: uncertainty about lights/heaters left on.</li>
                  <li>Waste feels inevitable during busy periods or travel.</li>
                </ul>
              </div>
              <div className="col">
                <h5 className="eyebrow">Design Goals</h5>
                <ul>
                  <li>Anywhere control with on/off, schedules, and scenes.</li>
                  <li>Real-time usage feedback with clear cost impact.</li>
                  <li>Smart alerts for unusual consumption with one-tap fixes.</li>
                  <li>Automatic points from savings, convertible to donations.</li>
                </ul>
              </div>
            </div>

            <p className="callout">
              Design prompt: enable remote control of home electricity, increase safety,
              and convert savings into meaningful micro-donations.
            </p>

            <div className="problem-image">
              <img src={problemImg} alt="Unexpected bill after leaving lights on" />
              <img src={problemImg2} alt="Lack of remote control and visibility" />
            </div>
          </section>

          {/* ===== RESEARCH ===== */}
          <section id="research" className="research-section section-block">
            <h4>RESEARCH</h4>
            <p className="callout">
              The vacation incident was translated into hypotheses and validated with travelers, shared-utility households,
              and early smart-plug adopters.
            </p>

            <div className="split">
              <div className="col">
                <h5 className="eyebrow">Observed Patterns</h5>
                <ul>
                  <li>Small tasks (lights, heaters) are forgotten when routines change.</li>
                  <li>Alerts are valuable only when paired with a <strong>one-tap resolution</strong>.</li>
                  <li>Generic tips underperform; users look for <strong>personalized impact</strong> in kWh and cost.</li>
                  <li>Interest in donating a portion of savings rises when the flow is frictionless.</li>
                </ul>
              </div>
              <div className="col">
                <h5 className="eyebrow">Design Principles</h5>
                <ul>
                  <li><strong>Safety first:</strong> remote control plus confirmation to reduce anxiety.</li>
                  <li><strong>Immediacy:</strong> detect and nudge at the moment of waste, not month-end.</li>
                  <li><strong>One-tap action:</strong> each alert leads to a single decisive button.</li>
                  <li><strong>Visible wins:</strong> instant feedback on savings and progress.</li>
                  <li><strong>Give-back built-in:</strong> points → donation within the same flow.</li>
                </ul>
              </div>
            </div>

            <div className="research-image-row">
              <img src={research1} alt="Research insight highlights" />
              <img src={persona} alt="Primary persona" />
            </div>
          </section>

          {/* ===== SOLUTION ===== */}
          <section id="solution" className="solution-section section-block">
            <h4>SOLUTION</h4>
            <p className="callout">
              Control from anywhere. Stop waste in the moment. Turn savings into good.
            </p>

            <div className="split">
              <div className="col">
                <h5 className="eyebrow">Remote Control</h5>
                <ul>
                  <li>Device list with instant on/off and live status.</li>
                  <li>Scenes such as <em>Leaving Home</em> that power down selected devices at once.</li>
                  <li>Schedules and <em>Travel Mode</em> configured for longer trips.</li>
                </ul>
              </div>
              <div className="col">
                <h5 className="eyebrow">Smart Alerts</h5>
                <ul>
                  <li>“Bedroom light appears to be on.” → one-tap <strong>Turn Off</strong>.</li>
                  <li>Spike detection with most-likely culprit and estimated cost.</li>
                  <li>Peak-rate nudges to shift usage to cheaper hours.</li>
                </ul>
              </div>
            </div>

            <div className="split">
              <div className="col">
                <h5 className="eyebrow">Usage & Cost Clarity</h5>
                <ul>
                  <li>Live usage with short, explainable breakdown of drivers.</li>
                  <li>Each recommendation shows expected impact (kWh and $).</li>
                </ul>
              </div>
              <div className="col">
                <h5 className="eyebrow">Savings → Donation</h5>
                <ul>
                  <li>Points accrue from verified savings.</li>
                  <li>Donations occur in a tap; a simple receipt confirms impact.</li>
                </ul>
              </div>
            </div>

            <div className="solution-image-row">
              <img src={solution2} alt="Usage and goals" />
              <img src={solution3} alt="Remote control and smart tips" />
              <img src={solution4} alt="Rewards and donation flow" />
            </div>
          </section>

          {/* ===== WIREFRAMES ===== */}
          <section id="wireframes" className="wireframe-section section-block">
            <h4>WIREFRAMES</h4>
            <p>
              Key moments prioritized: the anxious check while away, a mid-day usage spike,
              and the donation that follows confirmed savings.
            </p>
            <ol>
              <li><strong>Alert → Quick Fix:</strong> “Light left on” → Turn Off → success state.</li>
              <li><strong>Home Control:</strong> device overview → scene trigger → confirmation.</li>
              <li><strong>Travel Mode:</strong> duration, auto rules, emergency contact.</li>
              <li><strong>Donate:</strong> convert points → choose cause → receipt.</li>
            </ol>

            <div className="wireframe-grid">
              <img src={wireframe1} alt="Wireframe: alert to quick action" />
              <img src={wireframe2} alt="Wireframe: device control and donation" />
              <img src={wireframe1} alt="Wireframe: travel mode" />
              <img src={wireframe2} alt="Wireframe: progress and points" />
            </div>
          </section>

          {/* ===== OUTCOMES ===== */}
          <section id="outcomes" className="outcomes-section section-block">
            <h4>OUTCOMES</h4>
            <div className="split">
              <div className="col">
                <h5 className="eyebrow">Impact</h5>
                <ul>
                  <li>Reduced idle-time usage through timely one-tap actions.</li>
                  <li>Higher user confidence when away from home (perception of safety).</li>
                  <li>Turned measurable savings into community micro-donations.</li>
                </ul>
              </div>
              <div className="col">
                <h5 className="eyebrow">What I Learned</h5>
                <ul>
                  <li>Designing for the anxious moment is more effective than end-of-month insights.</li>
                  <li>Alerts must always map to a decisive, single action.</li>
                  <li>Visible, personal metrics (kWh/$ saved) sustain engagement.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ===== REFLECTION ===== */}
          <section id="reflection" className="reflection-section section-block">
            <h4>REFLECTION</h4>
            <p>
              The originating mistake reframed the problem: design for the anxious moment rather than the monthly bill.
              Safety, immediacy, and visible impact form the core of the experience.
            </p>
            <p>
              When the product reduces effort to a single decisive tap and converts savings into tangible good,
              continued engagement follows naturally.
            </p>
          </section>
        </div>
      </div>
      <div className="project-nav-sticky">
        <ProjectNavigation prevId={prevId} nextId={nextId} />
      </div>
    </div>
  );
};

export default PowerPause;
