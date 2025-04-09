import React, { ReactNode } from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'

type Props = {
    classname?: string
    children: ReactNode
}

function PageContainer() {
    return (
        <>
            <Navbar />
            <div className="flex w-full justify-center p-8">
                <Outlet />
            </div>
        </>
    )
}

export default PageContainer
