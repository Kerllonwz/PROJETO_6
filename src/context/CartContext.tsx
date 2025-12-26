import { createContext, useState, useContext, ReactNode } from 'react'
import { MenuItem } from '../types'

interface CartItem extends MenuItem {
  quantity: number
}

interface CartContextData {
  items: CartItem[]
  addToCart: (item: MenuItem) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  getTotalPrice: () => number
  getTotalItems: () => number
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])

  const addToCart = (item: MenuItem) => {
    const existingItem = items.find(i => i.id === item.id)
    
    if (existingItem) {
      setItems(items.map(i => 
        i.id === item.id 
          ? { ...i, quantity: i.quantity + 1 }
          : i
      ))
    } else {
      setItems([...items, { ...item, quantity: 1 }])
    }
  }

  const removeFromCart = (id: number) => {
    setItems(items.filter(item => item.id !== id))
  }

  const clearCart = () => {
    setItems([])
  }

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addToCart, 
        removeFromCart, 
        clearCart, 
        getTotalPrice,
        getTotalItems 
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }
  return context
}
