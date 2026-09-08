import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoIcon from '../assets/logo.png'

function Footer() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setJoined(true)
    setEmail('')
  }

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-col footer-about">
          <div className="footer-brand">
            <img src={logoIcon} alt="Genz Wear" style={{ height: '44px', width: '44px', objectFit: 'contain', borderRadius: 10, marginBottom: 10 }} />
            <span>Genz<span style={{ color: 'var(--accent)' }}>.Wear</span></span>
          </div>
          <p>
            Clean streetwear dropped fresh for the culture. Designed with care,
            priced fair, shipped worldwide.
          </p>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok">TT</a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">X</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YT</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/course">All Drops</Link></li>
            <li><Link to="/course">Sneakers</Link></li>
            <li><Link to="/course">Tees &amp; Hoodies</Link></li>
            <li><Link to="/course">Outerwear</Link></li>
            <li><Link to="/cart">Your Cart</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-news">
          <h4>Stay in the loop</h4>
          <p>Join the drop list for early access and restock alerts.</p>
          {joined ? (
            <div className="news-ok">You're in! Watch your inbox.</div>
          ) : (
            <form className="news-form" onSubmit={handleSubscribe} autoComplete="off">
              <input
                type="email"
                name="email"
                autoComplete="off"
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
          <p>&copy; {new Date().getFullYear()} genz&middot;wear. All rights reserved.</p>
          <div className="footer-bottom-links">
            <span className="payments">VISA &middot; MC &middot; AMEX &middot; APPLE PAY</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
