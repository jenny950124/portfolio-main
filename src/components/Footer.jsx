import React from "react";
import "./Footer.css";
import instagram from "../assets/instagram.svg";
import behance from "../assets/behance.svg";
import email from "../assets/email.svg";

// 👉 여기에 본인 링크로 바꿔주세요
const SOCIALS = {
  email: "mailto:hello@jennykim.design",                 // 메일 주소
  instagram: "https://instagram.com/jennykim",           // 인스타그램 프로필
  behance: "https://www.behance.net/jennykim",           // 비핸스 프로필
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-brand">
            <span className="brand-mark">JK</span>
            <span className="brand-name">Jenny Kim</span>
          </div>
          <p className="footer-copy">© {year} Jenny Kim. All rights reserved.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          {/* 내부 페이지는 SPA 네비게이션 원하면 Link로 바꿔도 됩니다 */}
          <a className="footer-link" href="/about">About</a>
          <a className="footer-link" href="/work">Work</a>
          <a className="footer-link" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </nav>

        <div className="footer-social">
          <a className="icon-link" href={SOCIALS.email} aria-label="Email">
            <img src={email} alt="" />
          </a>
          <a
            className="icon-link"
            href={SOCIALS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <img src={instagram} alt="" />
          </a>
          <a
            className="icon-link"
            href={SOCIALS.behance}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
          >
            <img src={behance} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
