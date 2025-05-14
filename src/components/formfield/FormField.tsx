import { ReactNode, useMemo } from 'react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import FieldMessage from './FieldMessage'
import FormCheckBox from './FormCheckBox'
import FormInput from './FormInput'
import FormSelect from './FormSelect'

type FormComponentProps = 'input' | 'checkbox' | 'select'

type FormFieldProps<T extends FieldValues> = {
   type: FormComponentProps
   rightNode?: ReactNode
} & Pick<UseControllerProps<T>, 'name' | 'control'> & {
      label?: string
      className?: string
      messageText?: string
      showSuccessMessage?: boolean
      helperText?: string
   }

function FormField<T extends FieldValues>({
   type,
   rightNode,
   name,
   control,
   label,
   className,
   messageText,
   showSuccessMessage = false,
   helperText,
}: FormFieldProps<T>) {
   const { fieldState, field } = useController({ name, control })

   const isSuccess = useMemo<boolean>(
      () =>
         !fieldState.error &&
         !!messageText &&
         field.value &&
         showSuccessMessage,
      [field.value, fieldState.error, messageText, showSuccessMessage]
   )

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
         {
            <FieldMessage
               variant={
                  (!!fieldState.error && 'error') ||
                  (isSuccess && 'success') ||
                  undefined
               }
               text={
                  !fieldState.error
                     ? isSuccess
                        ? messageText
                        : helperText
                     : undefined
               }
               errorMessage={fieldState.error?.message}
            />
         }
      </div>
   )
}

export default FormField
