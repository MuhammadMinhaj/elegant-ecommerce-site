import { Box, useMediaQuery, useTheme } from '@mui/material';
import Actions from './Actions';
import Brand from './Brand';
import SearchBar from './SearchBar';

function MainHeader() {
  const theme = useTheme();
  const isMD = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Box bgcolor="var(--white)" position="sticky" sx={{ top: '0', zIndex: '99999', borderBottom: '2px solid var(--primary)' }}>
      <Box className="container" display="flex" justifyContent="space-between" alignItems="center" py="0.5rem">
        {
          isMD && <Brand />
        }
        <SearchBar />
        {
          isMD && <Actions />
        }
      </Box>
    </Box>
  );
}

export default MainHeader;
