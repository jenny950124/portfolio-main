import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaBehance, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        {/* 왼쪽: 내비게이션 */}
        <div className="footer-column footer-nav">
          <Link to="/about">ABOUT</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/contact">CONTACT</Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            VIEW RESUME
          </a>
        </div>

        {/* 가운데: 이메일 */}
        <div className="footer-column footer-email">
          <a href="mailto:jenny237k@gmail.com">JENNY237K@GMAIL.COM</a>
        </div>

        {/* 오른쪽: 소셜 아이콘 */}
        <div className="footer-column footer-social">
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

      <div className="footer-bottom">
        © 2025 ALL WORKS DESIGNED BY JENNY.
      </div>
    </footer>
  );
};

export default Footer;
