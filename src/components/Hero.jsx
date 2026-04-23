import React from "react";

export default function Hero() {
  return (
    <div id="hero">
      <div className="status">
        <div className="status-dot"></div>
        Open to internships &amp; full-time — Summer 2026
      </div>
      <h1>
        Gia Bao
        <br />
        <span className="line2">Tran.</span>
        <span className="dim">CS @ Carleton · builder of things.</span>
      </h1>
      <p className="hero-bio">
        4th Computer Science student at <strong>Carleton University</strong>,
        focused on DevOps, SWE, and WebDev
        people actually use. I like hard problems and clean code.
      </p>
      <div className="hero-links">
        <a href="#projects" className="primary">
          View work
        </a>
        <a href="https://github.com/giabaostran">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/giabaostran/">LinkedIn ↗</a>
        <a href="mailto:giabaotran@cmail.carleton.ca">Email ↗</a>
        <a href="#">Resume ↗</a>
      </div>
    </div>
  );
}
