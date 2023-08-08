import { HomeContext } from "@/pages";
import { useContext,useEffect,useState } from "react";

export const LatestEpisodes = () => {
    const {page}=useContext(HomeContext);
    const {setPage}=useContext(HomeContext);
    const [episodes, setEpisodes]=useState([]);

    return (
        <div className="border-t-2 border-green-150">
            <Heading page={page} setPage={setPage} setEpisodes={setEpisodes}/>
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
                    <h5 className="mb-1 text-lg xl:text-xl font-semibold text-green-150 truncate">
                      {e.title}
                    </h5>
                  <p className="mb-3 font-normal text-white">
                    Episode Number: {e.episodeNumber}
                  </p>
                  
                </div>
              </div>
            ))}
        </div>
      </div>
        </div>
      
    );
  };

const Heading=({page, setPage, setEpisodes})=>{

    useEffect(()=>{
      setEpisodes([
          
        {
            "id": "masamune-kun-no-revenge-r",
            "episodeId": "masamune-kun-no-revenge-r-episode-6",
            "episodeNumber": 6,
            "title": "Masamune-kun no Revenge R",
            "image": "https://gogocdn.net/cover/masamune-kun-no-revenge-r-1688155880.png",
            "url": "https://gogoanimehd.to/masamune-kun-no-revenge-r-episode-6"
        },
        {
            "id": "dr-slump-arale-chan",
            "episodeId": "dr-slump-arale-chan-episode-143",
            "episodeNumber": 143,
            "title": "Dr. Slump: Arale-chan",
            "image": "https://gogocdn.net/cover/dr-slump-arale-chan.png",
            "url": "https://gogoanimehd.to/dr-slump-arale-chan-episode-143"
        },
        {
            "id": "tousouchuu-great-mission",
            "episodeId": "tousouchuu-great-mission-episode-17",
            "episodeNumber": 17,
            "title": "Tousouchuu: Great Mission",
            "image": "https://gogocdn.net/cover/tousouchuu-great-mission-1680203786.png",
            "url": "https://gogoanimehd.to/tousouchuu-great-mission-episode-17"
        },
        {
            "id": "maple-town-no-koutsuu-anzen",
            "episodeId": "maple-town-no-koutsuu-anzen-episode-1",
            "episodeNumber": 1,
            "title": "Maple Town no Koutsuu Anzen",
            "image": "https://gogocdn.net/cover/maple-town-no-koutsuu-anzen.png",
            "url": "https://gogoanimehd.to/maple-town-no-koutsuu-anzen-episode-1"
        },
        {
            "id": "peter-pan-no-bouken-specials",
            "episodeId": "peter-pan-no-bouken-specials-episode-2",
            "episodeNumber": 2,
            "title": "Peter Pan no Bouken Specials",
            "image": "https://gogocdn.net/cover/peter-pan-no-bouken-specials.png",
            "url": "https://gogoanimehd.to/peter-pan-no-bouken-specials-episode-2"
        },
        {
            "id": "yami-shibai-11",
            "episodeId": "yami-shibai-11-episode-5",
            "episodeNumber": 5,
            "title": "Yami Shibai 11",
            "image": "https://gogocdn.net/cover/yami-shibai-11.png",
            "url": "https://gogoanimehd.to/yami-shibai-11-episode-5"
        },
        {
            "id": "saezuru-tori-wa-habatakanai-dont-stay-gold",
            "episodeId": "saezuru-tori-wa-habatakanai-dont-stay-gold-episode-1",
            "episodeNumber": 1,
            "title": "Saezuru Tori wa Habatakanai: Don't Stay Gold",
            "image": "https://gogocdn.net/cover/saezuru-tori-wa-habatakanai-dont-stay-gold.png",
            "url": "https://gogoanimehd.to/saezuru-tori-wa-habatakanai-dont-stay-gold-episode-1"
        },
        {
            "id": "dark-gathering",
            "episodeId": "dark-gathering-episode-5",
            "episodeNumber": 5,
            "title": "Dark Gathering",
            "image": "https://gogocdn.net/cover/dark-gathering-1688153412.png",
            "url": "https://gogoanimehd.to/dark-gathering-episode-5"
        },
        {
            "id": "mushoku-tensei-ii-isekai-ittara-honki-dasu",
            "episodeId": "mushoku-tensei-ii-isekai-ittara-honki-dasu-episode-5",
            "episodeNumber": 5,
            "title": "Mushoku Tensei II: Isekai Ittara Honki Dasu",
            "image": "https://gogocdn.net/cover/mushoku-tensei-ii-isekai-ittara-honki-dasu-1688156063.png",
            "url": "https://gogoanimehd.to/mushoku-tensei-ii-isekai-ittara-honki-dasu-episode-5"
        },
        {
            "id": "genjitsu-no-yohane-sunshine-in-the-mirror",
            "episodeId": "genjitsu-no-yohane-sunshine-in-the-mirror-episode-7",
            "episodeNumber": 7,
            "title": "Genjitsu no Yohane: Sunshine in the Mirror",
            "image": "https://gogocdn.net/cover/genjitsu-no-yohane-sunshine-in-the-mirror-1688153702.png",
            "url": "https://gogoanimehd.to/genjitsu-no-yohane-sunshine-in-the-mirror-episode-7"
        },
        {
            "id": "eiyuu-kyoushitsu",
            "episodeId": "eiyuu-kyoushitsu-episode-5",
            "episodeNumber": 5,
            "title": "Eiyuu Kyoushitsu",
            "image": "https://gogocdn.net/cover/eiyuu-kyoushitsu-1688153586.png",
            "url": "https://gogoanimehd.to/eiyuu-kyoushitsu-episode-5"
        },
        {
            "id": "shinigami-bocchan-to-kuro-maid-2nd-season",
            "episodeId": "shinigami-bocchan-to-kuro-maid-2nd-season-episode-5",
            "episodeNumber": 5,
            "title": "Shinigami Bocchan to Kuro Maid 2nd Season",
            "image": "https://gogocdn.net/cover/shinigami-bocchan-to-kuro-maid-2nd-season-1688157471.png",
            "url": "https://gogoanimehd.to/shinigami-bocchan-to-kuro-maid-2nd-season-episode-5"
        },
        {
            "id": "bakugan-battle-brawlers-new-vestroia",
            "episodeId": "bakugan-battle-brawlers-new-vestroia-episode-26",
            "episodeNumber": 26,
            "title": "Bakugan Battle Brawlers: New Vestroia",
            "image": "https://gogocdn.net/cover/bakugan-battle-brawlers-new-vestroia.png",
            "url": "https://gogoanimehd.to/bakugan-battle-brawlers-new-vestroia-episode-26"
        },
        {
            "id": "marie-gali-ver-2-0",
            "episodeId": "marie-gali-ver-2-0-episode-30",
            "episodeNumber": 30,
            "title": "Marie & Gali ver. 2.0",
            "image": "https://gogocdn.net/cover/marie-gali-ver-2-0.jpg",
            "url": "https://gogoanimehd.to/marie-gali-ver-2-0-episode-30"
        },
        {
            "id": "one-piece",
            "episodeId": "one-piece-episode-1071",
            "episodeNumber": 1071,
            "title": "One Piece",
            "image": "https://gogocdn.net/images/anime/One-piece.jpg",
            "url": "https://gogoanimehd.to/one-piece-episode-1071"
        },
        {
            "id": "hirogaru-sky-precure",
            "episodeId": "hirogaru-sky-precure-episode-27",
            "episodeNumber": 27,
            "title": "Hirogaru Sky! Precure",
            "image": "https://gogocdn.net/cover/hirogaru-sky-precure.png",
            "url": "https://gogoanimehd.to/hirogaru-sky-precure-episode-27"
        },
        {
            "id": "go-go-vehicle-zoo",
            "episodeId": "go-go-vehicle-zoo-episode-15",
            "episodeNumber": 15,
            "title": "Go! Go! Vehicle Zoo",
            "image": "https://gogocdn.net/cover/go-go-vehicle-zoo-1681007903.png",
            "url": "https://gogoanimehd.to/go-go-vehicle-zoo-episode-15"
        },
        {
            "id": "jitsu-wa-ore-saikyou-deshita",
            "episodeId": "jitsu-wa-ore-saikyou-deshita-episode-5",
            "episodeNumber": 5,
            "title": "Jitsu wa Ore, Saikyou deshita?",
            "image": "https://gogocdn.net/cover/jitsu-wa-ore-saikyou-deshita-1688154877.png",
            "url": "https://gogoanimehd.to/jitsu-wa-ore-saikyou-deshita-episode-5"
        },
        {
            "id": "uchi-no-kaisha-no-chiisai-senpai-no-hanashi",
            "episodeId": "uchi-no-kaisha-no-chiisai-senpai-no-hanashi-episode-5",
            "episodeNumber": 5,
            "title": "Uchi no Kaisha no Chiisai Senpai no Hanashi",
            "image": "https://gogocdn.net/cover/uchi-no-kaisha-no-chiisai-senpai-no-hanashi-1688157938.png",
            "url": "https://gogoanimehd.to/uchi-no-kaisha-no-chiisai-senpai-no-hanashi-episode-5"
        }
    ])
    }, [page, setPage]);

    return (
        <div className="flex flex-row px-4 md:px-12  py-4 bg-[#242428] w-full ">
        <div className='text-green-150 text-2xl font-semibold py-2'>Latest Episodes</div>
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
                if(page<5) setPage(page+1)
              }}>
              <img src="/images/next.png" className='w-6 m-2'/>
            </button>
          </div>
         
        </div>
    </div>
    )
}