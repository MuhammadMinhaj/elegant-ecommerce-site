import { Box, Grid } from '@mui/material';
import Filter from './Filter';
import Products from './Product/Products';

function DynamicCategory() {
  return (
    <Box className="container" py="2rem">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Filter />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={9}>
          <Products />
        </Grid>
      </Grid>
    </Box>
  );
}

export default DynamicCategory;
