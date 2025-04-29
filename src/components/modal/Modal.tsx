import React, { useState } from 'react'
import CloseSvg from '../../assets/icons/CloseSvg'
import Button from '../button/Button'

function Modal() {
   const [isOpen, setIsOpen] = useState<boolean>(false)

   const open = () => setIsOpen(true)
   const close = () => setIsOpen(false)

   return (
      <>
         <div className="mt-3 flex gap-3">
            <Button onClick={open}>OpenModal</Button>
            <Button variant="border_box">Hi</Button>{' '}
         </div>
         {!!isOpen && (
            <div className="absolute z-10 m-auto h-3/5 w-1/2 bg-white shadow-lg">
               <button
                  onClick={close}
                  className="absolute top-1 right-1 transition-all duration-300 ease-in-out hover:scale-125"
               >
                  <CloseSvg className="h-8 w-8" />
               </button>
               Modal
            </div>
         )}
      </>
   )
}

export default Modal
