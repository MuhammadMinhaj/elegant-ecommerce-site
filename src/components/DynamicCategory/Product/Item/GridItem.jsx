import {
  Box, Grid, Grow, Rating, Typography
} from '@mui/material';
import { useState } from 'react';
import Actions from './Actions';

function Product({ isStart, isEnd }) {
  const [isOver, setOver] = useState(false);
  const handleMouseOver = () => {
    setOver(true);
  };
  const handleMouseLeave = () => {
    setOver(false);
  };
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Box component="div" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} borderLeft={`${isStart ? '0px' : '1px'} solid #ededed`} borderBottom={`${isEnd ? '0px' : '1px'} solid #ededed`}>
        <Box component="img" width="100%" height="auto" alt="image" src="https://opencart.opencartworks.com/themes/so_flashmart/layout2/image/cache/catalog/demo/product/2-370x370.jpg" />
        <Box p="1.5rem">
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
    </Grid>
  );
}

export default Product;
