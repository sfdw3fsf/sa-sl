import * as yup from 'yup'

export const yups = {
   required: {
      string: (message: string) =>
         yup.string().required(message).trim().default(''),
   },
}
