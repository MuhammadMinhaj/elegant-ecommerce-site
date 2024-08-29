'use client';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShopIcon from '@mui/icons-material/Shop';
import { Box, Button, Rating, Typography, useMediaQuery, useTheme } from '@mui/material';
import ProductFeatures from './product-features';
import QuantityButtons from './quantity-buttons';

function ProductDetail() {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box>
      <Typography variant="h4" component="h1">
        Apple iMac M3 Chip 512GB SSD 24 4.5K Retina Display Green All-in-One PC (Late 2023)
      </Typography>
      <Rating readOnly />
      <Box py="1rem">
        <Typography variant="h4" component="span" color="error">
          $436.46
        </Typography>
      </Box>
      <Box maxWidth={isMD ? '100%' : '400px'} width="100%">
        <ProductFeatures />

        <QuantityButtons />
        <Box display="flex" color="var(--secondary)">
          <Button startIcon={<AddShoppingCartIcon />} color="inherit" size="large" fullWidth>
            Add to cart
          </Button>
          <Box width="1rem" />
          <Button
            startIcon={<ShopIcon />}
            color="inherit"
            variant="outlined"
            size="large"
            fullWidth
          >
            Buy Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductDetail;
