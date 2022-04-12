import { Box, Divider, Grid } from '@mui/material';
import ContactInfo from './ContactInfo';
import FooterBottom from './FooterBottom';
import NewsLetter from './NewLetter';
import QuickLinks from './QuickLinks';

function Footer() {
  return (
    <Box component="footer" bgcolor="var(--primary)" color="var(--white)">
      <Box className="container" py="3rem">
        <Grid container spacing={2}>
          <Grid item md={4}>
            <ContactInfo />
          </Grid>
          <Grid item md={4}>
            <QuickLinks />
          </Grid>
          <Grid item md={4}>
            <NewsLetter />
          </Grid>
        </Grid>
      </Box>
      <Divider />

      <FooterBottom />
    </Box>
  );
}

export default Footer;
