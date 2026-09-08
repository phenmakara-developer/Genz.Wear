
import { useState } from "react";
import ProductCard from "../components/CourseCard";
import ProductModal from "../components/ProductModal";
import courses from "../data/Courses";

function CoursePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedId, setSelectedId] = useState(null);

  const categories = ["All", "Tees", "Shirts", "Jeans", "Bottoms", "Outerwear", "Sweaters", "Footwear"];

  const filteredCourses = activeCategory === "All"
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  const selectedCourse = courses.find((c) => c.id === selectedId);

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
              onSelect={setSelectedId}
              featured={course.id === 11}
            />
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="no-results">
            <p>No products found in this category.</p>
          </div>
        )}

      </div>

      {selectedCourse && (
        <ProductModal key={selectedCourse.id} product={selectedCourse} onClose={() => setSelectedId(null)} />
      )}
    </section>
  );
}

export default CoursePage;
