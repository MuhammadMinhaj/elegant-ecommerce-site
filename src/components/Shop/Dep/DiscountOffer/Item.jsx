import {
  Box, Button, Grid, Typography
} from '@mui/material';

function Item({ imgSrc, title }) {
  return (
    <Grid item sx={6} sm={6} md={4} lg={3}>
      <Box
        sx={{
          backgroundImage: `url(${imgSrc}`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          minHeight: '180px'
        }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box color="var(--white)" p="0.5rem">
          <Typography variant="h5">{title}</Typography>
          <Button>View More</Button>
        </Box>
      </Box>

    </Grid>
  );
}

export default Item;
