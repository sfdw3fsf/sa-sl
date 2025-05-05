import React, { ReactElement, ReactNode, useState } from 'react'

const MovingBlock = ({ position }: { position: number }): JSX.Element => {
   return (
      <div
         className="border-border-soft fixed flex min-h-[300px] w-full max-w-[300px] min-w-[220px] flex-col rounded-xl border-8 bg-[url('./images/switzland/garden.png')] bg-cover bg-center bg-no-repeat pt-3"
         style={{ top: position, right: 100 }}
      >
         {/* Tab */}
         <div className="h-full w-full flex-1 rounded-2xl">
            <ul className="no-scrollbar scrollbar- flex gap-3 overflow-x-scroll px-2 whitespace-nowrap">
               <li className="rounded-2xl bg-white/20 p-3 text-white">
                  Germany
               </li>
               <li className="rounded-2xl bg-white/20 p-3 text-white">
                  England
               </li>
               <li className="rounded-2xl bg-white/20 p-3 text-white">
                  Switzland
               </li>
               <li className="rounded-2xl bg-white/20 p-3 text-white">Italy</li>
            </ul>
         </div>
         {/* Information */}
         <div className="flex-1 bg-gray-400"></div>
      </div>
   )
}

function ScrollBlock({ children }: { children: ReactNode }) {
   const [position, setPosition] = useState<number>(300)
   console.log('wholw app rerender')
   const getPosition = (value: number) => {
      return 300 - value / 2
   }

   const scrollFunction = (e: React.UIEvent<HTMLDivElement>) => {
      const p = getPosition(e.currentTarget.scrollTop)
      console.log(p)
      setPosition(p)
   }

   return (
      <div
         className="relative flex h-[600px] w-full overflow-scroll"
         onScroll={scrollFunction}
      >
         {children}
         <div className="h-[2000px] flex-6 place-items-end">
            <MovingBlock position={position} />
         </div>
      </div>
   )
}

export default ScrollBlock
