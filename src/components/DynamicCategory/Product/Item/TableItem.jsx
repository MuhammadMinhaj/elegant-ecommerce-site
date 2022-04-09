import {
  Box, Grow, Rating, Typography
} from '@mui/material';
import { useState } from 'react';
import Actions from './Actions';

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
    >
      <Box component="img" maxWidth="250px" maxHeight="200px" alt="image" src="https://opencart.opencartworks.com/themes/so_flashmart/layout2/image/cache/catalog/demo/product/2-370x370.jpg" />

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
