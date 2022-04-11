import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import { Box, Button } from '@mui/material';

function UnauthenticatedButtons() {
  return (
    <Box display="flex" maxWidth="600px">
      <Button color="warning" variant="contained" fullWidth size="large" sx={{ borderRadius: '1rem' }} startIcon={<LoginIcon />}>Login</Button>
      <Box width="1rem" />
      <Button color="warning" variant="outlined" fullWidth size="large" sx={{ borderRadius: '1rem' }} startIcon={<AddIcon />}>Create an account  </Button>
    </Box>
  );
}

export default UnauthenticatedButtons;
