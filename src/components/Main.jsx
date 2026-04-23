import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";

export default function Main() {
  return (
    <div id="main-page">
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}
