import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

import p1 from "../assets/fmp/fmp1.png";                 // Find My Park
import p2 from "../assets/app/desktop-mockup1.png";      // Homer St. Café
import p3 from "../assets/bc/bcapp.png";                 // PowerPause
import p4 from "../assets/gd/furniture.png";             // Graphic Design

export default function Projects() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <main className="work-grid-page">
      <section className="work-grid">
        <Link to="/projects/1" className="work-card">
          <div className="work-thumb">
            <img src={p1} alt="Project 01 — Find My Park" />
          </div>
          <div className="work-meta">
            <h4>Project 01</h4>
            <p>UX/UI Design<br/>Tool: Figma, Photoshop</p>
          </div>
        </Link>

        <Link to="/projects/2" className="work-card">
          <div className="work-thumb">
            <img src={p2} alt="Project 02 — Homer St. Café" />
          </div>
          <div className="work-meta">
            <h4>Project 02</h4>
            <p>UX/UI Design - Responsive<br/>Tool: Figma, Photoshop</p>
          </div>
        </Link>

        <Link to="/projects/3" className="work-card">
          <div className="work-thumb">
            <img src={p3} alt="Project 03 — PowerPause" />
          </div>
          <div className="work-meta">
            <h4>Project 03</h4>
            <p>UX/UI Design<br/>Tool: Figma, Photoshop</p>
          </div>
        </Link>

        <Link to="/projects/4" className="work-card">
          <div className="work-thumb">
            <img src={p4} alt="Project 04 — Graphic Design" />
          </div>
          <div className="work-meta">
            <h4>Project 04</h4>
            <p>Branding · Poster · Packaging<br/>Tool: Figma, Photoshop</p>
          </div>
        </Link>
      </section>
    </main>
  );
}
