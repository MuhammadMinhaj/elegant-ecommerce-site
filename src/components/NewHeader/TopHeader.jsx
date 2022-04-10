import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import {
  Box, Typography, useMediaQuery, useTheme
} from '@mui/material';

function ContactDetail() {
  return (
    <Box display="flex">
      <Box display="flex" alignItems="center">
        <MailIcon />
        <Box width="0.5rem" />

        <Typography variant="subtitle2"> info@gmail.com</Typography>
      </Box>
      <Box width="2rem" />
      <Box display="flex" alignItems="center">
        <PhoneIcon />
        <Box width="0.5rem" />

        <Typography variant="subtitle2">
          +00 54 983498543
        </Typography>
      </Box>
    </Box>
  );
}

function TopHeader() {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box bgcolor="var(--primary)" py="0.25rem" color="var(--white)">
      <Box className="container" display={isMD ? 'block' : 'flex'} justifyContent="space-between">
        {
          !isMD && <ContactDetail />
        }

        <Box textAlign="center">
          <Typography variant="caption">
            TRENDY 25SILVER JEWELRY, SAVE UP 35% OFF TODAY
          </Typography>
        </Box>
        {
           !isMD && (
           <Box>
             <Typography variant="subtitle2">
               Monday - Fiday: 9 AM - 12 AM, Become a seller
             </Typography>
           </Box>
           )
        }

      </Box>
    </Box>
  );
}
export default TopHeader;
