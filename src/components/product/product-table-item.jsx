'use client';
import { Box } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import { useState } from 'react';
import Actions from './actions';
import ItemBody from './item-body';
import ProductLabel from './product-label';

export default function ProductTableItem({
  isEnd,
  title,
  price,
  discount,
  ratings,
  images,
  path,
  statusText,
  statusType,
  withActions
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
      component="div"
      onMouseOver={() => handleMouseOver(false)}
      onMouseLeave={() => handleMouseLeave(false)}
      borderBottom={`${isEnd ? '0px' : '1px'} solid #ededed`}
      display="flex"
      position="relative"
      bgcolor="var(--white)"
      height="100%"
    >
      {statusText && <ProductLabel position="right" status={statusType} text={statusText} />}

      <Box maxWidth={withActions ? '150px' : '120px'} position="relative" height="100%">
        <Box
          onMouseOver={() => handleMouseOver(true)}
          onMouseLeave={() => handleMouseLeave(true)}
          component="img"
          py="0.25rem"
          width="100%"
          height="auto"
          alt={title}
          src={images ? getCurrentThumbnail() : ''}
        />
        {withActions && (
          <Zoom in={isOver}>
            <Box
              onMouseOver={() => handleMouseOver(true)}
              onMouseLeave={() => handleMouseLeave(true)}
              position="absolute"
              left="0.15rem"
              top="0rem"
            >
              <Actions isSmall />
            </Box>
          </Zoom>
        )}
      </Box>

      <Box p="0.75rem">
        <ItemBody title={title} price={price} discount={discount} ratings={ratings} path={path} />
      </Box>
    </Box>
  );
}
