'use client';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditIcon from '@mui/icons-material/Edit';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import { Box, Button, Divider } from '@mui/material';
import { useState } from 'react';
import UserDashboard from '../_components/dashboard';
import ProfileEdit from '../_components/profile-edit';
import Title from '../_components/title';
import Layout from '../_components/user-profile-layout';

function ProfilePage() {
  const [isEdit, setEdit] = useState(false);
  return (
    <Layout currentPath="profile">
      <Box bgcolor="var(--white)" p="0.5rem" borderRadius="0.5rem">
        <Title
          title={isEdit ? 'Edit Profile' : 'My Profile'}
          icon={<PersonSharpIcon sx={{ color: 'inherit', fontSize: 'inherit' }} />}
          actions={
            <Button
              variant="text"
              startIcon={isEdit ? <ArrowBackIcon /> : <EditIcon />}
              color="warning"
              size="large"
              onClick={() => setEdit(!isEdit)}
            >
              {isEdit ? 'Back To Profile' : 'Edit Profile'}
            </Button>
          }
        />
        <Divider />
        {isEdit ? <ProfileEdit /> : <UserDashboard />}
      </Box>
    </Layout>
  );
}

export default ProfilePage;
