import { Box, Grid } from '@mui/material';
import GridProductItem from '../../../DynamicCategory/Product/Item/GridItem';
import ActionsButton from './Actions';

function ProductsLevel() {
  return (
    <Box>
      <ActionsButton />
      <Box height="1.5rem" />
      <Grid container>
        <Grid item sm={12} md={6} lg={4}>
          <GridProductItem />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <GridProductItem />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <GridProductItem />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <GridProductItem />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <GridProductItem />
        </Grid>
        <Grid item sm={12} md={6} lg={4}>
          <GridProductItem />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProductsLevel;
