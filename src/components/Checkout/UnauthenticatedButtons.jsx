import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import { Box, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import actions from '../../redux/actions';

const { handleClickToggleUserLoginSignupModal } = actions.appActions;
function UnauthenticatedButtons() {
  const dispatch = useDispatch();
  return (
    <Box display="flex" maxWidth="600px">
      <Button
        color="warning"
        variant="contained"
        fullWidth
        size="large"
        sx={{ borderRadius: '1rem' }}
        startIcon={<LoginIcon />}
        onClick={() => dispatch(handleClickToggleUserLoginSignupModal(true))}
      >
        Login

      </Button>
      <Box width="1rem" />
      <Button
        color="warning"
        variant="outlined"
        fullWidth
        size="large"
        sx={{ borderRadius: '1rem' }}
        startIcon={<AddIcon />}
        onClick={() => dispatch(handleClickToggleUserLoginSignupModal(false))}
      >
        Create an account
      </Button>
    </Box>
  );
}

export default UnauthenticatedButtons;
