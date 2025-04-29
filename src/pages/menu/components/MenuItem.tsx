import { useState } from 'react'
import Divider from '../../../components/layout/Divider'
import AddToCardButton from './AddToCartButton'

export type MenuFoodProps = {
   id: number
   name: string
   unitPrice?: number
   imageUrl: string
   ingredients?: string[]
   soldOut?: boolean
}

export function MenuItem({ menu }: { menu: MenuFoodProps }) {
   return (
      <section className="border-border-soft rounded-xl border p-4 shadow-lg">
         <div className="flex flex-row gap-3">
            <img
               src={menu.imageUrl}
               alt="menu dishes"
               className="w-full max-w-[120px] rounded object-cover"
            ></img>

            <div className="flex flex-col gap-3">
               <h1 className="line-clamp-1 font-bold">{menu.name}</h1>

               <ul className="flex flex-col">
                  {menu.ingredients?.map((item: string, index: number) => {
                     if (index > 2) return

                     const isThirdButNotLast =
                        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                        index === 2 && index < menu.ingredients?.length! - 1

                     return (
                        <li className="flex flex-row items-center gap-3">
                           <span
                              className="text-xs whitespace-nowrap"
                              key={index}
                           >
                              {item}
                           </span>
                           {isThirdButNotLast && (
                              <span className="text-xs">...</span>
                           )}
                        </li>
                     )
                  })}
               </ul>
            </div>
         </div>

         {/* Add To Cart */}
         <Divider />
         <div className="flex w-full items-center justify-between">
            <p className="text-xl font-semibold">
               <span className="text-border-soft font-medium">$</span>
               {menu.unitPrice}{' '}
            </p>
            <AddToCardButton />
         </div>
      </section>
   )
}
