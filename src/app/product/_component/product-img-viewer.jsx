import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box, CardActionArea, Grow, IconButton, Paper } from '@mui/material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ReactViewer = dynamic(() => import('react-viewer'), { ssr: false });

function ImageItem({ path, getImgIndex, ind }) {
  return (
    <Box mx="0.25rem" width="100%" minWidth="100px" maxWidth="80px">
      <CardActionArea onClick={() => getImgIndex(ind)}>
        <Paper variant="outlined">
          {path && (
            <Image
              src={path}
              width={100}
              height={100}
              sizes={100}
              style={{ objectFit: 'cover', width: '100%' }}
              alt="image"
            />
          )}
        </Paper>
      </CardActionArea>
    </Box>
  );
}

function ImageItemContainer({ getImgIndex, images }) {
  return (
    <Box display="flex" justifyContent="flex-start">
      {images?.map((img, ind) => (
        <ImageItem key={img} path={img} getImgIndex={getImgIndex} ind={ind} />
      ))}
    </Box>
  );
}

export default function ProductImgViewer({ images }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [isHeart, setHeart] = useState(false);
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
  const tempImages = images.map((img) => ({
    src: img,
    alt: ''
  }));
  const handleClickToggleHeart = () => {
    setHeart(!isHeart);
  };
  return (
    <Box height="100%" display="flex" flexDirection="column" justifyContent="space-between">
      <ReactViewer
        visible={visible}
        onClose={() => setVisible(false)}
        images={tempImages}
        zIndex={99999}
        activeIndex={imgIndex}
        defaultScale={1.25}
      />

      {images && (
        <Grow in={animate}>
          <Box sx={{ position: 'relative' }}>
            <Box
              sx={{
                position: 'absolute',
                top: '0px',
                left: '0px',
                color: 'var(--secondary)'
              }}
            >
              <IconButton onClick={handleClickToggleHeart} color="inherit">
                {isHeart ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
            </Box>
            <Box
              component="img"
              src={images[imgIndex]}
              onClick={() => setVisible(true)}
              sx={{ objectFit: 'cover', cursor: 'pointer' }}
              width="100%"
              height="auto"
            />
          </Box>
        </Grow>
      )}

      <Box>
        {/* <Divider /> */}
        <ImageItemContainer getImgIndex={getImgIndex} images={images} />
      </Box>
    </Box>
  );
}
