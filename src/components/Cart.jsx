import { useContext, useRef } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartContext"
import Modal from "./Modal"

export default function Cart() {
  const { cart, handleAddProductQuantity, handleDecreaseProductQuantity } = useContext(ShoppingCartContext)
  const modal = useRef()
  const handleOpenCartModal = () => {
    modal.current.open()
  }

  return (
    <>
      <Modal action="close" ref={modal}>
        <header className="border-b border-red-950 pb-2">
          <h1 className="font-bold text-xl">
            Cart
          </h1>
        </header>
        <section className="py-5">
          {
            cart.items.map((item, index) => {
              return (
                <div className="flex gap-5 items-center mb-2 justify-between" key={index}>
                  <p className="break-all">
                    <span className="me-2">
                      {item.title}
                    </span>
                    <span className="underline font-medium">({item.quantity})</span>
                  </p>
                  <div className="flex gap-2 items-center">
                    <button className="w-8 h-8 bg-red-950 rounded-full text-white" onClick={() => handleAddProductQuantity(item)}>+</button>
                    <button className="w-8 h-8 bg-red-950 rounded-full text-white" onClick={() => handleDecreaseProductQuantity(item)}>-</button>
                  </div>
                </div>
              )
            })
          }
          <p className="text-lg font-medium underline">Total price: ${cart.totalPrice}</p>
        </section>
        <form method="dialog">
          <button className="bg-red-950 text-white p-2 rounded">close</button>
        </form>
      </Modal>
      <button className="bg-red-950 p-5 text-orange-200 rounded-md" onClick={handleOpenCartModal}>
        <span>Cart</span>
        <span> ({cart.items.length})</span>
      </button>
    </>
  )
}
