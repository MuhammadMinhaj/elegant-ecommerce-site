import { Box } from '@mui/material';
import CartProduct from '../Cart/CartProduct';
import PriceDetail from '../Cart/PriceDetail';

function Cart() {
  return (

    <Box
      bgcolor="var(--white)"
      p="2rem"
      borderRadius="0.5rem"
    >
      <Box maxHeight="450px" sx={{ overflowY: 'auto' }}>
        <CartProduct />
      </Box>
      <Box height="1rem" />
      <PriceDetail />
    </Box>

  );
}
export default Cart;
