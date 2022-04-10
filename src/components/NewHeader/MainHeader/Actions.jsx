import { FavoriteBorder as FavoriteBorderIcon, PersonOutline as PersonOutlineIcon, ShoppingBasket as ShoppingBasketIcon } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';

function Actions() {
  return (
    <Box display="flex">
      <IconButton>
        <FavoriteBorderIcon />
      </IconButton>

      <IconButton>
        <PersonOutlineIcon />
      </IconButton>
      <IconButton>
        <ShoppingBasketIcon />
      </IconButton>
    </Box>
  );
}

export default Actions;
