import { Box, Grid, Typography } from '@mui/material';

function CardItem({ title, count, icon }) {
  return (
    <Grid item xs={12} sm={12} md={6} lg={4}>
      <Box border="1px solid var(--white-border)" textAlign="center" borderRadius="1rem">
        <Box color="var(--secondary)" fontSize="2rem">
          {icon}
        </Box>
        <Box width="100%">
          <Typography variant="h5" color="var(--primary)">{count}</Typography>
          <Typography variant="subtitle1" color="var(--text-head)">{title}</Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default CardItem;
