import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Box, Typography } from '@mui/material';
import Layout from './Layout';

function Item({ icon, title, subtitle }) {
  return (
    <Box display="flex" alignItems="center">
      <Box fontSize="3rem" color="var(--secondary)">
        {icon}
      </Box>
      <Box width="1rem" />
      <Box>
        <Typography variant="subtitle1">
          {title}
        </Typography>
        <Typography variant="caption">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}

function ContactInfo() {
  return (
    <Layout title="Contact Info" subTitle="We are always available for you to pass & get back on the right track.">

      <Item
        icon={<ContactSupportIcon fontSize="inherit" />}
        title="Address"
        subtitle="Block # 13, Rowsten street west hampshire South Wales"
      />

      <Item
        icon={<AlternateEmailIcon fontSize="inherit" />}
        title="Tell us the reason for your query"
        subtitle="admin@intellwink.com"
      />

      <Item
        icon={<AccessTimeFilledIcon fontSize="inherit" />}
        title="Opening & closing time"
        subtitle="Monday To Satarday : 8am - 6pm. Sunaday Closed"
      />

      <Item
        icon={<PhoneIphoneIcon fontSize="inherit" />}
        title="Phone"
        subtitle="+92-343-123-4786"
      />
    </Layout>
  );
}

export default ContactInfo;
