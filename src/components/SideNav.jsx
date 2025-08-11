// // SideNav.jsx — FINAL (CSS scroll-margin-top 기반 정밀 스크롤 + 하이라이트)
// import React, { useEffect, useMemo, useState } from "react";
// import "./SideNav.css";

// export default function SideNav({
//   sections = [],
//   side = "right",
//   // offset prop은 하이라이트 계산의 fallback 값으로만 사용 (스크롤은 CSS로 처리)
//   offset = 110,
// }) {
//   const [activeId, setActiveId] = useState(sections?.[0]?.id || "");
//   const ids = useMemo(() => sections.map((s) => s.id), [sections]);

//   // transform/scale 영향 없는 절대 top
//   const getAbsTop = (el) => {
//     let y = 0, n = el;
//     while (n) { y += n.offsetTop || 0; n = n.offsetParent; }
//     return y;
//   };

//   // 요소의 scroll-margin-top(px) 읽기
//   const getScrollMarginTop = (el) => {
//     const g = getComputedStyle(el);
//     const v = g.scrollMarginTop || "0";
//     const n = parseFloat(v);
//     return Number.isFinite(n) ? n : 0;
//   };

//   // 클릭 → CSS scroll-margin-top을 활용해 정확히 붙여서 스크롤
//   const scrollToId = (id) => (e) => {
//     e.preventDefault();
//     const el = document.getElementById(id);
//     if (!el) return;
//     // CSS가 보정해 주도록 scrollIntoView 사용
//     el.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   // 스크롤 스파이(현재 섹션 하이라이트)
//   useEffect(() => {
//     const onScroll = () => {
//       const y = window.scrollY;
//       let current = ids[0];
//       for (const id of ids) {
//         const el = document.getElementById(id);
//         if (!el) continue;
//         const adjust = getScrollMarginTop(el); // 실제 보정값 사용
//         const top = getAbsTop(el) - adjust - 1;
//         if (y >= top) current = id;
//         else break;
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
// SideNav.jsx — FINAL (정확 하이라이트)
import React, { useEffect, useMemo, useState } from "react";
import "./SideNav.css";

export default function SideNav({
  sections = [],
  side = "right",
}) {
  const [activeId, setActiveId] = useState(sections?.[0]?.id || "");
  const ids = useMemo(() => sections.map((s) => s.id), [sections]);

  // transform/scale 영향 안 받는 절대 top
  const getAbsTop = (el) => {
    let y = 0, n = el;
    while (n) { y += n.offsetTop || 0; n = n.offsetParent; }
    return y;
  };

  // 섹션별 scroll-margin-top 보정값 읽기
  const getScrollMarginTop = (el) => {
    const v = getComputedStyle(el).scrollMarginTop || "0";
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : 0;
  };

  // 클릭 시: 바로 하이라이트 + 정확히 상단 정렬
  const scrollToId = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    setActiveId(id); // 클릭 즉시 불 켬
    el.scrollIntoView({ behavior: "smooth", block: "start" }); // CSS scroll-margin-top으로 보정
  };

  // 스크롤 스파이: 현재 섹션 계산(절대좌표 - scroll-margin-top)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = getAbsTop(el) - getScrollMarginTop(el) - 1;
        if (y >= top) current = id; else break;
      }
      setActiveId(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids.join(",")]);

  const classes = ["simple-side-nav", side === "left" ? "left" : "right"].join(" ");

  return (
    <nav className={classes} aria-label="Project sections">
      <ul>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={scrollToId(id)}
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
