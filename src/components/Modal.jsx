import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef()

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal()
      }
    }
  })

  return createPortal(
    <dialog className="p-5 backdrop:bg-gray-900/70 rounded" ref={dialog}>
      {children}
    </dialog>,
    document.getElementById('root')
  )
})

export default Modal
