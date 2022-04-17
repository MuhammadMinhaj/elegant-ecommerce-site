import { Box } from '@mui/material';
import Chip from '@mui/material/Chip';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import Actions from './Actions';

const statuses = {
  pending: 'default',
  success: 'success',
  recieved: 'warning',
  rejected: 'error'

};
export default function OrderItem({ status, text }) {
  return (

    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell>
        <Box component="img" maxWidth="70px" height="auto" src="/default/product-150x150.png" />
      </TableCell>
      <TableCell>Product title will be showed</TableCell>
      <TableCell>$20.20</TableCell>
      <TableCell>#3253j53</TableCell>
      <TableCell>02-02-2022</TableCell>
      <TableCell>Debit Card</TableCell>
      <TableCell>
        <Chip label={text} color={statuses[status]} />

      </TableCell>
      <TableCell>
        <Actions />
      </TableCell>
    </TableRow>

  );
}
