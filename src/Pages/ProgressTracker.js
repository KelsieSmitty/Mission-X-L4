import React from "react";
import Sidebar from "../ComponentsJosh/Sidebar";
import Navbar from "../ComponentsJosh/Navbar";
import ProgressContent from "../ComponentsJosh/progressContent";

export default function ProgressTracker() {
  return (
    <div>
      <Navbar />
      {/* this  " <div style={{ display: "flex" }}> " is a way of adding css in the javascript file */}
      <div style={{ display: "flex" }}>
        <Sidebar />
        <ProgressContent />
      </div>
    </div>
  );
}
