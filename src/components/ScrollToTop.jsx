import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ behavior = "auto" }) {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }


    const flush = () => {

      window.scrollTo({ top: 0, left: 0, behavior });


      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;


      const candidates = [
        ".main",
        ".project-detail-wrapper",
        ".content-zoom",
        ".zoom-inner"
      ];
      for (const sel of candidates) {
        const el = document.querySelector(sel);
        if (el && typeof el.scrollTop === "number") el.scrollTop = 0;
      }
    };


    flush();
    const id = requestAnimationFrame(flush);
    return () => cancelAnimationFrame(id);
  }, [pathname, search, behavior]);

  return null;
}
