import React from 'react'
import { useNavigate, useRouteError } from 'react-router'

function ErrorPage() {
    const navigate = useNavigate()

    return (
        <div className="grid w-full grid-cols-1 gap-[29px] lg:grid-cols-2 lg:px-22">
            <div className="mt-30 flex flex-col gap-[92px]">
                {/* Message */}
                <h1 className="text-6xl font-semibold text-[#000]">
                    Something has happened
                    <br />
                    We're very sorry about that
                </h1>

                {/* Button */}
                <button
                    onClick={() => navigate('/')}
                    className="border-border-soft hover:bg-avocado-500 durarion-300 max-w-[368px] rounded border px-16 py-5 text-2xl font-bold transition-all ease-in-out hover:text-white"
                >
                    Go To Home
                </button>
            </div>

            <img src="/images/error.svg" alt="error image" />
        </div>
    )
}

export default ErrorPage
