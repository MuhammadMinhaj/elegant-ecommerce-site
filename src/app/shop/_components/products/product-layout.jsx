import ArrowActions from '@/components/arrow-actions';
import GridProductItem from '@/components/product/product-grid-item';
import { Box, Grid, Typography } from '@mui/material';

function ProductLayout({ children, title, products }) {
  return (
    <Box py="2rem" bgcolor="var(--white)">
      <Box className="container">
        <Box display="flex" alignItems="center" justifyContent="space-between" py="1rem">
          <Typography variant="h5" color="var(--text-head)">
            {title}
          </Typography>
          <ArrowActions />
        </Box>
        {children}
        <Grid container spacing={2}>
          {products?.map((prod, i) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={i}>
              <GridProductItem {...prod} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default ProductLayout;
