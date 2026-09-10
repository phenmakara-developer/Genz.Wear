import { useState } from 'react'
import { sendFeedback } from '../lib/contact'

const CONTACT_EMAIL = 'phenmakara247@gmail.com'

function ContactPage() {
  const [contact, setContact] = useState({ name: '', email: '', message: '' })
  const [feedback, setFeedback] = useState({ name: '', email: '', rating: 0, message: '' })
  const [status, setStatus] = useState(null)
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
    setStatus(null)
  }

  const handleRating = (n) => {
    setFeedback({ ...feedback, rating: n })
    setStatus(null)
  }

  const handleFbChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value })
    setStatus(null)
  }

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setStatus(null)
    try {
      const res = await sendFeedback({ type: 'contact', ...contact })
      setStatus({
        ok: true,
        msg: res.channel === 'email'
          ? 'Message sent — we will get back to you soon!'
          : 'Message delivered to our Telegram for now — we will get back to you soon!',
      })
      setContact({ name: '', email: '', message: '' })
    } catch {
      setStatus({ ok: false, msg: 'Could not send the message. Please email us directly at the link below.' })
    } finally {
      setSending(false)
    }
  }

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault()
    if (!feedback.rating) {
      setStatus({ ok: false, msg: 'Please pick a star rating first.' })
      return
    }
    setSending(true)
    setStatus(null)
    try {
      const res = await sendFeedback({ type: 'feedback', ...feedback })
      setStatus({
        ok: true,
        msg: res.channel === 'email'
          ? `Thanks for rating us ${feedback.rating}/5 — your feedback was emailed to us!`
          : `Thanks for rating us ${feedback.rating}/5 — your feedback was delivered to our Telegram!`,
      })
      setFeedback({ name: '', email: '', rating: 0, message: '' })
    } catch {
      setStatus({ ok: false, msg: 'Could not send your feedback. Please email us directly at the link below.' })
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="auth-page">
      <div className="auth-card" data-aos="fade-up">

        <div className="auth-header">
          <span className="detail-label">Get in touch</span>
          <h1>Contact Us</h1>
          <p>Questions about an order or a drop? Send us a message.</p>
        </div>

        {status && (
          <div className={`alert ${status.ok ? 'alert-success' : 'alert-danger'}`}>
            {status.msg}
          </div>
        )}

        <form onSubmit={handleContactSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={contact.name}
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
              value={contact.email}
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
              value={contact.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-block" disabled={sending}>
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="contact-divider">
          <span>Rate our project</span>
        </div>

        <form onSubmit={handleFeedbackSubmit}>
          <div className="form-group">
            <label>Your rating</label>
            <div className="rate-stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  className={`star${n <= feedback.rating ? ' on' : ''}`}
                  onClick={() => handleRating(n)}
                  aria-label={`${n} star`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Anything else? (optional)</label>
            <textarea
              name="message"
              rows="3"
              placeholder="Feedback, suggestions, or just saying hi..."
              value={feedback.message}
              onChange={handleFbChange}
            />
          </div>

          <div className="form-group">
            <label>Name (optional)</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={feedback.name}
              onChange={handleFbChange}
            />
          </div>

          <button type="submit" className="btn btn-block" disabled={sending}>
            {sending ? 'Sending...' : 'Send Feedback'}
          </button>
        </form>

        <div className="contact-direct">
          <span>or email us directly</span>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>

      </div>
    </section>
  )
}

export default ContactPage