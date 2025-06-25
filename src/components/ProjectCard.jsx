// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css'; // 공통 스타일 사용

const ProjectCard = ({ id, title, image, description }) => {
  return (
    <div className="project-showcase">
      <img src={image} alt={title} className="project-bg" />
      <div className="project-overlay">
        <div className="project-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <Link to={`/projects/${id}`}>View Project ↗</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
