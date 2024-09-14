import { Cursor } from "@/components/ui/cursor"
import Image from "next/image"
const CursorFunction = () =>{
    return(
        <div>
             <Cursor
        attachToParent
        variants={{
          initial: { scale: 0.3, opacity: 0 },
          animate: { scale: 1, opacity: 1 },
          exit: { scale: 0.3, opacity: 0 },
        }}
        transition={{
          ease: 'easeInOut',
          duration: 0.15,
        }}
        className='left-12 top-4'>
                    <Image src={'/cursor-ui.svg'} width={40} height={30} alt="cursor-ui" />

        </Cursor>
        </div>
    )
}






export default CursorFunction