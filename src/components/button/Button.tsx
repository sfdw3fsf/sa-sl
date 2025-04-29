import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { buttonTheme } from './button.theme'

type ButtonVariant = 'primary' | 'border_box'

type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
   variant?: ButtonVariant
   className?: string
   size?: ButtonSize
   children: ReactNode
   onClick?: () => void
}

function Button({
   variant = 'primary',
   className,
   size = 'md',
   children,
   onClick,
}: ButtonProps) {
   return (
      <button
         onClick={onClick}
         className={twMerge(
            buttonTheme.base.buttonCont,

            buttonTheme.base.spacing[size],

            buttonTheme.variants[variant].base,
            buttonTheme.variants[variant].border
         )}
      >
         <div
            className={twMerge(
               buttonTheme.base.fontSize[size],
               buttonTheme.variants[variant].color
            )}
         >
            {children}
         </div>
      </button>
   )
}

export default Button
