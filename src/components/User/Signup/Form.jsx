import AccountCircle from '@mui/icons-material/AccountCircle';
import AddIcon from '@mui/icons-material/Add';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockIcon from '@mui/icons-material/Lock';
import { Button, Checkbox, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import InputField from '../Common/InputField';

export default function SignUpForm() {
  return (
    <Box bgcolor="var(--white)" p="2rem" borderRadius="0.5rem" component="form">
      <InputField label="Full Name" icon={<AccountCircle />} placeholder="Full Name" />
      <InputField label="Email/Phone" icon={<AlternateEmailIcon />} placeholder="example@example.com" />
      <InputField label="Password" icon={<LockIcon />} placeholder="******" />
      <InputField label="Re-type Password" icon={<LockIcon />} placeholder="******" />

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
      <Button variant="contained" color="secondary" startIcon={<AddIcon />}>
        Create account
      </Button>
      <Typography variant="subtitle1" align="center">
        Or
      </Typography>
      <Box display="flex">
        <FacebookLoginButton onClick={() => alert('Hello')} align="center" style={{ height: '40px' }} />
        <Box width="0.25rem" />
        <GoogleLoginButton onClick={() => alert('Hello')} align="center" style={{ height: '40px' }} />
      </Box>

      <Box py="1rem">
        <Typography variant="subtitle1" align="center" color="text.secondary">
          Already have an account?
          {' '}
          <Typography variant="subtitle1" component="u" color="black">
            Login
          </Typography>
        </Typography>
      </Box>

    </Box>
  );
}
