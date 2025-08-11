// // import React, { useEffect } from 'react';
// // import { motion } from 'framer-motion';
// // import profile1 from '../assets/profile.png';
// // import profile2 from '../assets/profile2.png';
// // import linkedin from '../assets/linkedin.svg';
// // import instagram from '../assets/instagram.svg';
// // import behance from '../assets/behance.svg';
// // import email from '../assets/email.svg';
// // import './About.css';

// // const PaperPlane = ({ className }) => (
// //   /* 종이비행기 SVG (fill = currentColor) */
// //   <svg
// //     className={className}
// //     viewBox="0 0 64 64"
// //     aria-hidden="true"
// //     style={{ color: '#ffb9e1' }}
// //   >
// //     <path d="M4 30.2L60.7 8.3c1.1-.4 2.1.6 1.7 1.7L40.4 57.7c-.5 1.2-2.3 1-2.6-.3l-5.3-19.9L4 30.2z" fill="currentColor"/>
// //     <path d="M32.5 37.6l-9.4 8.6c-.9.8-2.3.3-2.5-.9l-2-12.2 13.9 4.5z" fill="currentColor" opacity="0.6"/>
// //     <path d="M18.6 32.3L56.7 13.2 27.5 34.6l-8.9-2.3z" fill="white" opacity="0.65"/>
// //   </svg>
// // );

// // const About = () => {
// //   /* 이 페이지에 있는 동안 바디 스크롤 잠금 */
// //   useEffect(() => {
// //     const prev = document.body.style.overflow;
// //     document.body.style.overflow = 'hidden';
// //     return () => { document.body.style.overflow = prev || ''; };
// //   }, []);

// //   return (
// //     <div className="about-container">
// //       {/* ===== 배경 데코 ===== */}
// //       <div className="about-decor" aria-hidden="true">
// //         <div className="bg-blob"></div>
// //         <PaperPlane className="plane plane-a" />
// //         <PaperPlane className="plane plane-b" />
// //       </div>

// //       {/* ===== 사진 + 액션 (상단, 고정) ===== */}
// //       <motion.div
// //         className="about-left"
// //         initial={{ x: -80, opacity: 0 }}
// //         whileInView={{ x: 0, opacity: 1 }}
// //         transition={{ duration: 0.8 }}
// //         viewport={{ once: true }}
// //       >
// //         <div className="about-images">
// //           <img src={profile2} alt="Jenny portrait 2" />
// //           <img src={profile1} alt="Jenny portrait 1" />
// //         </div>

// //         <div className="about-actions">
// //           <a
// //             href="/resume.pdf"
// //             className="resume-button"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             View Resume
// //           </a>

// //           <div className="social-icons">
// //             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
// //               <img src={linkedin} alt="" />
// //             </a>
// //             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
// //               <img src={instagram} alt="" />
// //             </a>
// //             <a href="https://behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance">
// //               <img src={behance} alt="" />
// //             </a>
// //             <a href="mailto:jenny237k@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
// //               <img src={email} alt="" />
// //             </a>
// //           </div>
// //         </div>
// //       </motion.div>

// //       {/* ===== 소개글 (하단, 내부 스크롤) ===== */}
// //       <motion.div
// //         className="about-text"
// //         initial={{ x: 80, opacity: 0 }}
// //         whileInView={{ x: 0, opacity: 1 }}
// //         transition={{ duration: 0.8 }}
// //         viewport={{ once: true }}
// //       >
// //         <h1>About Me</h1>

// //         <h3>01. My Journey</h3>
// //         <p>
// //           From Korea to Canada, and through the Philippines and Tanzania, my life has been shaped by diverse cultures and environments.
// //           These global experiences became my creative fuel. Immigrating to Canada taught me not only resilience but also empathy—
// //           understanding differences, adapting to change, and always staying curious. That’s where my design begins.
// //         </p>

// //         <h3>02. My Background</h3>
// //         <p>
// //           With a cross-cultural foundation, I bring clarity and compassion to every project. Whether I’m designing for a local nonprofit
// //           or an international user base, my background helps me build inclusive, thoughtful experiences for real people.
// //         </p>

// //         <h3>03. My Design Philosophy</h3>
// //         <p>
// //           Beautiful design is only meaningful when it’s easy to use.<br/>
// //           I believe that aesthetics and usability must work hand in hand—much like a flower that only thrives with proper roots and soil.
// //           Design that merely looks good won’t last; but design that solves problems with intention, structure, and care will endure and inspire.
// //         </p>

// //         <h3>04. My Strengths</h3>
// //         <p>
// //           I specialize in UX research, interaction design, and visual systems. I’m highly skilled in Figma, Adobe Creative Suite,
// //           Webflow, and HTML/CSS, and I love collaborating with developers, product teams, and fellow creatives.
// //         </p>

// //         <h3>05. My Process</h3>
// //         <p>
// //           My design process starts with understanding the user—not just what they want to do, but how they feel and behave in context.<br/>
// //           I often begin with user interviews or quick research to uncover real needs. Then I define the problem clearly,
// //           ideate possible solutions, and prototype the most promising ones. I believe in testing early, even with low-fidelity mockups,
// //           because fast feedback helps us move in the right direction. Iteration is key. I see feedback not as criticism, but as fuel for improvement.
// //         </p>

