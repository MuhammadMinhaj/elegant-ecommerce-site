import Title from '@/components/title';
import PaymentsIcon from '@mui/icons-material/Payments';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import SellIcon from '@mui/icons-material/Sell';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { Box, Grid, Typography } from '@mui/material';

function ClientTestimonials() {
  return (
    <Box py="1rem">
      <Box className="container">
        <Title title="Become a seller" icon={<SellIcon fontSize="inherit" />} />
        <Box py="2rem">
          <Grid container spacing={2}>
            {[
              {
                name: 'Product Ideas',
                icon: <TipsAndUpdatesIcon fontSize="inherit" />
              },
              {
                name: 'Use Our System',
                icon: <SettingsSuggestIcon fontSize="inherit" />
              },
              {
                name: 'Payment',
                icon: <PaymentsIcon fontSize="inherit" />
              }
            ].map((testimonial) => (
              <Grid key={testimonial.name} item sm={12} md={4}>
                <Box
                  textAlign="center"
                  borderRadius="1rem"
                  bgcolor="var(--white)"
                  p="1rem"
                  sx={{
                    '&:hover': {
                      border: '1px solid var(--secondary)',
                      transform: 'scale(0.9)',
                      transition: 'all 0.25s'
                    }
                  }}
                >
                  <Box display="flex" justifyContent="center">
                    <Box fontSize="3rem" color="var(--secondary)">
                      {testimonial.icon}
                    </Box>
                  </Box>
                  <Box py="0.5rem">
                    <Typography variant="h5" color="var(--text-head)">
                      {testimonial.name}
                    </Typography>
                    <Typography variant="body1" color="var(--text-pera)" py="0.25rem">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium eius eum
                      exercitationem voluptates nihil ipsum asperiores neque quaerat ex numquam!
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box height="1rem" />
          <Box display="flex" justifyContent="center">
            <Box
              component="button"
              className="custom-btn-outline"
              display="flex"
              alignItems="center"
            >
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
