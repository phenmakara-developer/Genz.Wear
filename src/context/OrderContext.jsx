/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect, useCallback } from 'react'

const OrderContext = createContext(null)
const ORDERS_KEY = 'genz_orders'
const ORDERS_UPDATED_EVENT = 'orders:updated'

function getStoredOrders() {
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY)) || []
  } catch {
    return []
  }
}

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(() => getStoredOrders())

  useEffect(() => {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders))
  }, [orders])

  const syncFromStorage = useCallback(() => {
    setOrders(getStoredOrders())
  }, [])

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === ORDERS_KEY || e.key === null) {
        syncFromStorage()
      }
    }
    const handleOrdersUpdated = () => syncFromStorage()
    const handleFocus = () => syncFromStorage()
    window.addEventListener('storage', handleStorage)
    window.addEventListener(ORDERS_UPDATED_EVENT, handleOrdersUpdated)
    window.addEventListener('focus', handleFocus)
    return () => {
      window.removeEventListener('storage', handleStorage)
      window.removeEventListener(ORDERS_UPDATED_EVENT, handleOrdersUpdated)
      window.removeEventListener('focus', handleFocus)
    }
  }, [syncFromStorage])

  const placeOrder = useCallback((order) => {
    const newOrder = {
      id: `ORD-${Date.now().toString().slice(-4)}`,
      date: new Date().toISOString(),
      ...order,
      status: order.status || 'Pending',
      paymentStatus: order.paymentStatus || 'Pending',
    }
    setOrders((prev) => {
      const next = [newOrder, ...prev]
      localStorage.setItem(ORDERS_KEY, JSON.stringify(next))
      window.dispatchEvent(new CustomEvent(ORDERS_UPDATED_EVENT))
      return next
    })
    return newOrder
  }, [])

  const getOrdersByUser = useCallback(
    (email) => orders.filter((o) => o.email === email),
    [orders]
  )

  return (
    <OrderContext.Provider value={{ orders, placeOrder, getOrdersByUser }}>
      {children}
    </OrderContext.Provider>
  )
}

export function useOrders() {
  const ctx = useContext(OrderContext)
  if (!ctx) throw new Error('useOrders must be used within OrderProvider')
  return ctx
}