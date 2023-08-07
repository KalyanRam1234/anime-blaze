import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar/Navbar'
import Carousel from '@/Components/Home/Carousel'
import { LatestEpisodes } from '@/Components/Home/LatestEpisodes'
import { useState } from 'react'
import { createContext} from 'react'

export const HomeContext=createContext(null);

export default function Home() {

  const [page, setPage]=useState(1);

  return (
   <HomeContext.Provider value={{page, setPage}}>
      <Navbar/>
      <Carousel images={[
        {
          src: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/145064-kH9vbOEitIhl.jpg",
          title: "Jujutsu Kaisen 2nd Season",
          description: "The second season of <i>Jujutsu Kaisen</i>.<br>\n<br>\nThe past comes to light when second-year students Satoru Gojou and Suguru Getou are tasked with escorting young Riko Amanai to Master Tengen. But when a non-sorcerer user tries to kill them, their mission to protect the Star Plasma Vessel threatens to turn them into bitter enemies and cement their destinies—one as the world’s strongest sorcerer, and the other its most twisted curse user."
        },
        {
          src: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/147103-MwFq1R7jphZT.jpg",
          title: "My Happy Marriage",
          description: "Despite being born into a noble family, Miyo lost her birth mother at a young age and grew up being abused by her stepmother, stepsister, and father.When she finally receives news that she's to be married off, she finds out that her husband-to-be is Kiyoka, a soldier with a reputation for being cruel and heartless. In fact, he's had numerous previous fiancées who have all fled his household; none lasting even a mere three days."
        },
        {
          src: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",
          title: "Demon Slayer",
          description: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family."
        }
      ]} showControls={true} showIndicators={true} />
      
      <div>

        <LatestEpisodes episodes={[
          
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
      ]}/>
      </div>
   </HomeContext.Provider>
  )
}
