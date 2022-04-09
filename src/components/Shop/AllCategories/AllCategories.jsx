import { Box, Typography } from '@mui/material';
import Item from './Item';

function AllCategories() {
  return (
    <Box className="container" py="1rem">
      <Typography variant="h4" color="black" align="center" py="1rem">See all the categories</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Item countItem="500+" title="Men & Fashion" />
        <Item countItem="500+" title="Women & Fashion" />
        <Item countItem="500+" title="Electronics" />
        <Item countItem="500+" title="Desktop" />
        <Item countItem="500+" title="Laptop" />
        <Item countItem="500+" title="Mobile" />
        <Item countItem="500+" title="Mobile" />
        <Item countItem="500+" title="Mobile" />
        <Item countItem="500+" title="Mobile" />
        <Item countItem="500+" title="Mobile" />

      </Box>

    </Box>
  );
}

export default AllCategories;
