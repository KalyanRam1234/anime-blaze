import Navbar from "@/Components/Navbar/Navbar";
import { AnimeWatch } from "@/Components/Watch/AnimeWatch";
import { useEffect } from "react";

const Page=({data})=>{
   
    return(
        <div>
            <Navbar/>
            <AnimeWatch info={data} />
        </div>
    )
}

export default Page;

export async function getServerSideProps(context) {

    // Fetch data from external API
    const id=context.params.id;
    const res = await fetch(process.env.NEXT_PUBLIC_ANIME_API+`/info/${id}`)
    const data = await res.json()
    return { props: { data } }

  }
  