import {
  Box, Divider, Typography, useMediaQuery, useTheme
} from '@mui/material';

function Title({ title, icon, endActions }) {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box py="0.5rem">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box display="flex" alignItems="center">
          <Box fontSize={isSM ? '2rem' : '3rem'} color="var(--secondary)">
            {icon}
          </Box>
          <Box width="1rem" />
          <Box>
            <Typography variant={isSM ? 'h5' : 'h4'} component="h2" sx={{ fontWeight: '600', textTransform: 'uppercase' }} color="var(--text-head)">{title || 'Title'}</Typography>
          </Box>

        </Box>
        {endActions}
      </Box>
      <Divider />
    </Box>
  );
}

export default Title;
