// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((v) => !v);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo" onClick={closeMenu}>
        <img src={logo} alt="Jenny Logo" />
      </Link>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        role="button"
        tabIndex={0}
        aria-label="Toggle menu"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggleMenu();
        }}
      >
        <span />
        <span />
        <span />
      </div>

      <ul className={`navbar-menu ${menuOpen ? "open" : ""}`}>
        <li>
          <Link
            to="/about"
            onClick={closeMenu}
            className={`navbar-link about ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/work"
            onClick={closeMenu}
            className={`navbar-link work ${
              location.pathname === "/work" ? "active" : ""
            }`}
          >
            Work
          </Link>
        </li>
      </ul>
    </nav>
  );
}
