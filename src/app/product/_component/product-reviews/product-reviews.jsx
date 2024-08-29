import { Box } from '@mui/material';
import ReveiwForm from './review-form';
import UserReviews from './user-reviews';

function ProductReviews() {
  return (
    <Box>
      <ReveiwForm />
      <Box height="2rem" />
      <UserReviews />
    </Box>
  );
}

export default ProductReviews;
