import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/Navbar'
import { SlideShow } from '@/Components/Home/SlideShow'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
      <Navbar/>
      {/* <SlideShow/> */}
   </>
  )
}
