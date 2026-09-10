import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import qrCode from '../assets/qr_payment.jpg'

function BuyCard({ product, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!product) return null

  return (
    <div className="buy-modal-overlay" onClick={onClose}>
      <div className="buy-modal" onClick={(e) => e.stopPropagation()}>
        <button className="buy-modal-close" onClick={onClose}>
          &times;
        </button>

        <div className="buy-modal-body">
          <div className="buy-modal-left">
            <img src={product.img} alt={product.title} className="buy-modal-img" />
            <div className="buy-modal-info">
              <span className="product-cat">{product.category}</span>
              <h3>{product.title}</h3>
              <div className="buy-modal-price">
                <span className="price-now">${product.price}</span>
                {product.oldPrice && (
                  <span className="price-old">${product.oldPrice}</span>
                )}
              </div>
            </div>
          </div>

          <div className="buy-modal-right">
            <div className="buy-modal-qr-section">
              <p className="buy-modal-qr-label">Scan to Pay</p>
              <div className="buy-modal-qr-box">
                <img src={qrCode} alt="Payment QR Code" className="buy-modal-qr-img" />
              </div>
              <div className="buy-modal-amount">
                <span>Total Amount</span>
                <strong>${product.price}</strong>
              </div>
            </div>

            <Link
              to={`/checkout/${product.id}`}
              className="btn btn-block buy-modal-btn"
              onClick={onClose}
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyCard
