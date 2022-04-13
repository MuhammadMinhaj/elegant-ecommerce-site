import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Box, Typography } from '@mui/material';
import SocialIcons from '../../Common/SocialIcons';

function DiscountOnAllProduct() {
  return (
    <Box bgcolor="#221543" py="2rem" my="1rem" color="var(--white)">
      <Box className="container" display="flex" justifyContent="space-between" alignItems="center">

        <Box display="flex">
          <Box>
            <LocalOfferIcon sx={{ fontSize: '3rem' }} />
          </Box>
          <Box width="1rem" />
          <Box>
            <Typography variant="h5">Learn how to get a 30% discount on all products.</Typography>
            <Typography variant="subtitle1">Senectus ullamcorper lacus a euismod vestibulum habitasse.</Typography>
          </Box>
        </Box>

        <Box textAlign="right">
          <Typography>Follow Us</Typography>
          <SocialIcons />
        </Box>
      </Box>

    </Box>
  );
}

export default DiscountOnAllProduct;
