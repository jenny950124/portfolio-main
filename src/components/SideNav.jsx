// // SideNav.jsx — FINAL (정확 하이라이트)
// import React, { useEffect, useMemo, useState } from "react";
// import "./SideNav.css";

// export default function SideNav({
//   sections = [],
//   side = "right",
// }) {
//   const [activeId, setActiveId] = useState(sections?.[0]?.id || "");
//   const ids = useMemo(() => sections.map((s) => s.id), [sections]);

//   // transform/scale 영향 안 받는 절대 top
//   const getAbsTop = (el) => {
//     let y = 0, n = el;
//     while (n) { y += n.offsetTop || 0; n = n.offsetParent; }
//     return y;
//   };

//   // 섹션별 scroll-margin-top 보정값 읽기
//   const getScrollMarginTop = (el) => {
//     const v = getComputedStyle(el).scrollMarginTop || "0";
//     const n = parseFloat(v);
//     return Number.isFinite(n) ? n : 0;
//   };

//   // 클릭 시: 바로 하이라이트 + 정확히 상단 정렬
//   const scrollToId = (id) => (e) => {
//     e.preventDefault();
//     const el = document.getElementById(id);
//     if (!el) return;
//     setActiveId(id); // 클릭 즉시 불 켬
//     el.scrollIntoView({ behavior: "smooth", block: "start" }); // CSS scroll-margin-top으로 보정
//   };

//   // 스크롤 스파이: 현재 섹션 계산(절대좌표 - scroll-margin-top)
//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY;
//       let current = ids[0];
//       for (const id of ids) {
//         const el = document.getElementById(id);
//         if (!el) continue;
//         const top = getAbsTop(el) - getScrollMarginTop(el) - 1;
//         if (y >= top) current = id; else break;
//       }
//       setActiveId(current);
//     };
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onScroll);
//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onScroll);
//     };
//   }, [ids.join(",")]);

//   const classes = ["simple-side-nav", side === "left" ? "left" : "right"].join(" ");

//   return (
//     <nav className={classes} aria-label="Project sections">
//       <ul>
//         {sections.map(({ id, label }) => (
//           <li key={id}>
//             <a
//               href={`#${id}`}
//               onClick={scrollToId(id)}
//               className={activeId === id ? "active" : ""}
//             >
//               {label}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// }


// SideNav.jsx — sticky + scroll-spy (FINAL)
import React, { useEffect, useState } from "react";
import "./SideNav.css";

export default function SideNav({
  sections = [],
  side = "right",     // "right" | "left"
  offset = 110,       // 상단 헤더 보정(앵커 클릭시)
}) {
  const [activeId, setActiveId] = useState(sections?.[0]?.id || "");

  // 클릭 시 부드럽게 이동 (헤더 가림 방지는 CSS의 scroll-margin-top이 처리)
  const handleClick = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveId(id);
  };

  // IntersectionObserver로 "가장 크게 보이는 섹션"을 active 처리
  useEffect(() => {
    if (!sections.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        // 보이는 섹션 중 교차비율이 가장 큰 것을 active로
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        // 화면 중앙 근방에 들어오면 active 되도록 중앙 기준
        root: null,
        rootMargin: "-45% 0% -45% 0%",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    // 새로고침/해시 진입 시 초기 active 설정
    setTimeout(() => {
      let bestId = sections[0]?.id;
      let bestDist = Infinity;
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - window.innerHeight / 2);
        if (dist < bestDist) { bestDist = dist; bestId = id; }
      });
      if (bestId) setActiveId(bestId);
    }, 0);

    return () => io.disconnect();
  }, [sections]);

  return (
    <nav className={`simple-side-nav ${side}`} aria-label="Project sections">
      <ul>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={handleClick(id)}
              className={activeId === id ? "active" : ""}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
