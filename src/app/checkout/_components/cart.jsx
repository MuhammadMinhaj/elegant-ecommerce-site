import CartProduct from '@/components/cart/cart-product';
import PriceDetail from '@/components/cart/price-detail';
import { Box } from '@mui/material';

function Cart() {
  return (
    <Box bgcolor="var(--white)" p="2rem" borderRadius="0.5rem">
      <Box maxHeight="450px" sx={{ overflowY: 'auto' }}>
        <CartProduct />
      </Box>
      <Box height="1rem" />
      <PriceDetail />
    </Box>
  );
}
export default Cart;
