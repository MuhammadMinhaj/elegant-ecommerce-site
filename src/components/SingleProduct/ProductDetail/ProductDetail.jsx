import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShopIcon from '@mui/icons-material/Shop';
import {
  Box, Button, Rating, Typography, useMediaQuery, useTheme
} from '@mui/material';
import List from './List';
import QuantityBtns from './QuantityBtns';

function ProductDetail() {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box>
      <Typography variant="h4" component="h1">Product Title</Typography>
      <Rating readOnly />
      <Box py="1rem">
        <Typography variant="h4" component="span" color="error">$436.46</Typography>
      </Box>
      <Box maxWidth={isMD ? '100%' : '400px'} width="100%">
        <List />

        <QuantityBtns />
        <Box display="flex" color="var(--secondary)">
          <Button startIcon={<AddShoppingCartIcon />} color="inherit" size="large" fullWidth>Add to cart</Button>
          <Box width="1rem" />
          <Button startIcon={<ShopIcon />} color="inherit" variant="outlined" size="large" fullWidth>Buy Now</Button>
        </Box>
      </Box>

    </Box>
  );
}

export default ProductDetail;
