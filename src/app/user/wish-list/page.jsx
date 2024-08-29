import ArrowActions from '@/components/arrow-actions';
import ProductItem from '@/components/product/product-grid-item';
import products from '@/data/products.json';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import { Box, Grid } from '@mui/material';
import Title from '../_components/title';
import Layout from '../_components/user-profile-layout';

function UserWishListPage() {
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
            {products.slice(0, 4)?.map((prod) => (
              <Grid item xs={12} key={prod.title} sm={6} md={4} lg={3}>
                <ProductItem {...prod} withActions />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Layout>
  );
}

export default UserWishListPage;
