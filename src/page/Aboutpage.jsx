
import React from 'react'


function Aboutpage() {
  return (
    <section className="about-page">
      <div className="about-card" data-aos="fade-up">

        <div className="about-photo">
          <img
            src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800&q=80"
            alt="Streetwear fashion"
            className="owner-photo"
          />
        </div>

        <div className="about-content">
          <span className="detail-label">About us</span>
          <h1>Built for the culture.</h1>

          <p className="about-text">
            Genz-wear started from a bedroom, one box of tees, and way too much
            belief. What began as a small drop is now a movement — clean pieces,
            fair prices, no gatekeeping.
          </p>

          <p className="about-text">
            Every fit we put out is designed with you in mind. Wear it loud,
            wear it comfortable, and most importantly — wear it like it's yours.
          </p>

          <div className="about-stats">
            <div>
              <strong>5K+</strong>
              <span>Orders Shipped</span>
            </div>
            <div>
              <strong>50+</strong>
              <span>Drops Released</span>
            </div>
            <div>
              <strong>4.9★</strong>
              <span>Avg. Rating</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Aboutpage
