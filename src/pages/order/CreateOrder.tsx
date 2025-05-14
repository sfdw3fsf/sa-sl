import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import FormField from '../../components/formfield/FormField'
import Divider from '../../components/layout/Divider'
import { OrderInput, OrderSchema } from './orderSchema/OrderSchema'
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
   /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
      str
   )

const fakeCart = [
   {
      pizzaId: 12,
      name: 'Mediterranean',
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
   },
   {
      pizzaId: 6,
      name: 'Vegetale',
      quantity: 1,
      unitPrice: 13,
      totalPrice: 13,
   },
   {
      pizzaId: 11,
      name: 'Spinach and Mushroom',
      quantity: 1,
      unitPrice: 15,
      totalPrice: 15,
   },
]

// type Cart = {
//    pizzaId: number
//    name: string
//    quantity: number
//    unitPrice: number
//    totalPrice: number
// }

// type OrderType = {
//    firstName: string
//    phoneNumber: string
//    address: string
//    priority: boolean
//    cart: Cart[]
// }

function CreateOrder() {
   // const [withPriority, setWithPriority] = useState(false);
   const cart = fakeCart
   const { handleSubmit, control } = useForm<OrderInput>({
      resolver: yupResolver(OrderSchema),
      defaultValues: OrderSchema.getDefault(),
   })

   const onSubmit = (data: OrderInput) => {
      console.log('data', data)
   }
   return (
      <div>
         <h2>Ready to order? Let's go!</h2>
         <Divider />

         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
               {/* <input type="text" name="customer" required /> */}
               <FormField
                  label="First Name"
                  type="input"
                  name={'firstName'}
                  control={control}
                  messageText="It cool bro"
                  showSuccessMessage
               />

               <FormField
                  label="Phone Number"
                  type="input"
                  name={'phoneNumber'}
                  control={control}
                  messageText="It cool bro"
               />

               <FormField
                  label="Address"
                  type="input"
                  control={control}
                  name={'address'}
               />

               <FormField
                  label="Want to yo give your order priority?"
                  type="checkbox"
                  name={'priority'}
                  control={control}
                  className="mr-1 !mb-0 flex-row-reverse"
               />
            </div>

            <div>
               <button className="bg-amber-200">Order now</button>
            </div>
         </form>
      </div>
   )
}

export default CreateOrder
