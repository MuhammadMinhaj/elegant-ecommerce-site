import { Box, Grid } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';

function Layout({ children, currentPath }) {
  return (
    <Box className="container" py="2rem">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Sidebar currentPath={currentPath} />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={9}>
          {children}
        </Grid>
      </Grid>
    </Box>
  );
}

export default Layout;
