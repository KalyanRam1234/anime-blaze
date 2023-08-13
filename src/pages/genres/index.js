import Navbar from "@/Components/Navbar/Navbar";
import { useEffect, useState } from "react";

const Page=()=>{

    const [genres, setGenres] = useState([]);

    useEffect(()=>{
        setGenres([
            {
                "name": "Action",
                "img" : ""
            },
            {
                "name": "Fantasy",
                "img" : ""
            },
            {
                "name": "Romance",
                "img" : ""
            },
            {
                "name": "Gore",
                "img" : ""
            },
        ])
    },[])

    return (
        <div>
            <Navbar/>
            <div className="bg-[#3c3b3b] w-full min-h-screen pt-20 pb-4">
                <div className="text-white text-5xl md:mx-12 mx-4 font-bold border-b-2 border-green-150 pb-4">
                    Genres
                </div>

                <div className="pt-8 grid grid-cols-12 gap-3 px-4 md:px-12">
                    {genres.map((e)=>(
                        <div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Page;