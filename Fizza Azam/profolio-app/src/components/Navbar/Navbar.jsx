import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import DarkMode from "../../DarkMode";

export default function Navbar() {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Fizza Azam</div>
        <div className={Toggle}>
          <DarkMode />
        </div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Home </li>
            <li>Service</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul>
        </div>
        <button className="button n-button">Contact</button>
      </div>
    </div>
  );
}
