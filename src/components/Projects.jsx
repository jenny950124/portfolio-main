import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import fmpImage from '../assets/work1.jpg';
import lwdImage from '../assets/work2.jpg';
import homerImage from '../assets/work3.jpg';
import saveenergy from '../assets/work4.jpg';

const projects = [
  {
    id: '1',
    title: 'Find My Park',
    image: fmpImage,
    description: 'GPS Based App that Helps People Find the Nearest Parks in Busy Cities',
  },
  {
    id: '2',
    title: 'Light Wins Dark',
    image: lwdImage,
    description: 'AI + GPS app designed to Assist Blind & Visually Impaired Users in Daily Life.',
  },
  {
    id: '3',
    title: 'Homer St Cafe',
    image: homerImage,
    description: 'Responsive Website Redesign',
  },
  {
    id: '4',
    title: 'Save Energy Earn Money',
    image: saveenergy,
    description: 'BC Hydro Energy-Saving App',
  },
];

const Projects = () => {
  return (
    <section className="projects-wrapper">
      <h2 className="section-title">Selected Projects</h2>
      <div className="project-list">
        {projects.map((project) => (
          <div key={project.id} className="project-showcase">
            <img src={project.image} alt={project.title} className="project-bg" />
            <div className="project-overlay">
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <Link to={`/projects/${project.id}`}>View Project ↗</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
