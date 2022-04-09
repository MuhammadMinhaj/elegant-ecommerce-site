import { Box } from '@mui/material';
import Item from './Item';

function AllCategories() {
  return (
    <Box className="container" py="1rem">

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
