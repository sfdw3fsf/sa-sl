import React from 'react'
import { instance } from '../data/axios'
import { useQueries, useQuery } from '@tanstack/react-query'
import { queryKey } from './../../node_modules/@tanstack/query-core/src/tests/utils'

type MenuFoodProps = {
    id: number
    name: string
    unitPrice?: number
    imageUrl: string
    ingredients?: string[]
    soldOut?: boolean
}

type RegularResponse<T> = {
    data: T
    status?: string
}

function MenuFood() {
    //With no react query, you must use useEffect, useState to get data from promise , axios library
    // const getData = async () => {
    //     const data = await instance.get('/menu')
    //     return data
    // }

    //Because queryFn require a function return Promise,
    // we can create separate function, or queryFn:()=> instance.get directly
    const getMenuFoodApi = (): Promise<RegularResponse<MenuFoodProps[]>> =>
        instance.get('/menu')

    const { data: menuData, error } = useQuery({
        queryKey: ['todos'],
        queryFn: getMenuFoodApi,
    })

    return (
        <div>
            {menuData?.data.map((item, index) => (
                <section key={index}>
                    <h1>{item.name}</h1>
                    <p>{item.unitPrice}</p>
                    <img src={item.imageUrl} alt="menu dishes"></img>
                    <ul>
                        {item.ingredients?.map((item, index) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    )
}

export default MenuFood
