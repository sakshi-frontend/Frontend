import React from "react";
import { motion } from "framer-motion";
import "./FeaturedBlogs.css";

const featuredBlogs = [
  {
    id: 1,
    title: "Complete Rajasthan Travel Guide",
    category: "Destination Guide",
    time: "6 min read",
    image: "/images/featured1.webp",
  },
  {
    id: 2,
    title: "Char Dham Yatra: Planning & Safety Tips",
    category: "Pilgrimage",
    time: "5 min read",
    image: "/images/featured2.jpg",
  },
  {
    id: 3,
    title: "How to Travel Smart on a Budget in India",
    category: "Travel Tips",
    time: "4 min read",
    image: "/images/featured3.webp",
  },
];

const FeaturedBlogs = () => {
  return (
    <section className="featured-blogs">
      <motion.div
        className="featured-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2>Editor’s Picks & Most Helpful Guides</h2>
        <p>
          Hand-picked travel articles curated by our experts to help you
          plan better, safer, and smarter journeys.
        </p>
      </motion.div>

      <div className="featured-grid">
        {featuredBlogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="featured-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="featured-image">
              <img
                src={blog.image}
                alt={blog.title}
                loading="lazy"
                decoding="async"
              />
              <span className="category-tag">{blog.category}</span>
            </div>

            <div className="featured-content">
              <span className="read-time">{blog.time}</span>
              <h3>{blog.title}</h3>

              <button className="read-btn">
                Read Full Guide →
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBlogs;
