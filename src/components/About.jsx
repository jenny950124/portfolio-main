import React from 'react';
import Slider from 'react-slick';
import './About.css';

import image1 from '../assets/aboutme.jpg';
import image2 from '../assets/aboutme2.jpg';
import image3 from '../assets/aboutme3.jpg';
import image4 from '../assets/aboutme4.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="about-page">
      <div className="intro-heading">
        <p className="intro">
          Hi, I'm <span className="wave" role="img" aria-label="waving hand">👋</span>
        </p>
        <h2><span className="highlight-name">Jenny "NaYeon" Kim</span></h2>
        <p className="subtitle">UX/UI Designer & Developer</p>
      </div>

      <div className="about-content">
        <div className="about-slider">
          <Slider {...sliderSettings}>
            <div><img src={image1} alt="It's Me" /></div>
            <div><img src={image2} alt="Working on UX Research" /></div>
            <div><img src={image3} alt="Sketching at Café" /></div>
            <div><img src={image4} alt="Nature Walk" /></div>
          </Slider>
        </div>

        <div className="bio-section">
          <div className="keyword-buttons">
            <button className="keyword-btn">Design</button>
            <button className="keyword-btn">Empathy</button>
            <button className="keyword-btn">Creativity</button>
          </div>

          <p>
            I built this site to reflect who I am, both as a person and as a designer. The bold red? That’s my passion and drive. The soft pink? That’s my approachability and joy. Together, they represent the balance I bring into every project: confident, but never cold. Friendly, but always intentional.
          </p>

          <p>
            Before I stepped into design, I studied nursing and this path that taught me how to listen deeply, care intentionally, and see people beyond the surface.  
            That experience still shapes how I approach design today: with empathy, precision, and a desire to solve real problems for real people.
          </p>

          <p>
            I don’t just design, I code too. My background in front-end development means I can bring ideas to life and collaborate closely with dev teams.  
            I see design and code not as separate lanes, but as a single bridge and I love walking both sides.

          <p>
            Throughout this portfolio, you’ll notice movement, play, and interactivity. It’s not just for show, it’s how I like to work: curious, energetic, and always experimenting.
          </p>
          <p>
            Thanks for stopping by. If you’re a potential collaborator, employer, or fellow creative, I’d love to connect. And yes, if you send a message, a tiny animated girl named Mei will sprint across the screen to deliver it.  
            Because design should delight. And every detail matters.
          </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
