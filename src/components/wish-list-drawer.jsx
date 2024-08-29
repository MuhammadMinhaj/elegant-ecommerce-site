'use client';
import ProductTableProductItem from '@/components/product/product-table-item';
import useUI from '@/context/ui/useUI';
import useUIAuction from '@/context/ui/useUIAuction';
import products from '@/data/products.json';
import { ClearAll, Close as CloseIcon } from '@mui/icons-material';
import { Box, Button, Divider, Drawer, IconButton, Typography } from '@mui/material';

export default function WishListDrawer() {
  const { isWishlistOpen } = useUI();
  const { closeWishlist } = useUIAuction();

  return (
    <Box>
      <Drawer sx={{ zIndex: '99999' }} anchor="right" open={isWishlistOpen} onClose={closeWishlist}>
        <Box position="relative" maxWidth="500px">
          <Box p="0.5rem" display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h5" color="var(--text-head)" sx={{ fontWeight: '600' }}>
              My Wishlist
            </Typography>
            <IconButton onClick={closeWishlist}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />

          <Box display="flex" flexDirection="column">
            {products.slice(0, 3).map((prod) => (
              <ProductTableProductItem key={prod?.title} {...prod} withActions />
            ))}
          </Box>
          <Box
            color="var(--secondary)"
            p="0.5rem"
            maxWidth="500px"
            zIndex="999"
            width="100%"
            position="fixed"
            bottom="0px"
          >
            <Button variant="outlined" color="inherit" fullWidth startIcon={<ClearAll />}>
              Clear All
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
