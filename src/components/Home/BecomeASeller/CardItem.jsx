import { Box, Grid, Typography } from '@mui/material';

function CardItem({ name, icon }) {
  return (
    <Grid item sm={12} md={4}>
      <Box
        textAlign="center"
        borderRadius="1rem"
        bgcolor="var(--white)"
        p="1rem"
        sx={{
          '&:hover': {
            border: '1px solid var(--secondary)',
            transform: 'scale(1.1)',
            transition: 'all 0.25s'
          }
        }}
      >
        <Box display="flex" justifyContent="center">
          <Box fontSize="3rem" color="var(--secondary)">
            {icon}
          </Box>
        </Box>
        <Box py="0.5rem">
          <Typography variant="h5" color="var(--text-head)">{name}</Typography>
          <Typography variant="body1" color="var(--text-pera)" py="0.25rem">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium eius eum exercitationem voluptates nihil
            ipsum asperiores neque quaerat ex numquam!
          </Typography>
        </Box>

      </Box>

    </Grid>
  );
}

export default CardItem;
