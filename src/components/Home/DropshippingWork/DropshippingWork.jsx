import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { Box, Grid } from '@mui/material';
import Title from '../../Common/Title';
import Item from './Item';

function DropshippingWork() {
  return (
    <Box className="container" py="2rem">
      <Title title="How does dropshipping work?" subTitle="No more up front inventory costs or shipping logistics with dropshipping, products are sent directly from your wholesaler to your customers" icon={<SettingsSuggestIcon fontSize="inherit" />} />
      <Box py="2rem">
        <Grid container spacing={2}>
          <Item imgSrc="/images/step-one.png" title="Step One" description="Your customer place an order from online store." />
          <Item imgSrc="/images/step-two.png" title="Step Two" description="Your customer place an order from online store." />
          <Item imgSrc="/images/step-three.png" title="Step Three" description="Your customer place an order from online store." />
          <Item imgSrc="/images/step-four.png" title="Step Four" description="Your customer place an order from online store." />
        </Grid>
      </Box>
    </Box>
  );
}
export default DropshippingWork;
