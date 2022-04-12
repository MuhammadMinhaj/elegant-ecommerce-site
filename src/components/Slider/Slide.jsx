import GroupIcon from '@mui/icons-material/Group';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {
  Box, Grid, Typography, useMediaQuery, useTheme
} from '@mui/material';

function Slide({ title, imgSrc, description }) {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box bgcolor="var(--white)">
      <Box className="container" py="5rem">
        <Grid container spacing={2} direction="row-reverse">
          <Grid item xs={12} md={6}>
            <Box width="100%" display="flex" justifyContent={isMD ? 'center' : 'flex-end'}>
              <Box component="img" src={imgSrc} maxWidth="450px" width="100%" maxHeight="400px" alt="Image" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign={isMD ? 'center' : 'left'}>
              <Typography variant={isMD ? 'h3' : 'h2'} color="var(--text-head)" py={isMD ? '0.5rem' : '1rem'}>
                {title}
              </Typography>
              <Typography variant="body1" color="var(--text-pera)" py={isMD ? '1rem' : '2rem'}>
                {description}
              </Typography>
              <Box display="flex" flexDirection={isMD ? 'column' : 'row'} alignItems="center" justifyContent={isMD ? 'center' : 'flex-start'}>
                <Box component="button" className="custom-btn" display="flex" alignItems="center">
                  <ShoppingBasketIcon />
                  <Box component="span" width="1rem" />
                  Shop Now
                </Box>
                <Box width="1rem" height="0.5rem" />
                <Box component="button" className="custom-btn-outline" display="flex" alignItems="center">
                  <GroupIcon />
                  <Box component="span" width="1rem" />
                  Join Now
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

      </Box>
    </Box>

  );
}

export default Slide;
