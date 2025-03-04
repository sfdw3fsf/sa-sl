import React from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
    className?: string
}

function FormInput() {
    return (
        <input
            className={twMerge(
                'border-border-soft placeholder-shown:text-placeholder 0.3s max-h-[40px] rounded-lg border px-4 py-2.5 transition-all ease-in-out',
                'focus:border-brand focus:ring-0 focus:outline-none'
            )}
            placeholder="Enter your information"
        ></input>
    )
}

export default FormInput
