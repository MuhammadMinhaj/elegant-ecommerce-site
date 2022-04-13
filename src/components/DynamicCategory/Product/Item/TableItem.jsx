import {
  Box, Grow
} from '@mui/material';
import { useState } from 'react';
import Actions from './Actions';
import ItemBody from './ItemBody';
import ProductLabel from './ProductLabel';

function Product({
  isEnd, title, price, discount, ratings, images, path, statusText, statusType, withActions
}) {
  const [isOver, setOver] = useState(false);
  const handleMouseOver = () => {
    setOver(true);
  };
  const handleMouseLeave = () => {
    setOver(false);
  };
  return (

    <Box
      component="div"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      borderBottom={`${isEnd ? '0px' : '1px'} solid #ededed`}
      display="flex"
      position="relative"
      bgcolor="var(--white)"
      height="100%"
    >
      {
        statusText && <ProductLabel position="right" status={statusType} text={statusType} />
      }

      <Box maxWidth="100px">
        <Box component="img" py="0.25rem" width="100%" height="auto" alt={title} src={images ? images[0] : ''} />
      </Box>

      <Box p="0.5rem">
        <ItemBody title={title} price={price} discount={discount} ratings={ratings} path={path} />
        {
          withActions && (
          <Grow in={isOver}>
            <Box py="0.25rem">
              <Actions position="left" />
            </Box>
          </Grow>
          )
        }
      </Box>
    </Box>

  );
}

export default Product;
