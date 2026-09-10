import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

function ProductCard({
  id,
  title,
  price,
  oldPrice,
  image,
  description,
  category,
  rating,
  badge,
  sizes = [],
  colors = [],
  onSelect,
  featured,
}) {
  const { addItem } = useCart()
  const navigate = useNavigate()
  const [added, setAdded] = useState(false)

  const handleOpen = () => {
    if (onSelect) {
      onSelect(id)
      return
    }
    navigate(`/product/${id}`)
  }

  const handleAdd = (e) => {
    e.stopPropagation()
    addItem({ id, title, price, img: image, category }, { size: sizes[0], color: colors[0], quantity: 1 })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleView = (e) => {
    e.stopPropagation()
  }

  return (
    <div
      data-aos="fade-up"
      className={`product-card ${featured ? 'featured' : ''}`}
      style={{ cursor: 'pointer' }}
      onClick={handleOpen}
    >
      <div className="product-media">
        <img src={image} alt={title} loading="lazy" />

        {(badge || oldPrice) && (
          <span className={`product-badge ${oldPrice ? 'badge-sale' : 'badge-hot'}`}>
            {featured ? '★ Featured Drop' : badge || 'SALE'}
          </span>
        )}
      </div>

      <div className="product-body">
        <div className="product-top">
          <span className="product-cat">{category}</span>
          <span className="product-rating">★ {rating}</span>
        </div>

        {featured && <span className="detail-label">This week&apos;s pick</span>}

        <h3 className="product-title">
          {title}
        </h3>

        <p className="product-desc">{description}</p>

        <div className="product-foot">
          <div className="price">
            <span className="price-now">${price}</span>
            {oldPrice && <span className="price-old">${oldPrice}</span>}
          </div>
          <div className="product-foot-actions">
            <button
              type="button"
              className={`btn btn-sm ${added ? 'btn-added' : ''}`}
              onClick={handleAdd}
            >
              {added ? '✓ Added' : 'Add to Cart'}
            </button>
            <Link to={`/product/${id}`} className="btn btn-sm btn-outline" onClick={handleView}>
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard