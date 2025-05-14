import * as yup from 'yup'
import { yups } from '../../utils/schema/yups'

export const LoginSchema = yup.object().shape({
   username: yups.required.string('Where is your username? Put it in'),
   password: yups.required.string('Password must have'),
})

export type LoginInput = yup.InferType<typeof LoginSchema>
