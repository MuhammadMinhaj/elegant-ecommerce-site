import {
  Box, Rating, Typography
} from '@mui/material';
import CurrencyFormat from 'react-currency-format';
import lib from '../../../../lib';

const { getDicountedPrice } = lib.methods;
function ItemBody({ title, price, discount }) {
  return (
    <Box>
      <Rating name="size-small" defaultValue={3} size="small" readOnly />
      <Box>
        <Typography component="a" href="/" sx={{ '&:hover': { color: 'var(--secondary)' } }} variant="subtitle1" color="var(--text-head)">{title}</Typography>
      </Box>

      <Box>
        <Typography variant="h6" color="error">
          $
          {price ? getDicountedPrice({ price, discount }) : price}
        </Typography>
        {
          discount && (
          <Box>
            <Typography component="del" variant="subtitle1" color="var(--text-pera)">
              <CurrencyFormat value={price} displayType="text" thousandSeparator prefix="$" />
            </Typography>
            {' '}
            <Typography component="span" variant="subtitle2" color="error">
              -
              {discount}
              % Off
            </Typography>
          </Box>
          )
        }

      </Box>

    </Box>
  );
}
export default ItemBody;
