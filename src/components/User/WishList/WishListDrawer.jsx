import { ClearAll, Close as CloseIcon } from '@mui/icons-material';
import {
  Box, Button, Divider, Drawer, IconButton, Typography
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import productsData from '../../../productsData';
import actions from '../../../redux/actions';
import TableProductItem from '../../DynamicCategory/Product/Item/TableItem';

const { handleClickToggleWishlistDrawer } = actions.appActions;

export default function TemporaryDrawer() {
  const { isWishlistDrawerOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return (
    <Box>
      <Drawer
        sx={{ zIndex: '99999' }}
        anchor="right"
        open={isWishlistDrawerOpen}
        onClose={() => dispatch(handleClickToggleWishlistDrawer())}
      >
        <Box position="relative">

          <Box p="0.5rem" display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" color="var(--text-head)" sx={{ fontWeight: '600' }}>My Wishlist</Typography>
            <IconButton onClick={() => dispatch(handleClickToggleWishlistDrawer())}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />

          <Box display="flex" flexDirection="column">
            {productsData?.products.slice(0, 3).map((prod) => (
              <TableProductItem key={prod?.title} {...prod} withActions />
            ))}
          </Box>
          <Box color="var(--secondary)" p="0.5rem" maxWidth="370px" zIndex="999" bgcolor="var(--primary)" width="100%" position="fixed" bottom="0px">
            <Button variant="outlined" color="inherit" fullWidth startIcon={<ClearAll />}>Clear All</Button>
          </Box>
        </Box>

      </Drawer>

    </Box>
  );
}
