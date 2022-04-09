import {
  Box, Grid, Typography
} from '@mui/material';

function Product({
  title, subTitle, price, imgSrc
}) {
  return (
    <Grid item xs={6} sm={6} md={4} lg={3}>
      <Box boxShadow={2} borderRadius="0.25rem" sx={{ overflow: 'hidden' }} bgcolor="var(--white)">
        <Box position="relative">
          <Box position="absolute" left="0" top="0" bgcolor="green" px="0.5rem" borderRadius="0rem 0.5rem 0.5rem 0rem" color="white">New</Box>
          <Box component="img" src={imgSrc} width="100%" maxHeight="150px" />
        </Box>

        <Box p="0.75rem" textAlign="center">
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle1" color="text.secondary">{subTitle}</Typography>
          <Typography variant="subtitle1" color="error">{price}</Typography>
        </Box>
      </Box>
    </Grid>
  );
}

export default Product;
