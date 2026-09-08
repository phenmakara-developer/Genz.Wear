/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const CartContext = createContext(null)
const CART_KEY = 'genz_cart'

function getStoredCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => getStoredCart())

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(items))
  }, [items])

  const addItem = useCallback((product, { size, color, quantity = 1 } = {}) => {
    setItems((prev) => {
      const key = `${product.id}-${size}-${color}`
      const existing = prev.find((i) => i.key === key)
      if (existing) {
        return prev.map((i) =>
          i.key === key ? { ...i, quantity: i.quantity + quantity } : i
        )
      }
      return [
        ...prev,
        {
          key,
          id: product.id,
          title: product.title,
          image: product.img,
          price: product.price,
          category: product.category,
          size,
          color,
          quantity,
        },
      ]
    })
  }, [])

  const removeItem = useCallback((key) => {
    setItems((prev) => prev.filter((i) => i.key !== key))
  }, [])

  const updateQuantity = useCallback((key, quantity) => {
    if (quantity < 1) return
    setItems((prev) =>
      prev.map((i) => (i.key === key ? { ...i, quantity } : i))
    )
  }, [])

  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
