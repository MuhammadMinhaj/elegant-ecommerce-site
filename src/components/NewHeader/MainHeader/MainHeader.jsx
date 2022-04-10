import { Box } from '@mui/material';
import Actions from './Actions';
import Brand from './Brand';
import SearchBar from './SearchBar';

function MainHeader() {
  return (
    <Box>
      <Box className="container" display="flex" justifyContent="space-between">
        <Brand />
        <SearchBar />
        <Actions />
      </Box>
    </Box>
  );
}

export default MainHeader;
