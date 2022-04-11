import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockIcon from '@mui/icons-material/Lock';
import LoginIcon from '@mui/icons-material/Login';
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
    email: '',
    password: ''
  });
  const emailRef = useRef();
  const passwordRef = useRef();

  const getValue = (x) => x?.current.value;
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = getValue(emailRef);
    const passwordValue = getValue(passwordRef);
    // Validation
    const newErros = {};
    if (!emailValue) {
      newErros.email = 'Please enter your email address';
    }
    if (!passwordValue) {
      newErros.password = 'Please enter a password';
    }
    if (Object.keys(newErros).length !== 0) {
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
          LOGIN
        </Typography>
        <Box height="1rem" />
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

        <Box display="flex" alignItems="center">
          <Checkbox />
          <Typography variant="subtitle1" color="text.secondary">
            Remember me
          </Typography>
        </Box>
        <Button variant="contained" color="secondary" startIcon={<LoginIcon />} type="submit">
          Login
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
            Don&apos;t have an account?
            {' '}
            <Typography variant="subtitle1" component="u" color="black" sx={{ cursor: 'pointer' }} onClick={() => router.push('/user/signup')}>
              SINGUP
            </Typography>
          </Typography>
        </Box>

      </Box>
    </Box>

  );
}
