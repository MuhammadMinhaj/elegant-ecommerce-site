import {
  BookmarkBorder as BookmarkBorderIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon
} from '@mui/icons-material';
import {
  Box, Button, IconButton, Typography
} from '@mui/material';

function ProductTopbar() {
  return (
    <Box display="flex" justifyContent="space-between" px="1rem">
      <Box display="flex" alignItems="center">
        <Typography>Share -</Typography>
        <Box display="flex" alignItems="center">
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <Box color="var(--neutral)">|</Box>
          <IconButton>
            <TwitterIcon />
          </IconButton>
        </Box>
      </Box>

      <Box py="0.5rem">
        <Button startIcon={<BookmarkBorderIcon />}>Save</Button>
      </Box>
    </Box>
  );
}
export default ProductTopbar;
