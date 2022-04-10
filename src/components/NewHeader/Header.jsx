import { Box } from '@mui/material';
import MainHeader from './MainHeader/MainHeader';
import TopHeader from './TopHeader';

function Header() {
  return (
    <Box component="header">
      <TopHeader />
      <MainHeader />
    </Box>
  );
}

export default Header;
