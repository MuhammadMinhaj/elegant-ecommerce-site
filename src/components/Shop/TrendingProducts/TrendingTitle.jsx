import { Box, Typography } from '@mui/material';

function TrendingTitle() {
  return (
    <Box position="relative">
      <Typography sx={{
        background: '#fe2424',
        padding: '5px 10px',
        fontSize: '16px',
        color: '#fff',
        fontWeight: '700',
        textTransform: 'uppercase',
        maxWidth: '150px',
        width: '100%',
        fontStyle: 'italic',
        lineHeight: '13px',
        '&::before': {
          content: '""',
          display: 'block',
          width: '0',
          height: '0',
          borderTop: '18px solid transparent',
          borderBottom: '18px solid transparent',
          borderLeft: '15px solid #fe2424',
          position: 'absolute',
          top: '0px',
          right: '-15px'
        },
        '&::after': {
          content: '"\f111"',
          color: '#fff',
          position: 'absolute',
          top: '5px',
          right: '-10px',
          fontFamily: 'FontAwesome',
          fontSize: '6px'
        }
      }}
      >
        Trending This Month
      </Typography>

    </Box>
  );
}

export default TrendingTitle;
