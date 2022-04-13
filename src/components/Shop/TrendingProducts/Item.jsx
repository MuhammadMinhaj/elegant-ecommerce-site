import { Box, Typography } from '@mui/material';

function Item({
  name, price, imgSrc, discount
}) {
  return (

    <Box display="flex" width="200px" alignItems="center">
      <Box sx={{
        backgroundImage: `url("${imgSrc}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80px',
        width: '80px'
      }}
      >
        {/* <Box component="img" src={imgSrc} maxWidth="80px" maxHeight="auto" width="100%" /> */}
      </Box>
      <Box flexGrow="1">
        <Typography variant="subtitle1" color="var(--text-head)">{name}</Typography>
        <Typography sx={{ lineHeight: '1' }} variant="h6" color={discount ? 'red' : 'var(--primary)'}>{price}</Typography>
        {
          discount && (
          <Box display="flex" alignItems="center">
            <Typography component="del" variant="subtitle2" color="text.secondary">
              {price}
            </Typography>
            <Typography component="del" variant="subtitle2" color="text.secondary">
              -
              {' '}
              {discount}
              % OFF
            </Typography>
          </Box>
          )
        }

      </Box>
    </Box>

  );
}

export default Item;
