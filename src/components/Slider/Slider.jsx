import { Box } from '@mui/material';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slide from './Slide';

const slides = [
  {
    title: 'All iMac Pro Are 10% Discount For Today',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.',
    imgSrc: 'https://pngimg.com/uploads/macbook/macbook_PNG60.png'

  },
  {
    title: '50% Off For Your First Shopping',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.',
    imgSrc: 'https://pngimg.com/uploads/macbook/macbook_PNG19.png'

  },

  {
    title: 'Apple MacBook Air 13.3-Inch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convalliss.',
    imgSrc: 'https://pngimg.com/uploads/macbook/macbook_PNG11.png'
  }
];

function Slider() {
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

        {
        slides?.map((slide, ind) => (
          <SwiperSlide data-hash={`slide-${ind}`} key={slide?.title}>
            <Slide {...slide} />
          </SwiperSlide>
        ))
      }

      </Swiper>
    </Box>
  );
}

export default Slider;
