import { Box, Grid } from '@mui/material';

function Item({ imgSrc }) {
  return (
    <Grid item sx={6} sm={4} md={3} lg={2}>
      <Box component="a" href="/">
        <Box component="img" src={imgSrc} />
      </Box>
    </Grid>

  );
}

export default Item;
