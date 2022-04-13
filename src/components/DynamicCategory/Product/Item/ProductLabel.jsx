import { Box, Typography } from '@mui/material';

const leftPosition = {
  left: '0rem'
};
const rightPosition = {
  right: '0rem'
};
function ProductLabel({ position }) {
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
      px="2rem"
      bgcolor="red"
      color="white"
      position="absolute"
      top="0.25rem"
      sx={{
        ...getPosition(),
        zIndex: '999',
        '&::before': {
          content: '""',
          borderLeft: '10px solid transparent',
          borderRight: ' 0 solid transparent',
          borderTop: '6px solid #bb0101',
          display: 'inline-block',
          verticalAlign: 'bottom',
          position: 'absolute',
          bottom: '-6px',
          left: '0'
        }
      }}
    >
      <Typography variant="body1">
        Sale
      </Typography>
    </Box>
  );
}

export default ProductLabel;
