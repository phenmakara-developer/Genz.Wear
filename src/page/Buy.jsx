
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Buy() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault()
    }

    const newErrors = {}

    if (!name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!phone) {
      newErrors.phone = 'Phone is required'
    } else if (!/^[0-9+ ]+$/.test(phone)) {
      newErrors.phone = 'Phone must be a number only'
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Enter a valid email'
    }

    if (!address.trim()) {
      newErrors.address = 'Address is required'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setLoading(true)
    setError('')
    setErrors({})

    try {
      navigate('/success')
    } catch (err) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-card" data-aos="fade-up">

        <div className="auth-header">
          <h1>Checkout</h1>
          <p>Fill in your info to complete the order.</p>
        </div>

        {error && (
          <div className="alert alert-danger">
            <strong>Order Failed</strong>
            <p>{error}</p>
            <button
              type="button"
              className="btn btn-dark btn-block"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Retrying...' : 'Try Again'}
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className={errors.name ? 'input-error' : ''}
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setErrors({ ...errors, name: '' })
              }}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>Phone</label>
            <input
              className={errors.phone ? 'input-error' : ''}
              type="text"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value)
                setErrors({ ...errors, phone: '' })
              }}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              className={errors.email ? 'input-error' : ''}
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setErrors({ ...errors, email: '' })
              }}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              className={errors.address ? 'input-error' : ''}
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value)
                setErrors({ ...errors, address: '' })
              }}
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>

          <button type="submit" className="btn btn-block" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit Order'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Buy
