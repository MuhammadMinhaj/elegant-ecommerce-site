import {
  Box, Button, Grid, Typography
} from '@mui/material';
import ProductsTab from './ProductsTab';

function BuildingTools() {
  return (
    <Box className="container" py="2rem">

      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4}>
          <Box position="relative">
            <Box component="img" src="/MostPopularForMan/building_tols.jpg" alt="image" width="100%" height="auto" />
            <Box position="absolute" bottom="0" left="0" bgcolor="#e4b625" p="1rem" color="var(--white)">
              <Typography variant="h5">Building Tools And Accessories</Typography>
              <Button variant="text" color="secondary">Read More</Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <ProductsTab />
        </Grid>

      </Grid>
    </Box>

  );
}

export default BuildingTools;
