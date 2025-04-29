import React from 'react'
import { useQueries, useQuery } from '@tanstack/react-query'
import PageContainer from '../../layouts/PageContainer'
import { instance } from '../../data/axios'
import Loading from '../../components/Loading'
import { RegularResponse } from '../../utils/type/BaseResponse'
import { MenuFoodProps, MenuItem } from './components/MenuItem'
import Modal from '../../components/modal/Modal'

function MenuFood() {
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
         <Modal />
      </>
   )
}

export default MenuFood
