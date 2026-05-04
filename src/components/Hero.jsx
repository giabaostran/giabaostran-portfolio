import React from "react";
import { bio } from "./script";
import Avatar from "../data/avatar.jpg";
export default function Hero() {
  return (
    <div id="hero">
      <div className="status">
        <div className="status-dot"></div>
        Open to internships &amp; full-time — Summer 2026
      </div>

      <img id="nav-avatar-img"src={Avatar} alt="" />

      <h1>
        {bio.firstName}
        <br />
        <span className="line2">{bio.lastName}.</span>
        <span className="dim">{bio.hook}</span>
      </h1>
      <p className="hero-bio">
        4th Computer Science student at <strong>Carleton University</strong>, focused on DevOps, SWE, and WebDev people
        actually use. I like hard problems and clean code.
      </p>
      <div className="hero-links">
        <a href="#projects" className="primary">
          View work
        </a>
        <a href={bio.gitHub}>GitHub ↗</a>
        <a href={bio.linkedIn}>LinkedIn ↗</a>
        <a href={`mailto:${bio.email}`}>Email ↗</a>
        <a href="resume">Resume ↗</a>
      </div>
    </div>
  );
}
