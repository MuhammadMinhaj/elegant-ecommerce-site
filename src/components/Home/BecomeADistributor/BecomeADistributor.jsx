import { Box, Grid, Typography } from '@mui/material';

function BecomeADistributor() {
  return (
    <Box py="1rem" bgcolor="var(--white)">
      <Box className="container">

        <Grid container spacing={2}>
          <Grid item sm={12} md={5}>
            <Box>
              <Box component="img" src="/disbutor.jpg" width="100%" height="auto" />
            </Box>
          </Grid>
          <Grid item sm={12} md={7}>
            <Box display="flex" alignItems="center" height="100%">
              <Typography variant="h1" color="var(--secondary)">How to become a distributor in 2022</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default BecomeADistributor;
