import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart()
  const navigate = useNavigate()

  const handleCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className="checkout-page">
      <div className="checkout-wrap" data-aos="fade-up">
        <nav className="crumbs">
          <Link to="/">Home</Link> <span>/</span>
          <Link to="/course">Shop</Link> <span>/</span>
          <span>Cart</span>
        </nav>

        <div className="panel" style={{ marginBottom: 20 }}>
          <h2>Shopping Cart ({items.length} {items.length === 1 ? 'item' : 'items'})</h2>
        </div>

        {items.length === 0 ? (
          <div className="panel" style={{ textAlign: 'center', padding: '60px 24px' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🛒</div>
            <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Your cart is empty</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>Browse our shop and add some fresh fits.</p>
            <Link to="/course" className="btn">Browse Shop</Link>
          </div>
        ) : (
          <>
            <div className="panel">
              <div className="cart-items-list">
                {items.map((item) => (
                  <div key={item.key} className="cart-item">
                    <img src={item.image} alt={item.title} className="cart-item-img" />
                    <div className="cart-item-info">
                      <h4>{item.title}</h4>
                      <div className="cart-item-meta">
                        {item.size && <span>Size: {item.size}</span>}
                        {item.color && (
                          <span className="cart-color-dot" style={{ background: item.color }} />
                        )}
                      </div>
                      <span className="price-now" style={{ fontSize: 16 }}>${item.price}</span>
                    </div>
                    <div className="cart-item-actions">
                      <div className="qty-controls">
                        <button
                          onClick={() => updateQuantity(item.key, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.key, item.quantity + 1)}>+</button>
                      </div>
                      <span className="cart-item-subtotal">${item.price * item.quantity}</span>
                      <button className="cart-remove-btn" onClick={() => removeItem(item.key)}>✕</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="cart-summary-panel panel">
              <div className="cart-summary-row">
                <span>Subtotal</span>
                <strong>${subtotal}</strong>
              </div>
              <div className="cart-summary-row">
                <span>Shipping</span>
                <strong>Calculated at checkout</strong>
              </div>
              <div className="cart-summary-total">
                <span>Total</span>
                <strong>${subtotal}</strong>
              </div>
              <button className="btn btn-block" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
              <div style={{ textAlign: 'center', marginTop: 12 }}>
                <Link to="/course" style={{ fontSize: 14, color: 'var(--text-muted)' }}>Continue Shopping</Link>
              </div>
              <button className="btn btn-outline btn-block" style={{ marginTop: 8 }} onClick={clearCart}>
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
