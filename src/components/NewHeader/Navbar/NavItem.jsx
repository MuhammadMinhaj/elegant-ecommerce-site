import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {
  Box, CardActionArea, Menu, MenuItem
} from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';

const options = [
  'Dropdown Item - 1',
  'Dropdown Item - 2',
  'Dropdown Item - 3',
  'Dropdown Item - 4',
  'Dropdown Item - 5'

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
          <Box>
            {name}
          </Box>
          {
            isDropDown && <ArrowDropDownIcon color="inherit" />
          }
        </Box>
      </CardActionArea>
      {
        isDropDown && (
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
            <MenuItem key={option} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Menu>
        )
      }

    </Box>
  );
}

export default NavItem;
