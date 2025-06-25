import React from 'react';
import './About.css';

import image1 from '../assets/aboutme.jpg';
import image2 from '../assets/aboutme2.jpg';
import image3 from '../assets/aboutme3.jpg';
import image4 from '../assets/aboutme4.jpg';

import FlyingShip from '../components/FlyingShip';

const About = () => {
  return (
    <section className="about-page">
      <div className="intro-heading">
        <p className="intro-line">Hi, I'm <span className="wave">👋</span></p>
        <h1 className="intro-name">Jenny “NaYeon” Kim</h1>
        <p className="intro-role">UX/UI Designer & Developer</p>
      </div>

      <div className="about-collage-section">
        <h3 className="section-subtitle center">A Peek Into My World</h3>
        <div className="collage-grid">
          <img src={image1} alt="Me 1" />
          <img src={image2} alt="Me 2" />
          <img src={image3} alt="Me 3" />
          <img src={image4} alt="Me 4" />
        </div>
      </div>

      <div className="about-bio-section">
        <div className="bio-row">
          <div className="bio-left">
            <h3 className="section-subtitle">My Background & Philosophy</h3>

            <div className="keyword-popup-container disabled-labels">
              {['Design', 'Empathy', 'Creativity'].map((label) => (
                <div className="keyword-btn-wrapper" key={label}>
                  <span className="keyword-label">{label}</span>
                </div>
              ))}
            </div>

            <div className="bio-section">
              <p>I built this site to reflect who I am, both as a person and as a designer. The bold red? That’s my passion and drive. The soft pink? That’s my approachability and joy. Together, they represent the balance I bring into every project: confident, but never cold. Friendly, but always intentional.</p>
              <p>Before I stepped into design, I studied nursing and this path that taught me how to listen deeply, care intentionally, and see people beyond the surface. That experience still shapes how I approach design today: with empathy, precision, and a desire to solve real problems for real people.</p>
              <p>I don’t just design, I code too. My background in front-end development means I can bring ideas to life and collaborate closely with dev teams. I see design and code not as separate lanes, but as a single bridge and I love walking both sides.</p>
              <p>Throughout this portfolio, you’ll notice movement, play, and interactivity. It’s not just for show, it’s how I like to work: curious, energetic, and always experimenting.</p>
              <p>Thanks for stopping by. If you’re a potential collaborator, employer, or fellow creative, I’d love to connect. And yes, if you send a message, a tiny animated girl named Mei will sprint across the screen to deliver it. Because design should delight. And every detail matters.</p>
            </div>
          </div>

          <div className="bio-right">
            <FlyingShip />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
