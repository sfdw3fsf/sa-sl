import React from 'react'
import { twMerge } from 'tailwind-merge'

type variant = 'dashed' | 'solid'

type CartDividerProps = {
   variant?: variant
}

function CartDivider({ variant = 'solid' }: CartDividerProps) {
   return (
      <div
         className={twMerge(
            'border-border-soft my-4 w-full border',
            `border-${variant}`
         )}
      ></div>
   )
}

export default CartDivider
