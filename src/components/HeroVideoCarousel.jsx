import { useEffect, useState } from "react";
import "./HeroVideoCarousel.css";

/* Import images from src/assets */
import singaporeImg from "../assets/singapore.jpg";
import rajasthanImg from "../assets/rajasthan.jpg";
import disneylandImg from "../assets/disneyland.jpg";

const slides = [
  { image: singaporeImg },
  { image: rajasthanImg },
  { image: disneylandImg },
];

const categories = ["International", "Domestic", "Honeymoon", "Weekend", "Group Tours"];

export default function HeroImageCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-video-carousel">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`video-slide ${index === active ? "active" : ""}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="video-overlay">
            <h1>Explore Beautiful Destinations</h1>
            <p>Your adventure starts here with KN Tours & Travel</p>
          </div>
        </div>
      ))}

      <div className="video-categories hero-tabs">
        {categories.map((cat, idx) => (
          <span key={idx}>{cat}</span>
        ))}
      </div>
    </section>
  );
}
