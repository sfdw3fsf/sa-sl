import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import GoogleIcon from '../assets/icons/GoogleIcon'
import Button from '../components/button/Button'
import FormField from '../components/formfield/FormField'
import { loginAPI } from '../data/login/login.api'
import { LoginResp } from '../data/login/response'
import { useAuthStore } from '../store/authStore'
import { RegularResponse } from '../utils/type/BaseResponse'
import { LoginInput, LoginSchema } from './login/LoginShema'

function Login() {
   const { handleSubmit, control, reset } = useForm<LoginInput>({
      resolver: yupResolver(LoginSchema),
      defaultValues: LoginSchema.getDefault(),
   })

   const loginSubmit = (data: LoginInput) => {
      login(data)
   }
   const authStore = useAuthStore()

   const { mutate: login, isLoading } = useMutation({
      mutationFn: (request: LoginInput) => loginAPI(request),
      onSuccess: ({ data }: RegularResponse<LoginResp>) => {
         authStore.setUserInfo(data)
         authStore.setAccessToken(data.accessToken)
      },
   })

   useEffect(() => reset(), [reset])

   return (
      <div className="flex w-full max-w-[1920px] items-center gap-6">
         <section className="flex w-full flex-1 flex-col items-center justify-center">
            {/* Login Form */}
            <form
               className="flex w-full max-w-[388px] flex-col gap-12"
               onSubmit={handleSubmit(loginSubmit)}
            >
               {/* Introduction */}
               <div>
                  <h1 className="text-primary-500 text-4xl font-semibold">
                     Welcome Back 🪴
                  </h1>

                  <p className="text-primary-500 mt-7 text-xl font-normal">
                     Today is a new day. It's your day.
                  </p>
               </div>

               {/* Login Input */}

               <div className="flex flex-col gap-4">
                  <FormField
                     type={'input'}
                     name={'username'}
                     control={control}
                     label="Enter your username, sir"
                  />
                  <FormField
                     type={'input'}
                     name={'password'}
                     control={control}
                     label="Your password will be passed here "
                  />
               </div>

               {/* Social Login */}

               {/* Sign Up */}

               <div className="flex flex-col gap-3">
                  <Button type="submit" size="md" className="bg-brand">
                     Login
                  </Button>
                  <Button variant="border_box">
                     <GoogleIcon />
                  </Button>
               </div>
            </form>

            {/* Copy right */}
            <p className="text-primary-100 pt-3 text-base">
               © 2023 ALL RIGHTS RESERVED
            </p>
         </section>

         {/* Image */}
         <section className="max-h-screen flex-1">
            <img
               className="object-fit rounded-lg"
               src="/images/login/login_banner2.svg"
               alt="Image about art"
            />
         </section>
      </div>
   )
}

export default Login
