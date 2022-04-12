import {
  Box, CardActionArea, Grid, Typography
} from '@mui/material';

function PartnerItem({ title, imgSrc }) {
  return (
    <Grid item xs={12} sm={12} md={4}>
      <Box bgcolor="var(--white)" p="0.75rem" borderRadius="2rem">
        <CardActionArea sx={{ borderRadius: '1rem' }}>
          <Box sx={{
            backgroundImage: `url("${imgSrc}")`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            maxWidth: '400',
            width: '100%',
            height: '150px',
            borderRadius: '1rem'
          }}
          >
            <Box height="100%" position="relative">

              <Box position="absolute" top="0rem" right="0" bgcolor="var(--primary)" color="var(--white)" borderRadius="1rem" p="0.5rem">
                <Typography variant="caption">{title}</Typography>
              </Box>
            </Box>
          </Box>
        </CardActionArea>

      </Box>

    </Grid>

  );
}
export default PartnerItem;
