/* eslint-disable import/no-unresolved */
import { Box } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import Slider from '../../Common/Slider';

function Slide({ imgSrc }) {
  return (
    <Box>
      <Box component="img" src={imgSrc} width="100%" maxHeight="650px" />
    </Box>

  );
}

function ShopSlider() {
  return (
    <Box>
      <Slider>
        <SwiperSlide>
          <Slide imgSrc="https://img.freepik.com/free-photo/agv-robots-efficiently-sorting-hundreds-parcels-per-hour-automated-guided-vehicle-agv-3d-rendering_41470-3414.jpg?w=1800" />
        </SwiperSlide>
        <SwiperSlide>

          <Slide imgSrc="https://img.freepik.com/free-photo/shopping-cart-shopping-bags-credit-card-up-stairs-tablet-which-is-online-shop-store-internet-digital-market_42098-193.jpg?w=1380" />
        </SwiperSlide>
        <SwiperSlide>
          <Slide imgSrc="https://img.freepik.com/free-photo/agv-forklift-trucks-transport-more-with-safety-warehouse-3d-rendering_41470-2905.jpg?w=1800" />
        </SwiperSlide>

      </Slider>
    </Box>
  );
}

export default ShopSlider;
