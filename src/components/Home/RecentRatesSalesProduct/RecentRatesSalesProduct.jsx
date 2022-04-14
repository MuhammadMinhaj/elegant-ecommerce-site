import { Box, Grid } from '@mui/material';
import productsData from '../../../productsData';
import Products from './Products';

function RecentRatesSalesProduct() {
  return (
    <Box>
      <Box className="container" py="2rem">
        <Grid container spacing={4}>
          <Products title="Recent Products" products={productsData?.products?.slice(0, 5)} />
          <Products title="Most Popular" products={productsData?.products?.slice(0, 5)} />
          <Products title="Most Ratings" products={productsData?.products?.slice(0, 5)} />
        </Grid>
      </Box>
    </Box>
  );
}

export default RecentRatesSalesProduct;
