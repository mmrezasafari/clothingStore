import { createContext, useReducer } from "react";
import shoppingCartReducer from "../reducer/shppingCartReducer";

export const ShoppingCartContext = createContext({
  cart: [],
  handleAddToCart: () => { },
  handleIncreaseProductQuantity: () => { },
  handledDecreaseProductQuantity: () => { }
})

export default function ShoppingCartContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(shoppingCartReducer, {
    items: [],
    totalPrice: 0
  })

  const handleAddToCart = (product) => {
    shoppingCartDispatch({
      type: 'ADD_ITEM', payload: product
    })
  }

  const handleIncreaseProductQuantity = (product) => {
    shoppingCartDispatch({
      type: 'INCREASE_ITEM',
      payload: product
    })
  }

  const handleDecreaseProductQuantity = (product) => {
    shoppingCartDispatch({
      type: 'DECREASE_ITEM',
      payload: product
    })
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
