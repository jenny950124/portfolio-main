// src/hooks/useScrollFadeIn.js
import { useRef, useEffect, useState } from 'react';

export default function useScrollFadeIn() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return {
    ref,
    className: visible ? 'visible' : '',
  };
}
