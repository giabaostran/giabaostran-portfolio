import React from "react";
import { projects } from "./script";
import Project from "./ui/Project";
export default function Projects() {
  const MAX_PROJECT_SHOWN = 6;
  return (
    <section id="projects">
      <div className="section-header">
        <span className="section-label">// projects</span>
        <span className="section-count">
          {projects.length >= MAX_PROJECT_SHOWN
            ? MAX_PROJECT_SHOWN
            : projects.length}{" "}
          featured
        </span>
      </div>

      <div id="projects-list">
        {projects.slice(0, MAX_PROJECT_SHOWN).map((p, i) => (
          <Project key={i} project={p} />
        ))}
      </div>

      <button className="archive-btn">Full archive ↗</button>
    </section>
  );
}

// ---------------- SVG Component ----------------
