import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box, Menu, MenuItem } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const options = [
  'All Categories',
  'Car',
  'Mobile',
  'Electronics',
  'Desktop & Laptop',
  'Mac Book',
  'Gaphics Card',
  'Router'
];
function MoreMenuItem({ name, path, isDropDown }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
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
  const handleClickOnInnerItem = (innerItemPath) => {
    router.push(innerItemPath);
    setAnchorEl(null);
  };
  return (
    <Box>
      <MenuItem
        aria-label="more"
        id="more-menu-item-button"
        aria-controls={open ? 'more-menu-item' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <Box
          display={isDropDown ? 'flex' : 'block'}
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>{name}</Box>
          {isDropDown && <ArrowDropDownIcon />}
        </Box>
      </MenuItem>
      {isDropDown && (
        <Box>
          <Menu
            id="more-menu-item"
            MenuListProps={{
              'aria-labelledby': 'more-menu-item-button'
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
              <MenuItem key={option} onClick={() => handleClickOnInnerItem('/')}>
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      )}
    </Box>
  );
}

export default MoreMenuItem;
