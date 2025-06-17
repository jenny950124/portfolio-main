import React, { useRef } from 'react';
import './Home.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import cloud1 from '../assets/cloud1.jpg';
import cloud2 from '../assets/cloud2.jpg';
import posterMockup from '../assets/posterMockup.jpg';

const FloatingText = () => {
  const letters = "Designs That Speak Louder Than Words.".split('');

  const handleMouseMove = (e, index) => {
    const letter = e.target;
    const rect = letter.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const distance = Math.sqrt(x * x + y * y);
    const maxDist = 160;
    const strength = Math.max(0, maxDist - distance) / maxDist;

    const moveX = x * strength * 1.5;
    const moveY = y * strength * 1.5;

    letter.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${strength * 20}deg)`;
  };

  const handleMouseLeave = (e) => {
    e.target.style.transform = 'translate(0, 0)';
  };

  return (
    <div className="floating-text-section">
      <div className="emoji-container">
        <span className="emoji">💻</span>
        <span className="emoji">🎨</span>
        <span className="emoji">📱</span>
        <span className="emoji">🩷</span>
        <span className="emoji">☕️</span>
        <span className="emoji">🖌️</span>
      </div>

      <p className="floating-hint">👀 Try hovering over the letters...!</p>

      <div className="floating-text">
        {letters.map((char, index) => (
          <span
            key={index}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={handleMouseLeave}
            className="floating-letter"
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </div>

      <p className="floating-sub">— by UI/UX Designer Jenny Kim</p>
    </div>
  );
};

const Home = () => {
  const cloudLeftRef = useRef(null);
  const cloudRightRef = useRef(null);

  const triggerCloudFlash = () => {
    if (cloudLeftRef.current && cloudRightRef.current) {
      cloudLeftRef.current.classList.add('flash-left');
      cloudRightRef.current.classList.add('flash-right');

      setTimeout(() => {
        cloudLeftRef.current.classList.remove('flash-left');
        cloudRightRef.current.classList.remove('flash-right');
      }, 600);
    }
  };

  return (
    <>
      <section className="home" onMouseEnter={triggerCloudFlash}>
        <div className="cloud cloud-left" ref={cloudLeftRef}>
          <img src={cloud1} alt="Cloud Left" />
        </div>
        <div className="cloud cloud-right" ref={cloudRightRef}>
          <img src={cloud2} alt="Cloud Right" />
        </div>

        <div className="hero-text">
          <h1>
            User <span className="highlight">FOCUSED</span><br />
            Designs built on<br />
            <span className="highlight">EMPATHY</span> DEDICATION<br />
            And <span className="highlight">TEAMWORK</span>
          </h1>
        </div>
      </section>

  
      <FloatingText />

   
      <section className="intro-section">
        <div className="intro-content">
          <span className="intro-step">Work</span>
          <h2>Design with Purpose</h2>
          <p>
            I believe in creating meaningful digital experiences through thoughtful design and clean code.
            My process blends empathy, creativity, and logic to build solutions that not only look great,
            but also work beautifully.
          </p>
          <Link to="/projects" className="intro-button">See how I work →</Link>
        </div>
      </section>

   
      <section className="poster-section">
        <img
          src={posterMockup}
          alt="Poster showing: This work is by Jenny Kim"
          className="poster-image"
        />
      </section>
    </>
  );
};

export default Home;
