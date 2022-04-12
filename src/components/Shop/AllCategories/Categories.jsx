import { Box, Grid } from '@mui/material';
import {
  A11y, Navigation, Pagination, Scrollbar
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Item from '../../TopCategory/Item';

function CategorySlide() {
  return (
    <Box py="2rem">
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Item title="Headphones" count="12k Orders" imgSrc="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-1.png&w=1920&q=75" />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Item title="Glases" count="8k Orders" imgSrc="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-3.png&w=1920&q=75" />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Item title="Watches" count="3k Orders" imgSrc="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-2.png&w=1920&q=75" />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Item title="Watches" count="3k Orders" imgSrc="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-2.png&w=1920&q=75" />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Item title="Watches" count="3k Orders" imgSrc="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-2.png&w=1920&q=75" />
        </Grid>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Item title="Watches" count="3k Orders" imgSrc="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-2.png&w=1920&q=75" />
        </Grid>

      </Grid>
    </Box>
  );
}

function TopCategory() {
  return (
    <Box>
      <Box className="container">
        <Swiper
          spaceBetween={30}
          hashNavigation={{
            watchState: true
          }}
          pagination={{
            clickable: true
          }}
          navigation
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="mySwiper"
        >
          <SwiperSlide data-hash="slide-1">
            <CategorySlide />
          </SwiperSlide>
          <SwiperSlide data-hash="slide-2">
            <CategorySlide />
          </SwiperSlide>
          <SwiperSlide data-hash="slide-3">
            <CategorySlide />
          </SwiperSlide>
        </Swiper>

      </Box>
    </Box>

  );
}

export default TopCategory;
