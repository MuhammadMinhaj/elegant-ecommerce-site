import { Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import * as React from 'react';

export default function RatingSIze() {
  return (
    <Box>
      <Rating name="size-large" defaultValue={5} size="large" />
      <Rating name="size-large" defaultValue={4} size="large" />
      <Rating name="size-large" defaultValue={3} size="large" />
      <Rating name="size-large" defaultValue={2} size="large" />
      <Rating name="size-large" defaultValue={1} size="large" />
    </Box>
  );
}
