import React from "react";
import { experiences } from "./script";
import Experience from "./ui/Experience";
export default function Experiences() {
  return (
    <section id="experience">
      <div className="section-header">
        <span className="section-label">// experience</span>
      </div>

      {experiences.map((e, i) => (
        <Experience key={i} experience={e} />
      ))}
    </section>
  );
}
