import {
  Security as SecurityIcon,
  LocalShipping as ShippingIcon,
  Headset as SupportIcon,
  ContactMail as VendorIcon
} from '@mui/icons-material';
import { Box, Grid, Typography } from '@mui/material';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

function FeatureStrip() {
  return (
    <Box bgcolor="var(--primary)">
      <Box className="container">
        <Grid container>
          {[
            {
              title: 'Free Shipping',
              subTitle: 'For over orders 50$',
              icon: <ShippingIcon fontSize="inherit" />
            },
            {
              title: 'Support 24/7',
              subTitle: 'Contact us anytime',
              icon: <SupportIcon fontSize="inherit" />
            },
            {
              title: '100% Safety',
              subTitle: 'Only secure payments',
              icon: <SecurityIcon fontSize="inherit" />
            },
            {
              title: 'Vendor',
              subTitle: 'Become Dropship',
              icon: <VendorIcon fontSize="inherit" />
            }
          ].map((item) => (
            <Grid key={item.title} item xs={12} sm={12} md={6} lg={3}>
              <Box display="flex" py="2rem" alignItems="center">
                <Box color="var(--secondary)" fontSize="2.5rem">
                  {item.icon}
                </Box>
                <Box width="1rem" />
                <Box>
                  <Typography variant="h5" color="var(--white)">
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" color="var(--white)">
                    {item.subTitle}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
export default FeatureStrip;
