import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentsIcon from '@mui/icons-material/Payments';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import {
  Box, Button, Divider, Grid
} from '@mui/material';
import { useState } from 'react';
import Title from '../Common/Title';
import Layout from '../Layout/Layout';
import CardItem from './CardItem';
import ProfileEdit from './ProfileEdit';
import ProfileInfoList from './ProfileInfoList';
import User from './User';

function ProfileShow() {
  return (
    <>
      <Box p="1rem">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6}>
            <User />
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={2}>
            <CardItem count="7" title="All Orders" icon={<ShoppingBagOutlinedIcon fontSize="inherit" color="inherit" />} />
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={2}>
            <CardItem count="4" title="Awaiting Payments" icon={<PaymentsIcon fontSize="inherit" color="inherit" />} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <CardItem count="7" title="Awaiting Delivery" icon={<LocalShippingIcon fontSize="inherit" color="inherit" />} />
          </Grid>
        </Grid>
      </Box>
      <ProfileInfoList />
    </>
  );
}

function Profile() {
  const [isEdit, setEdit] = useState(false);
  return (
    <Layout currentPath="profile">
      <Box bgcolor="var(--white)" p="0.5rem" borderRadius="0.5rem">
        <Title
          title={isEdit ? 'Edit Profile' : 'My Profile'}
          icon={<PersonSharpIcon sx={{ color: 'inherit', fontSize: 'inherit' }} />}
          actions={(
            <Button
              variant="text"
              startIcon={isEdit ? <ArrowBackIcon /> : <EditIcon />}
              color="warning"
              size="large"
              onClick={() => setEdit(!isEdit)}
            >
              {isEdit ? 'Back To Profile' : 'Edit Profile'}
            </Button>
          )}
        />
        <Divider />
        {
          isEdit ? <ProfileEdit /> : <ProfileShow />
        }

      </Box>
    </Layout>
  );
}

export default Profile;
