import React, { useState } from 'react'
import ProductCard from '../components/CourseCard'
import Courses from '../data/Courses'
import heroImg from '../assets/hero-new.png'

function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Tees", "Shirts", "Jeans", "Bottoms", "Outerwear", "Sweaters", "Footwear"]

  const filteredCourses = activeCategory === "All"
    ? Courses
    : Courses.filter((c) => c.category === activeCategory)

  return (
    <div>
      <section className="hero" data-aos="fade-up">
        <div className="hero-text">
          <span className="hero-badge">New Drop — Season 04</span>
          <h1>
            Dress. Flex. <span>Own the fit.</span>
          </h1>
          <p>
            Clean, quality streetwear dropped fresh. Designed for the culture.
          </p>
          <a href="#drops" className="btn btn-dark">
            Shop Now
          </a>
        </div>
        <div className="hero-image" data-aos="zoom-in">
          <img
            src={heroImg}
            alt="Streetwear fashion"
          />
        </div>
      </section>

      <section className="page" id="drops">
        <div className="section-heading" data-aos="fade-down">
          <span>Shop the store</span>
          <h2>New Drops</h2>
          <p>Fresh pieces, limited quantities. Don't sleep.</p>
        </div>

        <div className="filter-bar" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredCourses.map((course) => (
            <ProductCard
              key={course.id}
              id={course.id}
              image={course.img}
              title={course.title}
              price={course.price}
              description={course.description}
              category={course.category}
              oldPrice={course.oldPrice}
              rating={course.rating}
              badge={course.badge}
              sizes={course.sizes}
              colors={course.colors}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="no-results">
            <p>No products found in this category.</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default HomePage
