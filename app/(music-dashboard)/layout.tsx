import React from 'react';
import { Metadata } from 'next';
export const metadata:Metadata ={
    title:'Dashboard'
}



export default function LayoutDashboard({children,}:Readonly<{children:React.ReactNode}>) {
    return(
        <div>
            {children}
        </div>
    )
}