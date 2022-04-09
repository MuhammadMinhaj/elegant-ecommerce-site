import {
  Box, Button, Grid, Rating, Typography
} from '@mui/material';

function Product() {
  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Box boxShadow={2} borderRadius="0.25rem" sx={{ overflow: 'hidden' }}>
        <Box position="relative">
          <Box position="absolute" right="0" top="0" bgcolor="red" px="0.5rem" borderRadius="0.5rem 0rem 0rem 0.5rem" color="white">50%</Box>
          <Box component="img" src="https://demo.xpeedstudio.com/bajaar/electronics/wp-content/uploads/sites/2/2021/03/gadget6.png" width="100%" maxHeight="150px" />
        </Box>

        <Box p="0.75rem">
          <Box display="flex">
            <Typography component="del" variant="h6" color="black" mr="0.5rem">$100</Typography>
            <Typography variant="h6" color="red">$100</Typography>
          </Box>

          <Rating name="size-medium" defaultValue={2} />
          <Typography variant="subtitle2">Total Sold : (10)</Typography>
          <Typography variant="caption">SURYA RACE HIGH SPEE</Typography>
          <Button variant="outlined" color="secondary" size="small" fullWidth>Detail</Button>
        </Box>
      </Box>
    </Grid>
  );
}

export default Product;
