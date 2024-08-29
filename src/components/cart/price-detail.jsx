import { Box, Divider, Typography } from '@mui/material';
import CuponCode from './cupon-code';

function TextItem({ title, amount }) {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Typography variant="subtitle1" color="text.secondary">
        {title}
      </Typography>
      <Typography variant="subtitle1">{amount}</Typography>
    </Box>
  );
}

export default function PriceDetail() {
  return (
    <Box bgcolor="var(--white)" borderRadius="0.5rem">
      <Box height="1rem" />
      <CuponCode />
      <Box height="1rem" />
      <Box>
        <TextItem title="Total Quantity" amount="20" />
        <TextItem title="Subtotal" amount="$250.00" />
        <TextItem title="Shipping Cost" amount="$100.00" />
        <TextItem title="Discount" amount="$50.00" />
        <TextItem title="Vat" amount="25%" />
        <Box py="0.5rem">
          <Divider />
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h5">Total</Typography>
          <Typography variant="subtitle1">$350</Typography>
        </Box>
      </Box>
    </Box>
  );
}
