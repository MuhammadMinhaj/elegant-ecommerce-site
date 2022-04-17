/* eslint-disable import/no-unresolved */
import CategoryIcon from '@mui/icons-material/Category';
import { Box, Grid } from '@mui/material';
import {
  A11y, Navigation, Pagination, Scrollbar
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '../Common/Title';
import CatItem from './Item';

function Item(props) {
  return (
    <Grid item xs={12} sm={12} md={4}>
      <CatItem {...props} />
    </Grid>
  );
}

function CategorySlide() {
  return (
    <Box py="2rem">
      <Grid container spacing={2}>
        <Item title="Headphones" count="12k Orders" imgSrc="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-1.png&w=1920&q=75" />

        <Item title="Glases" count="8k Orders" imgSrc="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-3.png&w=1920&q=75" />

        <Item title="Watches" count="3k Orders" imgSrc="https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-2.png&w=1920&q=75" />
      </Grid>
    </Box>
  );
}

function TopCategory() {
  return (
    <Box>
      <Box className="container" py="2rem">
        <Title title="Top Category" icon={<CategoryIcon fontSize="inherit" />} />
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
