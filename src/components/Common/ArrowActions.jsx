import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import {
  Box, IconButton, useMediaQuery, useTheme
} from '@mui/material';

function ArrowActions() {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box display="flex" alignItems="center" color="var(--secondary)">
      <IconButton size={isMD ? 'small' : 'large'} color="inherit">
        <ArrowCircleLeftIcon />
      </IconButton>
      <IconButton size={isMD ? 'small' : 'large'} color="inherit">
        <ArrowCircleRightIcon />
      </IconButton>
    </Box>
  );
}

export default ArrowActions;
