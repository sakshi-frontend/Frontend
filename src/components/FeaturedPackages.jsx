import { useNavigate } from "react-router-dom";
import "./FeaturedPackages.css";

// ✅ Import images from src/assets
import dubaiImg from "../assets/dubai.avif";
import kashmirImg from "../assets/kashmir.jpeg";
import europeImg from "../assets/europe.jpg";
import thailandImg from "../assets/thailand.jpg";
import singaporeImg from "../assets/singapore.png";
import baliImg from "../assets/bali.jpeg";

const packages = [
  { title: "Dubai", duration: "5D / 4N", price: "₹45,999", image: dubaiImg, path: "/packages/dubai" },
  { title: "Kashmir", duration: "6D / 5N", price: "₹28,999", image: kashmirImg, path: "/packages/kashmir" },
  { title: "Europe", duration: "10D / 9N", price: "₹1,49,999", image: europeImg, path: "/packages/europe" },
  { title: "Thailand", duration: "5D / 4N", price: "₹39,999", image: thailandImg, path: "/packages/thailand" },
  { title: "Singapore", duration: "4D / 3N", price: "₹42,999", image: singaporeImg, path: "/packages/singapore" },
  { title: "Bali", duration: "6D / 5N", price: "₹55,999", image: baliImg, path: "/packages/bali" },
];

export default function FeaturedPackages() {
  const navigate = useNavigate();

  return (
    <section className="featured-packages">
      <div className="container">
        <h2 className="section-title">Featured / Best-Selling Packages</h2>
        <p className="section-subtitle">
          Our most popular tours chosen by thousands of happy travelers
        </p>

        <div className="packages-grid">
          {packages.map((item, index) => (
            <div className="package-card" key={index}>
              <div className="package-image">
                <img src={item.image} alt={item.title} />
                <span className="duration">{item.duration}</span>
              </div>

              <div className="package-content">
                <h3>{item.title}</h3>
                <p className="price">
                  Starting from <span>{item.price}</span>
                </p>

                <div className="actions">
                  <button onClick={() => navigate(item.path)} className="enquire-btn">
                    Enquire
                  </button>
                  <button onClick={() => navigate(item.path)} className="book-btn">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
