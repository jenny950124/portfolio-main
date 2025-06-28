// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectSlider.css';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <Link to={link} className="slider-card">
      <img src={image} alt={title} />
      <div className="slider-overlay">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
