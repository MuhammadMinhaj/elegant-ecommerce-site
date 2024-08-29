import { Box, Grid } from '@mui/material';
import BreadCrumbs from '../_components/breadcrumbs';
import Filter from '../_components/filter/filter';
import Products from '../_components/products/products';

function CategoryProductsPage() {
  return (
    <main>
      <Box className="container" pb="1rem">
        <BreadCrumbs />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Filter />
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={9}>
            <Products />
          </Grid>
        </Grid>
      </Box>
    </main>
  );
}

export default CategoryProductsPage;
