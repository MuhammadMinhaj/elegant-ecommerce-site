import ArrowActions from '@/components/arrow-actions';
import TableProductItem from '@/components/product/product-table-item';
import products from '@/data/products.json';
import { Box, Divider, Grid, Paper, Typography } from '@mui/material';

function RecentRatesSalesProduct() {
  return (
    <Box>
      <Box className="container" py="2rem">
        <Grid container spacing={4}>
          {[
            {
              title: 'Recent Products',
              products: products?.slice(0, 5)
            },
            {
              title: 'Most Popular',
              products: products?.slice(0, 5)
            },
            {
              title: 'Most Ratings',
              products: products?.slice(0, 5)
            }
          ].map((productsSection) => (
            <Grid key={productsSection.title} item xs={12} sm={12} md={6} lg={4}>
              <Paper sx={{ borderRadius: '0.5rem' }} variant="outlined">
                <Box display="flex" px="0.5rem" alignItems="center" justifyContent="space-between">
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
                    color="var(--text-head)"
                  >
                    {productsSection.title}
                  </Typography>
                  <ArrowActions />
                </Box>
                <Divider />
                <Box py="0.5rem" />
                <Box>
                  {productsSection.products?.map((prod) => (
                    <TableProductItem key={prod?.id} {...prod} />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default RecentRatesSalesProduct;
