import React from 'react'
import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

type FormCheckBoxProps<T extends FieldValues> = Pick<
   UseControllerProps<T>,
   'name' | 'control'
>

function FormCheckBox<T extends FieldValues>({
   name,
   control,
}: FormCheckBoxProps<T>) {
   const { field, fieldState } = useController({ name, control })
   return <input type="checkbox" {...field} value={field.value}></input>
}

export default FormCheckBox
