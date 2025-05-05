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
         <div className="flex h-full min-h-[calc(100vh-140px)] w-full flex-col p-8">
            <Outlet />
         </div>
      </>
   )
}

export default PageContainer
