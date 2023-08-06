import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar'
import Carousel from '@/Components/Home/Carousel'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
      <Navbar/>
      <Carousel images={[
        {
          src: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/145064-kH9vbOEitIhl.jpg"
        },
        {
          src: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/147103-MwFq1R7jphZT.jpg"
        }
      ]} showControls={true} showIndicators={true} />
      {/* <SlideShow/> */}
   </>
  )
}
