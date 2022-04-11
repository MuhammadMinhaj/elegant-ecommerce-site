import { Box, Grid, Typography } from '@mui/material';

function Item({ icon, title, subTitle }) {
  return (
    <Grid item xs={12} sm={12} md={6} lg={3}>
      <Box display="flex" py="2rem" alignItems="center">
        <Box color="var(--secondary)" fontSize="2.5rem">
          {icon}
        </Box>
        <Box width="1rem" />
        <Box>
          <Typography variant="h5" color="var(--white)">{title}</Typography>
          <Typography variant="subtitle1" color="var(--white)">{subTitle}</Typography>
        </Box>
      </Box>
    </Grid>
  );
}
export default Item;
