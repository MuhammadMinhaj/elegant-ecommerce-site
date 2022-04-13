import {
  Box, Paper, Typography
} from '@mui/material';
import productsData from '../../../productsData';
import ArrowActions from '../../Common/ArrowActions';
import TableProductItem from '../../DynamicCategory/Product/Item/TableItem';

function TopProducts() {
  return (
    <Paper variant="outlined">
      <Box>
        <Box p="0.5rem" borderBottom="1px solid var(--white-gray)" display="flex" justifyContent="space-between" alignItems="center">
          <Typography sx={{ fontWeight: '600', textTransform: 'uppercase' }} variant="h5" color="var(--text-head)">Top Products</Typography>
          <ArrowActions />
        </Box>
        {
          productsData?.topProducts?.map((prod) => (<TableProductItem {...prod} />))
        }

      </Box>
    </Paper>
  );
}

export default TopProducts;
