import { Link } from 'react-router-dom'

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
  onSelect,
  featured,
}) {
  const handleClick = (e) => {
    if (onSelect) {
      e.preventDefault()
      onSelect(id)
    }
  }

  return (
    <Link
      to={`/product/${id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
      onClick={handleClick}
    >
      <div data-aos="fade-up" className={`product-card ${featured ? 'featured' : ''}`} style={{ cursor: 'pointer' }}>
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
            <span className="btn btn-sm">
              View
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard