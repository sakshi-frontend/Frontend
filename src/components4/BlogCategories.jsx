import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./BlogCategories.css";

const categories = [
  {
    id: "destination",
    title: "Destination Guides",
    image: "/images/destination.jpeg",
    points: [
      "State-wise & country-wise travel guides",
      "Best time to visit destinations",
      "Budget vs luxury travel planning",
    ],
  },
  {
    id: "tips",
    title: "Travel Tips & Hacks",
    image: "/images/tips.webp",
    points: [
      "Smart packing checklists",
      "Visa & documentation guidance",
      "Proven budget saving strategies",
    ],
  },
  {
    id: "seasonal",
    title: "Seasonal & Festive Travel",
    image: "/images/seasonal.jpeg",
    points: [
      "Navratri, Diwali & Christmas trips",
      "Summer & monsoon travel ideas",
      "Festival-based itineraries",
    ],
  },
  {
    id: "pilgrimage",
    title: "Pilgrimage & Spiritual Travel",
    image: "/images/pilgrimage.jpg",
    points: [
      "Char Dham & Jyotirlinga tours",
      "South India temple circuits",
      "Senior-friendly itineraries",
    ],
  },
  {
    id: "food-culture",
    title: "Food & Culture Travel",
    image: "/images/food-culture.png",
    points: [
      "Local cuisines & street food trails",
      "Cultural festivals & traditions",
      "Heritage walks & experiences",
    ],
  },
  {
    id: "adventure",
    title: "Adventure & Nature Travel",
    image: "/images/adventure.jpg",
    points: [
      "Trekking & hiking destinations",
      "Wildlife & nature escapes",
      "Adventure activities & safety tips",
    ],
  },
  {
    id: "international",
    title: "International Travel Guides",
    image: "/images/international.jpg",
    points: [
      "Country-wise international guides",
      "Visa & entry requirements",
      "Best global travel seasons",
    ],
  },
  {
    id: "expertise",
    title: "Company Expertise",
    image: "/images/expertise.jpg",
    points: [
      "How we design tour packages",
      "Behind-the-scenes journey planning",
      "Why travelers trust our services",
    ],
    highlight: true,
  },
];

const BlogCategories = () => {
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    categories.forEach((cat) => {
      const section = document.getElementById(cat.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="blog-categories">
      <motion.div
        className="categories-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Explore Our Blog Categories</h2>
        <p>
          Well-structured travel content designed to guide, inspire,
          and build trust before your journey begins.
        </p>
      </motion.div>

      <div className="category-grid">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.id}
            id={cat.id}
            className={`category-card 
              ${cat.highlight ? "highlight" : ""} 
              ${activeCategory === cat.id ? "active" : ""}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="category-image">
              <img
                src={cat.image}
                alt={cat.title}
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="category-content">
              <h3>{cat.title}</h3>
              <ul>
                {cat.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogCategories;