// //         <p>
// //           <br/>For example, in one project, I noticed users hesitated on a button due to unclear wording.
// //           After updating the copy and visual emphasis, user engagement improved immediately.
// //         </p>

// //         <h3>06. A Bit About Me</h3>
// //         <p>
// //           My friends call me a “walking Instagram.” I love capturing moments and connecting with people through stories.<br/>
// //           I enjoy photography, documenting daily life, and learning about others through their unique experiences.
// //           While family and friends ground me, meeting new people gives me the kind of exciting instability that helps me grow
// //           and find balance on my own.
// //         </p>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default About;


// import React from 'react';
// import { motion } from 'framer-motion';
// import profile1 from '../assets/profile.png';
// import profile2 from '../assets/profile2.png';
// import linkedin from '../assets/linkedin.svg';
// import instagram from '../assets/instagram.svg';
// import behance from '../assets/behance.svg';
// import email from '../assets/email.svg';
// import './About.css';

// const PaperPlane = ({ className }) => (
//   /* 종이비행기 SVG (fill = currentColor) */
//   <svg
//     className={className}
//     viewBox="0 0 64 64"
//     aria-hidden="true"
//     style={{ color: '#ffb9e1' }}
//   >
//     <path d="M4 30.2L60.7 8.3c1.1-.4 2.1.6 1.7 1.7L40.4 57.7c-.5 1.2-2.3 1-2.6-.3l-5.3-19.9L4 30.2z" fill="currentColor"/>
//     <path d="M32.5 37.6l-9.4 8.6c-.9.8-2.3.3-2.5-.9l-2-12.2 13.9 4.5z" fill="currentColor" opacity="0.6"/>
//     <path d="M18.6 32.3L56.7 13.2 27.5 34.6l-8.9-2.3z" fill="white" opacity="0.65"/>
//   </svg>
// );

// export default function About() {
//   return (
//     <div className="about-container">
//       {/* ===== 배경 데코 ===== */}
//       <div className="about-decor" aria-hidden="true">
//         <div className="bg-blob"></div>
//         <PaperPlane className="plane plane-a" />
//         <PaperPlane className="plane plane-b" />
//       </div>

//       {/* ===== 사진 + 액션 (상단) ===== */}
//       <motion.div
//         className="about-left"
//         initial={{ x: -80, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <div className="about-images">
//           <img src={profile2} alt="Jenny portrait 2" />
//           <img src={profile1} alt="Jenny portrait 1" />
//         </div>

//         <div className="about-actions">
//           <a
//             href="/resume.pdf"
//             className="resume-button"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             View Resume
//           </a>

//           <div className="social-icons">
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//               <img src={linkedin} alt="" />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//               <img src={instagram} alt="" />
//             </a>
//             <a href="https://behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance">
//               <img src={behance} alt="" />
//             </a>
//             <a href="mailto:jenny237k@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
//               <img src={email} alt="" />
//             </a>
//           </div>
//         </div>
//       </motion.div>

//       {/* ===== 소개글 (하단, 내부 스크롤) ===== */}
//       <motion.div
//         className="about-text"
//         initial={{ x: 80, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         viewport={{ once: true }}
//       >
//         <h1>About Me</h1>

//         <h3>01. My Journey</h3>
//         <p>
//           From Korea to Canada, and through the Philippines and Tanzania, my life has been shaped by diverse cultures and environments.
//           These global experiences became my creative fuel. Immigrating to Canada taught me not only resilience but also empathy—
//           understanding differences, adapting to change, and always staying curious. That’s where my design begins.
//         </p>

//         <h3>02. My Background</h3>
//         <p>
//           With a cross-cultural foundation, I bring clarity and compassion to every project. Whether I’m designing for a local nonprofit
//           or an international user base, my background helps me build inclusive, thoughtful experiences for real people.
//         </p>

//         <h3>03. My Design Philosophy</h3>
//         <p>
//           Beautiful design is only meaningful when it’s easy to use.<br/>
//           I believe that aesthetics and usability must work hand in hand—much like a flower that only thrives with proper roots and soil.
//           Design that merely looks good won’t last; but design that solves problems with intention, structure, and care will endure and inspire.
//         </p>

//         <h3>04. My Strengths</h3>
//         <p>
//           I specialize in UX research, interaction design, and visual systems. I’m highly skilled in Figma, Adobe Creative Suite,
//           Webflow, and HTML/CSS, and I love collaborating with developers, product teams, and fellow creatives.
//         </p>

//         <h3>05. My Process</h3>
//         <p>
//           My design process starts with understanding the user—not just what they want to do, but how they feel and behave in context.<br/>
//           I often begin with user interviews or quick research to uncover real needs. Then I define the problem clearly,
//           ideate possible solutions, and prototype the most promising ones. I believe in testing early, even with low-fidelity mockups,
//           because fast feedback helps us move in the right direction. Iteration is key. I see feedback not as criticism, but as fuel for improvement.
//         </p>

