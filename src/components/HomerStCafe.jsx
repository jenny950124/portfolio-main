import React from 'react';
import './HomerStCafe.css';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

import banner from '../assets/app/Banner.png';
import homerbefore from '../assets/app/homerbefore.png';
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

const HomerStCafe = () => {
  const fadeOverview = useScrollFadeIn();
  const fadeProblem = useScrollFadeIn();
  const fadeSolution = useScrollFadeIn();
  const fadeReflection = useScrollFadeIn();

  const fadeSol1 = useScrollFadeIn();
  const fadeSol2 = useScrollFadeIn();
  const fadeSol3 = useScrollFadeIn();

  const fadeMock1 = useScrollFadeIn();
  const fadeMock2 = useScrollFadeIn();
  const fadeMock3 = useScrollFadeIn();
  const fadeMock4 = useScrollFadeIn();
  const fadeMock5 = useScrollFadeIn();
  const fadeMock6 = useScrollFadeIn();

  return (
    <div className="project-detail-wrapper">
      {/* OVERVIEW */}
      <section {...fadeOverview} className="overview-section">
        <div className="overview-text-container">
          <h2 className="overview-title">OVERVIEW</h2>
          <h3 className="overview-subtitle">Warmth Beyond the Plate</h3>
          <p className="overview-description">
            Homer St. Cafe & Bar was the first restaurant I visited when I arrived in Canada.
            It left a lasting impression on me—not only because of the food, but because it felt like home.
            Years later, I found their website lacked the same warmth and usability. This inspired me to reimagine their digital presence through a responsive redesign.
          </p>
        </div>
        <div className="overview-image-wrapper">
          <img src={banner} alt="Banner preview" className="overview-image-full" />
        </div>
      </section>

      {/* PROBLEM */}
      <section {...fadeProblem} className="overview-section">
        <div className="overview-text-container">
          <h2 className="overview-title">PROBLEM</h2>
          <p className="overview-description">
            The original website was not mobile responsive and had broken interactions on key tasks like viewing the menu or booking a reservation.
            The visual design also didn’t reflect the restaurant’s cozy, welcoming identity.
          </p>
        </div>
        <div className="overview-image-wrapper">
          <img src={homerbefore} alt="Old website before redesign" className="overview-image-full" />
        </div>
      </section>

      {/* SOLUTION */}
      <section {...fadeSolution} className="solution-section">
        <div className="overview-text-container">
          <h2 className="overview-title">SOLUTION</h2>
          <p className="overview-description">
            I introduced a visual-first layout with featured dishes and a prominent CTA for reservation.
            The navigation was restructured for simplicity, and a full menu section was optimized for mobile readability.
          </p>
          <p className="overview-description">
            Emotional cues like warm tones, soft textures, and real photography were used to reflect the in-person dining experience.
          </p>
        </div>
        <div className="solution-fullwidth-gallery">
          <img src={solution1} alt="solution 1" className={`solution-gallery-image ${fadeSol1.className}`} ref={fadeSol1.ref} />
          <img src={solution2} alt="solution 2" className={`solution-gallery-image ${fadeSol2.className}`} ref={fadeSol2.ref} />
          <img src={solution3} alt="solution 3" className={`solution-gallery-image ${fadeSol3.className}`} ref={fadeSol3.ref} />
        </div>
      </section>

      {/* MOCKUP SECTION */}
      <section className="mockup-section">
        <div className="overview-text-container">
          <h2 className="overview-title">MOCKUP</h2>
          <p className="overview-description">
            The redesign was tested across both desktop and mobile, ensuring responsiveness and maintaining the warmth of the brand experience regardless of screen size.
          </p>
        </div>

        <div className="mockup-group">
          <div className={`mockup-column ${fadeMock1.className}`} ref={fadeMock1.ref}>
            <img src={desktopMockup1} alt="Homepage with CTA" className="mockup-image large" />
            <p className="mockup-caption">Homepage with reservation CTA and warm hero</p>
          </div>
          <div className={`mockup-column ${fadeMock2.className}`} ref={fadeMock2.ref}>
            <img src={desktopMockup2} alt="Menu Gallery" className="mockup-image large" />
            <p className="mockup-caption">Photo-driven menu gallery</p>
          </div>
          <div className={`mockup-column ${fadeMock3.className}`} ref={fadeMock3.ref}>
            <img src={desktopMockup3} alt="Contact & Footer" className="mockup-image large" />
            <p className="mockup-caption">Contact and location area with festive theme</p>
          </div>
        </div>

        <div className="mockup-group">
          <div className={`mockup-column ${fadeMock4.className}`} ref={fadeMock4.ref}>
            <img src={iphone1} alt="Mobile Nav" className="mockup-image mobile large" />
            <p className="mockup-caption">Mobile menu navigation layout</p>
          </div>
          <div className={`mockup-column ${fadeMock5.className}`} ref={fadeMock5.ref}>
            <img src={iphone2} alt="Mobile Content" className="mockup-image mobile large" />
            <p className="mockup-caption">Responsive visual layout</p>
          </div>
          <div className={`mockup-column ${fadeMock6.className}`} ref={fadeMock6.ref}>
            <img src={iphone3} alt="Mobile Location" className="mockup-image mobile large" />
            <p className="mockup-caption">Location section optimized for mobile</p>
          </div>
        </div>
      </section>

      {/* PROTOTYPE VIDEO SECTION */}
      <section className="prototype-section">
        <div className="overview-text-container">
          <h2 className="overview-title">PROTOTYPE</h2>
          <p className="overview-description">
            A clickable prototype was built and tested to simulate key user flows such as viewing the menu, making a reservation, and browsing on mobile.
          </p>
        </div>
        <div className="prototype-video-wrapper">
          <video controls className="prototype-video">
            <source src={prototypeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* REFLECTION */}
      <section {...fadeReflection} className="overview-section">
        <div className="overview-text-container">
          <h2 className="overview-title">REFLECTION</h2>
          <p className="overview-description">
            This project reminded me that even our most treasured places deserve intentional design.
            Beauty and warmth in the real world don’t automatically translate to the digital space.
            As designers, it’s our responsibility to bridge that gap and create experiences that feel just as personal online.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomerStCafe;
