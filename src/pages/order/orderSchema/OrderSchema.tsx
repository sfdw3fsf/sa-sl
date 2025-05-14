import * as yup from 'yup'
import { yups } from '../../../utils/schema/yups'

export const OrderSchema = yup.object().shape({
   firstName: yups.required.string('test messsage'),
   phoneNumber: yup.string().required(),
   address: yup.string().required(),
   priority: yup.boolean().required(),
   cart: yup.array().default([]),
})

export type OrderInput = yup.InferType<typeof OrderSchema>
