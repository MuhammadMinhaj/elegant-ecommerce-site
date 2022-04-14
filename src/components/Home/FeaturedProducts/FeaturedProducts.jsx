import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box, Grid } from '@mui/material';
import productsData from '../../../productsData';
import ArrowActions from '../../Common/ArrowActions';
import Title from '../../Common/Title';
import GridProductItem from '../../DynamicCategory/Product/Item/GridItem';

function FeaturedProducts() {
  return (
    <Box>
      <Box className="container">
        <Title title="Featured Products" icon={<ShoppingCartIcon fontSize="inherit" />} endActions={<ArrowActions />} />
        <Grid container spacing={2}>
          {
            productsData?.products?.map((prod) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <GridProductItem {...prod} withActions />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </Box>
  );
}

export default FeaturedProducts;
