import { useState } from 'react'
import { useCart } from './CartContext'

function MenuItem({ name, description, price, image }) {
  const [favorite, setFavorite] = useState(false)
  const { items, addItem, removeItem } = useCart()
  const quantity = items[name]?.quantity || 0

  return (
    <article className="menu-item">
      <div className="menu-item-image-wrap">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="menu-item-body">
        <div className="menu-item-header">
          <h3>{name}</h3>
          <button
            className={`fav-btn ${favorite ? 'active' : ''}`}
            onClick={() => setFavorite((f) => !f)}
            aria-label="Toggle favorite"
          >
            {favorite ? '♥' : '♡'}
          </button>
        </div>
        <p className="menu-item-desc">{description}</p>
        <div className="menu-item-footer">
          <span className="price">₦{price.toLocaleString()}</span>
          <div className="qty-control">
            <button onClick={() => removeItem(name)} disabled={quantity === 0}>
              −
            </button>
            <span>{quantity}</span>
            <button onClick={() => addItem(name, price, image)}>+</button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default MenuItem
