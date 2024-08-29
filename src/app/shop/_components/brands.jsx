import { Box, Grid, Paper } from '@mui/material';

function Brands() {
  return (
    <Box py="2rem">
      <Box className="container">
        <Grid container spacing={2}>
          {[
            '/images/brands/1.png',
            '/images/brands/2.png',
            '/images/brands/3.png',
            '/images/brands/4.png',
            '/images/brands/5.png',
            '/images/brands/6.png'
          ].map((image, i) => (
            <Grid item sx={6} sm={4} md={3} lg={2} key={i}>
              <Paper
                variant="outlined"
                sx={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  p: '1rem',
                  borderRadius: '26px'
                }}
              >
                <Box
                  component="img"
                  src={image}
                  sx={{ objectFit: 'cover' }}
                  width="100%"
                  maxHeight="130px"
                  alt=""
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default Brands;
