import React from "react";
import "./HeroSection.css";

/* Import image from src/assets */
import careerHero from "../assets/career-hero.jpeg";

const HeroSection = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${careerHero})` }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-heading">
            Join the Journey with KN Tours & Travel
          </h1>
          <p className="hero-subheading">
            Explore a career that takes you places—literally and professionally.
          </p>
          <button className="hero-cta">View Open Positions</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
