import { Box, Button, TextField } from '@mui/material';

function CuponCode() {
  return (
    <Box display="flex" alignItems="center">
      <TextField label="Cupon Code" placeholder="Enter your cupon code" fullWidth />
      <Box width="0.5rem" />
      <Button color="success">Apply</Button>
    </Box>
  );
}

export default CuponCode;
