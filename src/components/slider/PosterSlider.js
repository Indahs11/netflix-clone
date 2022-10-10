import { CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Container } from '@mui/system';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function PosterSlider({title, movie, category}) {
  let movieList
  if(category == "new"){
    movieList = movie.filter((movie) => movie.tayang == "2022")
  }else if(category == "TV Shows"){
    movieList = movie.filter((movie) => movie.category == "Variety Show")
  }else if(category == "Film"){
    movieList = movie.filter((movie) => movie.category == "Film")
  }else if(category == "Romance" || category == "Misteri" || category == "Komedi" || category == "Kejahatan"){
    let romanceGenre = []
    for (let i = 0; i < movie.length; i++) {
        let list = movie[i].genre;
        for (let j = 0; j < list.length; j++) {
          if(list[j] == category)
          romanceGenre.push(movie[i])
        }
      }
    movieList = romanceGenre
  }

  return (
    <Container sx={{mt: 5, mb: 3}}>
      <Typography variant='h5' color='white' sx={{fontWeight: 600, letterSpacing: 0.5, mb: 2}}>{title}</Typography>
      <Splide aria-label="Poster" options={{perPage: 6, gap: 10}}>
        {movieList.map((item) => (
          <SplideSlide>
            <Link to={`/${item.id}`}>
              <CardMedia className="card-img" component="img" src={item.poster} alt="Image 1" width="100%" height="280" sx={{borderRadius: 2}}></CardMedia>
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </Container>
  );
}