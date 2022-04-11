import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import NumbersIcon from '@mui/icons-material/Numbers';
import {
  Box, Grid, Typography
} from '@mui/material';
import { useRef, useState } from 'react';
import CustomButton from '../../Common/CustomButton';
import icons from '../../Icons';
import InputField from '../../User/Common/InputField';

const { PaypalIcon } = icons;
export default function PaymentMethods({ errors, handleChange }) {
  const fullNameRef = useRef();
  const emailRef = useRef();
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

        <Grid item xs={12} md={12} lg={6}>
          <InputField
            inputRef={fullNameRef}
            name="lastName"
            label="Card Number"
            icon={<NumbersIcon />}
            placeholder="0000 0000 0000 0000"
            handleChange={handleChange}
            errorMsg={errors?.fullName}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputField
            inputRef={fullNameRef}
            name="firstname"
            label="Card Holder Name"
            icon={<DriveFileRenameOutlineIcon />}
            placeholder="John Lewis"
            handleChange={handleChange}
            errorMsg={errors?.fullName}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputField
            inputRef={emailRef}
            name="email"
            label="Expire Date"
            icon={<CalendarTodayIcon />}
            placeholder="Year"
            handleChange={handleChange}
            errorMsg={errors?.email}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputField
            inputRef={emailRef}
            name="85254"
            label="CVV"
            icon={<NumbersIcon />}
            placeholder="000"
            handleChange={handleChange}
            errorMsg={errors?.email}
            type="number"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <CustomButton title="Credit Card" subTitle="Easy payment way" isChecked={isCreditCard} handleClick={() => handleClick(true)} icon={<CreditCardIcon />} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <CustomButton title="Paypal" subTitle="Easy payment way" isChecked={isPaypal} handleClick={() => handleClick(false)} icon={<PaypalIcon />} />
        </Grid>
      </Grid>

    </Box>

  );
}
