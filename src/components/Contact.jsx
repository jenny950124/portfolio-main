import React, { useState, useRef } from 'react';
import './Contact.css';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import { MeiModel } from '../components/MeiModel';

const Contact = () => {
  const [triggerRun, setTriggerRun] = useState(false);
  const [isUserTyping, setIsUserTyping] = useState(false);
  const formRef = useRef(null); // ✅ form DOM 참조

  const handleSubmit = (e) => {
    e.preventDefault();
    setTriggerRun(true);

    setTimeout(() => {
      if (formRef.current) {
        formRef.current.submit(); // ✅ 폼 전송
      }
      setTriggerRun(false); // ✅ 상태 초기화
    }, 2500); // 애니메이션 보여줄 시간
  };

  return (
    <section className="contact-page">
      <MeiModel triggerRun={triggerRun} isListening={isUserTyping} />

      <div className="contact-wrapper">
        <div className="contact-card">
          <h2>Let's Work Together!</h2>
          <form
            ref={formRef} // ✅ form에 ref 연결
            className="contact-form"
            action="https://formspree.io/f/xrbpdvkp"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="name"
                placeholder="Your name"
                onFocus={() => setIsUserTyping(true)}
                onBlur={() => setIsUserTyping(false)}
                required
              />
            </div>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                onFocus={() => setIsUserTyping(true)}
                onBlur={() => setIsUserTyping(false)}
                required
              />
            </div>
            <div className="input-group">
              <FaCommentDots className="input-icon" />
              <textarea
                name="message"
                placeholder="Your message"
                onFocus={() => setIsUserTyping(true)}
                onBlur={() => setIsUserTyping(false)}
                required
              />
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
