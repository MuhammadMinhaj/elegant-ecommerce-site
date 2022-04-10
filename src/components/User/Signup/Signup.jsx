import { Box, Grid } from '@mui/material';
import SignupForm from './Form';

function UserSignUp() {
  return (
    <Box className="container" py="2rem">
      <Grid container spacing={2}>
        <Grid item sm={12} md={6}>
          Image
        </Grid>
        <Grid item sm={12} md={6}>
          <SignupForm />
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserSignUp;
