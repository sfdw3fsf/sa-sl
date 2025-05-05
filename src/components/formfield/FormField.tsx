import React, { ReactNode } from 'react'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import { FieldValues, UseControllerProps } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import FormCheckBox from './FormCheckBox'

type FormComponentProps = 'input' | 'checkbox' | 'select'

type FormFieldProps<T extends FieldValues> = {
   type: FormComponentProps
   rightNode?: ReactNode
} & Pick<UseControllerProps<T>, 'name' | 'control'> & {
      label?: string
      className?: string
   }

function FormField<T extends FieldValues>({
   type,
   rightNode,
   name,
   control,
   label,
   className,
}: FormFieldProps<T>) {
   const formType = () => {
      switch (type) {
         case 'input':
            return <FormInput name={name} control={control} />

         case 'select':
            return <FormSelect />

         case 'checkbox':
            return <FormCheckBox name={name} control={control} />

         default:
         // return <FormInput />
      }
   }

   return (
      <div className={twMerge('flex flex-col gap-1', className)}>
         {/* Label */}
         {!!label && <label className="text-sm">{label}</label>}
         {/* FormComponent */}
         {formType()}
      </div>
   )
}

export default FormField
