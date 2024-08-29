'use client';
import useUI from '@/context/ui/useUI';
import useUIAuction from '@/context/ui/useUIAuction';
import Dialog from '@mui/material/Dialog';
import Signup from './signup-form';

export default function SignupModal() {
  const { isUserSignupOpen } = useUI();
  const { closeUserSignup } = useUIAuction();

  return (
    <Dialog
      open={isUserSignupOpen}
      keepMounted
      onClose={closeUserSignup}
      aria-describedby="alert-dialog-slide-description"
      fullWidth
    >
      <Signup />
    </Dialog>
  );
}
