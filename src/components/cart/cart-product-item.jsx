import Link from '@/components/link';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, ButtonGroup, Divider, IconButton, Typography } from '@mui/material';
import _ from 'lodash';
import { useState } from 'react';

function CartProdItem({
  title,
  color,
  size,
  price,
  handleClickDelete,
  image = '/default/product-150x150.png'
}) {
  const [quantity, setQuantity] = useState(0);
  const handleClickToggle = (isIncreaed) => {
    if (isIncreaed) {
      setQuantity(quantity + 1);
    } else if (quantity !== 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <Box>
      <Box display="flex" justifyContent="space-between" py="0.5rem">
        <Box display="flex">
          <Box
            src={image || '/default/product-150x150.png'}
            maxWidth="120px"
            width="100%"
            height="auto"
            component="img"
          />
          <Box width="1rem" />
          <Box>
            <Link
              title={_.truncate(title, {
                omission: '...',
                length: 50
              })}
              path="/"
            />
            <Typography variant="caption" component="div">
              Size: {size || 'N/A'}
            </Typography>

            <Typography variant="caption" component="div">
              Color: {color || 'N/A'}
            </Typography>
            <Typography variant="subtitle1" color="var(--secondary)">
              {price ? `$${price}` : 'N/A'}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          <Box color="var(--primary)">
            <ButtonGroup
              disableElevation
              variant="text"
              color="inherit"
              size="small"
              orientation="vertical"
            >
              <Button onClick={() => handleClickToggle(true)}>+</Button>
              <Button disabled sx={{ color: 'var(--primary)!important' }}>
                {quantity}
              </Button>
              <Button onClick={() => handleClickToggle(false)}>-</Button>
            </ButtonGroup>
          </Box>
          <IconButton size="small" onClick={handleClickDelete} color="error">
            <CloseIcon />
          </IconButton>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
}
export default CartProdItem;
