import { Box, Grid } from '@mui/material';
import Item from './Item';

function DiscountOffer() {
  return (
    <Box className="container">
      <Grid container spacing={2}>
        <Item imgSrc="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2018/11/retail-black-friday-small-banner-7-opt.jpg.webp)" title="Discount Sport Shoes" />
        <Item imgSrc="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2018/11/retail-black-friday-small-banner-7-opt.jpg.webp)" title="Discount Sport Shoes" />
        <Item imgSrc="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2018/11/retail-black-friday-small-banner-7-opt.jpg.webp)" title="Discount Sport Shoes" />
        <Item imgSrc="https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2018/11/retail-black-friday-small-banner-7-opt.jpg.webp)" title="Discount Sport Shoes" />
      </Grid>
    </Box>
  );
}

export default DiscountOffer;
