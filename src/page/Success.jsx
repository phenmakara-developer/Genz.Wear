

import { Link, useParams, useLocation } from 'react-router-dom'

function Success() {
  const { orderId } = useParams()
  const location = useLocation()
  const stateOrderId = location.state?.orderId
  const orderIdShown = orderId || stateOrderId || 'ORD-XXXX'
  const notifyFailed = location.state?.notifyFailed
  const telegramUsername = 'my_shopping_order_genz_wear_bot'
  const telegramUrl = `https://t.me/${telegramUsername}`

  return (
    <div className="success-page" data-aos="zoom-in">
      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Order Submitted Successfully!</h1>

        <p className="success-id">
          Order ID: <strong>{orderIdShown}</strong>
        </p>

        <p className="success-message">
          Thank you for your order.
        </p>

        <p className="success-description">
          Your payment is currently being verified.
          We will contact you after verification.
        </p>

        {notifyFailed && (
          <div className="success-info" style={{ borderColor: '#dc2626' }}>
            <p style={{ color: '#dc2626', margin: 0, fontSize: 14 }}>
              We could not auto-notify our team of your order ({orderIdShown}).
              Please message us on Telegram right away so we do not miss it.
            </p>
          </div>
        )}

        <div className="success-info">
          <div>
            <span>Status</span>
            <strong>Pending Verification</strong>
          </div>

          <div>
            <span>Order</span>
            <strong>{orderIdShown}</strong>
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
