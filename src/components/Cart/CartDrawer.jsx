import { Close as CloseIcon } from '@mui/icons-material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {
  Box, Divider, Drawer, IconButton, Typography
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../redux/actions';
import CartProduct from './CartProduct';
import PriceDetail from './PriceDetail';

const { handleClickToggleDrawer } = actions.appActions;

export default function TemporaryDrawer() {
  const { isCartDrawerOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  return (
    <Box>
      <Drawer
        sx={{ zIndex: '99999' }}
        anchor="right"
        open={isCartDrawerOpen}
        onClose={() => dispatch(handleClickToggleDrawer())}
      >
        <Box maxWidth="450px" display="flex" flexDirection="column" justifyContent="space-between" height="100%">
          <Box>
            <Box p="0.5rem" display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h5" color="var(--text-head)" sx={{ fontWeight: '600' }}>My Cart</Typography>
              <IconButton onClick={() => dispatch(handleClickToggleDrawer())}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider />
            <CartProduct />
          </Box>
          <Box p="1rem">
            <PriceDetail />
            <Box height="1rem" />
            <Box component="button" width="100%" className="custom-btn-outline" display="flex" justifyContent="center" alignItems="center">
              <ShoppingBasketIcon />
              <Box component="span" width="1rem" />
              Process To Payment
            </Box>
          </Box>
        </Box>

      </Drawer>
    </Box>
  );
}
