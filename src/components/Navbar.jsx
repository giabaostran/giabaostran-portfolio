import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="nav-left">
        <div className="nav-avatar-wrap">
          <div className="nav-avatar-bg" id="avatar-bg">
            <svg
              viewBox="0 0 24 30"
              fill="#39ff8a"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="12" cy="9" rx="6" ry="6" />
              <ellipse cx="12" cy="26" rx="11" ry="9" />
            </svg>
          </div>
          <img id="nav-avatar-img" alt="avatar" />
        </div>
        <div className="logo-group">
          <a href="/" className="logo">
            Gia Bao Tran
          </a>
          <span className="logo-sub">Carleton University · CS</span>
        </div>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#experience">Exp</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
