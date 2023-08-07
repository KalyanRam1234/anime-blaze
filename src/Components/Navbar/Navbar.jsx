import { useEffect, useState } from "react";
import { Auth } from "./auth";
import {auth} from "../../../utils/firebase"
import { signOut } from "firebase/auth";

function Navbar(){

const [toggle, setToggle]=useState(false)
const [logged, setLogged]=useState(false);

const logOut = async () => {
    try {
    await signOut(auth);
    } catch (err){
      console.error(err);
    }
  };

useEffect(()=>{
    if(window.innerWidth>=768) setToggle(true)
},[])

useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
        if(user){
            setLogged(true);
        }
        else setLogged(false);
    })
},[auth])

return (
    <div className="fixed w-full opacity-90 z-[100]">
        {/* initially bg-transparent onscroll change to bg-[#252528] */}
        <nav className="border-gray-200 bg-[#242428] py-3 px-4 ">
        <div className="max-w-screen-3xl md:pl-8 flex flex-wrap items-center justify-between mx-auto">
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
            <div className="w-full md:block md:w-auto md:pr-8">
                <ul className="flex flex-col font-medium  rounded-lg bg-[#252528] md:flex-row md:space-x-8  md:border-0 md:bg-transparent ">
                    <li className="md:my-auto">
                    <a href="#" className="block py-2 pl-3 pr-4 text-white hover:bg-green-150 md:hover:bg-transparent rounded md:bg-transparent md:p-0 onHover" aria-current="page">Search</a>
                    </li>
                    <li className="md:my-auto">
                    <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-green-150 md:hover:bg-transparent md:border-0  md:p-0 onHover">Genres</a>
                    </li>
                    <li className="md:my-auto">
                    <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-green-150 md:hover:bg-transparent md:border-0  md:p-0 onHover">MyList</a>
                    </li>

                    {logged ? <li className="md:my-auto">
                    <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-green-150 md:hover:bg-transparent md:border-0  md:p-0 onHover" onClick={logOut}>Logout</a>
                    </li>: null}
                              
                    <li>
                    <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-green-150 md:py-0 md:pl-0 "><Auth/></a>
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