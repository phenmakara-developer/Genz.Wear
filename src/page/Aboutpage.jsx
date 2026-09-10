import { Link } from 'react-router-dom'

const milestones = [
  { year: '2022', text: 'First drop — 50 tees hand-packed in a bedroom, sold out in a day.' },
  { year: '2023', text: '10,000 items shipped. Our first proper studio and packing space.' },
  { year: '2024', text: 'Collaborations with local artists and creators join the collection.' },
  { year: '2025', text: '5,000+ happy customers and a community that keeps growing worldwide.' },
]

const values = [
  {
    title: 'Quality fabrics',
    text: 'Heavyweight cotton and premium blends so every piece lasts way beyond the trend.',
  },
  {
    title: 'Fair pricing',
    text: 'No gatekeeping. Clean designs at honest prices — streetwear for everyone.',
  },
  {
    title: 'Limited drops',
    text: 'Small batches keep fits exclusive, keep quality high, and keep hype real.',
  },
  {
    title: 'Community first',
    text: 'We design with our people. Your feedback shapes the next drop.',
  },
  {
    title: 'Planet-friendly',
    text: 'Paper-based mailers and eco-conscious materials wherever we can.',
  },
  {
    title: 'Fast delivery',
    text: 'Express options so your fit lands fast — sometimes the very next day.',
  },
]

const steps = [
  {
    n: '01',
    title: 'Pick your fit',
    text: 'Browse the latest drop and choose your size and colour.',
  },
  {
    n: '02',
    title: 'Pay by QR',
    text: 'Scan the QR code, pay the amount, and upload your confirmation.',
  },
  {
    n: '03',
    title: 'It’s yours',
    text: 'We verify, pack, and ship. Sit back — the fit is on its way.',
  },
]

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
            wear it comfortable, and most importantly — wear it like it’s yours.
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

      <div className="about-section" data-aos="fade-up">
        <span className="detail-label">Our story</span>
        <h2>From a bedroom to your closet.</h2>
        <p className="about-text">
          What started as one box of printed tees and an Instagram account turned into a
          full streetwear label. No investors, no shortcuts — just relentless focus on
          quality, design, and the people wearing it.
        </p>
        <p className="about-text">
          Today we drop limited collections that balance classic fits with bold, modern
          graphics. Each piece is made in small batches, checked by hand, and shipped with
          care because we treat every order like our own.
        </p>
        <div className="about-timeline">
          {milestones.map((m) => (
            <div className="milestone" key={m.year}>
              <strong>{m.year}</strong>
              <p>{m.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section" data-aos="fade-up">
        <span className="detail-label">What we stand for</span>
        <h2>More than clothes.</h2>
        <div className="about-grid">
          {values.map((v) => (
            <div className="value-card" key={v.title}>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-section" data-aos="fade-up">
        <span className="detail-label">How it works</span>
        <h2>Three steps, zero hassle.</h2>
        <div className="about-steps">
          {steps.map((s) => (
            <div className="step" key={s.n}>
              <span className="step-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="about-cta" data-aos="fade-up">
        <h3>Ready to level up your fit?</h3>
        <p>Drop releases go fast — grab yours before it sells out.</p>
        <div className="about-cta-btns">
          <Link to="/course" className="btn btn-dark">Shop the latest drop</Link>
          <Link to="/contact" className="btn btn-outline">Talk to us</Link>
        </div>
      </div>

    </section>
  )
}

export default Aboutpage