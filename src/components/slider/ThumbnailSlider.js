import { CardMedia } from '@mui/material';
import { Container } from '@mui/system';
import { Splide, SplideSlide } from '@splidejs/react-splide';

export default function ThumbnailSlider() {
  return (
    <Container sx={{mt: 3}}>
      <Splide aria-label="Thumbnail">
        <SplideSlide>
          <CardMedia component="img" src="https://about.vidio.com/wp-content/uploads/2022/07/Happiness-Thumbnail.png" alt="Image 1" width="100%" height="500" sx={{borderRadius: 5}}></CardMedia>
        </SplideSlide>
        <SplideSlide>
          <CardMedia component="img" src="https://i0.wp.com/drakorclass.com/wp-content/uploads/2020/12/itaewonclass-thumbnail-scaled-1.jpg?fit=780%2C410&ssl=1" alt="Image 1" width="100%" height="500" sx={{borderRadius: 5}}></CardMedia>
        </SplideSlide>
      </Splide>
    </Container>
  );
}
