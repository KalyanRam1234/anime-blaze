import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar/Navbar'
import Carousel from '@/Components/Home/Carousel'
import { LatestEpisodes } from '@/Components/Home/LatestEpisodes'
import { useEffect, useState } from 'react'
import { createContext} from 'react'
import { TopAiring } from '@/Components/Home/TopAiring'

export const HomeContext=createContext(null);

export default function Home({data}) {

  const [page, setPage]=useState(1);
  const [toppage, setTopPage]=useState(1);
  const [images, setImages]=useState([]);

  return (
   <HomeContext.Provider value={{page, setPage, toppage, setTopPage}}>
      <Navbar/>
      <Carousel images={data} showControls={true} showIndicators={true} />
      
      <div>

        <LatestEpisodes/> 
      </div>

      <TopAiring/>
   </HomeContext.Provider>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(process.env.NEXT_PUBLIC_ANIME_API+`/top-airing?page=1`)
  const results = await res.json()
  const spotlight=results?.results; 
  let data=[]
  //need to do some kind of matching
  for(var i=0;i<spotlight?.length;i++){
    let original=spotlight[i]['title']
    let res=await fetch(process.env.NEXT_PUBLIC_ENIME_API+`/${original}`);
    let val=await res.json();
    var output=val?.results
      if(output.length>0){

        var p=0;
        for(var x=0;x<output.length;x++) {
          if(output.length>1 && output[x].type!="OVA"){
            p=x;
            break;
          }
        }
        
        var img=output[p]['cover'];
        if(img==undefined || img==null) img=output[p]['image'];
        var title=output[p]['title'];
        var description=output[p]['description'];
        var id=spotlight[i]['id']
        data.push({
          "src": img,
          "title" : title,
          "description": description,
          "original": id
        })
      }
  }

  return { props: { data } }
}
