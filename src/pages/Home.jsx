import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <div className="mt-30">
      <div id="home">
        <HeroSection />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
