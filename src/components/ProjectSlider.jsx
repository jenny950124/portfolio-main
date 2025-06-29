import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './ProjectSlider.css';

import img1 from '../assets/work1.jpg';
import img2 from '../assets/app/Banner.png';
import img3 from '../assets/gd/cover.png';

const projects = [
  {
    id: 1,
    title: 'Find My Park',
    description: 'A park-finding UX project for city explorers.',
    image: img1,
    fit: 'cover',
    link: '/projects/1',
  },
  {
    id: 2,
    title: 'Homer St. Café',
    description: 'Discover a Visual Ordering Experience',
    image: img2,
    fit: 'cover',
    link: '/projects/2',
  },
  {
    id: 3,
    title: 'Graphic Design Works',
    description: 'Branding · Poster · Packaging',
    image: img3,
    fit: 'contain',
    link: '/projects/3',
  },
];

export default function ProjectSlider() {
  return (
    <section className="projects-wrapper">
    <h2 className="section-title">
  {"Featured Projects".split("").map((char, idx) => (
    <span key={idx} className="wavy-letter" style={{ animationDelay: `${idx * 0.08}s` }}>
      {char === " " ? "\u00A0" : char}
    </span>
  ))}
</h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        slidesPerGroup={1}
        autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        speed={800}
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="slider-swiper"
      >
        {projects.map((p) => (
          <SwiperSlide key={p.id} className="slider-slide">
            <Link to={p.link} className="slider-card">
              <img
                src={p.image}
                alt={p.title}
                className={p.fit === 'contain' ? 'img-contain' : 'img-cover'}
              />
              <div className="slider-overlay">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
