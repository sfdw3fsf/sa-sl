import React, { ReactNode } from 'react'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import { FormType } from '../../utils/enum/FormEnum'

type FormFieldProps = {
    type?: FormType
    rightNode?: ReactNode
}

function FormField({ type, rightNode }: FormFieldProps) {
    const formType = () => {
        switch (type) {
            // case FormType.FORM_INPUT:
            //     return <FormInput />

            // case FormType.FORM_SEARCH_INPUT:
            //     return <FormInput />

            case FormType.FORM_SELECT:
                return <FormSelect />

            default:
            // return <FormInput />
        }
    }

    return (
        <div className="flex flex-col">
            {/* Label */}
            {formType()}
        </div>
    )
}

export default FormField
