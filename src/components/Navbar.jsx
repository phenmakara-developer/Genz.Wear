import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useCart } from "../context/CartContext"
import logoIcon from "../assets/logo.png"

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems } = useCart()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="nav-container">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src={logoIcon} alt="Genz Wear" style={{ height: '45px', width: '45px', objectFit: 'contain' }} />
          <span style={{ fontSize: '1.5rem', fontWeight: '800', color: '#111', letterSpacing: '-0.5px' }}>
            Genz<span style={{ color: 'var(--accent)' }}>.Wear</span>
          </span>
        </Link>

        <ul className={`nav-menu ${mobileOpen ? 'nav-menu-open' : ''}`}>
          <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/course" className={location.pathname.startsWith('/course') ? 'active' : ''}>Shop</Link></li>
          <li><Link to="/about" className={location.pathname.startsWith('/about') ? 'active' : ''}>About</Link></li>
          <li><Link to="/contact" className={location.pathname.startsWith('/contact') ? 'active' : ''}>Contact</Link></li>
        </ul>

        <div className="nav-right">
          <Link to="/cart" className="nav-cart-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>

          <button className="nav-mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
