import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import TableRowsIcon from '@mui/icons-material/TableRows';
import {
  Box, IconButton, MenuItem, Select
} from '@mui/material';
import { useState } from 'react';

function ViewFilter({ isGrid, handleClickToViewChange, isNonePagination }) {
  const [age, setAge] = useState(25);

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" px="1rem" py="0.25rem">
      {
        !isNonePagination && (
        <Select
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          variant="standard"
          size="small"
        >
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={75}>75</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
        )
      }

      <Box>
        <IconButton size="small" onClick={handleClickToViewChange}>
          {
            isGrid ? <TableRowsIcon /> : <GridViewSharpIcon />
          }
        </IconButton>
      </Box>
    </Box>
  );
}
export default ViewFilter;
