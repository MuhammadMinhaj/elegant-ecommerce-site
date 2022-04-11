import { Box } from '@mui/material';
import CategoryMenu from './CategoryMenu';
import MoreMenu from './MoreMenu';
import NavItem from './NavItem';

const navbarData = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Shop',
    path: '/sope'
  },
  {
    name: 'B2B',
    path: '/'
  },
  {
    name: 'Recent Products',
    path: '/'
  },
  {
    name: 'Blog',
    isDropDown: true
  },
  {
    name: 'User Account',
    isDropDown: true
  },
  {
    name: 'Contact US',
    path: '/'
  }
];

function Navbar() {
  return (
    <Box component="nav" bgcolor="var(--primary)" color="var(--white)">
      <Box className="container" py="0.5rem">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <CategoryMenu />
          <Box display="flex" justifyContent="flex-end">
            <Box display="flex" justifyContent="flex-end">
              {
                navbarData.map(({ ...rest }) => (
                  <NavItem {...rest} key={rest?.name} />
                ))
              }
            </Box>
            <MoreMenu options={navbarData} />
          </Box>

        </Box>
      </Box>

    </Box>
  );
}

export default Navbar;
