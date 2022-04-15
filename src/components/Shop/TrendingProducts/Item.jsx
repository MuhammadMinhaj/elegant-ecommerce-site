import { Box, Typography } from '@mui/material';

function Item({
  title, price, images, discount
}) {
  return (

    <Box
      display="flex"
      width="100%"
      alignItems="center"
      border="1px solid var(--white)"
      sx={{
        '&:hover': {
          border: '1px solid var(--white-border)',
          transition: 'all 0.25s'
        }

      }}
    >
      <Box sx={{
        backgroundImage: `url("${images[0]}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '80px',
        width: '80px'

      }}
      >
        {/* <Box component="img" src={imgSrc} maxWidth="80px" maxHeight="auto" width="100%" /> */}
      </Box>
      <Box flexGrow="1">
        <Typography
          sx={{
            lineHeight: '1',
            '&:hover': {
              color: 'var(--secondary)',
              transition: 'all 0.25s',
              cursor: 'pointer'

            }
          }}
          variant="subtitle1"
          color="var(--text-head)"
        >
          {title}

        </Typography>
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
