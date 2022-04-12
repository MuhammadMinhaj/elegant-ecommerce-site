import PaymentsIcon from '@mui/icons-material/Payments';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import SellIcon from '@mui/icons-material/Sell';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { Box, Grid } from '@mui/material';
import Title from '../../Common/Title';
import CardItem from './CardItem';

function ClientTestimonials() {
  return (
    <Box py="1rem">
      <Box className="container">
        <Title title="Become a seller" icon={<SellIcon fontSize="inherit" />} />
        <Box py="2rem">
          <Grid container spacing={2}>
            <CardItem name="Product Ideas" icon={<TipsAndUpdatesIcon fontSize="inherit" />} />
            <CardItem name="Use Our System" icon={<SettingsSuggestIcon fontSize="inherit" />} />
            <CardItem name="Payment" icon={<PaymentsIcon fontSize="inherit" />} />
          </Grid>
          <Box height="1rem" />
          <Box display="flex" justifyContent="center">
            <Box component="button" className="custom-btn-outline" display="flex" alignItems="center">
              <PersonSharpIcon />
              <Box component="span" width="1rem" />
              Singup Now
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ClientTestimonials;
