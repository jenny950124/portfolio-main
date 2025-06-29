import React, { useState } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';

import fmpImage from '../assets/work1.jpg';
import homerImage from '../assets/work3.jpg';
import gdImage from '../assets/gd/gd4.png';

const ALL_PROJECTS = [
  {
    id: '1',
    title: 'Find My Park',
    image: fmpImage,
    description: 'GPS Based App that Helps People Find the Nearest Parks in Busy Cities',
    fit: 'cover',
  },
  {
    id: '2',
    title: 'Homer St Cafe',
    image: homerImage,
    description: 'Responsive restaurant website redesign',
    fit: 'cover',
  },
  {
    id: '3',
    title: 'Graphic Design Goods',
    image: gdImage,
    description: 'A vibrant collection of bold, playful, and expressive graphic works.',
    fit: 'contain',
  },
];

const TABS = [
  {
    id: 'uiux',
    label: 'UI/UX Design',
    projects: [ALL_PROJECTS[0]],
  },
  {
    id: 'responsive',
    label: 'Responsive',
    projects: [ALL_PROJECTS[1]],
  },
  {
    id: 'graphic',
    label: 'Graphic Design',
    projects: [ALL_PROJECTS[2]],
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <section className="projects-page">
      <div className="projects-inner" onMouseLeave={() => setActiveTab(null)}>
        <aside className="projects-tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={tab.id === activeTab ? 'tab active' : 'tab'}
              onMouseEnter={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </aside>

        {activeTab && (
          <div className="projects-display">
            {TABS.find((t) => t.id === activeTab).projects.map((proj) => (
              <Link
                to={`/projects/${proj.id}`}
                key={proj.id}
                className="project-card-overlay"
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className={proj.fit === 'contain' ? 'fit-contain' : 'fit-cover'}
                />
                <div className="overlay">
                  <h3>{proj.title}</h3>
                  <p>{proj.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
