import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Experiences from "./Experiences";
import Footer from "./Footer";

export default function Main() {
  return (
    <div id="main-page">
      {/* <Navbar /> */}
      <Hero />
      <Projects />
      <Experiences />
      <Footer />
    </div>
  );
}
