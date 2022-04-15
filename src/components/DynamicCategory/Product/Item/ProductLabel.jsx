import { Box, Typography } from '@mui/material';

const leftPosition = {
  left: '0rem'
};
const rightPosition = {
  right: '0rem'
};
const colors = [['#bb0101', 'white'], ['green', 'white'], ['blue', 'white']];
const variants = {
  news: colors[0],
  offers: colors[2],
  hots: colors[1]
};
function ProductLabel({ position, status, text }) {
  const getPosition = () => {
    if (position === 'left') {
      return leftPosition;
    }
    if (position === 'right') {
      return rightPosition;
    }

    return leftPosition;
  };
  return (
    <Box
      px="1rem"
      bgcolor={variants[status || 'news'][0]}
      color={variants[status || 'news'][1]}
      position="absolute"
      top="0.25rem"
      sx={{
        ...getPosition(),
        zIndex: '999',
        '&::before': {
          content: '""',
          borderLeft: '10px solid transparent',
          borderRight: ' 0 solid transparent',
          borderTop: `6px solid ${variants[status || 'news'][0]}`,
          display: 'inline-block',
          verticalAlign: 'bottom',
          position: 'absolute',
          bottom: '-6px',
          left: '0'
        }
      }}
    >
      <Typography variant="body1">
        {text || 'N/A'}
      </Typography>
    </Box>
  );
}

export default ProductLabel;
