import { Box, Button, Rating, TextField, Typography } from '@mui/material';

function ReviewForm() {
  return (
    <Box component="form">
      <Typography variant="h5" component="h3">
        Write a review for this product
      </Typography>
      <Box height="1rem" />
      <Typography variant="legend" color="text.secondary">
        Your Rating *
      </Typography>
      <Rating />
      <Box height="1rem" />

      <TextField rows={4} label="Your Opinion" required fullWidth multiline />
      <Box height="1rem" />

      <Button variant="outlined" color="secondary" type="submit">
        Submit
      </Button>
    </Box>
  );
}

export default ReviewForm;
