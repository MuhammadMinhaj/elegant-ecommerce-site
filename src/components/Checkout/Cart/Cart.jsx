import { Box, Divider, Typography } from '@mui/material';
import CartProduct from './CartProduct';
import CuponCode from './CuponCode';

function TextItem({ title, amount }) {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="subtitle1" color="text.secondary">{title}</Typography>
      <Typography variant="subtitle1">{amount}</Typography>
    </Box>
  );
}

function Cart() {
  return (

    <Box
      bgcolor="var(--white)"
      p="2rem"
      borderRadius="0.5rem"
    >
      <CartProduct />
      <Box height="1rem" />
      <CuponCode />
      <Box height="1rem" />
      <Box>
        <TextItem title="Subtotal" amount="$250.00" />
        <TextItem title="Shipping Cost" amount="$100.00" />
        <TextItem title="Discount" amount="$50.00" />
        <Box py="0.5rem">

          <Divider />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Total</Typography>
          <Typography variant="subtitle1">$350</Typography>
        </Box>
      </Box>
    </Box>

  );
}
export default Cart;
