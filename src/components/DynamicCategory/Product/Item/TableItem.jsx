import {
  Box, Grow, Rating, Typography
} from '@mui/material';
import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import Slider from '../../../Common/Slider';
import Actions from './Actions';
import ProductLabel from './ProductLabel';

function Product({ isEnd }) {
  const [isOver, setOver] = useState(false);
  const handleMouseOver = () => {
    setOver(true);
  };
  const handleMouseLeave = () => {
    setOver(false);
  };
  return (

    <Box
      component="div"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      borderBottom={`${isEnd ? '0px' : '1px'} solid #ededed`}
      display="flex"
      position="relative"
    >
      <ProductLabel position="right" />
      <Box maxWidth="250px">
        <Slider isNotArrow>
          <SwiperSlide>
            <Box component="img" py="0.5rem" width="100%" maxHeight="200px" alt="image" src="https://opencart.opencartworks.com/themes/so_flashmart/layout2/image/cache/catalog/demo/product/2-370x370.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Box component="img" py="0.5rem" maxWidth="250px" maxHeight="200px" alt="image" src="https://opencart.opencartworks.com/themes/so_flashmart/layout2/image/cache/catalog/demo/product/2-370x370.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Box component="img" py="0.5rem" maxWidth="250px" maxHeight="200px" alt="image" src="https://opencart.opencartworks.com/themes/so_flashmart/layout2/image/cache/catalog/demo/product/2-370x370.jpg" />
          </SwiperSlide>
        </Slider>
      </Box>

      <Box py="1rem" px="0.5rem">
        <Typography>Alcatra porkchop venison</Typography>
        <Rating name="size-small" defaultValue={2} size="small" />
        <Box>
          <Typography variant="h6" color="error">$50.00</Typography>
          <Box>
            <Typography component="del" variant="subtitle1" color="black">$50.00</Typography>
            {' '}
            <Typography component="span" variant="subtitle2" color="error">-10% Off</Typography>
          </Box>
        </Box>
        <Grow in={isOver}>
          <Box py="1rem">
            <Actions />
          </Box>
        </Grow>
      </Box>
    </Box>

  );
}

export default Product;
