import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductModal({ product, onClose }) {
  const { addItem } = useCart()
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || null)
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)

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

  const gallery = product.gallery?.length ? product.gallery : [product.img]

  const handleAdd = () => {
    addItem(product, { size: selectedSize, color: selectedColor, quantity: 1 })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const sizes = product.sizes || []
  const colors = product.colors || []

  return (
    <div className="buy-modal-overlay" onClick={onClose}>
      <div className="buy-modal pm-modal" onClick={(e) => e.stopPropagation()}>
        <button className="buy-modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>

        <div className="pm-body">
          <div className="pm-media">
            <img src={gallery[activeImg]} alt={product.title} className="pm-main-img" />
            {gallery.length > 1 && (
              <div className="pm-thumbs">
                {gallery.map((g, i) => (
                  <button
                    key={i}
                    className={`pm-thumb ${i === activeImg ? 'active' : ''}`}
                    onClick={() => setActiveImg(i)}
                  >
                    <img src={g} alt={`${product.title} ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="pm-content">
            <div className="pc-top">
              {product.category && <span className="product-cat">{product.category}</span>}
              {product.badge && <span className="hot-label">{product.badge}</span>}
            </div>

            <h1>{product.title}</h1>

            <div className="dc-rating">
              <span className="stars">
                {'★'.repeat(Math.round(product.rating || 0))}
                {'☆'.repeat(5 - Math.round(product.rating || 0))}
              </span>
              <span>{product.rating} · {product.reviews} reviews</span>
            </div>

            <div className="dc-price">
              <span className="detail-price">${product.price}</span>
              {product.oldPrice && <span className="price-old">${product.oldPrice}</span>}
            </div>

            <p className="description">{product.description}</p>

            {sizes.length > 0 && (
              <div className="option-group">
                <label>Size</label>
                <div className="chip-row">
                  {sizes.map((s) => (
                    <button
                      key={s}
                      className={`chip ${selectedSize === s ? 'active' : ''}`}
                      onClick={() => setSelectedSize(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {colors.length > 0 && (
              <div className="option-group">
                <label>Color</label>
                <div className="chip-row">
                  {colors.map((c) => (
                    <button
                      key={c}
                      className={`swatch ${selectedColor === c ? 'active' : ''}`}
                      style={{ background: c }}
                      onClick={() => setSelectedColor(c)}
                      aria-label={`Color ${c}`}
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="detail-actions">
              <button
                type="button"
                className={`btn btn-dark buy-lg ${added ? 'btn-added' : ''}`}
                onClick={handleAdd}
              >
                {added ? '✓ Added to Cart' : 'Add to Cart'}
              </button>
              <Link to={`/checkout/${product.id}`} className="btn buy-lg" onClick={onClose}>
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal