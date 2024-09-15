import React from 'react'
import { Metadata } from 'next'
export const metadata:Metadata ={
    title:'Authentication'
}




export default function LayoutAuthentication({children}:Readonly<{children:React.ReactNode}>) {
    return(
        <div className='bg-white'>
            {children}
        </div>
    )
}