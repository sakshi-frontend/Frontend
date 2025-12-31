import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaGlobeAsia,
  FaHiking,
  FaUmbrellaBeach,
} from "react-icons/fa";
import "./TourCategories.css";
import domestic from "../assets/domestic.jpeg";
import kerala from "../assets/kerala.jpeg";
import sikkim from "../assets/sikkim.jpg";
import rann from "../assets/rann.jpg";
import meghalaya from "../assets/meghalaya.jpeg";
import varanasi from "../assets/varanasi.jpeg";

import international from "../assets/international.jpg";
import vietnam from "../assets/vietnam.jpg";
import japan from "../assets/japan.jpeg";
import bali from "../assets/bali.jpeg";
import turkish from "../assets/turkish.jpg";
import scandinavia from "../assets/scandinavia.jpg";
import dubai from "../assets/dubai.avif";

import adventure from "../assets/adventure.jpg";

import spiti from "../assets/spiti.jpg";
import surf from "../assets/surf.webp";
import bhutan from "../assets/bhutan.jpg";

import weekend from "../assets/weekend.jpg";



const categories = [
  {
    id: 1,
    title: "Domestic Tours",
    icon: <FaMapMarkedAlt />,
    image: domestic,
    recommendations: [
      { title: "Kerala Backwaters", tag: "Popular", image: kerala },
      { title: "Sikkim Explorer", tag: "Nature", image: sikkim },
      { title: "Rann of Kutch", tag: "Cultural", image: rann },
      { title: "Meghalaya Trails", tag: "Trending", image: meghalaya },
      { title: "Varanasi Spiritual", tag: "Heritage", image: varanasi },
    ],
  },
  {
    id: 2,
    title: "International Tours",
    icon: <FaGlobeAsia />,
    image: international,
    recommendations: [
      { title: "Vietnam Discovery", tag: "Trending", image: vietnam },
      { title: "Japan Sakura Tour", tag: "Seasonal", image: japan },
      { title: "Bali Retreat", tag: "Relax", image: bali },
      { title: "Turkey Delight", tag: "Cultural", image: turkish },
      { title: "Scandinavia Lights", tag: "Premium", image: scandinavia },
      { title: "Dubai Luxury", tag: "Best Seller", image: dubai },
    ],
  },
  {
    id: 3,
    title: "Adventure Tours",
    icon: <FaHiking />,
    image: adventure,
    recommendations: [
      
      { title: "Spiti Valley", tag: "Extreme", image: spiti },
      { title: "Bali Surf Camp", tag: "Adventure", image: surf },
      { title: "Bhutan Hike", tag: "Nature", image: bhutan },
    ],
  },
  {
    id: 4,
    title: "Weekend Getaways",
    icon: <FaUmbrellaBeach />,
    image: weekend,
    
  },
];


const TourCategories = () => {
  const [recommended, setRecommended] = useState(categories[0].recommendations);

  return (
    <section className="tour-categories">
      <h2 className="section-title">Explore Tours by Category</h2>

      {/* CATEGORY GRID */}
      <div className="category-grid">
        {categories.map((cat) => (
          <motion.div
            key={cat.id}
            className="category-card"
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onClick={() => setRecommended(cat.recommendations)}
          >
            <div
              className="category-image"
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className="category-overlay">
                <div className="category-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
                <span className="explore-text">Explore →</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* RECOMMENDED GRID */}
      <h3 className="recommend-title">Recommended for You</h3>

      <div className="recommend-grid">
        {recommended.map((item, index) => (
          <motion.div
            className="recommend-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
          >
            <span className="recommend-tag">{item.tag}</span>
            <div
              className="recommend-image"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <h4>{item.title}</h4>
            <button className="recommend-btn">View Tour</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TourCategories;
