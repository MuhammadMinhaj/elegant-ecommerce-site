'use client';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [
  {
    title: 'All iMac Pro Are 10% Discount For Today',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.',
    image: 'https://pngimg.com/uploads/macbook/macbook_PNG60.png'
  },
  {
    title: '50% Off For Your First Shopping',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.',
    image: 'https://pngimg.com/uploads/macbook/macbook_PNG19.png'
  },

  {
    title: 'Apple MacBook Air 13.3-Inch',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.',
    image: 'https://pngimg.com/uploads/macbook/macbook_PNG11.png'
  }
];

function Slider() {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true
        }}
        pagination={{
          clickable: true
        }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slides?.map((slide, ind) => (
          <SwiperSlide data-hash={`slide-${ind}`} key={slide?.title}>
            <Box bgcolor="var(--white)">
              <Box className="container" py="5rem">
                <Grid container spacing={2} direction="row-reverse">
                  <Grid item xs={12} md={6}>
                    <Box width="100%" display="flex" justifyContent={isMD ? 'center' : 'flex-end'}>
                      <Box
                        component="img"
                        src={slide.image}
                        maxWidth="450px"
                        width="100%"
                        maxHeight="400px"
                        alt="Image"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box textAlign={isMD ? 'center' : 'left'}>
                      <Typography
                        variant={isMD ? 'h3' : 'h2'}
                        color="var(--text-head)"
                        py={isMD ? '0.5rem' : '1rem'}
                      >
                        {slide.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="var(--text-pera)"
                        py={isMD ? '1rem' : '2rem'}
                      >
                        {slide.description}
                      </Typography>
                      <Box
                        display="flex"
                        flexDirection={isMD ? 'column' : 'row'}
                        alignItems="center"
                        justifyContent={isMD ? 'center' : 'flex-start'}
                      >
                        <Box
                          component="button"
                          className="custom-btn"
                          display="flex"
                          alignItems="center"
                        >
                          <ShoppingBasketIcon />
                          <Box component="span" width="1rem" />
                          Shop Now
                        </Box>
                        <Box width="1rem" height="0.5rem" />
                        <Box
                          component="button"
                          className="custom-btn-outline"
                          display="flex"
                          alignItems="center"
                        >
                          <GroupIcon />
                          <Box component="span" width="1rem" />
                          Join Now
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Slider;
