import { Box } from '@mui/material';
import CategoryMenu from './CategoryMenu';
import NavItem from './NavItem';

function Navbar() {
  return (
    <Box component="nav" bgcolor="var(--primary)" color="var(--white)">
      <Box className="container" py="0.5rem">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <CategoryMenu />
          <Box display="flex" justifyContent="flex-end">
            <NavItem name="Home" />
            <NavItem name="Shop" />
            <NavItem name="B2B" />
            <NavItem name="Recent Products" />
            <NavItem name="Blog" isDropDown />
            <NavItem name="User Account" isDropDown />
            <NavItem name="Contact US" />
          </Box>
        </Box>
      </Box>

    </Box>
  );
}

export default Navbar;
