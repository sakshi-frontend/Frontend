import React from "react";
import "./SocialProof.css";

const SocialProof = () => {
  return (
    <section className="social-proof-section">
      <div className="proof-container">

        {/* Google Rating */}
        <div className="rating-box">
          <span className="stars">★★★★★</span>
          <span className="rating-score">4.8/5</span>
          <p className="rating-text">
            Trusted by families, corporates & senior travelers
          </p>
        </div>

        {/* Partner Logos */}
        <div className="partners-box">
          <img src="/images/hotel-logo.jpg" alt="Hotel Partner" />
          <img src="/images/airline-logo.jpg" alt="Airline Partner" />
          <img src="/images/tourism-logo.jpg" alt="Tourism Board" />
        </div>

        {/* Metrics */}
        <div className="metrics-box">
          <div className="metric-card">
            <h3>5,000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="metric-card">
            <h3>300+</h3>
            <p>Group Tours Conducted</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SocialProof;
