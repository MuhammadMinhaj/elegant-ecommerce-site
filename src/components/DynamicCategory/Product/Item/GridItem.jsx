import {
  Box, Grow, Rating, Typography
} from '@mui/material';
import { useState } from 'react';
import Actions from './Actions';
import ProductLabel from './ProductLabel';

function Product() {
  const [isOver, setOver] = useState(false);
  const handleMouseOver = () => {
    setOver(true);
  };
  const handleMouseLeave = () => {
    setOver(false);
  };
  return (
    <Box position="relative" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} border={isOver ? '1px solid #ededed' : '1px solid var(--white)'}>
      <ProductLabel />
      <Box component="img" width="100%" height="auto" alt="image" src="https://opencart.opencartworks.com/themes/so_flashmart/layout2/image/cache/catalog/demo/product/2-370x370.jpg" />

      <Box px="1rem">
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

      </Box>
      <Grow in={isOver}>
        <Box pb="0.5rem">
          <Actions />
        </Box>
      </Grow>
    </Box>
  );
}

export default Product;
