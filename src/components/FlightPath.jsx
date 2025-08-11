import React from "react";
import "./FlightPath.css";

export default function FlightPath() {
  return (
    <div className="flight-path">
      <span className="dot start">User</span>
      <div className="path-line">
        <div className="plane">✈</div>
      </div>
      <span className="dot end">Jenny's Design World</span>
    </div>
  );
}