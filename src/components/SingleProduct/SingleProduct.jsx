import { Box, Divider, Grid } from '@mui/material';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductImage from './ProductImage';
import ProductTopbar from './ProductTopbar';

function SingleProductView() {
  return (
    <Box className="container" py="1rem">
      <Box bgcolor="#fff" borderRadius="0.5rem">
        <ProductTopbar />
        <Divider />
        <Box p="1rem">
          <Grid container spacing={2}>
            <Grid item md={5}>
              <ProductImage images={['https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27gn800-b/27gn800-b-05-500x500.jpg', 'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27gn800-b/27gn800-b-03-500x500.jpg', 'https://www.startech.com.bd/image/cache/catalog/monitor/lg-monitor/27gn800-b/27gn800-b-02-500x500.jpg']} name="My Test Produt" />
            </Grid>
            <Grid item md={7}>
              <ProductDetail />
            </Grid>
          </Grid>
        </Box>
      </Box>

    </Box>
  );
}
export default SingleProductView;
