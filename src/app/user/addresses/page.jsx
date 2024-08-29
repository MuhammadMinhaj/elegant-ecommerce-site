import { AddLocation } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { Box, Button, IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../_components/title';
import Layout from '../_components/user-profile-layout';

export default function AddressesPage() {
  return (
    <Layout>
      <Title
        title="Addresses"
        icon={<LocationCityIcon sx={{ color: 'inherit', fontSize: 'inherit' }} />}
        actions={
          <Button startIcon={<AddLocation />} variant="outlined" color="warning">
            Add Location
          </Button>
        }
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
            {[{ id: 1 }, { id: 2 }, { id: 3 }].map((address) => (
              <TableRow key={address.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  Ralf Edward
                </TableCell>
                <TableCell>777 Brockton Avenue, Abington MA 2351</TableCell>
                <TableCell>+1927987987498</TableCell>
                <TableCell align="center">
                  <Box display="flex" justifyContent="center" alignItems="center">
                    <IconButton color="warning">
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Layout>
  );
}
