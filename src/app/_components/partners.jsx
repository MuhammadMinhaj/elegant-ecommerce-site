'use client';
import Title from '@/components/title';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import { Box, CardActionArea, Grid, Typography } from '@mui/material';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function Partners() {
  return (
    <Box>
      <Box className="container" py="2rem">
        <Title title="Our Partners" icon={<GroupWorkIcon fontSize="inherit" />} />
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
          {[
            [
              {
                title: 'Roccat',
                image: '/images/partner-one.png',
                count: '12k Orders'
              },
              {
                title: 'MSI',
                image: '/images/partner-two.png',
                count: '8k Orders'
              },
              {
                title: 'Razer',
                image: '/images/partner-three.png',
                count: '3k Orders'
              }
            ],
            [
              {
                title: 'Roccat',
                image: '/images/partner-one.png',
                count: '12k Orders'
              },
              {
                title: 'MSI',
                image: '/images/partner-two.png',
                count: '8k Orders'
              },
              {
                title: 'Razer',
                image: '/images/partner-three.png',
                count: '3k Orders'
              }
            ],
            [
              {
                title: 'Roccat',
                image: '/images/partner-one.png',
                count: '12k Orders'
              },
              {
                title: 'MSI',
                image: '/images/partner-two.png',
                count: '8k Orders'
              },
              {
                title: 'Razer',
                image: '/images/partner-three.png',
                count: '3k Orders'
              }
            ]
          ].map((items, i) => (
            <SwiperSlide key={i} data-hash={`slide-${i}`}>
              <Box py="2rem">
                <Grid container spacing={2}>
                  {items.map((item, j) => (
                    <Grid key={j} item xs={12} sm={12} md={4}>
                      <Box bgcolor="var(--white)" p="0.75rem" borderRadius="2rem">
                        <CardActionArea sx={{ borderRadius: '1rem' }}>
                          <Box
                            sx={{
                              backgroundImage: `url("${item.image}")`,
                              backgroundSize: 'cover',
                              backgroundRepeat: 'no-repeat',
                              maxWidth: '400',
                              width: '100%',
                              height: '150px',
                              borderRadius: '1rem'
                            }}
                          >
                            <Box height="100%" position="relative">
                              <Box
                                position="absolute"
                                top="0rem"
                                right="0"
                                bgcolor="var(--primary)"
                                color="var(--white)"
                                borderRadius="1rem"
                                p="0.5rem"
                              >
                                <Typography variant="caption">{item.title}</Typography>
                              </Box>
                            </Box>
                          </Box>
                        </CardActionArea>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}

export default Partners;
