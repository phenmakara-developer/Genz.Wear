
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Courses from '../data/Courses'
import ProductCard from '../components/CourseCard'

function ProductDetail() {
  const { id } = useParams()
  const product = Courses.find((item) => item.id === Number(id))

  const [selectedSize, setSelectedSize] = useState(
    product && product.sizes ? product.sizes[0] : null
  )
  const [selectedColor, setSelectedColor] = useState(
    product && product.colors ? product.colors[0] : null
  )
  const [activeImg, setActiveImg] = useState(0)

  if (!product) {
    return <h1>Product Not Found</h1>
  }

  const gallery = product.gallery?.length ? product.gallery : [product.img]

  const sameCat = Courses.filter(
    (c) => c.id !== product.id && c.category === product.category
  )
  const others = Courses.filter(
    (c) => c.id !== product.id && c.category !== product.category
  )
  const related = [...sameCat, ...others]

  const sizes = product.sizes || []
  const colors = product.colors || []

  return (
    <div className="detail-page" data-aos="fade-up">
      <div className="detail-wrap">

        <nav className="crumbs">
          <Link to="/">Home</Link> <span>/</span>
          <Link to="/course">Shop</Link> <span>/</span>
          <span>{product.title}</span>
        </nav>

        <div className="detail-card">
          <div className="detail-gallery">
            <img src={gallery[activeImg]} alt={product.title} className="detail-main-img" />
            {gallery.length > 1 && (
              <div className="detail-thumbs">
                {gallery.map((g, i) => (
                  <button
                    key={i}
                    className={`thumb ${i === activeImg ? 'active' : ''}`}
                    onClick={() => setActiveImg(i)}
                  >
                    <img src={g} alt={`${product.title} ${i + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="detail-content">
            <div className="pc-top">
              {product.category && (
                <span className="product-cat">{product.category}</span>
              )}
              {product.badge && (
                <span className="hot-label">{product.badge}</span>
              )}
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
              {product.oldPrice && (
                <span className="price-old">${product.oldPrice}</span>
              )}
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
              <Link to={`/checkout/${product.id}`} className="btn buy-lg">
                Buy Now
              </Link>
            </div>

            {product.specs?.length > 0 && (
              <div className="specs">
                <h3>Details & Care</h3>
                <ul>
                  {product.specs.map((spec) => (
                    <li key={spec.label}>
                      <span>{spec.label}</span>
                      <strong>{spec.value}</strong>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {related.length > 0 && (
          <div className="related">
            <div className="section-heading">
              <span>{sameCat.length ? 'Pairs well with' : 'More drops'}</span>
              <h2>{sameCat.length ? `More ${product.category}` : 'You may also like'}</h2>
            </div>
            <div className="product-grid">
              {related.map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  image={p.img}
                  title={p.title}
                  price={p.price}
                  oldPrice={p.oldPrice}
                  category={p.category}
                  description={p.description}
                  rating={p.rating}
                  badge={p.badge}
                  sizes={p.sizes}
                  colors={p.colors}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default ProductDetail
