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
  const [isOverOnImg, setOverOnImg] = useState(false);

  const handleMouseOver = (isImg) => {
    if (isImg) {
      return setOverOnImg(true);
    }
    setOver(true);
  };
  const handleMouseLeave = (isImg) => {
    if (isImg) {
      return setOverOnImg(false);
    }
    setOver(false);
  };
  const getCurrentThumbnail = () => {
    if (isOverOnImg) {
      if (images[1]) {
        return images[1];
      }
    }
    return images[0];
  };
  return (
    <Box
      position="relative"
      bgcolor="var(--white)"
      height="100%"
      onMouseOver={() => handleMouseOver(false)}
      onMouseLeave={() => handleMouseLeave(false)}
      border={isOver ? '1px solid #ededed' : '1px solid var(--white)'}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        {
        statusText && <ProductLabel position="right" status={statusType} text={statusType} />
      }

        <Box
          onMouseOver={() => handleMouseOver(true)}
          onMouseLeave={() => handleMouseLeave(true)}
          component="img"
          width="100%"
          height="auto"
          alt="image"
          src={images ? getCurrentThumbnail() : ''}
        />

        <Box pb="0.5rem" px="1rem">
          <ItemBody title={title} price={price} discount={discount} ratings={ratings} path={path} />
        </Box>
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
