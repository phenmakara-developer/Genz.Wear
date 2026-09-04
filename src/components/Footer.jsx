
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setJoined(true)
      setEmail('')
    }
  }

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col footer-about">
          <div className="footer-brand">genz<span>·wear</span></div>
          <p>
            Clean streetwear dropped fresh for the culture. Designed with care,
            priced fair, shipped worldwide.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="TikTok">TT</a>
            <a href="#" aria-label="X">X</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/course">All Drops</Link></li>
            <li><Link to="/course">Sneakers</Link></li>
            <li><Link to="/course">Tees</Link></li>
            <li><Link to="/course">Outerwear</Link></li>
            <li><Link to="/course">Accessories</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/">Shipping</Link></li>
            <li><Link to="/">Returns</Link></li>
            <li><Link to="/">Size Guide</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-news">
          <h4>Stay in the loop</h4>
          <p>Join the drop list for early access and restock alerts.</p>
          {joined ? (
            <div className="news-ok">✓ You're in! Watch your inbox.</div>
          ) : (
            <form className="news-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-sm">Join</button>
            </form>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p>© {new Date().getFullYear()} genz·wear. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
            <span className="payments">VISA · MC · AMEX · APPLE PAY</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
