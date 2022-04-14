import {
  Box, Divider, Grid, Paper, Typography
} from '@mui/material';
import ArrowActions from '../../Common/ArrowActions';
import TableProductItem from '../../DynamicCategory/Product/Item/TableItem';

function Products({ products, title }) {
  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Paper sx={{ borderRadius: '0.5rem' }} variant="outlined">
        <Box display="flex" px="0.5rem" alignItems="center" justifyContent="space-between">
          <Typography variant="h6" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }} color="var(--text-head)">{title}</Typography>
          <ArrowActions />
        </Box>
        <Divider />
        <Box py="0.5rem" />
        <Box>
          {
            products?.map((prod) => (
              <TableProductItem key={prod?.id} {...prod} />
            ))
          }
        </Box>
      </Paper>
    </Grid>
  );
}

export default Products;
