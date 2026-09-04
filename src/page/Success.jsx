

import React from 'react'
import { Link, useParams } from 'react-router-dom'

function Success() {
  const { orderId } = useParams()
  const telegramUsername = 'my_shop_order_genz_wear_bot'
  const telegramUrl = `https://t.me/${telegramUsername}`

  return (
    <div className="success-page" data-aos="zoom-in">
      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Order Submitted Successfully!</h1>

        <p className="success-id">
          Order ID: <strong>{orderId || 'ORD-XXXX'}</strong>
        </p>

        <p className="success-message">
          Thank you for your order.
        </p>

        <p className="success-description">
          Your payment is currently being verified.
          We will contact you after verification.
        </p>

        <div className="success-info">
          <div>
            <span>Status</span>
            <strong>Pending Verification</strong>
          </div>

          <div>
            <span>Order</span>
            <strong>{orderId || 'Submitted'}</strong>
          </div>
        </div>

        <button className="btn btn-block" onClick={() => window.open(telegramUrl, '_blank')}>
          Contact us on Telegram
        </button>

        <Link to="/" className="btn btn-dark btn-block success-home">
          Back to Home
        </Link>

      </div>
    </div>
  )
}

export default Success
