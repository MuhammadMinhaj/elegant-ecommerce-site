import {
  Box, Divider, Typography, useMediaQuery, useTheme
} from '@mui/material';

function Title({
  title, subTitle, icon, endActions, tColor, isNotDivider
}) {
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
            <Typography variant={isSM ? 'h5' : 'h4'} component="h2" sx={{ fontWeight: '600', textTransform: 'uppercase' }} color={tColor || 'var(--text-head)'}>{title || 'Title'}</Typography>
            {subTitle && <Typography variant="subtitle1" color="var(--text-pera)">{subTitle}</Typography>}
          </Box>

        </Box>
        {endActions}
      </Box>
      {
        !isNotDivider && <Divider />
      }

    </Box>
  );
}

export default Title;
