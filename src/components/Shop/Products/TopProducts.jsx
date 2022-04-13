import {
  Box, Paper, Typography
} from '@mui/material';
import TableProductItem from '../../DynamicCategory/Product/Item/TableItem';

function TopProducts() {
  return (
    <Paper variant="outlined">
      <Box>
        <Box p="0.5rem" borderBottom="1px solid var(--white-gray)">
          <Typography sx={{ fontWeight: '600', textTransform: 'uppercase' }} variant="h5" color="var(--text-head)">Top Products</Typography>
        </Box>
        <TableProductItem />
        <TableProductItem />
        <TableProductItem />
        <TableProductItem />
        <TableProductItem />
      </Box>
    </Paper>
  );
}

export default TopProducts;
