import {
  Box, Grow
} from '@mui/material';
import { useState } from 'react';
import Actions from './Actions';
import ItemBody from './ItemBody';
import ProductLabel from './ProductLabel';

function Product({
  title, price, discount, ratings, images, path, statusText, statusType, withActions
}) {
  const [isOver, setOver] = useState(false);
  const handleMouseOver = () => {
    setOver(true);
  };
  const handleMouseLeave = () => {
    setOver(false);
  };
  return (
    <Box position="relative" bgcolor="var(--white)" height="100%" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} border={isOver ? '1px solid #ededed' : '1px solid var(--white)'}>
      {
        statusText && <ProductLabel position="right" status={statusType} text={statusType} />
      }
      <Box component="img" width="100%" height="auto" alt="image" src={images ? images[0] : ''} />
      <Box pb="0.5rem" px="1rem">
        <ItemBody title={title} price={price} discount={discount} ratings={ratings} path={path} />
      </Box>
      {
        withActions && (
        <Grow in={isOver}>
          <Box pb="0.5rem">
            <Actions />
          </Box>
        </Grow>
        )
      }

    </Box>
  );
}

export default Product;
