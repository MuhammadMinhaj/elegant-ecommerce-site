import { FavoriteBorder as FavoriteBorderIcon, PersonOutline as PersonOutlineIcon, ShoppingBasket as ShoppingBasketIcon } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import actions from '../../../redux/actions';

const { handleClickToggleDrawer } = actions.appActions;
function Actions() {
  const dispatch = useDispatch();

  return (
    <Box display="flex">
      <IconButton>
        <FavoriteBorderIcon />
      </IconButton>

      <IconButton>
        <PersonOutlineIcon />
      </IconButton>
      <IconButton onClick={() => dispatch(handleClickToggleDrawer())}>
        <ShoppingBasketIcon />
      </IconButton>
    </Box>
  );
}

export default Actions;
