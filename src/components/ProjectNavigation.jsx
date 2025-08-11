import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProjectNavigation.css';

const ProjectNavigation = ({ prevId, nextId }) => {
  const navigate = useNavigate();

  return (
    <div className="project-nav-container">
      {prevId ? (
        <button className="nav-button prev" onClick={() => navigate(`/projects/${prevId}`)}>
          ← Previous
        </button>
      ) : (
        <div style={{ width: '100px' }} />  // 빈 공간 유지
      )}
      {nextId && (
        <button className="nav-button next" onClick={() => navigate(`/projects/${nextId}`)}>
          Next →
        </button>
      )}
    </div>
  );
};

export default ProjectNavigation;
