import CategoryIcon from '@mui/icons-material/Category';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Box, CardActionArea, Menu, MenuItem } from '@mui/material';
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
export default function CategoryMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      maxWidth="250px"
      width="100%"
      color="var(--white)"
      bgcolor="#19212b"
      borderRadius="0.5rem"
      sx={{ overflow: 'hidden' }}
    >
      <CardActionArea
        aria-label="more"
        id="category-long-menu-button"
        aria-controls={open ? 'category-long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center" p="0.75rem">
          <Box>
            <CategoryIcon color="inherit" />
          </Box>
          <Box>Categories</Box>
          <Box>
            {open ? (
              <KeyboardArrowDownIcon color="inherit" />
            ) : (
              <KeyboardArrowLeftIcon color="inherit" />
            )}
          </Box>
        </Box>
      </CardActionArea>
      <Menu
        id="category-long-menu"
        MenuListProps={{
          'aria-labelledby': 'category-long-menu-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: '450px',
            maxWidth: '250px',
            width: '100%'
          }
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
