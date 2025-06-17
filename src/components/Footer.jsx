import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import { FaLinkedin, FaBehance, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="footer-links">
          <Link to="/about">ABOUT</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        <div className="footer-email-social">
          <div className="footer-email">
            <a href="mailto:jenny237k@gmail.com">EMAIL: JENNY237K@GMAIL.COM</a>
          </div>
          <div className="footer-social-icons">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
              <FaBehance />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 ALL WORKS DESIGNED BY JENNY.
      </div>
    </footer>
  );
};

export default Footer;
