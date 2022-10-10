import { useState } from "react";
import PosterSlider from "../components/slider/PosterSlider";
import Navbar from "../components/Navbar";
import { data } from "../data/movie";

export default function Movie(){
  const [movie, setMovie] = useState(data)
  return(
    <>
    <Navbar/>
    <PosterSlider movie={movie} category="Film" title="Movie" />
    </>
  )
}