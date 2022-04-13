import { Box, Grid } from '@mui/material';

function AdItem({ imgSrc }) {
  return (
    <Box component="a" href="/">
      <Box component="img" src={imgSrc} width="100%" maxHeight="200px" alt="" />
    </Box>
  );
}

function Advertisement({ isFull }) {
  return (
    <Box className="container">
      <Grid container spacing={2}>
        <Grid item sm={12} md={isFull ? 12 : 6}>
          <AdItem imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/catalog/banners/bn1.jpg" />
        </Grid>
        {
          !isFull && (
          <Grid item sm={12} md={6}>
            <AdItem imgSrc="https://opencart.opencartworks.com/themes/so_flashmart/image/catalog/banners/bn2.jpg" />
          </Grid>
          )
        }

      </Grid>
    </Box>
  );
}
export default Advertisement;
