import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  // items: { [name]: { quantity, price, image } }
  const [items, setItems] = useState({})

  function addItem(name, price, image) {
    setItems((prev) => {
      const existing = prev[name]
      return {
        ...prev,
        [name]: {
          quantity: (existing?.quantity || 0) + 1,
          price,
          image,
        },
      }
    })
  }

  function removeItem(name) {
    setItems((prev) => {
      const existing = prev[name]
      if (!existing) return prev
      const updated = { ...prev }
      if (existing.quantity <= 1) {
        delete updated[name]
      } else {
        updated[name] = { ...existing, quantity: existing.quantity - 1 }
      }
      return updated
    })
  }

  const totalCount = Object.values(items).reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = Object.values(items).reduce((sum, i) => sum + i.quantity * i.price, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, totalCount, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
