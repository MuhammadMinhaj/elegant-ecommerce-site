import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, IconButton } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';

function AddressItem() {
  return (
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        Ralf Edward
      </TableCell>
      <TableCell>
        777 Brockton Avenue, Abington MA 2351
      </TableCell>
      <TableCell>
        +1927987987498
      </TableCell>
      <TableCell align="center">
        <Box display="flex" justifyContent="center" alignItems="center">
          <IconButton color="warning"><EditIcon /></IconButton>
          <IconButton color="error"><DeleteIcon /></IconButton>
        </Box>
      </TableCell>
    </TableRow>

  );
}

export default AddressItem;