//         <p>
//           <br/>For example, in one project, I noticed users hesitated on a button due to unclear wording.
//           After updating the copy and visual emphasis, user engagement improved immediately.
//         </p>

//         <h3>06. A Bit About Me</h3>
//         <p>
//           My friends call me a “walking Instagram.” I love capturing moments and connecting with people through stories.<br/>
//           I enjoy photography, documenting daily life, and learning about others through their unique experiences.
//           While family and friends ground me, meeting new people gives me the kind of exciting instability that helps me grow
//           and find balance on my own.
//         </p>
//       </motion.div>
//     </div>
//   );
// }


import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import profile1 from '../assets/profile.png';
import profile2 from '../assets/profile2.png';
import linkedin from '../assets/linkedin.svg';
import instagram from '../assets/instagram.svg';
import behance from '../assets/behance.svg';
import email from '../assets/email.svg';
import './About.css';

const PaperPlane = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    aria-hidden="true"
    style={{ color: '#ffb9e1' }}
  >
    <path d="M4 30.2L60.7 8.3c1.1-.4 2.1.6 1.7 1.7L40.4 57.7c-.5 1.2-2.3 1-2.6-.3l-5.3-19.9L4 30.2z" fill="currentColor"/>
    <path d="M32.5 37.6l-9.4 8.6c-.9.8-2.3.3-2.5-.9l-2-12.2 13.9 4.5z" fill="currentColor" opacity="0.6"/>
    <path d="M18.6 32.3L56.7 13.2 27.5 34.6l-8.9-2.3z" fill="white" opacity="0.65"/>
  </svg>
);

export default function About() {
  // ✅ 이 페이지에 있는 동안 바디 스크롤 잠금(뷰포트 고정)
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev || ''; };
  }, []);

  return (
    <div className="about-container">
      {/* 배경 데코 */}
      <div className="about-decor" aria-hidden="true">
        <div className="bg-blob"></div>
        <PaperPlane className="plane plane-a" />
        <PaperPlane className="plane plane-b" />
      </div>

      {/* 상단(사진 + 버튼/소셜) */}
      <motion.div
        className="about-left"
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="about-images">
          <img src={profile2} alt="Jenny portrait 2" />
          <img src={profile1} alt="Jenny portrait 1" />
        </div>

        <div className="about-actions">
          <a
            href="/resume.pdf"
            className="resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>

          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src={linkedin} alt="" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src={instagram} alt="" />
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance">
              <img src={behance} alt="" />
            </a>
            <a href="mailto:jenny237k@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <img src={email} alt="" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* 하단(소개글: 내부 스크롤) */}
      <motion.div
        className="about-text"
        initial={{ x: 80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1>About Me</h1>

        <h3>01. My Journey</h3>
        <p>
          From Korea to Canada, and through the Philippines and Tanzania, my life has been shaped by diverse cultures and environments.
          These global experiences became my creative fuel. Immigrating to Canada taught me not only resilience but also empathy—
          understanding differences, adapting to change, and always staying curious. That’s where my design begins.
        </p>

        <h3>02. My Background</h3>
        <p>
          With a cross-cultural foundation, I bring clarity and compassion to every project. Whether I’m designing for a local nonprofit
          or an international user base, my background helps me build inclusive, thoughtful experiences for real people.
        </p>

        <h3>03. My Design Philosophy</h3>
        <p>
          Beautiful design is only meaningful when it’s easy to use.<br/>
          I believe that aesthetics and usability must work hand in hand—much like a flower that only thrives with proper roots and soil.
          Design that merely looks good won’t last; but design that solves problems with intention, structure, and care will endure and inspire.
        </p>

        <h3>04. My Strengths</h3>
        <p>
          I specialize in UX research, interaction design, and visual systems. I’m highly skilled in Figma, Adobe Creative Suite,
          Webflow, and HTML/CSS, and I love collaborating with developers, product teams, and fellow creatives.
        </p>

        <h3>05. My Process</h3>
        <p>
          My design process starts with understanding the user—not just what they want to do, but how they feel and behave in context.<br/>
          I often begin with user interviews or quick research to uncover real needs. Then I define the problem clearly,
          ideate possible solutions, and prototype the most promising ones. I believe in testing early, even with low-fidelity mockups,
          because fast feedback helps us move in the right direction. Iteration is key. I see feedback not as criticism, but as fuel for improvement.
        </p>

        <p>
          <br/>For example, in one project, I noticed users hesitated on a button due to unclear wording.
          After updating the copy and visual emphasis, user engagement improved immediately.
        </p>

        <h3>06. A Bit About Me</h3>
        <p>
          My friends call me a “walking Instagram.” I love capturing moments and connecting with people through stories.<br/>
          I enjoy photography, documenting daily life, and learning about others through their unique experiences.
          While family and friends ground me, meeting new people gives me the kind of exciting instability that helps me grow
          and find balance on my own.
        </p>
      </motion.div>
    </div>
  );
}
