import React, { ReactNode } from 'react'

type Props = {
    classname?: string
    children: ReactNode
}

function PageContainer({ classname, children }: Props) {
    return <div className="flex w-full justify-center p-8">{children}</div>
}

export default PageContainer
