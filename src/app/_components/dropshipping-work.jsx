import Title from '@/components/title';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import { Box, Grid, Typography } from '@mui/material';

function DropshippingWork() {
  return (
    <Box className="container" py="2rem">
      <Title
        title="How does dropshipping work?"
        subTitle="No more up front inventory costs or shipping logistics with dropshipping, products are sent directly from your wholesaler to your customers"
        icon={<SettingsSuggestIcon fontSize="inherit" />}
      />
      <Box py="2rem">
        <Grid container spacing={2}>
          {[
            {
              title: 'Step One',
              image: '/images/step-one.png',
              description: 'Your customer place an order from online store.'
            },
            {
              title: 'Step Two',
              image: '/images/step-two.png',
              description: 'Your customer place an order from online store.'
            },
            {
              title: 'Step Three',
              image: '/images/step-three.png',
              description: 'Your customer place an order from online store.'
            },
            {
              title: 'Step Four',
              image: '/images/step-four.png',
              description: 'Your customer place an order from online store.'
            }
          ].map((item) => (
            <Grid key={item.title} item xs={6} sm={6} md={3}>
              <Box textAlign="center" borderRadius="1rem" bgcolor="var(--white)" p="1rem">
                <Box component="img" src={item.image} width="70px" height="70px" />
                <Typography variant="h6" color="var(--text-head)" sx={{ fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Typography variant="subtitle1" color="var(--text-pera)">
                  {item.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
export default DropshippingWork;
