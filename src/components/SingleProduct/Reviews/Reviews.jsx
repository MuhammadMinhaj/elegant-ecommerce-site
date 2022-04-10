import { Box } from '@mui/material';
import ReveiwForm from './ReviewForm';
import UserReviews from './UserReviews';

function Reviews() {
  return (
    <Box>
      <ReveiwForm />
      <Box height="2rem" />
      <UserReviews />
    </Box>
  );
}

export default Reviews;
