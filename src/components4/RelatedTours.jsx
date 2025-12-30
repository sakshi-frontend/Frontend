import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./RelatedTours.css";

/* IMPORT IMAGES FROM src/assets */
import rajasthanImg from "../assets/rajasthan.jpg";
import keralaImg from "../assets/kerala.jpeg";
import featuredImg from "../assets/featured2.jpg";

const relatedTours = [
  {
    id: 1,
    title: "Rajasthan Royal Tour",
    link: "/tours/rajasthan-royal",
    image: rajasthanImg,
  },
  {
    id: 2,
    title: "Kerala Backwaters Experience",
    link: "/tours/kerala-backwaters",
    image: keralaImg,
  },
  {
    id: 3,
    title: "Char Dham Pilgrimage Package",
    link: "/tours/char-dham",
    image: featuredImg,
  },
];

const RelatedTours = () => {
  return (
    <section className="related-tours">
      <motion.h3
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Related Tour Packages
      </motion.h3>

      <div className="tours-grid">
        {relatedTours.map((tour, index) => (
          <motion.div
            key={tour.id}
            className="tour-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.03 }}
          >
            <Link to={tour.link} className="tour-link">
              <div className="tour-image">
                <img
                  src={tour.image}
                  alt={tour.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="tour-info">
                <span className="tour-title">{tour.title}</span>
                <button className="book-btn">Plan this trip →</button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="expert-cta"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <button className="talk-btn">Talk to a Travel Expert</button>
      </motion.div>
    </section>
  );
};

export default RelatedTours;
