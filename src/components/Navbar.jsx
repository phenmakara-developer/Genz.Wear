
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoIcon from "../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-container">

        <Link to="/" className="logo" style={{display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none'}}>
          <img src={logoIcon} alt="Genz Wear" style={{height: '45px', width: '45px', objectFit: 'contain'}} />
          <span style={{fontSize: '1.5rem', fontWeight: '800', color: '#111', letterSpacing: '-0.5px'}}>
            Genz<span style={{color: '#666'}}>.Wear</span>
          </span>
        </Link>

        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/course">Shop</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;

