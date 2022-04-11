import {
  Box, Grid, Typography
} from '@mui/material';
import { useState } from 'react';
import CustomButton from '../Common/CustomButton';

function ShippingMethod() {
  const [isUPSChecked, setUPSChecked] = useState(false);
  const [isDHLChecked, setDHLChecked] = useState(false);
  const handleClick = (isUps) => {
    if (isUps) {
      setUPSChecked(!isUPSChecked);
      setDHLChecked(false);
    } else {
      setDHLChecked(!isDHLChecked);
      setUPSChecked(false);
    }
  };
  return (
    <Box>
      <Typography variant="h5">
        Shipping Method
      </Typography>
      <Box py="1rem">

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <CustomButton title="UPS" subTitle="Delivery cost - $00.00" isChecked={isUPSChecked} handleClick={() => handleClick(true)} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <CustomButton title="DSL" subTitle="Delivery cost - $60.00" isChecked={isDHLChecked} handleClick={() => handleClick(false)} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ShippingMethod;
