import { Box, Grid, Typography } from '@mui/material';
import Product from './Product';

function TodayDeals() {
  return (
    <Box className="container" bgcolor="white" my="1rem">
      <Typography variant="h5" py="1rem">Today's Flash Deals</Typography>
      <Box pb="1rem">
        <Grid container spacing={2}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Grid>
      </Box>
    </Box>
  );
}

export default TodayDeals;
