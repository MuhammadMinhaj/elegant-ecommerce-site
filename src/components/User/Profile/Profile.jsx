import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import { Box, Divider, Grid } from '@mui/material';
import Title from '../Common/Title';
import Layout from '../Layout/Layout';
import User from './User';

function Profile() {
  return (
    <Layout currentPath="profile">
      <Box bgcolor="var(--white)" p="0.5rem" borderRadius="0.5rem">
        <Title title="My Profile" icon={<PersonSharpIcon sx={{ color: 'inherit', fontSize: 'inherit' }} />} />
        <Divider />
        <Box p="1rem">

          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <User />
            </Grid>
            <Grid item sx={12} sm={6} md={2}>
              item 1
            </Grid>
            <Grid item sx={12} sm={6} md={2}>
              item 2
            </Grid>
            <Grid item sx={12} sm={6} md={2}>
              item 3
            </Grid>
          </Grid>
        </Box>

      </Box>
    </Layout>
  );
}

export default Profile;
