import React, { useRef } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import cloud1 from '../assets/cloud1.jpg';
import cloud2 from '../assets/cloud2.jpg';
import aboutme from '../assets/aboutme.jpg';
import ProjectSlider from './ProjectSlider';

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
          <p className="intro-heading fly-in">Hi, I’m Jenny a UIUX Designer</p>
          <h1>
            <span className="line">
              User<span className="space-gap"> </span>
              <span className="highlight-wrapper">
                FOCUSED<span className="highlight-circle"></span>
              </span>
            </span><br />
            <span className="line">Designs built on</span><br />
            <span className="highlight-wrapper">
              EMPATHY<span className="highlight-circle"></span>
            </span><br />
            <span className="small-text">DEDICATION</span><br />
            <span className="line">
              And<span className="space-gap"> </span>
              <span className="highlight-wrapper">
                TEAMWORK<span className="highlight-circle"></span>
              </span>
            </span>
          </h1>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-grid">
          <div className="intro-image">
            <img src={aboutme} alt="Jenny in the park" />
          </div>
          <div className="intro-content">
            <span className="intro-step">About</span>
            <h2 className="intro-heading-text">
              <span>From Korea to Canada &</span>{' '}<br/>
              <span>
                Who am I And Why I <span className="no-wrap">Design.</span>
              </span>
            </h2>
            <p>
              As someone who grew up across countries, I believe great design can connect stories beyond borders. I bring empathy, creativity, and logic into every product I build to deliver clean, purposeful, and meaningful experiences.
            </p>
            <Link to="/about" className="intro-button">My Story →</Link>
          </div>
        </div>
      </section>

      <ProjectSlider />
    </>
  );
};

export default Home;
