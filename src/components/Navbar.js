import { Container, Link, Typography } from "@mui/material"

export default function Navbar(){
  return(
    <Container sx={{pt: 2, fontFamily: 'Open Sans'}}>
      <Typography variant="h3" color="red" sx={{mr: 4, fontWeight: 400, fontFamily: 'Bebas Neue', letterSpacing: 2, display: 'inline'}}>NETFLIX</Typography>
      <Link href="/" sx={{mx: 2, fontWeight: 400, letterSpacing: 0.5, fontSize: 17}} color="white" underline="none">Home</Link>
      <Link href="/tvshows" sx={{mx: 2, fontWeight: 400, letterSpacing: 0.5, fontSize: 17}} color="white" underline="none">TV Shows</Link>
      <Link href="/movie" sx={{mx: 2, fontWeight: 400, letterSpacing: 0.5, fontSize: 17}} color="white" underline="none">Movie</Link>
      <Link href="/favorite" sx={{mx: 2, fontWeight: 400, letterSpacing: 0.5, fontSize: 17}} color="white" underline="none">My List</Link>
    </Container>
  )
}