import {
  Box, TextField, Typography
} from '@mui/material';

function AdditionalInformation() {
  return (
    <Box>
      <Typography variant="h5">
        Additional Information
      </Typography>
      <Box py="0.5rem" width="100%">
        <TextField
          name="additionalInfo"
          placeholder="Note:"
          rows={4}
          multiline
          fullWidth
          label="Notes about your order, e.g special notes for delivery etc"
        />
      </Box>
    </Box>
  );
}

export default AdditionalInformation;
