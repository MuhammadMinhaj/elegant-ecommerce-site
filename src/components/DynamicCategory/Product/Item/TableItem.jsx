import {
  Box, Grow, Rating, Typography
} from '@mui/material';
import { useState } from 'react';
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
      <Box maxWidth="100px">
        <Box component="img" py="0.25rem" width="100%" height="auto" alt="image" src="https://opencart.opencartworks.com/themes/so_flashmart/layout2/image/cache/catalog/demo/product/2-370x370.jpg" />
      </Box>

      <Box p="0.5rem">
        <Rating name="size-small" defaultValue={2} size="small" />
        <Typography variant="h6" color="var(--text-head)">Alcatra porkchop venison</Typography>
        <Box>
          <Typography variant="h6" color="error">$50.00</Typography>
          <Box>
            <Typography component="del" variant="subtitle1" color="var(--text-pera)">$50.00</Typography>
            {' '}
            <Typography component="span" variant="subtitle2" color="error">-10% Off</Typography>
          </Box>
        </Box>
        <Grow in={isOver}>
          <Box py="0.25rem">
            <Actions position="left" />
          </Box>
        </Grow>
      </Box>
    </Box>

  );
}

export default Product;
