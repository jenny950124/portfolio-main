import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MainNav.css';
import logo from '../assets/logo.jpg';

const MainNav = () => {
  const [activeItem, setActiveItem] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="logo">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <div className={`nav-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>

      <ul className={`nav-list ${menuOpen ? 'active' : ''}`}>
        <li
          onMouseEnter={() => setActiveItem('about')}
          onMouseLeave={() => setActiveItem('')}
          onClick={closeMenu}
        >
          <Link to="/about">
            {activeItem === 'about' && <span className="cloud-emoji">☁️</span>} About
          </Link>
        </li>
        <li
          onMouseEnter={() => setActiveItem('projects')}
          onMouseLeave={() => setActiveItem('')}
          onClick={closeMenu}
        >
          <Link to="/projects">
            {activeItem === 'projects' && <span className="cloud-emoji">☁️</span>} Projects
          </Link>
        </li>
        <li
          onMouseEnter={() => setActiveItem('contact')}
          onMouseLeave={() => setActiveItem('')}
          onClick={closeMenu}
        >
          <Link to="/contact">
            {activeItem === 'contact' && <span className="cloud-emoji">☁️</span>} Contact
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNav;
