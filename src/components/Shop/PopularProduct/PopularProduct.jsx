import {
  Box, Button, Divider, Grid, Typography
} from '@mui/material';
import Product from '../Product/Product';

function PopularProduct({ title, leftBannerImgSrc, bannerTxtTitle }) {
  return (
    <Box className="container" py="1rem">
      <Typography variant="h5">{title}</Typography>
      <Divider />
      <Box py="1rem">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={4}>
            <Box position="relative">
              <Box component="img" src={leftBannerImgSrc} alt="image" width="100%" height="auto" />
              <Box position="absolute" bottom="0" left="0" bgcolor="#7ab3d0" p="1rem" color="var(--white)">
                <Typography variant="h5">{bannerTxtTitle}</Typography>
                <Button variant="text" color="secondary">Read More</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Grid container spacing={2}>
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
              <Product title="Gift Black Ser" subTitle="Black friday" price="$270" imgSrc="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" />
            </Grid>
          </Grid>
        </Grid>
      </Box>

    </Box>
  );
}

export default PopularProduct;
