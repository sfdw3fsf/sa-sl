import React, { ReactNode, useState } from 'react'
import Button, { ButtonProps } from '../button/Button'
import CloseDarkIcon from '../../assets/icons/CloseDarkIcon'
import { twMerge } from 'tailwind-merge'
import CartDivider from './CartModal/CartDivider'
import Divider from '../layout/Divider'

type ModalProps = {
   button?: ReactNode[]
   body: ReactNode
   className?: string
   // buttonOpen: ReactNode
}

function Modal({ button = [], body, className }: ModalProps) {
   const [isOpen, setIsOpen] = useState<boolean>(false)

   const open = () => setIsOpen(true)
   const close = () => setIsOpen(false)

   return (
      <>
         {/* Open Button */}
         <div className="mt-3">
            {/* {buttonOpen} */}
            <Button onClick={open}>Your Cart</Button>
            {/* <Button variant="border_box">Hi</Button>{' '} */}
         </div>

         {/* Main Modal */}
         {!!isOpen && (
            <div
               className={twMerge(
                  'fixed inset-0 z-9 bg-black/40 backdrop-blur-[2px]'
               )}
            >
               <div className="absolute inset-0 m-auto h-fit max-w-[500px] rounded-xl bg-white px-5 py-3 shadow-lg md:px-6">
                  <button
                     onClick={close}
                     className="absolute top-1 right-1 p-2 transition-all duration-300 ease-in-out hover:scale-125"
                  >
                     <CloseDarkIcon className="h-5 w-5" />
                  </button>

                  {/* Header */}
                  <p className="text-primary-500 pb-4 text-2xl font-semibold">
                     Your Cart
                  </p>
                  {/* Body */}
                  <div className="min-w-0"> {body}</div>
                  {/* Footer */}
                  <Divider />
                  <div className="flex w-full items-center justify-end gap-3">
                     {button?.length &&
                        button.map((btn: ReactNode, index: number) => btn)}
                  </div>
               </div>
            </div>
         )}
      </>
   )
}

export default Modal
