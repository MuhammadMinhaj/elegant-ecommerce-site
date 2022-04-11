import LockIcon from '@mui/icons-material/Lock';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import SaveIcon from '@mui/icons-material/Save';
import {
  Button, Divider, Grid
} from '@mui/material';
import Box from '@mui/material/Box';
import { useRef, useState } from 'react';
import PasswordField from '../../Common/PasswordField';
import Title from '../Common/Title';
import Layout from '../Layout/Layout';

export default function ChangePassword() {
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
    <Layout>
      <Box bgcolor="var(--white)" p="0.5rem" borderRadius="0.5rem">
        <Title
          title="Change Password"
          icon={<PersonSharpIcon sx={{ color: 'inherit', fontSize: 'inherit' }} />}
        />
        <Divider />

        <Box component="form" p="2rem" onSubmit={handleSubmit}>

          <Box height="1rem" />
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <PasswordField
                inputRef={fullNameRef}
                name="password"
                label="Password"
                icon={<LockIcon />}
                placeholder="******"
                handleChange={handleChange}
                errorMsg={errors?.fullName}
                type="password"
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <PasswordField
                inputRef={emailRef}
                name="password"
                label="New Password"
                icon={<LockIcon />}
                placeholder="******"
                handleChange={handleChange}
                errorMsg={errors?.fullName}
                type="password"
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <PasswordField
                inputRef={emailRef}
                name="password"
                label="Confirm Password"
                icon={<LockIcon />}
                placeholder="******"
                handleChange={handleChange}
                errorMsg={errors?.emailValue}
                type="password"
              />
            </Grid>
          </Grid>
          <Box height="1rem" />
          <Button variant="contained" color="secondary" size="large" startIcon={<SaveIcon />} type="submit">
            Confirm To Change
          </Button>
        </Box>
      </Box>
    </Layout>

  );
}
