import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Work.css";

import p1 from "../assets/Slider/p1.png";
import p2 from "../assets/Slider/p2.png";
import p3 from "../assets/Slider/p3.png";
import p4 from "../assets/Slider/p4.png";

export default function Work() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="work-page">
      <section className="project-section">
        <Link to="/projects/1" className="project-card" aria-label="Go to Project 01">
          <div className="thumb-wrap">
            <img src={p1} alt="Project 01" />
          </div>
          <div className="project-info">
            <h4>Project 01</h4>
            <p>UI/UX Design<br />Tool: Figma, Photoshop</p>
          </div>
        </Link>

        <Link to="/projects/2" className="project-card" aria-label="Go to Project 02">
          <div className="thumb-wrap">
            <img src={p2} alt="Project 02" />
          </div>
          <div className="project-info">
            <h4>Project 02</h4>
            <p>UI/UX Design - Responsive<br />Tool: Figma, Photoshop</p>
          </div>
        </Link>

        <Link to="/projects/3" className="project-card" aria-label="Go to Project 03">
          <div className="thumb-wrap">
            <img src={p3} alt="Project 03" />
          </div>
          <div className="project-info">
            <h4>Project 03</h4>
            <p>UI/UX Design<br />Tool: Figma, Photoshop</p>
          </div>
        </Link>

        <Link to="/projects/4" className="project-card" aria-label="Go to Project 04">
          <div className="thumb-wrap">
            <img src={p4} alt="Project 04" />
          </div>
          <div className="project-info">
            <h4>Project 04</h4>
            <p>Branding · Poster · Packaging<br />Tool: Figma, Photoshop</p>
          </div>
        </Link>
      </section>
    </main>
  );
}
