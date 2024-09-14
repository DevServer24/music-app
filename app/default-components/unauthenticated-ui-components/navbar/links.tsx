import React from "react"

interface LinksProps{
    children:React.ReactNode
}
const Links = ({children}:LinksProps) =>{
    return(


        <li className="text-white dark:text-zinc-100 hover:text-slate-900 hover:bg-white transition duration-500 p-4 rounded list-none text-sm
        
        cursor-none
        ">
            {children}
        </li>
    )
}


export default Links