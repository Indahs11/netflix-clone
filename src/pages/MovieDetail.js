import { useParams} from "react-router-dom"
import { data } from "../data/movie"
import Navbar from "../components/Navbar"
import { CardMedia, Container, Typography, Chip, Grid, Button, Link } from "@mui/material"

export default function MovieDetail(){
  let {id} = useParams()
  let findMovie = data.find(movie => movie.id == id)

  return(
    <>
      <Navbar/>
      <Container sx={{my: 2}}>
        <CardMedia component="iframe" src={findMovie.trailer} height="550px" width="100%" sx={{border : 'none'}}></CardMedia>
        <Typography variant='h4' color='white' sx={{fontWeight: 600, mt:5, mb:1}}>{findMovie.judul}</Typography>
        {findMovie.genre.map((genre) => (
          <Chip label={genre} color='error' sx={{mr: 1, letterSpacing: 1}}></Chip>
        ))}
        <Typography variant='p' color='white' sx={{fontSize: 18, display: 'block', my:3}}>{findMovie.sinopsis}</Typography>
        <Typography variant='h5' color='white' sx={{mt:3, mb: 2, fontWeight: 600}}>Episode</Typography>
        {findMovie.drama.map((item) => (
          <Grid container spacing={4} sx={{mt: 1}}>
            <Grid item xs={4}>
              <CardMedia component='img' src={findMovie.poster} height="180px" sx={{borderRadius : 3,}}></CardMedia>
            </Grid>
            <Grid item xs={8}>
              <Typography variant='h5' color='white' sx={{my: 2, fontWeight: 600}}>{item.title}</Typography>
              <Typography variant='p' color='gray' sx={{fontSize: 16, display: 'block', mb: 2}}>{item.sinopsis}</Typography>
              <Button variant="contained" color="error" size="small" sx={{borderRadius: 50, px :2, textTransform: 'capitalize'}}><Link underline="none" color="white" href={item.link}>Tonton Sekarang</Link></Button>
            </Grid>
          </Grid>
        ))}
      </Container>
    </>
  )
}