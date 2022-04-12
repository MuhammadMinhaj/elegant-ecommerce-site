import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { Box, Grid } from '@mui/material';
import { SwiperSlide } from 'swiper/react';
import Slider from '../../Common/Slider';
import Title from '../../Common/Title';
import CardItem from './CardItem';

function CardList() {
  return (
    <Box py="2rem">
      <Grid container spacing={2}>
        <CardItem />
        <CardItem />
        <CardItem />
      </Grid>
    </Box>

  );
}

function ClientTestimonials() {
  return (
    <Box py="0.25rem" bgcolor="var(--primary)" color="var(--white)">
      <Box className="container">
        <Title tColor="var(--white-gray)" title="What Our Clients Say" icon={<ChatBubbleIcon fontSize="inherit" />} />
        <Slider>
          <SwiperSlide>
            <CardList />
          </SwiperSlide>
          <SwiperSlide>
            <CardList />
          </SwiperSlide>
          <SwiperSlide>
            <CardList />
          </SwiperSlide>
        </Slider>
      </Box>
    </Box>
  );
}

export default ClientTestimonials;
