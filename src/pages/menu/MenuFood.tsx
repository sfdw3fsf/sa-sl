import { useQuery } from '@tanstack/react-query'
import TimerIcon from '../../assets/icons/TimerIcon'
import Button from '../../components/button/Button'
import Loading from '../../components/Loading'
import ModalBody from '../../components/modal/CartModal/ModalBody'
import Modal from '../../components/modal/Modal'
import { instance } from '../../data/axios'
import { RegularResponse } from '../../utils/type/BaseResponse'
import { MenuFoodProps, MenuItem } from './components/MenuItem'

function MenuFood() {
   const modalBody = <ModalBody /> // This will not affect the performance because we are just creating object, and it's cheaper than render a component

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
            body={modalBody}
            button={[
               <Button
                  size="md"
                  variant="border_box"
                  className="mb-2 flex-1"
                  icon={<TimerIcon />}
               >
                  Confirm
               </Button>,
               // <Button
               //    size="lg"
               //    variant="primary"
               //    className="mb-2 flex-1"
               //    icon={<TimerIcon />}
               // >
               //    Confirm
               // </Button>,
            ]}
         />
      </>
   )
}

export default MenuFood
