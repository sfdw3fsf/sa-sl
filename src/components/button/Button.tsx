import {
   ButtonHTMLAttributes,
   cloneElement,
   ReactElement,
   ReactNode,
} from 'react'
import { twMerge } from 'tailwind-merge'
import { buttonTheme } from './button.theme'

type ButtonVariant = 'primary' | 'border_box'

type ButtonSize = 'sm' | 'md' | 'lg'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
   variant?: ButtonVariant
   className?: string
   size?: ButtonSize
   children: ReactNode
   onClick?: () => void
   icon?: ReactElement
}

function Button({
   variant = 'primary',
   className,
   size = 'md',
   children,
   onClick,
   icon,
   ...props
}: ButtonProps) {
   const iconShadow = icon
      ? cloneElement(icon, {
           className: twMerge(
              buttonTheme.base.icon[size],
              buttonTheme.variants[variant].color
           ),
        })
      : null

   return (
      <button
         onClick={onClick}
         className={twMerge(
            buttonTheme.base.buttonCont,

            buttonTheme.base.spacing[size],

            buttonTheme.variants[variant].base,
            buttonTheme.variants[variant].border,
            className
         )}
         {...props}
      >
         <div className="flex items-center justify-center gap-1">
            <div
               className={twMerge(
                  buttonTheme.base.fontSize[size],
                  buttonTheme.variants[variant].color
               )}
            >
               {children}
            </div>
            {!!icon && iconShadow}
         </div>
      </button>
   )
}

export default Button
