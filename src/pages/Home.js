import Navbar from "../components/Navbar"
import ThumbnailSlider from "../components/slider/ThumbnailSlider"
import PosterSlider from "../components/slider/PosterSlider"
import { useState } from "react"
import {data} from '../data/movie'

export default function Home(){
  const [movie, setMovie] = useState(data)

  return(
    <>
      <Navbar/>
      <ThumbnailSlider/>
      <PosterSlider title="Pilihan Terbaru" movie={movie} category="new" />
      <PosterSlider title="Romance" movie={movie} category="Romance" />
      <PosterSlider title="Penuh Misteri" movie={movie} category="Misteri" />
    </>
  )
}