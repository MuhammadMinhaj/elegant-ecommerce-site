import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actions from '../../../redux/actions';
import Signup from './Signup';

const { handleClickToggleUserLoginSignupModal } = actions.appActions;

const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function AlertDialogSlide() {
  const { isUserSignupModalOpen } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return (

    <Dialog
      open={isUserSignupModalOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={() => dispatch(handleClickToggleUserLoginSignupModal(false))}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
    >
      <Signup />
    </Dialog>

  );
}
