import Image from "next/image";
import Link from "next/link";
import Links from "./links";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { TextEffect } from "@/components/ui/text-effect";
const navbarData= [
    
    {name:"Sign Up",url:"/sign-up"},
    {name:"Sign In",url:"/sign-in"},
    {name:'Dashboard',url:'/dashboard'}
  
]
export default function Navbar() {
    return(
        <nav className="flex items-center justify-between p-4 bg-slate-900 shadow-sm shadow-green-400">
            <Link className="mx-auto" href={'/'}>
                <TextEffect className="text-1xl font-bold text-zinc-100">
                    Music App
                </TextEffect>
            </Link>
        
           
            <ul className="hidden sm:inline-flex gap-4 text-sm mx-auto">
                {navbarData.map((i,x) =>(
                    <Links key={x}>
                        <Link href={i.url}>
                            {i.name}
                        </Link>
                    </Links>
                ))}
                
            </ul>
            <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant={'secondary'}>
                           <Image src={'/search.svg'} width={20} height={60} alt="" />
                           Search 
                        </Button>
                    </AlertDialogTrigger>
                        <AlertDialogContent className="bg-white">
                            
                        </AlertDialogContent>
                </AlertDialog>
        </nav>
    )
}