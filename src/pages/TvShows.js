import { useState } from "react";
import PosterSlider from "../components/slider/PosterSlider";
import Navbar from "../components/Navbar";
import { data } from "../data/movie";

export default function TvShows(){
  const [movie, setMovie] = useState(data)
  return(
    <>
    <Navbar/>
    <PosterSlider movie={movie} category="TV Shows" title="Variety Show" />
    <PosterSlider movie={movie} category="Misteri" title="Penuh Misteri" />
    <PosterSlider movie={movie} category="Komedi" title="Adegan Komedi" />
    <PosterSlider movie={movie} category="Kejahatan" title="Penuh Ketegangan" />
    </>
  )
}