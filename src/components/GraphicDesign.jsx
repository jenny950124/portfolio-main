import React from 'react';
import './GraphicDesign.css';

import gd1 from '../assets/gd/gd1.png';
import gd2 from '../assets/gd/gd2.png';
import gd3 from '../assets/gd/gd3.png';
import gd4 from '../assets/gd/gd4.png';
import gd5 from '../assets/gd/gd5.png';
import gd6 from '../assets/gd/gd6.png';

const GraphicDesign = () => {
  return (
    <div className="project-detail-wrapper">

      {/* OVERVIEW */}
      <section className="overview-section">
        <div className="overview-text-container">
          <h2 className="overview-title">OVERVIEW</h2>
          <h3 className="overview-subtitle">Bold, Playful, and Personal</h3>
          <p className="overview-description">
            This graphic design collection reflects my love for playful type, vivid color, and humor-infused branding.
            From packaging to print, the designs express personality while remaining functional across digital and physical mediums.
          </p>
        </div>
        <div className="overview-image-wrapper">
          <img src={gd1} alt="Overview Graphic Design" className="responsive-image" />
        </div>
      </section>

      {/* PROBLEM */}
      <section className="overview-section">
        <div className="overview-text-container">
          <h2 className="overview-title">PROBLEM</h2>
          <p className="overview-description">
            Too many personal brands rely on minimalism without meaning. The challenge was to craft visuals that still felt simple,
            but packed a punch—making a strong impression in seconds while capturing warmth, confidence, and individuality.
          </p>
        </div>
        <div className="overview-image-wrapper">
          <img src={gd2} alt="Problem Graphic" className="responsive-image" />
        </div>
      </section>

      {/* RESEARCH INSIGHT */}
      <section className="overview-section">
        <div className="overview-text-container">
          <h2 className="overview-title">RESEARCH INSIGHT</h2>
          <p className="overview-description">
            I gathered inspiration from retro advertising, independent zines, and street graphics to explore type-based storytelling.
            The key insight: people are drawn to authenticity, even if it’s quirky. They remember things that make them smile.
          </p>
        </div>
        <div className="overview-image-wrapper">
          <img src={gd3} alt="Research insight" className="responsive-image" />
        </div>
      </section>

      {/* SOLUTION */}
      <section className="overview-section">
        <div className="overview-text-container">
          <h2 className="overview-title">SOLUTION</h2>
          <p className="overview-description">
            Each design blends nostalgic type with bold shapes and cheeky messaging. Instead of aiming for “neutral,” I aimed for memorable.
            Whether it’s a coffee mug, sticker, or poster, the tone is clear: this is Jenny’s world, and it’s full of wit and warmth.
          </p>
        </div>
        <div className="overview-image-wrapper">
          <img src={gd4} alt="Solution Design" className="responsive-image" />
        </div>
      </section>

      {/* DESIGN APPROACH */}
      <section className="overview-section">
        <div className="overview-text-container">
          <h2 className="overview-title">DESIGN APPROACH</h2>
          <p className="overview-description">
            The approach balances clear hierarchy with unexpected touches—using color as mood, type as voice, and layout as rhythm.
            By mixing flat illustrations with dimensional mockups, I ensured that the designs hold up both on screen and in real life.
          </p>
        </div>
        <div className="overview-image-wrapper">
          <img src={gd5} alt="Design process" className="responsive-image" />
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="overview-section">
        <div className="overview-text-container">
          <h2 className="overview-title">OUTCOMES</h2>
          <p className="overview-description">
            The work resonated with designers and non-designers alike, gaining traction on Behance and Instagram.
            More importantly, it built a visual language I can extend across future creative and branding projects.
          </p>
        </div>
        <div className="overview-image-wrapper">
          <img src={gd6} alt="Outcomes result" className="responsive-image" />
        </div>
      </section>

      {/* REFLECTION */}
      <section className="overview-section">
        <div className="overview-text-container">
          <h2 className="overview-title">REFLECTION</h2>
          <p className="overview-description">
            This series reminded me how important it is to design for <em>joy</em>. Even small details like a coffee cup or sticker can spark connection.
            I learned that bold doesn't have to mean loud—it can mean intentional, expressive, and honest.
          </p>
        </div>
      </section>
      
    </div>
  );
};

export default GraphicDesign;
