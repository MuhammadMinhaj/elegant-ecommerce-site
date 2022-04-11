import { Box, Typography } from '@mui/material';

function Title({ icon, title, actions }) {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Box display="flex" alignItems="center" color="#9791a6" fontSize="3rem">
          {icon}
        </Box>
        <Box width="0.5rem" />
        <Box>
          <Typography variant="h4" color="#574d70" sx={{ textTransform: 'uppercase', fontWeight: '600' }}>
            {title}
          </Typography>
        </Box>
      </Box>
      <Box>
        {actions}
      </Box>
    </Box>
  );
}

export default Title;
