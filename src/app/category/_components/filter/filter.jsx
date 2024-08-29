import { Box, Typography } from '@mui/material';
import Availability from './availability';
import Color from './color';
import Layout from './layout';
import Offer from './offer';
import PriceRange from './price-range';
import Rating from './rating';

function Filter() {
  return (
    <Box>
      <Typography variant="subtitle1" color="text.secondary">
        Sorted By
      </Typography>

      <Layout title="Price range" isExpanded>
        <PriceRange />
      </Layout>
      <Layout title="Availability" isExpanded>
        <Availability />
      </Layout>
      <Layout title="Rating" isExpanded>
        <Rating />
      </Layout>
      <Layout title="Color" isExpanded>
        <Color />
      </Layout>
      <Layout title="Discount Offer" isExpanded>
        <Offer />
      </Layout>
    </Box>
  );
}

export default Filter;
