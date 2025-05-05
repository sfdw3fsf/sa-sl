import React from 'react'

type ListItemProps = {
   image: string
   size: string
   name: string
   type: string
   price: number
   amount: number
}

export const ListCardSampleData = [
   {
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b37d30bf-5a0b-4e33-abc6-b93829de390b/AIR+MAX+DN8.png',
      size: '8.5',
      name: 'SAMBA OG SHOES',
      type: 'Cloud White',
      price: 100.0,
      amount: 1,
   },
   {
      image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5845c969-a832-466e-bbf3-fbcaf9d108c6/KILLSHOT+2+LEATHER.png',
      size: '8.5',
      name: 'NEW BALANCE MT180',
      type: 'White Sea Salt',
      price: 170.0,
      amount: 1,
   },
]
function ListItem({ image, size, name, type, price, amount }: ListItemProps) {
   return (
      <div className="relative flex items-center justify-between">
         <div className="flex items-center gap-6">
            <img
               src={image}
               alt="product image"
               className="h-22 w-22 rounded-lg object-cover"
            />
            {/* Information */}
            <div>
               <h1 className="text-primary-500 text-lg">{name}</h1>
               <span className="text-xs text-gray-400">
                  {`Size ${size}`}
                  <span className="mx-2">|</span>
                  {`${type}`}
               </span>
            </div>
         </div>

         {/* Price */}
         <p className="text-primary-500 text-lg">${price}.00</p>
      </div>
   )
}

function ListCart({ listCart }: { listCart: ListItemProps[] }) {
   return (
      <div className="flex flex-col gap-3">
         {listCart.map((item: ListItemProps, index: number) => (
            <ListItem {...item} key={index} />
         ))}
      </div>
   )
}

export default ListCart
