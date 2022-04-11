import AccountCircle from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import SaveIcon from '@mui/icons-material/Save';
import {
  Button, Grid
} from '@mui/material';
import Box from '@mui/material/Box';
import { useRef, useState } from 'react';
import InputField from '../Common/InputField';

export default function ProfileEdit() {
  const [errors, setErrors] = useState({
    fullName: '',
    email: ''
  });

  const fullNameRef = useRef();
  const emailRef = useRef();
  const getValue = (x) => x?.current.value;

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullNameValue = getValue(fullNameRef);
    const emailValue = getValue(emailRef);
    // Validation
    const newErros = {};
    if (!fullNameValue) {
      newErros.fullName = 'Please enter your full name';
    }
    if (!emailValue) {
      newErros.email = 'Please enter your email address';
    }

    if (Object.keys(newErros).length !== 0) {
      alert('Has errors');
      setErrors({
        ...errors,
        ...newErros
      });
      return false;
    }
    return alert('Form should be submit to the server');
  };
  const handleChange = (e) => {
    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  };
  return (
    <Box p="2rem">
      <Box component="form" onSubmit={handleSubmit}>

        <Box height="1rem" />
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <InputField
              inputRef={fullNameRef}
              name="fullName"
              label="Full Name"
              icon={<AccountCircle />}
              placeholder="Full Name"
              handleChange={handleChange}
              errorMsg={errors?.fullName}
            />
          </Grid>
          <Grid item sm={12} md={6}>
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
          <Grid item sm={12} md={6}>
            <InputField
              inputRef={emailRef}
              name="phone"
              label="Phone"
              icon={<PhoneIphoneIcon />}
              placeholder="+95 567 5465"
              handleChange={handleChange}
              errorMsg={errors?.email}
              type="number"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <InputField
              inputRef={emailRef}
              name="email"
              label="Date Of Birth"
              icon={<DateRangeIcon />}
              placeholder="dd/mm/yyyy"
              handleChange={handleChange}
              errorMsg={errors?.email}
              type="date"
            />
          </Grid>
        </Grid>
        <Box height="1rem" />
        <Button variant="contained" color="secondary" size="large" startIcon={<SaveIcon />} type="submit">
          Save & Confirm
        </Button>
      </Box>
    </Box>

  );
}
