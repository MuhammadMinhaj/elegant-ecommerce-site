import LoyaltyIcon from '@mui/icons-material/Loyalty';
import { Box, Grid } from '@mui/material';
import productsData from '../../../productsData';
import ArrowActions from '../../Common/ArrowActions';
import ProductItem from '../../DynamicCategory/Product/Item/GridItem';
import Title from '../Common/Title';
import Layout from '../Layout/Layout';

function WishList() {
  return (
    <Layout>
      <Box bgcolor="var(--white)" p="0.5rem" borderRadius="0.5rem">
        <Title
          title="My Wish List"
          icon={<LoyaltyIcon sx={{ color: 'inherit', fontSize: 'inherit' }} />}
          actions={<ArrowActions />}
        />
        <Box height="1rem" />
        <Box>
          <Grid container spacing={2}>
            {
          productsData.products?.slice(0, 4)?.map((prod) => (
            <Grid item xs={12} key={prod?.title} sm={6} md={4} lg={3}>
              <ProductItem {...prod} withActions />
            </Grid>
          ))
        }
          </Grid>
        </Box>
      </Box>

    </Layout>

  );
}

export default WishList;
