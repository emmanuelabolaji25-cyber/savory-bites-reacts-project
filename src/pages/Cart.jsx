import { Link } from 'react-router-dom'
import { useCart } from '../components/CartContext'

function Cart() {
  const { items, addItem, removeItem, totalPrice, totalCount } = useCart()
  const entries = Object.entries(items)
  const deliveryFee = totalCount > 0 ? 800 : 0
  const grandTotal = totalPrice + deliveryFee

  return (
    <section className="page cart-page">
      <div className="page-heading">
        <h1>Your Cart</h1>
        <p>Review your order before checking out.</p>
      </div>

      {entries.length === 0 ? (
        <div className="empty-state">
          <p>Your cart is empty.</p>
          <Link to="/menu" className="btn btn-primary" style={{ marginTop: '1rem' }}>
            Browse the Menu
          </Link>
        </div>
      ) : (
        <div className="cart-grid">
          <div className="cart-list">
            {entries.map(([name, item]) => (
              <div className="cart-row" key={name}>
                <img src={item.image} alt={name} />
                <div className="cart-row-info">
                  <h4>{name}</h4>
                  <span>₦{item.price.toLocaleString()} each</span>
                </div>
                <div className="qty-control">
                  <button onClick={() => removeItem(name)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addItem(name, item.price, item.image)}>+</button>
                </div>
                <div className="cart-row-total">
                  ₦{(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal ({totalCount} items)</span>
              <span>₦{totalPrice.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Delivery fee</span>
              <span>₦{deliveryFee.toLocaleString()}</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₦{grandTotal.toLocaleString()}</span>
            </div>
            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Cart
