export default function shoppingCartReducer(state, action) {

  const calculateTotalPrice = (items) => {
    const updatedTotalPrice = items.reduce((sum, item) => sum + +(item.price * item.quantity), 0)

    return updatedTotalPrice.toFixed(2)
  }

  switch (action.type) {
    case 'ADD_ITEM': {
      const updatedItems = state
      const exist = updatedItems.items.some(item => item.id === action.payload.id)
      if (!exist) {
        updatedItems.items.push({
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          quantity: 1
        })
      }
      return {
        ...updatedItems
      }
    }

    case 'INCREASE_ITEM': {
      const updatedCart = state.items.map(item => {
        if (action.payload.id === item.id) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })
      return { items: updatedCart, totalPrice: calculateTotalPrice(updatedCart) }
    }

    case 'DECREASE_ITEM': {
      if (action.payload.quantity > 1) {
        const updatedCart = state.items.map(item => {
          if (action.payload.id === item.id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })

        return { items: updatedCart, totalPrice: calculateTotalPrice(updatedCart) }
      } else {
        const updatedCart = state.items.filter(item => item.id !== action.payload.id)
        return { items: updatedCart, totalPrice: calculateTotalPrice(updatedCart) }
      }
    }

    default:
      return state
  }
}
