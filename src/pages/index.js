import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar/Navbar'
import Carousel from '@/Components/Home/Carousel'
import { LatestEpisodes } from '@/Components/Home/LatestEpisodes'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
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
      
      <LatestEpisodes/>
   </>
  )
}
