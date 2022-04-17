import {
  Box
} from '@mui/material';
import Zoom from '@mui/material/Zoom';
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
    return setOver(true);
  };
  const handleMouseLeave = (isImg) => {
    if (isImg) {
      return setOverOnImg(false);
    }
    return setOver(false);
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
          position="relative"
        >
          {
        withActions && (
        <Zoom in={isOver}>
          <Box
            onMouseOver={() => handleMouseOver(true)}
            onMouseLeave={() => handleMouseLeave(true)}
            position="absolute"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            left="0.5rem"
          >
            <Actions />
          </Box>
        </Zoom>
        )
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
        </Box>

        <Box p="0.75rem">
          <ItemBody title={title} price={price} discount={discount} ratings={ratings} path={path} />
        </Box>
      </Box>

    </Box>
  );
}

export default Product;
