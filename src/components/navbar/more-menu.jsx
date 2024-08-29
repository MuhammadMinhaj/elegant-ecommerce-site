import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, IconButton, Menu } from '@mui/material';
import { useState } from 'react';
import MoreMenuItem from './more-menu-item';

function MoreMenu({ options }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <IconButton
        aria-label="more"
        id="more-menu-button"
        aria-controls={open ? 'more-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="more-menu"
        MenuListProps={{
          'aria-labelledby': 'more-menu-button'
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
          <MoreMenuItem key={option.name} {...option} />
        ))}
      </Menu>
    </Box>
  );
}

export default MoreMenu;
