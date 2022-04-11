import {
  ContactMail as VendorIcon,
  Headset as SupportIcon,
  LocalShipping as ShippingIcon,
  Security as SecurityIcon
} from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import Item from './Item';

function FeatureStrip() {
  return (
    <Box bgcolor="var(--primary)">
      <Box className="container">
        <Grid container>
          <Item title="Free Shipping" subTitle="For over orders 50$" icon={<ShippingIcon fontSize="inherit" />} />
          <Item title="Support 24/7" subTitle="Contact us anytime" icon={<SupportIcon fontSize="inherit" />} />
          <Item title="100% Safety" subTitle="Only secure payments" icon={<SecurityIcon fontSize="inherit" />} />
          <Item title="Vendor" subTitle="Become Dropship" icon={<VendorIcon fontSize="inherit" />} />

        </Grid>
      </Box>
    </Box>
  );
}
export default FeatureStrip;
