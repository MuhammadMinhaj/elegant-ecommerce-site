import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, CardActionArea, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const options = [
  {
    name: 'Profile',
    path: '/user/profile'
  },
  {
    name: 'Change Password',
    path: '/user/change-password'
  },
  {
    name: 'Login',
    path: '/user/login'
  },
  {
    name: 'Signup',
    path: '/user/signup'
  }
];
function NavItem({ name, isDropDown, path }) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    if (isDropDown) {
      setAnchorEl(event.currentTarget);
    } else {
      router.push(path || '/');
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box bgcolor="#19212b" borderRadius="1rem" mx="0.25rem" sx={{ overflow: 'hidden' }}>
      <CardActionArea
        aria-label="more"
        id="dropdown-long-menu-button"
        aria-controls={open ? 'dropdown-long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Box py="0.5rem" px="1rem" display="flex" alignItems="center" justifyContent="center">
          <Box>{name}</Box>
          {isDropDown && <ArrowDropDownIcon color="inherit" />}
        </Box>
      </CardActionArea>
      {isDropDown && (
        <Menu
          id="dropdown-long-menu"
          MenuListProps={{
            'aria-labelledby': 'dropdown-long-menu-button'
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: '450px'
            }
          }}
        >
          {options.map((option) => (
            <MenuItem key={option?.name} onClick={() => router.push(option?.path)}>
              {option?.name}
            </MenuItem>
          ))}
        </Menu>
      )}
    </Box>
  );
}

export default NavItem;
