import { Box, Grid } from '@mui/material';
import BillingDetail from './BillingDetail';
import Cart from './Cart/Cart';
import ShippingDetail from './ShippingDetail';

function Checkout() {
  return (
    <Box className="container" py="2rem">
      <Grid container spacing={2}>
        <Grid item md={12} lg={6}>
          <Box bgcolor="var(--white)" p="2rem" borderRadius="0.5rem">
            <BillingDetail />
            <Box height="1.5rem" />

            <ShippingDetail />
          </Box>
        </Grid>
        <Grid item md={12} lg={6}>
          <Cart />
        </Grid>
      </Grid>

    </Box>
  );
}
export default Checkout;
