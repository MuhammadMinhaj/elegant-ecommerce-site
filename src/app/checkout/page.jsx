import { Box, Grid } from '@mui/material';
import AdditionalInformation from './_components/additional-info-field';
import BillingForm from './_components/billing-form';
import Cart from './_components/cart';
import PaymentMethod from './_components/payment-methods';
import ShippingForm from './_components/shipping-form';
import ShippingMethod from './_components/shipping-method';
import UnauthenticatedButtons from './_components/unauthenticated-buttons';

export default function CheckoutPage() {
  return (
    <main>
      <Box className="container" py="2rem">
        <UnauthenticatedButtons />
        <Box height="1rem" />
        <Grid container spacing={2}>
          <Grid item md={12} lg={6}>
            <Box bgcolor="var(--white)" p="2rem" borderRadius="0.5rem">
              <BillingForm />
              <Box height="1.5rem" />
              <ShippingForm />
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
    </main>
  );
}
