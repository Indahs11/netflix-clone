import './App.css';
import '@splidejs/react-splide/css';
import Home from './pages/Home'
import TvShows from './pages/TvShows';
import Movie from './pages/Movie';
import MovieDetail from './pages/MovieDetail';
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/tvshows" element={<TvShows/>}></Route>
        <Route path="/movie" element={<Movie/>}></Route>
        <Route path="/favorite" element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/:id" element={<MovieDetail/>}></Route>
      </Routes>
    </BrowserRouter>
    // <Home />
  )
}
