import React from 'react';
import "./FindMyPark.css"; 
import fmp2 from '../assets/fmp/fmp2.png';
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

const ProjectDetail = () => {
  return (
    <div className="project-detail-wrapper">

      {/* OVERVIEW */}
      <section className="overview-section">
        <div className="overview-text-container">
          <h2 className="overview-title">OVERVIEW</h2>
          <h3 className="overview-subtitle">Sit back and Unrewind</h3>
          <p className="overview-description">
            Find My Park is a GPS-based mobile app that helps users quickly locate the nearest parks and walking
            trails in dense urban areas. Designed especially for pet owners and city dwellers, the app turns even a
            short walk into a relaxing, personalized journey, complete with music, local cafes, and community.
          </p>
        </div>
        <div className="fullwidth-wrapper">
          <img src={fmp2} alt="Overview visual" className="fullwidth-image" />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="overview-section">
        <div className="overview-text-container">
          <h2 className="overview-title">PROBLEM</h2>
          <p className="overview-quote">
            “I've been living in Vancouver for 10 years, but ever since I moved to downtown, I’ve started to feel like a stranger in my own city”.
          </p>
          <p className="overview-description">
            The inspiration came from a close friend who moved to downtown Vancouver. She had always lived in a neighborhood with parks just outside her door,
            but now she found herself surrounded by unfamiliar buildings and traffic. She wanted to take short walks with her dog but had no idea where the
            nearest parks were. This often led to quick strolls around the block, leaving her feeling disconnected and disappointed.
          </p>
        </div>
        <div className="fullwidth-wrapper">
          <img src={problemImg} alt="Problem visual" className="fullwidth-image" />
        </div>
      </section>

      {/* RESEARCH INSIGHT */}
      <section className="overview-section">
        <div className="overview-text-container">
          <h2 className="overview-title">RESEARCH INSIGHT</h2>
          <p className="overview-description no-wrap-text">
            Needs and pain points gathered together through interviews to improve and recreate apps based on users' needs.
          </p>
        </div>
        <div className="overview-image-wrapper">
          <img src={researchInsight} alt="Research insight visual" className="research-image" />
        </div>
        <div className="overview-text-container">
          <ol className="insight-list-numbered">
            <li><strong>They often don’t know where the parks or green spaces are.</strong></li>
            <li><strong>They feel hesitant or unsafe exploring unfamiliar areas.</strong></li>
            <li><strong>They’d love a tool that curates safe, nearby routes with pet-friendly spots.</strong></li>
          </ol>
        </div>
        <div className="overview-image-wrapper">
          <img src={journeyMap} alt="Journey Map" className="overview-image-full journey-image" />
        </div>
      </section>

      {/* SOLUTION */}
      <section className="solution-section">
        <div className="overview-text-container">
          <h2 className="overview-title">SOLUTION</h2>
        </div>
        <div className="fullwidth-wrapper">
          <img src={solution1} alt="Solution visual 1" className="fullwidth-image" />
        </div>
        <div className="solution-content">
          <div className="solution-text">
            <p>
              I designed Find My Park to help users easily find nearby parks and walking routes using real-time GPS.
              The app allows users to create personalized journeys by adding cafés or scenic spots, turning simple walks into meaningful routines.
            </p>
            <p>
              To make the experience more emotional and engaging, the app also offers mood-based music recommendations and lets users connect
              with others through local walking groups. It’s not just about direction, it’s about creating small moments of peace in a busy city.
            </p>
          </div>
          <div className="solution-side-image-wrapper">
            <img src={solution2} alt="Solution visual 2" className="solution-side-image" />
            <img src={solution3} alt="Solution visual 3" className="solution-side-image" />
          </div>
        </div>
      </section>

      {/* DESIGN APPROACH */}
      <section className="design-approach-section">
        <div className="overview-text-container">
          <h2 className="overview-title">DESIGN APPROACH</h2>
        </div>
        <div className="design-row">
          <img src={p1} alt="Design concept 1" className="design-img" />
          <div className="design-text yellow">
            <p>The design is emotional and atmospheric. The app to feel like your personal Central Park, no matter where you are.</p>
            <p>Inspired by the fast-paced rhythm of downtown life, the UI offers a calm, intuitive space for escape and reflection.</p>
            <p>A minimal, nature-inspired colour palette helps keep users grounded.</p>
          </div>
        </div>
        <div className="design-row reverse">
          <img src={p2} alt="Design concept 2" className="design-img" />
          <div className="design-text yellow">
            <p><strong>Real-time GPS:</strong> Instantly find nearby parks or trails.</p>
            <p><strong>Journey Builder:</strong> Customize your walk by adding cafes, landmarks, or music.</p>
          </div>
        </div>
        <div className="design-row">
          <img src={p3} alt="Design concept 3" className="design-img" />
          <div className="design-text yellow">
            <p><strong>Mood-based music:</strong> Get soundtrack recommendations based on your mood or time of day.</p>
            <p><strong>Community Groups:</strong> Join or create small walking groups with other app users in your area.</p>
          </div>
        </div>
      </section>

      {/* WIRE FRAME */}
      <section className="overview-section">
        <div className="overview-text-container">
          <h2 className="overview-title">WIREFRAME</h2>
          <p className="overview-description">
            It’s an easy and simple structure to increase overall accessibility for users when using the app.<br />
            Wireframe & Flow that shows the process with improved location and search accuracy.
          </p>
        </div>
        <div className="overview-image-wrapper">
          <img src={wireframeImg} alt="Wireframe visual" className="overview-image-full" />
        </div>
      </section>

      {/* OUTCOMES SECTION */}
      <section className="outcomes-section">
        <div className="overview-text-container">
          <h2 className="overview-title">OUTCOMES</h2>
          <div className="outcomes-image-wrapper">
            <img src={outcomesImg} alt="Outcomes visual" className="outcomes-image" />
          </div>
          <div className="outcomes-text">
            <p>Early testers said they felt more confident about exploring new areas.</p>
            <p>
              One friend said, “I wouldn’t have had to carry my dog around so much if I knew where to go.
              This would've changed my whole routine.”
            </p>
          </div>
        </div>
      </section>

      {/* REFLECTION SECTION */}
      <section className="reflection-section">
        <div className="reflection-text">
          <h2 className="overview-title">REFLECTION</h2>
          <p>
            This project taught me the value of starting with real human pain points and designing with empathy from the beginning.
          </p>
          <p>
            My initial goal was simple: to help my friend (and others like her) feel more grounded in a new place.
            But through deeper research and interviews, I discovered a more universal insight—people, even in the busiest cities, crave moments of pause, rest, and reconnection with nature.
          </p>
          <p>
            By designing from the user’s perspective, I was able to shape something that doesn’t just provide functional utility, but emotional support.
            The result is a product that’s not only helpful but comforting—something that gives users the space to breathe in environments that often feel overwhelming.
          </p>
        </div>
      </section>

    </div>
  );
};

export default ProjectDetail;
