import { Box } from '@mui/material';
import Actions from './Actions';
import Brand from './Brand';
import SearchBar from './SearchBar';

function MainHeader() {
  return (
    <Box>
      <Box className="container" display="flex" justifyContent="space-between" alignItems="center" py="0.5rem">
        <Brand />
        <SearchBar />
        <Actions />
      </Box>
    </Box>
  );
}

export default MainHeader;
