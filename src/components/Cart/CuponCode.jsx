import { Box, Button, TextField } from '@mui/material';

function CuponCode() {
  return (
    <Box display="flex" alignItems="center">
      <TextField label="Cupon Code" placeholder="Enter your cupon code" fullWidth size="small" />
      <Box width="0.5rem" />
      <Button color="success" variant="contained">Apply</Button>
    </Box>
  );
}

export default CuponCode;
