import CancelIcon from '@mui/icons-material/Cancel';
import { Box, IconButton } from '@mui/material';

function Actions() {
  return (
    <Box>
      <IconButton color="error">
        <CancelIcon />
      </IconButton>
    </Box>
  );
}

export default Actions;
