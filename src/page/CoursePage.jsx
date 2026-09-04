
import React, { useState } from "react";
import ProductCard from "../components/CourseCard";
import courses from "../data/Courses";

function CoursePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Tees", "Shirts", "Jeans", "Bottoms", "Outerwear", "Sweaters", "Footwear"];

  const filteredCourses = activeCategory === "All"
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  return (
    <section className="shop-page">
      <div className="shop-container">

        <div className="section-heading" data-aos="fade-down">
          <span>Shop the store</span>
          <h1>All Drops</h1>
          <p>Fresh streetwear picks — grab them before they sell out.</p>
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
              title={course.title}
              price={course.price}
              image={course.img}
              oldPrice={course.oldPrice}
              category={course.category}
              description={course.description}
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

      </div>
    </section>
  );
}

export default CoursePage;
