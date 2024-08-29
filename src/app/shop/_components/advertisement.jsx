import { Box, Grid } from '@mui/material';

function AdItem({ imgSrc }) {
  return (
    <Box component="a" href="/">
      <Box
        component="img"
        src={imgSrc}
        sx={{ objectFit: 'cover' }}
        width="100%"
        maxHeight="200px"
        alt=""
      />
    </Box>
  );
}

function Advertisement({ isFull }) {
  return (
    <Box className="container">
      <Grid container spacing={2}>
        <Grid item sm={12} md={isFull ? 12 : 6}>
          <AdItem imgSrc="https://media.istockphoto.com/id/2098359215/photo/digital-marketing-concept-businessman-using-laptop-with-ads-dashboard-digital-marketing.webp?s=2048x2048&w=is&k=20&c=enTR0-sMB481lfHGaMcaoiBBY0_uxXDzhLeEbL2mAtk=" />
        </Grid>
        {!isFull && (
          <Grid item sm={12} md={6}>
            <AdItem imgSrc="https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062_1280.png" />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}
export default Advertisement;
