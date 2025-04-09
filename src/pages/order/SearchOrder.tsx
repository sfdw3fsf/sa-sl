import React, { ReactNode, useState } from 'react'
import FormField from '../../components/formfield/FormField'
import { useNavigate } from 'react-router'
import {
    FieldValues,
    useController,
    UseControllerProps,
    useForm,
} from 'react-hook-form'
import FormInput from '../../components/formfield/FormInput'
import { SearchOrderReq } from '../../data/order/request/request'

function SearchOrder() {
    const { control, handleSubmit } = useForm<SearchOrderReq>({
        defaultValues: {
            query: '',
        },
    })
    const navigate = useNavigate()

    const onSubmit = (data: SearchOrderReq) => {
        navigate(`/order/${data.query}`)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormInput name={'query'} control={control} />
        </form>
    )
}

export default SearchOrder
