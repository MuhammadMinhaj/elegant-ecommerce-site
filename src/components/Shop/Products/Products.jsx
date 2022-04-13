import { Box, Grid } from '@mui/material';
import ProductsLavel from './ProductLevel/ProductsLavel';
import TopProducts from './TopProducts';

function Products() {
  return (
    <Box bgcolor="var(--white)">
      <Box className="container" py="2rem">
        <Grid container spacing={3}>
          <Grid item sm={12} md={5} lg={4}>
            <TopProducts />
          </Grid>
          <Grid item sm={12} md={7} lg={8}>
            <ProductsLavel />
          </Grid>
        </Grid>
      </Box>
    </Box>

  );
}

export default Products;
