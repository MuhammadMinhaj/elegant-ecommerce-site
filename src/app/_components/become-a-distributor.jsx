'use client';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';

function BecomeADistributor() {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
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
            <Box
              display="flex"
              justifyContent="center"
              alignItems="flex-start"
              height="100%"
              flexDirection="column"
            >
              <Typography variant={isMD ? 'h3' : 'h1'} color="var(--secondary)">
                How to become a distributor in 2022
              </Typography>
              <Box height="1rem" />
              <Box component="button" className="custom-btn" display="flex" alignItems="center">
                <CheckCircleIcon />
                <Box component="span" width="1rem" />
                Apply Now
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default BecomeADistributor;
