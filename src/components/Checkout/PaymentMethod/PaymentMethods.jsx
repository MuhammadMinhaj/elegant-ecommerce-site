import CreditCardIcon from '@mui/icons-material/CreditCard';
import {
  Box, Button, Grid, Typography
} from '@mui/material';
import { useState } from 'react';
import CustomButton from '../../Common/CustomButton';
import icons from '../../Icons';
import CreditCardInfo from './CreditCardInfo';

const { PaypalIcon } = icons;

export default function PaymentMethods({ errors, handleChange }) {
  const [isCreditCard, setCreditCard] = useState(false);
  const [isPaypal, setPaypal] = useState(false);
  const handleClick = (isUps) => {
    if (isUps) {
      setCreditCard(!isCreditCard);
      setPaypal(false);
    } else {
      setPaypal(!isPaypal);
      setCreditCard(false);
    }
  };
  return (

    <Box bgcolor="var(--white)" p="2rem" borderRadius="0.5rem">
      <Typography variant="h5">
        Payment Method
      </Typography>
      <Box height="1rem" />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <CustomButton title="Credit Card" subTitle="Easy payment way" isChecked={isCreditCard} handleClick={() => handleClick(true)} icon={<CreditCardIcon />} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <CustomButton title="Paypal" subTitle="Easy payment way" isChecked={isPaypal} handleClick={() => handleClick(false)} icon={<PaypalIcon />} />
        </Grid>
        {
          isCreditCard && <CreditCardInfo errors={errors} handleChange={handleChange} />
        }

      </Grid>
      <Box height="1rem" />
      <Button variant="contained" color="warning" fullWidth>Place Order</Button>

    </Box>

  );
}
