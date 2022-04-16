import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../redux/actions';
import Login from './Login';

const { handleClickToggleUserLoginSignupModal } = actions.appActions;

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function AlertDialogSlide() {
  const { isUserLoginModalOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (

    <Dialog
      open={isUserLoginModalOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => dispatch(handleClickToggleUserLoginSignupModal(true))}
      aria-describedby="alert-dialog-slide-description"
      maxWidth="sm"
      fullWidth
    >
      <Login />
    </Dialog>

  );
}
