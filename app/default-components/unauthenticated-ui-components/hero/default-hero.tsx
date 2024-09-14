import { TextEffect } from "@/components/ui/text-effect"
import Navbar from "../navbar/default-navbar"
import { Button } from "@/components/ui/button"
const DefaultHero = () =>{
    return(
        <div className="text-center items-center relative py-2 py-4 pt-20">
            <div>
            
                <TextEffect className="text-6xl font-bold text-slate-200" preset="slide" delay={1}>
                    

                    Music App
                </TextEffect>
                <div>
                    <TextEffect className="text-zinc-100 text-2xl front-bold" preset="fade" delay={1}>Your easy music content is here</TextEffect>
                </div>
               <div className="pt-10">
               <Button variant={"secondary"} asChild>
                    <TextEffect>
                        Get Started
                    </TextEffect>
                </Button>
               </div>
            </div>
        </div>
    )
}






export default DefaultHero