import React from "react";
import "./TrustBadges.css";

const trustMetrics = [
  {
    highlight: "5,000+",
    title: "Happy Travelers",
    desc: "Trusted by families, groups, and corporate travelers across India.",
  },
  {
    highlight: "4.8★",
    title: "Google Reviews",
    desc: "Highly rated for reliability, service quality, and transparent pricing.",
  },
];

const TrustBadges = () => {
  return (
    <section className="trust-badges">
      <div className="container">
        <h2 className="section-title">Trusted by Thousands of Travelers</h2>
        <p className="section-subtitle">
          Our reputation is built on consistent service, genuine care, and long-term partnerships.
        </p>

        {/* Trust Metrics */}
        <div className="trust-metrics">
          {trustMetrics.map((item, index) => (
            <div className="trust-card" key={index}>
              <div className="trust-highlight">{item.highlight}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="trust-logos">
          <img src="/images/google.png" alt="Google Reviews" loading="lazy" />
          <img src="/images/partner1.png" alt="Hotel Partner" loading="lazy" />
          <img src="/images/partner-2.jpg" alt="Transport Partner" loading="lazy" />
          <img src="/images/partner3.jpg" alt="Airline Partner" loading="lazy" />
          <img src="/images/partner4.png" alt="Resort Partner" loading="lazy" />
          <img src="/images/partner5.png" alt="Tourism Partner" loading="lazy" />
          <img src="/images/partner6.jpg" alt="Corporate Partner" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
