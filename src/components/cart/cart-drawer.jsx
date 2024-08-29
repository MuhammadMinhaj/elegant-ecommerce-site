'use client';
import useUI from '@/context/ui/useUI';
import useUIAuction from '@/context/ui/useUIAuction';
import { Close as CloseIcon } from '@mui/icons-material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Box, Divider, Drawer, IconButton, Typography } from '@mui/material';
import CartProduct from './cart-product';
import PriceDetail from './price-detail';

export default function CartDrawer() {
  const { isCartOpen } = useUI();
  const { closeCart } = useUIAuction();

  return (
    <Box>
      <Drawer sx={{ zIndex: '99999' }} anchor="right" open={isCartOpen} onClose={closeCart}>
        <Box
          maxWidth="450px"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Box>
            <Box p="0.5rem" display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h5" color="var(--text-head)" sx={{ fontWeight: '600' }}>
                My Cart
              </Typography>
              <IconButton onClick={closeCart}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider />
            <CartProduct />
          </Box>
          <Box p="1rem">
            <PriceDetail />
            <Box height="1rem" />
            <Box
              component="button"
              width="100%"
              className="custom-btn-outline"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
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
