import { Box } from '@mui/material';
import MainHeader from './MainHeader/MainHeader';
import Navbar from './Navbar/Navbar';
import TopHeader from './TopHeader';

function Header() {
  return (
    <Box component="header">
      <TopHeader />
      <MainHeader />
      <Navbar />
    </Box>
  );
}

export default Header;
