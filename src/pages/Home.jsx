import React from "react";
import "../styles/global.css"; 
import "../styles/home.css";

import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/TempProcess"; // Remember to rename to Process.jsx later!
import FeaturedWork from "../components/FeaturedWork";
import Testimonial from "../components/Testimonial";
import FAQ from "../components/FAQ";

const SectionDivider = () => (
  <div className="section-divider-container">
    <div className="section-line"></div>
  </div>
);

export default function Home() {
  return (
    <main className="home-wrapper">
      {/* 1. Impactful Intro */}
      <Hero images={[ 
        "/images/wed.avif", "/images/cor.avif",
        "/images/wed.avif", "/images/cor.avif",
        "/images/wed.avif", "/images/cor.avif",
        "/images/wed.avif", "/images/cor.avif",
        "/images/wed.avif"
      ]} />
      
      <SectionDivider />

      {/* 2. What we offer */}
      <Services />
      
      <SectionDivider />

      {/* 3. How we work (Crucial for luxury events) */}
      <Process /> 

      <SectionDivider />

      {/* 4. Visual proof of our expertise */}
      <FeaturedWork />

      <SectionDivider />

      {/* 5. What people say about us */}
      <Testimonial /> 

      <SectionDivider />

      {/* 6. Answering final questions */}
      <FAQ />

      <SectionDivider />
    </main>
  );
}