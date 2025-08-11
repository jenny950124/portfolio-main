import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import BoardingPass from "./BoardingPass";
import FlightPath from "./FlightPath";
import ProjectsAutoSlider from "./ProjectsAutoSlider";


import p1 from "../assets/Slider/p1.png"; // Find My Park
import p2 from "../assets/Slider/p2.png"; // PowerPause
import p3 from "../assets/Slider/p3.png"; // Homer St Café
import p4 from "../assets/Slider/p4.png"; // Packaging / Graphic


const PROJECTS = [
  { title: "Find My Park",      tag: "Mobile App",        href: "/work#findmypark",     img: p1 },
  { title: "PowerPause",        tag: "Mobile App",        href: "/work#power-pause",    img: p2 },
  { title: "Homer St Café & Bar", tag: "UX Case Study",   href: "/work#homer-st-cafe",  img: p3 },
  { title: "Packaging Design",  tag: "Brand & Visual",    href: "/work#graphic-design", img: p4 },
];

export default function Home() {
  const navigate = useNavigate();
  const [tear, setTear] = useState(false);

  const handleBoardNow = () => {
    setTear(true);
    setTimeout(() => navigate("/work"), 1100);
  };

  return (
    <>
      {/* 히어로 */}
      <section className="home section-anchor" id="about">
        <div className="home-left">
          <p className="intro">
            Hi, I’m Jenny Kim, a{" "}
            <strong>
              UX/UI designer who <br/>creates intuitive, user-centred experiences
              through empathy and thoughtful design. Currently based in Vancouver
              and Korea.
            </strong>{" "}
            I’m excited to share the journey that shaped who I am as a designer
            today.
          </p>

          <p className="intro-cta">
            <strong>
              This flight is bound for Jenny’s Design Journey. <br/>Welcome on board!
            </strong>
          </p>

          <button className="resume-button" onClick={handleBoardNow} aria-label="Board Now">
            Board Now →
          </button>
        </div>

        <div className="home-right section-anchor" id="work">
          <div className="ticket-group">
            <BoardingPass tearing={tear} />
            <FlightPath />
          </div>
        </div>
      </section>

      {/* 자동 슬라이더 — 속도 빠르게(22초/한바퀴) */}
      <ProjectsAutoSlider items={PROJECTS} speed={22} />
    </>
  );
}
