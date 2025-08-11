import React from "react";
import { Link } from "react-router-dom";
import "./ProjectsAutoSlider.css";

/**
 * items: [{
 *   href: "/projects/1",
 *   img: "/assets/p1.jpg",
 *   title?: "Project 01",     // 접근성 라벨에만 사용(표시는 안 함)
 *   focus?: "50% 50%"         // object-position
 * }]
 * speed: 한 바퀴(루프) 도는 시간(초)
 */
export default function ProjectsAutoSlider({ items = [], speed = 30 }) {
  if (!items.length) return null;

  const track = [...items, ...items]; // 무한루프용 2배

  return (
    <section className="auto-section" aria-label="Featured projects">
      <div className="auto-container">
        <div className="auto-slider" style={{ "--speed": `${speed}s` }}>
          <ul className="track" aria-live="off">
            {track.map((p, i) => (
              <li className="item" key={(p.title || "proj") + i}>
                <Link
                  to={p.href}
                  className="project-card"
                  aria-label={`Open ${p.title || "project"}`}
                >
                  <figure className="hero">
                    <img
                      src={p.img}
                      alt={p.title || "project thumbnail"}
                      loading="lazy"
                      style={{ objectPosition: p.focus || "50% 50%" }}
                    />
                    {/* ⬇️ 제목 대신 'View project'만 표기 */}
                    <figcaption className="project-info">
                      <span className="pi-view">View project</span>
                      <i className="pi-arrow" aria-hidden="true" />
                    </figcaption>
                  </figure>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
