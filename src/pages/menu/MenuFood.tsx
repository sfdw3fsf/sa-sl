import React from 'react'
import { useQueries, useQuery } from '@tanstack/react-query'
import PageContainer from '../../layouts/PageContainer'
import { instance } from '../../data/axios'
import Loading from '../../components/Loading'
import { RegularResponse } from '../../utils/type/BaseResponse'
import { MenuFoodProps, MenuItem } from './components/MenuItem'
import Modal from '../../components/modal/Modal'
import ListCart, {
   ListCardSampleData,
} from '../../components/modal/CartModal/ListCart'
import CartDivider from '../../components/modal/CartModal/CartDivider'
import FormField from '../../components/formfield/FormField'
import { useForm } from 'react-hook-form'
import Button from '../../components/button/Button'

function MenuFood() {
   const { control } = useForm()

   //With no react query, you must use useEffect, useState to get data from promise , axios library
   // const getData = async () => {
   //     const data = await instance.get('/menu')
   //     return data
   // }

   //Because queryFn require a function return Promise,
   // we can create separate function, or queryFn:()=> instance.get directly
   const getMenuFoodApi = (): Promise<RegularResponse<MenuFoodProps[]>> =>
      instance.get('/menu')

   const {
      data: menuData,
      error,
      isLoading,
   } = useQuery({
      queryKey: ['todos'],
      queryFn: getMenuFoodApi,
   })

   return isLoading ? (
      <Loading />
   ) : (
      <>
         <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4">
            {menuData?.data.map((item: MenuFoodProps) => (
               <MenuItem menu={item} key={item.id} />
            ))}
         </div>
         <Modal
            body={
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
                        <p className="text-sm font-medium text-gray-500">
                           $270.00
                        </p>
                     </div>
                     <div className="flex w-full justify-between">
                        <p className="text-sm text-gray-400">Delivery Cost</p>
                        <p className="text-sm font-medium text-gray-500">
                           $11.00
                        </p>
                     </div>
                  </div>
                  <CartDivider variant="dashed" />

                  {/* Total Price */}
                  <div className="flex items-center justify-between">
                     <h1 className="text-primary-500 test md font-medium">
                        Total:
                     </h1>
                     <p className="text-primary-500 text-md">$282.99</p>
                  </div>
               </>
            }
            button={[
               <Button size="md" variant="border_box" className="mb-2 flex-1">
                  Confirm
               </Button>,
            ]}
         />
      </>
   )
}

export default MenuFood
