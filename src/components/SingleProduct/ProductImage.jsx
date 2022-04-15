import {
  Box,
  CardActionArea,
  Divider,
  Grow,
  Paper,
  useMediaQuery,
  useTheme
} from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ReactViewer = dynamic(
  () => import('react-viewer'),
  { ssr: false }
);

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
  const [visible, setVisible] = useState(false);

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
  const tempImages = images.map((img) => (
    {
      src: img,
      alt: ''
    }
  ));
  return (
    <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between">

      <ReactViewer
        visible={visible}
        onClose={() => { setVisible(false); }}
        images={tempImages}
        zIndex={99999}
        activeIndex={imgIndex}
      />

      {images && (
        <Grow in={animate}>
          <Box component="img" sx={{ cursor: 'pointer' }} src={images[imgIndex]} onClick={() => setVisible(true)} width="100%" height="auto" />
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
