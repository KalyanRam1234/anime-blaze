import Navbar from "@/Components/Navbar/Navbar";
import { AnimeWatch } from "@/Components/Watch/AnimeWatch";
import { useEffect } from "react";
import { Comments } from "@/Components/Watch/Comments";
const Page=({data, episodeNumber})=>{
   const id=data.episodes[0].id.split("-episode")[0]
    return(
        <div>
            <Navbar/>
            <AnimeWatch info={data} id={episodeNumber}/>
            <Comments animeId={id}/>
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
  