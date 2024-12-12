import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Płynne przewijanie
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Cafe Aroma. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/" onClick={scrollToTop}>
            Home
          </Link>
          <Link to="/menu" onClick={scrollToTop}>
            Menu
          </Link>
          <Link to="/gallery" onClick={scrollToTop}>
            Galerie
          </Link>
          <Link to="/about" onClick={scrollToTop}>
            Über uns
          </Link>
          <Link to="/contact" onClick={scrollToTop}>
            Kontakt
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
