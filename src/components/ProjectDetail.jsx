import React from "react";
import { useParams, Navigate } from "react-router-dom";

import FindMyPark from "./FindMyPark";
import PowerPause from "./PowerPause";
import HomerStCafe from "./HomerStCafe";
import GraphicDesign from "./GraphicDesign";

// ✅ 원하는 새 매핑
// 1: Find My Park
// 2: PowerPause
// 3: Homer St. Cafe & Bar
// 4: Graphic Design
const PROJECT_MAP = {
  "1": FindMyPark,
  "2": PowerPause,
  "3": HomerStCafe,
  "4": GraphicDesign,
};

// 순서 정의(Prev/Next 계산용)
const ORDER = ["1", "2", "3", "4"];

export default function ProjectDetail() {
  const { id } = useParams();
  const Component = PROJECT_MAP[id];

  if (!Component) return <Navigate to="/work" replace />;

  // Prev/Next 계산 (순환)
  const idx = ORDER.indexOf(id);
  const prevId = ORDER[(idx - 1 + ORDER.length) % ORDER.length];
  const nextId = ORDER[(idx + 1) % ORDER.length];

  return <Component prevId={Number(prevId)} nextId={Number(nextId)} />;
}
