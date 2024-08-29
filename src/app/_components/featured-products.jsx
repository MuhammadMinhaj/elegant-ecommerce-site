import ArrowActions from '@/components/arrow-actions';
import GridProductItem from '@/components/product/product-grid-item';
import Title from '@/components/title';
import products from '@/data/products.json';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Grid } from '@mui/material';

function FeaturedProducts() {
  return (
    <Box>
      <Box className="container">
        <Title
          title="Featured Products"
          icon={<ShoppingCartIcon fontSize="inherit" />}
          endActions={<ArrowActions />}
        />
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.title}>
              <GridProductItem {...product} withActions />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default FeaturedProducts;
