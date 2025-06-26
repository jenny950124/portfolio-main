import React, { useState } from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'

import fmpImage from '../assets/work1.jpg'
import lwdImage from '../assets/work2.jpg'
import homerImage from '../assets/work3.jpg'
import saveenergy from '../assets/work4.jpg'

const ALL_PROJECTS = [
  { id: '1', title: 'Find My Park', image: fmpImage, description: 'GPS Based App that Helps People Find the Nearest Parks in Busy Cities' },
  { id: '2', title: 'Light Wins Dark', image: lwdImage, description: 'AI + GPS app to assist the visually impaired' },
  { id: '3', title: 'Homer St Cafe', image: homerImage, description: 'Responsive restaurant website redesign' },
  { id: '4', title: 'Save Energy Earn Money', image: saveenergy, description: 'BC Hydro based reward system app' },
]

const TABS = [
  { id: 'uiux', label: 'UI/UX Design', projects: ALL_PROJECTS },
  { id: 'responsive', label: 'Responsive', projects: ALL_PROJECTS },
  { id: 'graphic', label: 'Graphic Design', projects: ALL_PROJECTS },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState(null)

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
                <img src={proj.image} alt={proj.title} />
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
  )
}
