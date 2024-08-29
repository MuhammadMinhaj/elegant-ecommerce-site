import { Box, Grid } from '@mui/material';
import ProductsLavel from './products-lavel';
import TopProducts from './top-products';

function Products() {
  return (
    <Box bgcolor="var(--white)">
      <Box className="container" py="2rem">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={5} lg={4}>
            <TopProducts />
          </Grid>
          <Grid item xs={12} sm={12} md={7} lg={8}>
            <ProductsLavel />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Products;
