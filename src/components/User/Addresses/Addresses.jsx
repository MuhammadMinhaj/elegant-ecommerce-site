import { AddLocation } from '@mui/icons-material';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { Box, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import Title from '../Common/Title';
import Layout from '../Layout/Layout';
import AddressItem from './AddressItem';

export default function Addresses() {
  return (
    <Layout>

      <Title
        title="Addresses"
        icon={<LocationCityIcon sx={{ color: 'inherit', fontSize: 'inherit' }} />}
        actions={<Button startIcon={<AddLocation />} variant="outlined" color="warning">Add Location</Button>}
      />
      <Box height="1rem" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Address Line</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <AddressItem />
            <AddressItem />
            <AddressItem />
            <AddressItem />

          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}
