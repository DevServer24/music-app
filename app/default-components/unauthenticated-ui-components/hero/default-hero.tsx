'use client'
import { TextEffect } from "@/components/ui/text-effect"

import { Button } from "@/components/ui/button"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import Image from "next/image"



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
             



               <Button variant={"default"} asChild className="cursor-none hover:cursor-none" onClick={() =>{
                window.location.href = '/dashboard'
               }}>
                  
                    <TextEffect>
                        Start Free
                    </TextEffect>
                    
                </Button>
               </div>
            </div>
            <div className="pt-14">
                <p className="text-1xl text-slate-100 font-bold">
                    Powered by:
                </p>
               
                </div>
            </div>
        </div>
    )
}






export default DefaultHero