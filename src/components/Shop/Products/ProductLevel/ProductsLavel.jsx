import { Box, Grid } from '@mui/material';
import productsData from '../../../../productsData';
import GridProductItem from '../../../DynamicCategory/Product/Item/GridItem';
import ActionsButton from './Actions';

function ProductsLevel() {
  return (
    <Box>
      <ActionsButton />
      <Box height="1.5rem" />
      <Grid container>
        {productsData?.topProducts?.map((prod) => (
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <GridProductItem {...prod} withActions />
          </Grid>
        ))}

      </Grid>
    </Box>
  );
}

export default ProductsLevel;
