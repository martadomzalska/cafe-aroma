import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Cafe Aroma</Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/menu" onClick={() => setIsMenuOpen(false)}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>
            Galerie
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            Über uns
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
