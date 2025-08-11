import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* ✅ 파일이 src/Layout.css라서 이렇게 임포트 */
import "./Layout.css";

export default function Layout() {
  return (
    <div className="page">
      <Navbar />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
