import {
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  Twitter as TwitterIcon,
  YouTube as YouTubeIcon
} from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

function SocialIcons() {
  return (
    <Box display="flex">
      <IconButton color="inherit">
        <FacebookIcon />
      </IconButton>

      <IconButton color="inherit">
        <TwitterIcon />
      </IconButton>

      <IconButton color="inherit">
        <YouTubeIcon />
      </IconButton>

      <IconButton color="inherit">
        <InstagramIcon />
      </IconButton>
    </Box>
  );
}

export default SocialIcons;
