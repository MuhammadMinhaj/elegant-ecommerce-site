import ArrowActions from '@/components/arrow-actions';
import CancelIcon from '@mui/icons-material/Cancel';
import CheckIcon from '@mui/icons-material/Check';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PendingIcon from '@mui/icons-material/Pending';
import { Box, Grid, IconButton, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../_components/title';
import Layout from '../_components/user-profile-layout';

const statuses = {
  pending: 'default',
  success: 'success',
  recieved: 'warning',
  rejected: 'error'
};

export default function UserOrdersPage() {
  return (
    <Layout currentPath="orders">
      <Grid container spacing={2}>
        {[
          {
            id: 1,
            title: 'Pending',
            icon: <PendingIcon fontSize="inherit" />,
            count: 34
          },
          {
            id: 2,
            title: 'Rejected',
            icon: <DoDisturbIcon fontSize="inherit" />,
            count: 23
          },
          {
            id: 3,
            title: 'Completed',
            icon: <CheckIcon fontSize="inherit" />,
            count: 15
          }
        ].map((item) => (
          <Grid key={item.id} item xs={12} sm={12} md={6} lg={4}>
            <Box border="1px solid var(--white-border)" textAlign="center" borderRadius="1rem">
              <Box color="var(--secondary)" fontSize="2rem">
                {item.icon}
              </Box>
              <Box width="100%">
                <Typography variant="h5" color="var(--primary)">
                  {item.count}
                </Typography>
                <Typography variant="subtitle1" color="var(--text-head)">
                  {item.title}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box height="1rem" />

      <Box bgcolor="var(--white)" borderRadius="0.5rem" p="0.5rem">
        <Title
          title="My Order"
          icon={<ListAltIcon sx={{ color: 'inherit', fontSize: 'inherit' }} />}
          actions={<ArrowActions />}
        />

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Order ID</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Payment Method</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                {
                  id: 1,
                  status: 'pending',
                  text: 'Pending'
                },
                {
                  id: 2,
                  status: 'success',
                  text: 'Completed'
                },
                {
                  id: 3,
                  status: 'pending',
                  text: 'Pending'
                },
                {
                  id: 4,
                  status: 'recieved',
                  text: 'Recieved'
                },
                {
                  id: 5,
                  status: 'pending',
                  text: 'Pending'
                },
                {
                  id: 6,
                  status: 'rejected',
                  text: 'Rejected'
                },
                {
                  id: 7,
                  status: 'pending',
                  text: 'Pending'
                }
              ].map((item) => (
                <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>
                    <Box
                      component="img"
                      maxWidth="70px"
                      height="auto"
                      src={
                        'https://www.startech.com.bd/image/cache/catalog/laptop/msi/modern-14-b10mw/modern-14-b10mw-500x500.jpg' ||
                        '/default/product-150x150.png'
                      }
                    />
                  </TableCell>
                  <TableCell>
                    Lenovo IdeaPad Gaming 3 15ACH6 Ryzen 5 5500H RTX 2050 4GB Graphics 15.6 FHD
                    Laptop
                  </TableCell>
                  <TableCell>$20.20</TableCell>
                  <TableCell>#3253j53</TableCell>
                  <TableCell>02-02-2022</TableCell>
                  <TableCell>Debit Card</TableCell>
                  <TableCell>
                    <Chip label={item.text} color={statuses[item.status]} />
                  </TableCell>
                  <TableCell>
                    <Box>
                      <IconButton color="error">
                        <CancelIcon />
                      </IconButton>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
}
