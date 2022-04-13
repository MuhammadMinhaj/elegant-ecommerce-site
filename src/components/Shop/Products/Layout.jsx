import { Box, Grid, Typography } from '@mui/material';
import ArrowActions from '../../Common/ArrowActions';
import GridProductItem from '../../DynamicCategory/Product/Item/GridItem';

function ProductLayout({ children, title, products }) {
  return (
    <Box py="2rem" bgcolor="var(--white)">
      <Box className="container">
        <Box display="flex" alignItems="center" justifyContent="space-between" py="1rem">
          <Typography variant="h5" color="var(--text-head)">{title}</Typography>
          <ArrowActions />
        </Box>
        {
        children
      }
        <Grid container spacing={2}>
          {
            products?.map((prod) => (
              <Grid item xs={6} sm={6} md={4} lg={3}>
                <GridProductItem {...prod} />
              </Grid>
            ))
          }

        </Grid>
      </Box>
    </Box>
  );
}

export default ProductLayout;
