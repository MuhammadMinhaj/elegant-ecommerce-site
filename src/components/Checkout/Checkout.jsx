import { Box, Grid } from '@mui/material';
import AdditionalInformation from './AdditionalInformation';
import BillingDetail from './BillingDetail';
import Cart from './Cart/Cart';
import PaymentMethod from './PaymentMethod/PaymentMethods';
import UnauthenticatedButtons from './PaymentMethod/UnauthenticatedButtons';
import ShippingDetail from './ShippingDetail';
import ShippingMethod from './ShippingMethod';

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
