import Image from "next/image";
import Link from "next/link";
import Links from "./links";
import { AlertDialog, AlertDialogContent, AlertDialogHeader, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const navbarData= [
    
    {name:"Sign Up",url:"/sign-up"},
    {name:"Sign In",url:"/sign-in"},
  
]
export default function Navbar() {
    return(
        <nav className="flex items-center justify-between p-4 bg-slate-900">
            <div className="mx-auto">
                <Image src={''} width={125} height={40} alt="" />
            </div>
        
           
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
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            Sign In
                        </AlertDialogHeader>

                            
                    </AlertDialogContent>
                </AlertDialog>
        </nav>
    )
}