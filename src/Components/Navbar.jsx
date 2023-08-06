import { useEffect, useState } from "react";
function Navbar(){

const [toggle, setToggle]=useState(false)

useEffect(()=>{
    if(window.innerWidth>=768) setToggle(true)
},[])

return (
    <div className="fixed w-full opacity-90 z-[100]">
        <nav className="border-gray-200 bg-[#252528] py-4 px-4 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <a href="#" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-green-150">Anime Clone</span>
            </a>
            
            <button  type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden h focus:outline-none focus:ring-0 " onClick={()=>{
                toggle? setToggle(false): setToggle(true)
            }}>
                <svg className="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>

            {toggle ? 
            <div className="w-full md:block md:w-auto">
                <ul className="flex flex-col font-medium  rounded-lg bg-[#252528] md:flex-row md:space-x-8  md:border-0 md:bg-transparent ">
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-white hover:bg-green-150 md:hover:bg-transparent rounded md:bg-transparent md:p-0 onHover" aria-current="page">Search</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-green-150 md:hover:bg-transparent md:border-0  md:p-0 onHover">Genres</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-green-150 md:hover:bg-transparent md:border-0  md:p-0 onHover">MyList</a>
                    </li>
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-green-150 md:hover:bg-transparent md:border-0  md:p-0  onHover">Login</a>
                    </li>
                </ul>
            </div> 
            
            : null}
            
        </div>
        </nav>

    </div>
)
}

export default Navbar;