'use client';
import useUI from '@/context/ui/useUI';
import useUIAuction from '@/context/ui/useUIAuction';
import Dialog from '@mui/material/Dialog';
import LoginForm from './login-form';

export default function LoginModal() {
  const { isUserLoginOpen } = useUI();
  const { closeUserLogin } = useUIAuction();

  return (
    <Dialog
      open={isUserLoginOpen}
      keepMounted
      onClose={closeUserLogin}
      aria-describedby="alert-dialog-slide-description"
      maxWidth="sm"
      fullWidth
    >
      <LoginForm />
    </Dialog>
  );
}
