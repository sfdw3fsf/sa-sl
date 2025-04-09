import React from 'react'
import PageContainer from '../layouts/PageContainer'
import FormInput from '../components/formfield/FormInput'

function Login() {
    return (
        <div className="flex w-full max-w-[1920px] items-center gap-6">
            <section className="flex w-full flex-1 flex-col items-center justify-center">
                {/* Login Form */}
                <form className="flex w-full max-w-[388px] flex-col gap-12">
                    {/* Introduction */}
                    <div>
                        <h1 className="text-primary-500 text-4xl font-semibold">
                            Welcome Back 🪴
                        </h1>

                        <p className="text-primary-500 mt-7 text-xl font-normal">
                            Today is a new day. It's your day. You shape it.
                            Sign in to start managing your projects
                        </p>
                    </div>

                    {/* Login Input */}

                    <div>{/* <FormInput /> */}</div>

                    {/* Social Login */}

                    {/* Sign Up */}

                    <div></div>
                </form>

                {/* Copy right */}
                <p className="text-primary-100 text-base">
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
