import React from 'react'

function ImageCover() {
   console.log('No need re re-render this')
   return (
      <div
         className="relative flex max-h-[600px] min-h-[600px] flex-6 flex-col rounded-xl bg-cover bg-top bg-no-repeat"
         style={{
            backgroundImage: 'url(/images/studying_vibes/guy_with_laptop.png)',
         }}
      >
         <div className="absolute right-3 bottom-3 flex min-h-[300px] w-1/3 min-w-[220px] flex-col rounded-xl border-8 border-white bg-transparent pt-3">
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
                  <li className="rounded-2xl bg-white/20 p-3 text-white">
                     Italy
                  </li>
               </ul>
            </div>
            {/* Information */}
            <div className="flex-1 bg-white">
               <h1>Travel In Spring</h1>
               <p className="text-xs">258$</p>
            </div>
         </div>
      </div>
   )
}

export default ImageCover
