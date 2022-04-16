import { FavoriteBorder as FavoriteBorderIcon, PersonOutline as PersonOutlineIcon, ShoppingBasket as ShoppingBasketIcon } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import actions from '../../../redux/actions';

const { handleClickToggleDrawer, handleClickToggleUserLoginSignupModal } = actions.appActions;
function Actions() {
  const dispatch = useDispatch();

  return (
    <Box display="flex">
      <IconButton>
        <FavoriteBorderIcon />
      </IconButton>

      <IconButton onClick={() => dispatch(handleClickToggleUserLoginSignupModal(true))}>
        <PersonOutlineIcon />
      </IconButton>
      <IconButton onClick={() => dispatch(handleClickToggleDrawer())}>
        <ShoppingBasketIcon />
      </IconButton>
    </Box>
  );
}

export default Actions;
