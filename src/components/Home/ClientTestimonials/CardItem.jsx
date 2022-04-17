import { Box, Grid, Typography } from '@mui/material';

function CardItem() {
  return (
    <Grid item sm={12} md={4}>
      <Box
        textAlign="center"
        border="1px solid var(--primary)"
        borderRadius="1rem"
        bgcolor="var(--primary)"
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
          <Box p="0.5rem" borderRadius="50%" width="100px" height="100px" border="2px solid var(--secondary)">
            <Box component="img" src="/client-say.png" width="100%" height="100%" />
          </Box>
        </Box>
        <Box py="0.5rem">
          <Typography variant="h5" color="var(--secondary)">Amaizing services!</Typography>
          <Typography variant="body1" py="0.25rem">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium eius eum exercitationem voluptates nihil
            ipsum asperiores neque quaerat ex numquam!
          </Typography>
          <Typography variant="subtitle1"> - Muhammad Minhaj</Typography>
        </Box>

      </Box>

    </Grid>
  );
}

export default CardItem;
