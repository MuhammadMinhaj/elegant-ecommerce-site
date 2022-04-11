import { Box } from '@mui/material';
import CartProduct from './CartProduct';
import CuponCode from './CuponCode';

function Cart() {
  return (

    <Box
      bgcolor="var(--white)"
      p="2rem"
      borderRadius="0.5rem"
    >
      <CartProduct />
      <CuponCode />
    </Box>

  );
}
export default Cart;
