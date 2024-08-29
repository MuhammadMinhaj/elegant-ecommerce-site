import InputField from '@/components/form/input-field';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import NumbersIcon from '@mui/icons-material/Numbers';
import { Grid } from '@mui/material';
import { useRef } from 'react';

export default function CreditCardForm({ errors, handleChange }) {
  const fullNameRef = useRef();
  const emailRef = useRef();
  return (
    <>
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
    </>
  );
}
