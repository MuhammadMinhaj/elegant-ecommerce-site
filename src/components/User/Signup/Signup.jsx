import AccountCircle from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockIcon from '@mui/icons-material/Lock';
import {
  Button, Checkbox, Typography, useMediaQuery, useTheme
} from '@mui/material';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import PasswordField from '../../Common/PasswordField';
import InputField from '../Common/InputField';

export default function SignUpForm() {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
    retypePassword: ''
  });

  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const retypePasswordRef = useRef();
  const getValue = (x) => x?.current.value;

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullNameValue = getValue(fullNameRef);
    const emailValue = getValue(emailRef);
    const passwordValue = getValue(passwordRef);
    const retypePasswordValue = getValue(retypePasswordRef);
    // Validation
    const newErros = {};
    if (!fullNameValue) {
      newErros.fullName = 'Please enter your full name';
    }
    if (!emailValue) {
      newErros.email = 'Please enter your email address';
    }
    if (!passwordValue) {
      newErros.password = 'Please enter a password';
    }
    if (passwordValue !== retypePasswordValue) {
      newErros.retypePassword = 'Invalid password';
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
    <Box py="2rem">
      <Box maxWidth="700px" margin="auto" bgcolor="var(--white)" p="2rem" borderRadius="0.5rem" component="form" onSubmit={handleSubmit}>
        <Typography variant="h4" align="center">
          SIGN UP
        </Typography>
        <Box height="1rem" />
        <InputField
          inputRef={fullNameRef}
          name="fullName"
          label="Full Name"
          icon={<AccountCircle />}
          placeholder="Full Name"
          handleChange={handleChange}
          errorMsg={errors?.fullName}
        />
        <InputField
          inputRef={emailRef}
          name="email"
          label="Email/Phone"
          icon={<AlternateEmailIcon />}
          placeholder="example@example.com"
          handleChange={handleChange}
          errorMsg={errors?.email}

        />
        <PasswordField
          inputRef={passwordRef}
          name="password"
          label="Password"
          icon={<LockIcon />}
          placeholder="******"
          handleChange={handleChange}
          errorMsg={errors?.password}
          type="password"

        />
        <PasswordField
          inputRef={retypePasswordRef}
          name="retypePassword"
          label="Re-type Password"
          icon={<LockIcon />}
          placeholder="******"
          handleChange={handleChange}
          errorMsg={errors?.retypePassword}
          type="password"

        />

        <Box display="flex" alignItems="center">
          <Checkbox />
          <Typography variant="subtitle1" color="text.secondary">
            By signing up, you agree to
            {' '}
            <Typography variant="subtitle1" component="u" color="black">
              Terms & Condtion
            </Typography>
          </Typography>
        </Box>
        <Button variant="contained" color="secondary" startIcon={<AddIcon />} type="submit">
          Create account
        </Button>
        <Typography variant="subtitle1" align="center">
          Or
        </Typography>
        <Box display={isMD ? 'block' : 'flex'}>
          <FacebookLoginButton onClick={() => alert('Hello')} align="center" style={{ height: '40px' }} />
          <Box width="0.25rem" />
          <GoogleLoginButton onClick={() => alert('Hello')} align="center" style={{ height: '40px' }} />
        </Box>

        <Box py="1rem">
          <Typography variant="subtitle1" align="center" color="text.secondary">
            Already have an account?
            {' '}
            <Typography variant="subtitle1" component="u" color="black" sx={{ cursor: 'pointer' }} onClick={() => router.push('/user/login')}>
              Login
            </Typography>
          </Typography>
        </Box>

      </Box>
    </Box>

  );
}
