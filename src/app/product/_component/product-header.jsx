import { Facebook as FacebookIcon, Twitter as TwitterIcon } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, IconButton, Typography } from '@mui/material';
import { useState } from 'react';

function ProductHeader() {
  const [isHeart, setHeart] = useState(false);

  const handleClickToggleHeart = () => {
    setHeart(!isHeart);
  };
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

      <Box py="0.5rem" color="var(--secondary)">
        <IconButton onClick={handleClickToggleHeart} color="inherit">
          {isHeart ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </Box>
    </Box>
  );
}
export default ProductHeader;
