import ArrowActions from '@/components/arrow-actions';
import TableProductItem from '@/components/product/product-table-item';
import products from '@/data/products.json';
import { Box, Paper, Typography } from '@mui/material';

function TopProducts() {
  return (
    <Paper variant="outlined">
      <Box>
        <Box
          p="0.5rem"
          borderBottom="1px solid var(--white-gray)"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            sx={{ fontWeight: '600', textTransform: 'uppercase' }}
            variant="h5"
            color="var(--text-head)"
          >
            Top Products
          </Typography>
          <ArrowActions />
        </Box>
        {products.map((prod) => (
          <TableProductItem key={prod.title} {...prod} />
        ))}
      </Box>
    </Paper>
  );
}

export default TopProducts;
