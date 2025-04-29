import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

enum CircleType {
   increase = 'increase',
   decrease = 'decrease',
}

function CircleButton({
   onClick,
   type,
}: {
   onClick: () => void
   type: CircleType
}) {
   return (
      <button
         className={twMerge(
            'flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white p-3 transition-all duration-700 ease-in-out hover:scale-125',
            type === CircleType.increase && 'bg-brand',
            type === CircleType.increase
               ? 'hover:bg-brand-50'
               : 'hover:bg-border-soft'
         )}
         onClick={() => onClick()}
      >
         {type === CircleType.decrease ? '-' : '+'}
      </button>
   )
}

export default function AddToCardButton() {
   const [count, setCount] = useState<number>(0)

   const decreaseAction = () => {
      if (count === 0) return
      setCount((count: number) => count - 1)
   }

   const incrementAction = () => {
      if (count >= 10) return
      setCount((count: number) => count + 1)
   }

   return (
      <div className="flex max-w-[120px] flex-1 flex-row items-center justify-between rounded-full bg-[#f1f1f1]">
         <CircleButton onClick={decreaseAction} type={CircleType.decrease} />
         <span>{count}</span>
         <CircleButton onClick={incrementAction} type={CircleType.increase} />
      </div>
   )
}
