import React, { ReactNode } from 'react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

type InputProps<T extends FieldValues> = Pick<
    UseControllerProps<T>,
    'name' | 'control'
> & {
    type?: string
    rightNode?: ReactNode
}

function FormInput<T extends FieldValues>({
    name,
    control,
    type,
    rightNode,
}: InputProps<T>) {
    // name | control is union in TypeScript, & will return type never so avoid it
    // control is optional because we have a case that context do not need it
    const { field, fieldState } = useController({ name, control })

    return (
        <input
            className={twMerge(
                'border-border-soft placeholder-shown:text-placeholder 0.3s max-h-[40px] rounded-lg border px-4 py-2.5 transition-all ease-in-out',
                'focus:border-brand focus:ring-0 focus:outline-none'
            )}
            {...field}
            placeholder="Enter your information"
        ></input>
    )
}

export default FormInput

// function SearchOrder() {
//     const [query, setQuery] = useState('')
//     const navigate = useNavigate()
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (!query) return
//         navigate(`/order/${query}`)
//     }
//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Serch order"
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//             ></input>
//         </form>
//     )
// }
