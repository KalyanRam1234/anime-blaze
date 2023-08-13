import Navbar from "@/Components/Navbar/Navbar";
import { AnimeWatch } from "@/Components/Watch/AnimeWatch";

const Page=()=>{
    
    return(
        <div>
            <Navbar/>
            <AnimeWatch episodes={[
                {
                    "name": "Anya Forger"
                },
                {
                    "name" : "Twilight"
                },
                {
                    "name": "karasuno fight"
                },
                {
                    "name": "Anya Forger"
                },
                {
                    "name" : "Twilight"
                },
                {
                    "name": "karasuno fight"
                },
                {
                    "name": "Anya Forger"
                },
                {
                    "name" : "Twilight"
                },
                {
                    "name": "karasuno fight"
                },
            ]}/>
        </div>
    )
}

export default Page;