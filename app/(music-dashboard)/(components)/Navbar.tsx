const navbarData = [
    {name:'',url:''},
    {name:'',url:''},
    {name:'',url:''},
    {name:'',url:''},

]
export const Navbar = () =>{
    return(
        <div className="flex items-center justify-between mx-auto">
            <div className="mx-auto">
                <p className="text-1xl font-bold hover:shadow-md hover:shadow-zinc-100 text-zinc-100">Music App</p>
            </div>


            <ul className="hidden sm:inline-flex gap-4 mx-auto">
                
            </ul>
        </div>
    )
}