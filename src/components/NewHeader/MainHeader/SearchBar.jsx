import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box, CardActionArea, IconButton, Menu, MenuItem, Paper, Typography
} from '@mui/material';
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

function SelectCategory() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [selectedCat, setSelectedCat] = useState(options[0]);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickToSelect = (option) => {
    setSelectedCat(option);
    setAnchorEl(null);
  };
  return (
    <Box height="100%" borderLeft="1px solid rgba(0, 0, 0, 0.12)">
      <CardActionArea
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        sx={{
          height: '100%', display: 'flex', alignItems: 'center', px: '1rem'
        }}
      >
        <Typography variant="subtitle2">
          {selectedCat}
        </Typography>
        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}

      </CardActionArea>

      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button'
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
          <MenuItem key={option} onClick={() => handleClickToSelect(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>

  );
}

function SearchBar() {
  return (
    <Box maxWidth="700px" width="100%">
      <Paper
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: '1200px',
          height: '50px',
          overflow: 'hidden'
        }}
        variant="outlined"
      >
        <Box display="flex" alignItems="center" flexGrow="1">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Box
            component="input"
            sx={{
              outline: 'none',
              border: 'none'
            }}
            width="100%"
            placeholder="Search..."
          />
        </Box>

        <SelectCategory />

      </Paper>
    </Box>
  );
}

export default SearchBar;
