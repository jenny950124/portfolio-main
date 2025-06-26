// src/components/ProjectSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import './Projects.css'; // 공통 스타일만 사용
import ProjectCard from './ProjectCard';

import img1 from '../assets/work1.jpg';
import img2 from '../assets/work2.jpg';
import img4 from '../assets/work4.jpg';

const projects = [
  {
    id: 1,
    title: 'Find My Park',
    description: 'A park-finding UX project for city explorers.',
    image: img1,
  },
  {
    id: 2,
    title: 'Light Wins Dark',
    description: 'An accessibility app for visually imapaired.',
    image: img2,
  },
  {
    id: 4,
    title: 'Save Energy Earn Money',
    description: 'Energy-saving platform with BC Hydro.',
    image: img4,
  },
];

const ProjectSlider = () => {
  return (
    <section className="projects-wrapper">
      <h2 className="section-title">Featured Projects</h2>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1.05}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={4000}
        grabCursor={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <ProjectCard {...project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectSlider;
