import {
  Box,
  CardActionArea,
  Divider,
  Grow,
  Paper,
  useMediaQuery,
  useTheme
} from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';

function ImageItem({ path, getImgIndex, ind }) {
  return (
    <Box mx="0.25rem" width="100%" maxWidth="80px">
      <CardActionArea onClick={() => getImgIndex(ind)}>
        <Paper variant="outlined">
          {path && <Image src={path} width={100} height={100} sizes={100} />}
        </Paper>
      </CardActionArea>
    </Box>
  );
}

function ImageItemContainer({ getImgIndex, images }) {
  return (
    <Box display="flex" justifyContent="flex-start" mt="1rem">
      {images?.map((img, ind) => (
        <ImageItem key={img} path={img} getImgIndex={getImgIndex} ind={ind} />
      ))}
    </Box>
  );
}

function Product({ images, name }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  useEffect(() => {
    setAnimate(false);

    const intervalCancel = setInterval(() => {
      setAnimate(true);
    }, 500);
    return () => {
      clearInterval(intervalCancel);
    };
  }, [imgIndex]);

  const getImgIndex = (ind) => {
    setImgIndex(ind);
  };
  return (
    <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between">
      {images && (
        <Grow in={animate}>
          <Box>
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: name || 'N/A',
                  isFluidWidth: true,
                  src: images[imgIndex],
                  sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                },
                largeImage: {
                  src: images[imgIndex],
                  width: 1200,
                  height: 1800
                },
                enlargedImageContainerDimensions: {
                  width: '100%',
                  height: '100%'
                },
                enlargedImagePosition: isMD ? 'over' : 'beside'

              }}
              style={{ zIndex: '99' }}
            />

          </Box>

        </Grow>
      )}

      <Box>
        <Divider />
        <ImageItemContainer getImgIndex={getImgIndex} images={images} />
      </Box>
    </Box>
  );
}
export default Product;
