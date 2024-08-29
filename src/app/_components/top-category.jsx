'use client';
import CategoryIcon from '@mui/icons-material/Category';
import { Box, CardActionArea, Grid, Typography } from '@mui/material';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '../../components/title';

function CategorySlide() {
  return (
    <Box py="2rem">
      <Grid container spacing={2}>
        {[
          {
            name: 'Headphones',
            count: '12k Orders',
            image:
              'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-1.png&w=1920&q=75'
          },
          {
            name: 'Glases',
            count: '8k Orders',
            image:
              'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-3.png&w=1920&q=75'
          },
          {
            name: 'Watches',
            count: '3k Orders',
            image:
              'https://bazar-react.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fcategory-2.png&w=1920&q=75'
          }
        ].map((category, j) => (
          <Grid key={j} item xs={12} sm={12} md={4}>
            <Box bgcolor="var(--white)" p="0.75rem" borderRadius="2rem">
              <CardActionArea sx={{ borderRadius: '1rem' }}>
                <Box
                  sx={{
                    backgroundImage: `url("${category.image}")`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    maxWidth: '400',
                    width: '100%',
                    height: '120px',
                    borderRadius: '1rem'
                  }}
                >
                  <Box height="100%" position="relative">
                    <Box
                      position="absolute"
                      bottom="0rem"
                      left="0"
                      bgcolor="var(--secondary)"
                      color="var(--white)"
                      borderRadius="1rem"
                      p="0.25rem"
                    >
                      <Typography variant="caption">{category.name}</Typography>
                    </Box>
                    <Box
                      position="absolute"
                      top="0rem"
                      right="0"
                      bgcolor="var(--primary)"
                      color="var(--white)"
                      borderRadius="1rem"
                      p="0.5rem"
                    >
                      <Typography variant="caption">{category.count}</Typography>
                    </Box>
                  </Box>
                </Box>
              </CardActionArea>
            </Box>
          </Grid>
        ))}
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
