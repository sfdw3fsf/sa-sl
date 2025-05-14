import { useMemo } from 'react'
import { twMerge } from 'tailwind-merge'
import HelperText from '../../assets/icons/HelperText'
import SuccessIcon from '../../assets/icons/SuccessIcon'
import WarningIcon from '../../assets/icons/WarningIcon'

type FieldMessageProps = {
   variant?: 'success' | 'error' | 'helper'
   text?: string
   className?: string
   errorMessage?: string
}

const FieldMessageTheme = {
   base: {
      raw: 'text-xs font-normal',
   },
   success: {
      text: 'text-text-success',
   },
   error: {
      text: 'text-text-danger',
   },
   helper: {
      text: 'text-text-helper',
   },
}

function FieldMessage({
   variant = 'helper',
   text,
   errorMessage,
   className,
}: FieldMessageProps) {
   const icon = useMemo(() => {
      switch (variant) {
         case 'success':
            return <SuccessIcon />
         case 'error':
            return <WarningIcon />

         case 'helper':
            return <HelperText />

         default:
            return
      }
   }, [variant])

   if (!text && !errorMessage) return <></>

   return (
      <div className="text-tex flex items-start justify-start gap-2">
         <span className="shrink-0">{icon}</span>

         <p
            className={twMerge(
               FieldMessageTheme.base.raw,
               FieldMessageTheme[variant].text
            )}
         >
            {text || errorMessage}
         </p>
      </div>
   )
}

export default FieldMessage
