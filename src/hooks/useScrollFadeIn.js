import { useRef, useEffect, useState } from 'react';

export default function useScrollFadeIn() {
  const dom = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    });
    if (dom.current) observer.observe(dom.current);
  }, []);

  return {
    ref: dom,
    className: visible ? 'visible' : '',
  };
}
