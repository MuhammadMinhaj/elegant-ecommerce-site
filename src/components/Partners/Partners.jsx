import GroupWorkIcon from '@mui/icons-material/GroupWork';
import { Box, Grid } from '@mui/material';
import {
  A11y, Navigation, Pagination, Scrollbar
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Title from '../Common/Title';
import Item from './PartnerItem';

function CategorySlide() {
  return (
    <Box py="2rem">
      <Grid container spacing={2}>
        <Item title="Roccat" count="12k Orders" imgSrc="/images/partner-one.png" />

        <Item title="MSI" count="8k Orders" imgSrc="/images/partner-two.png" />

        <Item title="Razer" count="3k Orders" imgSrc="/images/partner-three.png" />
      </Grid>
    </Box>
  );
}

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

export default Partners;

// import {Box,Grid} from '@mui/material'
// import PartnerItem from './PartnerItem';

// function Partners() {
//   return (
//     <Box className="container">
//       <Grid container>

//           <PartnerItem imgSrc="/images/partner-one.png" link="/" />
//           <PartnerItem imgSrc="/images/partner-one.png" link="/" />
//           <PartnerItem imgSrc="/images/partner-two.png" link="/" />
//           <PartnerItem imgSrc="/images/partner-three.png" link="/" />
//           <PartnerItem imgSrc="/images/partner-four.png" link="/" />
//           <PartnerItem imgSrc="/images/partner-five.png" link="/" />

//       </Grid>
//     </Box>
//   );
// }

// export default Partners;
