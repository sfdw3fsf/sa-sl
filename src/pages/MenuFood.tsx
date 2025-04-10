import React from 'react'
import { useQueries, useQuery } from '@tanstack/react-query'
import PageContainer from '../layouts/PageContainer'
import { instance } from '../data/axios'
import Loading from '../components/Loading'
import { RegularResponse } from '../utils/type/BaseResponse'

export type MenuFoodProps = {
    id: number
    name: string
    unitPrice?: number
    imageUrl: string
    ingredients?: string[]
    soldOut?: boolean
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

    const {
        data: menuData,
        error,
        isLoading,
    } = useQuery({
        queryKey: ['todos'],
        queryFn: getMenuFoodApi,
    })

    return isLoading ? (
        <Loading />
    ) : (
        <div className="grid w-full grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-4">
            {menuData?.data.map((item: MenuFoodProps) => (
                <MenuItem menu={item} key={item.id} />
            ))}
        </div>
    )
}

function MenuItem({ menu }: { menu: MenuFoodProps }) {
    return (
        <section className="border-border-soft rounded-xl border p-4">
            <img
                src={menu.imageUrl}
                alt="menu dishes"
                className="w-full rounded object-cover"
            ></img>
            <h1>{menu.name}</h1>
            <p>{menu.unitPrice}</p>
            <ul className="flex">
                {menu.ingredients?.map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </section>
    )
}

export default MenuFood
