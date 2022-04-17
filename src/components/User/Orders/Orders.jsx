import CheckIcon from '@mui/icons-material/Check';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PendingIcon from '@mui/icons-material/Pending';
import { Box, Grid } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import ArrowActions from '../../Common/ArrowActions';
import Title from '../Common/Title';
import Layout from '../Layout/Layout';
import CardItem from './CardItem';
import OrderItem from './OrderItem';

export default function BasicTable() {
  return (
    <Layout currentPath="orders">
      <Grid container spacing={2}>
        <CardItem icon={<PendingIcon fontSize="inherit" />} title="Pending" count="10" />
        <CardItem icon={<DoDisturbIcon fontSize="inherit" />} title="Rejected" count="5" />
        <CardItem icon={<CheckIcon fontSize="inherit" />} title="Completed" count="15" />
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
              <OrderItem status="pending" text="Pending" />
              <OrderItem status="success" text="Completed" />
              <OrderItem status="pending" text="Pending" />

              <OrderItem status="recieved" text="Recieved" />
              <OrderItem status="pending" text="Pending" />

              <OrderItem status="rejected" text="Rejected" />
              <OrderItem status="pending" text="Pending" />

            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    </Layout>

  );
}
