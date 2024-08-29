import { Box, Grid } from '@mui/material';
import AdditionalInformation from './additional-info-field';
import BillingDetail from './billing-form';
import Cart from './cart';
import PaymentMethod from './payment-methods';
import ShippingDetail from './shipping-form';
import ShippingMethod from './shipping-method';
import UnauthenticatedButtons from './unauthenticated-buttons';

function Checkout() {
  return (
    <Box className="container" py="2rem">
      <UnauthenticatedButtons />
      <Box height="1rem" />
      <Grid container spacing={2}>
        <Grid item md={12} lg={6}>
          <Box bgcolor="var(--white)" p="2rem" borderRadius="0.5rem">
            <BillingDetail />
            <Box height="1.5rem" />
            <ShippingDetail />
            <Box height="1.5rem" />
            <ShippingMethod />
            <Box height="1.5rem" />
            <AdditionalInformation />
          </Box>
        </Grid>
        <Grid item md={12} lg={6}>
          <Cart />
          <Box height="1.5rem" />
          <PaymentMethod />
        </Grid>
      </Grid>
    </Box>
  );
}
export default Checkout;
