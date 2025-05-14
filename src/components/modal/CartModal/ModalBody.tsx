import React from 'react'
import Button from '../../button/Button'
import FormField from '../../formfield/FormField'
import CartDivider from './CartDivider'
import ListCart, { ListCardSampleData } from './ListCart'
import { useForm } from 'react-hook-form'

function ModalBody() {
   const { control } = useForm()
   return (
      <>
         <ListCart listCart={ListCardSampleData} />
         <CartDivider />
         <div className="flex items-end gap-3">
            <FormField
               className="flex-3 gap-4"
               type={'input'}
               name={''}
               label="Have a promotion code ?"
               control={control}
            />
            <Button
               className="min-h-10 flex-1 rounded-lg"
               variant="border_box"
               size="md"
            >
               Apply Code
            </Button>
         </div>
         <CartDivider />

         {/* Order Summary */}
         <h1 className="text-primary-300 text-md mb-3 font-semibold">
            Order Summary
         </h1>
         <div className="flex w-full flex-col gap-3">
            <div className="flex w-full justify-between">
               <p className="text-sm text-gray-400">2 items</p>
               <p className="text-sm font-medium text-gray-500">$270.00</p>
            </div>
            <div className="flex w-full justify-between">
               <p className="text-sm text-gray-400">Delivery Cost</p>
               <p className="text-sm font-medium text-gray-500">$11.00</p>
            </div>
         </div>
         <CartDivider variant="dashed" />

         {/* Total Price */}
         <div className="flex items-center justify-between">
            <h1 className="text-primary-500 test md font-medium">Total:</h1>
            <p className="text-primary-500 text-md">$282.99</p>
         </div>
      </>
   )
}

export default ModalBody
