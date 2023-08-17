import Navbar from "@/Components/Navbar/Navbar";
import { AnimeWatch } from "@/Components/Watch/AnimeWatch";
import { useEffect } from "react";

const Page=({data, episodeNumber})=>{
   
    return(
        <div>
            <Navbar/>
            <AnimeWatch info={data} id={episodeNumber}/>
        </div>
    )
}

export default Page;

export async function getServerSideProps(context) {

    // Fetch data from external API
    const id=context.params.id;
    const episodeNumber=context.query.episode? context.query.episode: null;
    const res = await fetch(process.env.NEXT_PUBLIC_ANIME_API+`/info/${id}`)
    const data = await res.json()
    return { props: { data , episodeNumber} }

  }
  