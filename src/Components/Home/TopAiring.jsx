import { HomeContext } from "@/pages";
import { useContext, useEffect,useState } from "react";

export const TopAiring=()=>{

    const {toppage}=useContext(HomeContext);
    const {setTopPage}=useContext(HomeContext);
    const [episodes, setEpisodes]=useState([]);

    return (
        <div className="border-t-2 border-green-150">
            <Heading page={toppage} setPage={setTopPage}  setEpisodes={setEpisodes}/>
            <div className="bg-[#242428] w-full pb-4 ">
        <div className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 px-4 md:px-12">
            {episodes.map((e)=>(
                <div className="transition ease-in-out  hover:-translate-y-1 hover:scale-105  duration-300" key={e.episodeId}>
                <a href="#">
                  <img
                    className="object-cover h-[60vw] xs:h-[45vw] md:h-[30vw] lg:h-[24vw] xl:h-[22vw] 2xl:h-[20vw] w-full"
                    src={e.image}
                    alt={e.title}
                  />
                </a>
                <div className="pt-3">
                    <h5 className="mb-1 text-lg xl:text-xl font-semibold text-green-150 h-20 ">
                      {e.title}
                    </h5>
                  
                </div>
              </div>
            ))}
        </div>
      </div>

        </div>
    )
}

const Heading=({page, setPage, setEpisodes})=>{

    useEffect(()=>{
        setEpisodes(
            [
                {
                    "id": "watashi-no-shiawase-na-kekkon",
                    "title": "Watashi no Shiawase na Kekkon",
                    "image": "https://gogocdn.net/cover/watashi-no-shiawase-na-kekkon-1688158075.png",
                    "url": "https://gogoanimehd.to/category/watashi-no-shiawase-na-kekkon",
                    "genres": [
                        "Fantasy",
                        "Historical",
                        "Romance"
                    ]
                },
                {
                    "id": "zom-100-zombie-ni-naru-made-ni-shitai-100-no-koto",
                    "title": "Zom 100: Zombie ni Naru made ni Shitai 100 no Koto",
                    "image": "https://gogocdn.net/cover/zom-100-zombie-ni-naru-made-ni-shitai-100-no-koto-1686557998.png",
                    "url": "https://gogoanimehd.to/category/zom-100-zombie-ni-naru-made-ni-shitai-100-no-koto",
                    "genres": [
                        "Action",
                        "Adult Cast",
                        "Comedy",
                        "Horror",
                        "Seinen",
                        "Supernatural",
                        "Survival"
                    ]
                },
                {
                    "id": "mushoku-tensei-ii-isekai-ittara-honki-dasu",
                    "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu",
                    "image": "https://gogocdn.net/cover/mushoku-tensei-ii-isekai-ittara-honki-dasu-1688156063.png",
                    "url": "https://gogoanimehd.to/category/mushoku-tensei-ii-isekai-ittara-honki-dasu",
                    "genres": [
                        "Drama",
                        "Ecchi",
                        "Fantasy",
                        "Isekai",
                        "Reincarnation"
                    ]
                },
                {
                    "id": "jujutsu-kaisen-tv-2nd-season",
                    "title": "Jujutsu Kaisen 2nd Season",
                    "image": "https://gogocdn.net/cover/jujutsu-kaisen-tv-2nd-season-1688154932.png",
                    "url": "https://gogoanimehd.to/category/jujutsu-kaisen-tv-2nd-season",
                    "genres": [
                        "Action",
                        "Fantasy",
                        "School",
                        "Shounen"
                    ]
                },
                {
                    "id": "bleach-sennen-kessen-hen-ketsubetsu-tan",
                    "title": "Bleach: Sennen Kessen-hen - Ketsubetsu-tan",
                    "image": "https://gogocdn.net/cover/bleach-sennen-kessen-hen-ketsubetsu-tan-1688151974.png",
                    "url": "https://gogoanimehd.to/category/bleach-sennen-kessen-hen-ketsubetsu-tan",
                    "genres": [
                        "Action",
                        "Adventure",
                        "Fantasy",
                        "Shounen"
                    ]
                },
                {
                    "id": "suki-na-ko-ga-megane-wo-wasureta",
                    "title": "Suki na Ko ga Megane wo Wasureta",
                    "image": "https://gogocdn.net/cover/suki-na-ko-ga-megane-wo-wasureta-1688157809.png",
                    "url": "https://gogoanimehd.to/category/suki-na-ko-ga-megane-wo-wasureta",
                    "genres": [
                        "Comedy",
                        "Romantic Subtext",
                        "School",
                        "Shounen"
                    ]
                },
                {
                    "id": "kanojo-okarishimasu-3rd-season",
                    "title": "Kanojo, Okarishimasu 3rd Season",
                    "image": "https://gogocdn.net/cover/kanojo-okarishimasu-3rd-season-1688155060.png",
                    "url": "https://gogoanimehd.to/category/kanojo-okarishimasu-3rd-season",
                    "genres": [
                        "Comedy",
                        "Romance",
                        "Shounen"
                    ]
                },
                {
                    "id": "bungou-stray-dogs-5th-season",
                    "title": "Bungou Stray Dogs 5th Season",
                    "image": "https://gogocdn.net/cover/bungou-stray-dogs-5th-season.png",
                    "url": "https://gogoanimehd.to/category/bungou-stray-dogs-5th-season",
                    "genres": [
                        "Action",
                        "Adult Cast",
                        "Mystery",
                        "Organized Crime",
                        "Seinen",
                        "Super Power",
                        "Supernatural"
                    ]
                },
                {
                    "id": "horimiya-piece",
                    "title": "Horimiya: Piece",
                    "image": "https://gogocdn.net/cover/horimiya-piece.png",
                    "url": "https://gogoanimehd.to/category/horimiya-piece",
                    "genres": [
                        "Romance",
                        "School",
                        "Shounen"
                    ]
                },
                {
                    "id": "masamune-kun-no-revenge-r",
                    "title": "Masamune-kun no Revenge R",
                    "image": "https://gogocdn.net/cover/masamune-kun-no-revenge-r-1688155880.png",
                    "url": "https://gogoanimehd.to/category/masamune-kun-no-revenge-r",
                    "genres": [
                        "Comedy",
                        "Harem",
                        "Romance",
                        "School",
                        "Shounen"
                    ]
                }
            ]
        )
      }, [page, setPage]);
  

    return (
        <div className="flex flex-row px-4 md:px-12  py-4 bg-[#242428] w-full ">
        <div className='text-green-150 text-2xl font-semibold py-2'>Top Airing</div>
        <div className='ml-auto text-white text-lg my-auto'>
          <div className=" flex flex-row">
            <button
              className=" text-white border-none cursor-pointer outline-none bg-[#3A3A3E] rounded-lg  hover:bg-green-150" onClick={()=>{
                if(page>1) setPage(page-1)
              }}>
              <img src="/images/prev.png" className='w-6 m-2'/>
            </button>
            <div className='my-auto mx-2'>{page}</div>
            <button
              className=" text-white border-none cursor-pointer outline-none  bg-[#3A3A3E] rounded-lg  hover:bg-green-150" onClick={()=>{
                if(page<10) setPage(page+1)
              }}>
              <img src="/images/next.png" className='w-6 m-2'/>
            </button>
          </div>
         
        </div>
    </div>
    )
}