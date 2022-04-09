import { Box, Grid } from '@mui/material';
import Category from './Category';
import Slider from './Slider';

function ShopPage() {
  return (
    <Box className="container" py="1rem">
      <Grid container spacing={2}>
        <Grid item sm={12} md={3}>
          <Category />
        </Grid>
        <Grid item sm={12} md={9}>
          <Slider />
        </Grid>
      </Grid>
    </Box>

  );
}
export default ShopPage;
