import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import {
  Box, CardActionArea, Grid, Typography
} from '@mui/material';
import { useState } from 'react';

function CustomButton({
  title, subTitle, isChecked, handleClick
}) {
  return (
    <Box border={`1px solid var(--${isChecked ? 'success' : 'primary'})`} color={isChecked ? 'var(--success)' : 'var(--primary)'} borderRadius="0.5rem" sx={{ overflow: 'hidden' }}>
      <CardActionArea onClick={handleClick}>
        <Box display="flex" alignItems="center" p="0.5rem" justifyContent="space-between">
          <Box display="flex" alignItems="center">
            <DirectionsBikeIcon />
            <Box width="0.5rem" />
            <Box display="flex" flexDirection="column">
              <Typography variant="button">
                {title}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {subTitle}
              </Typography>
            </Box>
          </Box>
          {isChecked ? <CheckCircleIcon /> : <RadioButtonUncheckedIcon />}
        </Box>
      </CardActionArea>
    </Box>

  );
}

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
          <Grid item sm={12} md={6}>
            <CustomButton title="UPS" subTitle="Delivery cost - $00.00" isChecked={isUPSChecked} handleClick={() => handleClick(true)} />
          </Grid>
          <Grid item sm={12} md={6}>
            <CustomButton title="DSL" subTitle="Delivery cost - $60.00" isChecked={isDHLChecked} handleClick={() => handleClick(false)} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default ShippingMethod;
