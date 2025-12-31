import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./TourListings.css";
import meghalaya from "../assets/meghalaya.jpeg";
import azerbaijan from "../assets/azerbaijan.webp";
import spiti from "../assets/spiti.jpg";
import andaman from "../assets/andaman.jpeg";
import bhutan from "../assets/bhutan.jpg";
import georgia from "../assets/georgia.jpeg";
import tawang from "../assets/tawang.jpg";
import kazakh from "../assets/kazakh.jpeg";


const toursData = [
  {
    id: 1,
    title: "Meghalaya Nature Escape",
    image: meghalaya,
    tagline: "Waterfalls, caves & living bridges",
    duration: "5 Nights / 6 Days",
    price: "₹44,999",
    highlights: ["Living root bridges", "Dawki crystal river", "Cherrapunji waterfalls"],
    itinerary: "Guwahati → Shillong → Cherrapunji → Dawki → Shillong",
  },
  {
    id: 2,
    title: "Azerbaijan Highlights",
    image: azerbaijan,
    tagline: "Where Europe meets Asia",
    duration: "6 Nights / 7 Days",
    price: "₹82,999",
    highlights: ["Baku old city", "Mud volcanoes", "Caspian Sea views"],
    itinerary: "Baku → Gobustan → Gabala → Baku",
  },
  {
    id: 3,
    title: "Spiti Valley Expedition",
    image: spiti,
    tagline: "Raw Himalayas & monasteries",
    duration: "7 Nights / 8 Days",
    price: "₹56,999",
    highlights: ["Key Monastery", "Chandratal Lake", "High-altitude villages"],
    itinerary: "Shimla → Kaza → Chandratal → Manali",
  },
  {
    id: 4,
    title: "Andaman Island Explorer",
    image: andaman,
    tagline: "Tropical beaches & marine life",
    duration: "5 Nights / 6 Days",
    price: "₹48,999",
    highlights: ["Radhanagar Beach", "Snorkeling experience", "Cellular Jail visit"],
    itinerary: "Port Blair → Havelock → Neil Island → Port Blair",
  },
  {
    id: 5,
    title: "Bhutan Cultural Journey",
    image: bhutan,
    tagline: "Happiness, monasteries & mountains",
    duration: "6 Nights / 7 Days",
    price: "₹52,999",
    highlights: ["Tiger’s Nest Monastery", "Thimphu sightseeing", "Traditional culture"],
    itinerary: "Paro → Thimphu → Punakha → Paro",
  },
  {
    id: 6,
    title: "Georgia Wine & Mountains",
    image: georgia,
    tagline: "Historic towns & scenic valleys",
    duration: "6 Nights / 7 Days",
    price: "₹79,999",
    highlights: ["Kakheti wine region", "Kazbegi mountains", "Old Tbilisi tour"],
    itinerary: "Tbilisi → Kazbegi → Kakheti → Tbilisi",
  },
  {
    id: 7,
    title: "Tawang Monastery Trail",
    image: tawang,
    tagline: "Spiritual journey in Arunachal",
    duration: "5 Nights / 6 Days",
    price: "₹49,999",
    highlights: ["Tawang Monastery visit", "Sela Pass", "Local markets exploration"],
    itinerary: "Tezpur → Bomdila → Tawang → Tezpur",
  },
  {
    id: 8,
    title: "Kazakhstan Silk Route Adventure",
    image: kazakh,
    tagline: "Step into the historical Silk Road",
    duration: "7 Nights / 8 Days",
    price: "₹88,999",
    highlights: ["Almaty city tour", "Charyn Canyon", "Lake Issyk"],
    itinerary: "Almaty → Charyn Canyon → Issyk Lake → Almaty",
  },
];



const TourListings = () => {
  const [compareList, setCompareList] = useState([]);

  const toggleCompare = (tour) => {
    setCompareList((prev) => {
      if (prev.find((t) => t.id === tour.id)) {
        return prev.filter((t) => t.id !== tour.id);
      }
      if (prev.length === 3) return prev;
      return [...prev, tour];
    });
  };

  return (
    <section className="tour-listings">
      <h2 className="section-title">Explore Our Tours</h2>

      <div className="tour-grid">
        {toursData.map((tour) => (
          <motion.div key={tour.id} className="tour-card" whileHover={{ y: -8 }}>
            <div className="tour-image" style={{ backgroundImage: `url(${tour.image})` }} />

            <div className="tour-content">
              <h3>{tour.title}</h3>
              <p className="tagline">{tour.tagline}</p>

              <div className="tour-meta">
                <span>{tour.duration}</span>
                <strong>{tour.price}</strong>
              </div>

              <ul className="highlights">
                {tour.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <p className="itinerary">
                <strong>Itinerary:</strong> {tour.itinerary}
              </p>

              <div className="tour-actions">
                <button className="primary-btn">View Full Itinerary</button>
                
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* COMPARE PANEL */}
      <AnimatePresence>
        {compareList.length >= 2 && (
          <motion.div className="compare-panel" initial={{ y: 100 }} animate={{ y: 0 }} exit={{ y: 100 }}>
            <h4>Compare Tours</h4>
            <div className="compare-grid">
              {compareList.map((tour) => (
                <div key={tour.id} className="compare-card">
                  <h5>{tour.title}</h5>
                  <p>{tour.duration}</p>
                  <p>{tour.price}</p>
                  <p>{tour.itinerary}</p>
                </div>
              ))}
            </div>
            <button className="close-btn" onClick={() => setCompareList([])}>
              Clear Comparison
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TourListings;
