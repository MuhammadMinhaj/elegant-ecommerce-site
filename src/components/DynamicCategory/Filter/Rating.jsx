import { Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import * as React from 'react';

export default function RatingSIze() {
  return (
    <Box textAlign="center">
      <Rating name="size-large" defaultValue={2} size="large" />
    </Box>
  );
}
