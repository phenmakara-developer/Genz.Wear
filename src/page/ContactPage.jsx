
import React, { useState } from 'react'

function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section className="auth-page">
      <div className="auth-card" data-aos="fade-up">

        <div className="auth-header">
          <span className="detail-label">Get in touch</span>
          <h1>Contact Us</h1>
          <p>Questions about an order or a drop? Send us a message.</p>
        </div>

        {sent && (
          <div className="alert alert-success">
            Message sent — we'll get back to you soon!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-block">
            Send Message
          </button>
        </form>

      </div>
    </section>
  )
}

export default ContactPage
