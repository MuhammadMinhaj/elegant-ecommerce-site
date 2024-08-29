'use client';
import InputField from '@/components/form/input-field';
import AccountCircle from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { useRef } from 'react';

export default function BillingForm({ errors, handleChange }) {
  const fullNameRef = useRef();
  const emailRef = useRef();

  return (
    <Box>
      <Typography variant="h5">Billing Detail</Typography>
      <Box height="1rem" />
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} lg={6}>
          <InputField
            inputRef={fullNameRef}
            name="firstname"
            label="First Name"
            icon={<AccountCircle />}
            placeholder="First Name"
            handleChange={handleChange}
            errorMsg={errors?.fullName}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputField
            inputRef={fullNameRef}
            name="lastName"
            label="Last Name"
            icon={<AccountCircle />}
            placeholder="Last Name"
            handleChange={handleChange}
            errorMsg={errors?.fullName}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputField
            inputRef={emailRef}
            name="email"
            label="Email"
            icon={<AlternateEmailIcon />}
            placeholder="example@example.com"
            handleChange={handleChange}
            errorMsg={errors?.email}
          />
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <InputField
            inputRef={emailRef}
            name="phone"
            label="Phone"
            icon={<PhoneIphoneIcon />}
            placeholder="+45 00 00 00 00"
            handleChange={handleChange}
            errorMsg={errors?.email}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
