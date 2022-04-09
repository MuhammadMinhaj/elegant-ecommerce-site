import {
  Box, Divider, Typography
} from '@mui/material';
import { FreeMode } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import Item from './Item';

function ElectronicCategory() {
  return (
    <Box className="container" py="1rem">
      <Typography variant="h5">ELECTRONIC CATEGORY</Typography>
      <Divider />
      <Box py="1rem">
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode
          pagination={{
            clickable: true
          }}
          modules={[FreeMode]}
        >
          <SwiperSlide>
            <Item title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Item title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
          </SwiperSlide>
          <SwiperSlide>

            <Item title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
          </SwiperSlide>
          <SwiperSlide>

            <Item title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Item title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Item title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Item title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Item title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
          </SwiperSlide>

        </Swiper>

      </Box>

    </Box>
  );
}

export default ElectronicCategory;
