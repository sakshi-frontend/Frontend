import { useEffect, useState } from "react";
import "./FestiveCarousel.css";

// ✅ Import images from src/assets
import navratriImg from "../assets/navratri.jpg";
import diwaliImg from "../assets/diwali.jpg";
import christmasImg from "../assets/christmas.png";

const festiveThemes = [
  { image: navratriImg, effect: "diya", name: "Navratri", offer: "Festive Special Tours" },
  { image: diwaliImg, effect: "diya", name: "Diwali", offer: "Celebrate with Travel Deals" },
  { image: christmasImg, effect: "snow", name: "Christmas", offer: "Winter Holiday Offers" },
];

export default function FestiveOfferCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % festiveThemes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slide = festiveThemes[index];

  return (
    <section className="festive-wrapper">
      <div className="festive-carousel fade-slide">
        <div
          className="festive-bg"
          style={{ backgroundImage: `url(${slide.image})` }}
        />

        <div className="festive-overlay" />

        <div className="festive-content slide-up">
          <h2>{slide.name}</h2>
          <p>{slide.offer}</p>
        </div>

        {slide.effect === "diya" && <div className="floating diyas" />}
        {slide.effect === "snow" && <div className="floating snow" />}
      </div>
    </section>
  );
}
