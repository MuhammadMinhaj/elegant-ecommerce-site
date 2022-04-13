import { Box, Grid, Typography } from '@mui/material';

function DropshippingWork({ title, description, imgSrc }) {
  return (

    <Grid item xs={6} sm={6} md={3}>
      <Box textAlign="center" borderRadius="1rem" bgcolor="var(--white)" p="1rem">
        <Box component="img" src={imgSrc} width="70px" height="70px" />
        <Typography variant="h6" color="var(--text-head)" sx={{ fontWeight: 'bold' }}>{title}</Typography>
        <Typography variant="subtitle1" color="var(--text-pera)">{description}</Typography>
      </Box>
    </Grid>

  );
}
export default DropshippingWork;
