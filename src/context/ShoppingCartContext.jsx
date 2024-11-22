import { useState, createContext } from "react";

export const ShoppingCartContext = createContext({
  cart: [],
  handleAddToCart: () => { },
  handleIncreaseProductQuantity: () => { },
  handledDecreaseProductQuantity: () => { }
})


export default function ShoppingCartContextProvider({ children }) {
  const [shoppingCartState, setShoppingCartState] = useState({
    items: [],
    totalPrice: 0
  })

  const handleAddToCart = (product) => {
    setShoppingCartState((prev) => {
      const exist = prev.items.some(item => item.id === product.id)
      if (!exist) {
        return {
          items: [
            ...(prev.items || []),
            {
              id: product.id,
              title: product.title,
              price: product.price,
              quantity: 1
            }
          ],
          totalPrice: +(prev.totalPrice + product.price).toFixed(2)
        }
      } else {
        return {
          ...prev
        }
      }
    })
  }

  const handleIncreaseProductQuantity = (product) => {
    setShoppingCartState((prev) => {
      const updatedCart = prev.items.map(item => {
        if (product.id === item.id) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })
      return { ...prev, items: updatedCart, totalPrice: calculateTotalPrice(updatedCart) }
    })

  }

  const handleDecreaseProductQuantity = (product) => {
    setShoppingCartState((prev) => {
      if (product.quantity > 1) {
        const updatedCart = prev.items.map(item => {
          if (product.id === item.id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })

        return { ...prev, items: updatedCart, totalPrice: calculateTotalPrice(updatedCart) }
      } else {
        const updatedCart = prev.items.filter(item => item.id !== product.id)
        return { ...prev, items: updatedCart, totalPrice: calculateTotalPrice(updatedCart) }
      }
    })
  }

  const calculateTotalPrice = (items) => {
    const updatedTotalPrice = items.reduce((sum, item) => sum + +(item.price * item.quantity), 0)

    return updatedTotalPrice.toFixed(2)
  }

  const ctxCart = {
    cart: shoppingCartState,
    handleAddToCart: handleAddToCart,
    handleAddProductQuantity: handleIncreaseProductQuantity,
    handleDecreaseProductQuantity: handleDecreaseProductQuantity
  }

  return (
    <ShoppingCartContext.Provider value={ctxCart}>{children}</ShoppingCartContext.Provider>
  )
}
